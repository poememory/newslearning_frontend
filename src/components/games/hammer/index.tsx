import Taro, { useReady } from '@tarojs/taro'
import { View, CanvasTouchEvent, Canvas, } from '@tarojs/components'
import React, { useState, useEffect, useRef } from 'react'
import { TaroEvent } from '@tarojs/runtime'

interface Mole {
  x: number
  y: number
  text: string
  isCorrect: boolean
  isVisible: boolean
  hit?: boolean
}

interface Question {
  title: string
  correct: string[]
  wrong: string[]
}

interface Props {
  question: Question
  onEnd: (score: number) => void
}

const HammerGame: React.FC<Props> = ({ question, onEnd }) => {
  const canvasRef = useRef<any>()
  const ctx = useRef<Taro.CanvasContext>()
  const score=useRef(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const moles = useRef<Mole[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const animationRef = useRef<number>()
  const scoreAnimations = useRef<Array<{ text: string, y: number, x: number }>>([])

  const moleoutAudio = useRef<Taro.InnerAudioContext>()
  const moledownAudio = useRef<Taro.InnerAudioContext>()

  useEffect(() => {
    moleoutAudio.current = Taro.createInnerAudioContext()
    moleoutAudio.current.src = require('@/assets/audio/moleout.mp3')
    
    moledownAudio.current = Taro.createInnerAudioContext()
    moledownAudio.current.src = require('@/assets/audio/moledown.mp3')

    // 在组件卸载时销毁音频实例
    return () => {
      moleoutAudio.current?.destroy()
      moledownAudio.current?.destroy()
    }
  }, [])


  // 图片资源
  const bgImage = useRef<any>()
  const moleImage = useRef<any>()
  const hammerImage = useRef<any>()

  // 使用 useRef 存储 canvas 宽高
  const canvasWidth = useRef(0)
  const canvasHeight = useRef(0)

  // 初始化画布
  const initCanvas = async () => {
    try {
      const query = Taro.createSelectorQuery()
      query.select('#hammergameCanvas').boundingClientRect(rect => {
        // 存储宽高到 useRef
        canvasWidth.current = rect.width || 0
        canvasHeight.current = rect.height || 0

        console.log('Canvas width:', canvasWidth.current)
        console.log('Canvas height:', canvasHeight.current)

        Promise.all([
            Taro.getImageInfo({ src: 'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJ3nXTcd3RykI4V*GU1AMAF6VEV9uqhL1Znwk1s4HtM8PNrgMCBGWXLNBFVNQlusNWvf*YB34oOU3a2QsOYQQlc!/b&bo=kwg4BAAAAAADhwU!&rf=viewer_4' }),
            Taro.getImageInfo({ src: 'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJ9KldkaF2SKHDPy.pOMLX*KogiNjo8fsIOfn*tCjyxvvlZmK1OcYhBK2o7LjwmBlZMEj1YF.aNOkG9lKcJlyS0!/b&bo=DAo4BAAAAAADV0g!&rf=viewer_4' }),
            Taro.getImageInfo({ src: 'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJ9KldkaF2SKHDPy.pOMLX8xPBzo3Mp*181dz0LSRNVXLTixNYDRAs4EXuTo20fGbebtuQfz*du177L13ZZ0Zec!/b&bo=5gJqAwAAAAADB68!&rf=viewer_4' }),
        ]).then(([bg, mole, hammer]) => {
          bgImage.current = bg
          moleImage.current = mole
          hammerImage.current = hammer

          const positions = generatePositions([...question.correct, ...question.wrong])
            moles.current=positions
            moleoutAudio.current.play()
          gameLoop()
        }).catch(err => {
          console.error('Image loading failed:', err)
        })
      }).exec()
    } catch (err) {
      console.error('Canvas initialization failed:', err)
    }
  }

  // 生成地鼠位置
  const generatePositions = (options: string[]): Mole[] => {
    const gridSize = 3;
    const padding_w = canvasWidth.current * 0.15;
    const padding_h = canvasHeight.current * 0.22;
    const cellWidth = canvasWidth.current * 0.25;
    const cellHeight = (canvasHeight.current * 0.61) / gridSize;
  
    // 随机打乱数组顺序
    const shuffledOptions = shuffleArray(options);
  
    // 创建一个空数组，表示九宫格中的所有格子
    const positions: Mole[] = [];
  
    // 遍历九宫格的每个格子
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // 随机决定是否显示地鼠（例如 70% 的概率显示）
        const shouldShowMole = Math.random() < 0.7;
  
        if (shouldShowMole && shuffledOptions.length > 0) {
          // 如果显示地鼠，从随机排序的数组中取出一个选项
          const text = shuffledOptions.pop()!; // 取出并移除最后一个元素
          positions.push({
            x: col * cellWidth + padding_w,
            y: row * cellHeight + padding_h,
            text,
            isCorrect: question.correct.includes(text),
            isVisible: true,
          });
        } else {
          // 如果不显示地鼠，生成一个空的格子
          positions.push({
            x: col * cellWidth + padding_w,
            y: row * cellHeight + padding_h,
            text: "", // 空文本
            isCorrect: false, // 空的格子不参与正确性判断
            isVisible: false, // 设置为不可见
          });
        }
      }
    }
  
    return positions;
  };
  
  // Fisher-Yates 洗牌算法
  const shuffleArray = (array: string[]): string[] => {
    const newArray = [...array]; // 创建一个新数组以避免修改原数组
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // 随机选择一个索引
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // 交换元素
    }
    return newArray;
  };

  // 游戏主循环
  const gameLoop = () => {
    if (!isPlaying) return

    draw()
    animationRef.current = requestAnimationFrame(gameLoop)
  }

  // 绘制方法
  const draw = () => {
    const context = ctx.current
    if (!context || !bgImage.current) return
    context.clearRect(0, 0, canvasWidth.current, canvasHeight.current)

    // 绘制背景
    context.drawImage(bgImage.current.path, 0, 0 , canvasWidth.current, canvasHeight.current)

    context.fillStyle = '#000'
    const fonsize=Math.floor(canvasWidth.current*0.02)
    context.font = `${fonsize}px sans-serif` // 字体大小相对于画布高度
    context.fillText(question.title, canvasWidth.current * 0.18, canvasHeight.current * 0.21)
    
    // 绘制地鼠
    moles.current.forEach(mole => {
      if (!mole.isVisible) return

      if (moleImage.current) {
        context.drawImage(
          moleImage.current.path,
          mole.x, mole.y,
          canvasWidth.current * 0.17, canvasHeight.current * 0.17
        )
      }

      // 绘制选项文字
      context.fillStyle = '#fff'
      const fonsize=Math.floor(canvasWidth.current*0.015)
      context.font = `${fonsize}px sans-serif `
      context.fillText(mole.text, mole.x + canvasWidth.current * 0.03, mole.y + canvasHeight.current * 0.2)
    })

    // 绘制分数动画
    scoreAnimations.current.forEach((anim, index) => {
      context.setFontSize(20)
      context.fillStyle = anim.text.startsWith('+') ? 'green' : 'red'
      context.fillText(anim.text, anim.x, anim.y)
      anim.y -= 2
      if (anim.y < canvasHeight.current * 0.1) {
        scoreAnimations.current.splice(index, 1)
      }
    })

    context.draw()
  }

  // 处理点击事件
  const handleTap = (e: TaroEvent) => {
    if (!isPlaying) return
  
    // 获取触摸点的位置
    const touch = e.mpEvent.changedTouches[0]; // 获取第一个触摸点
    const x = touch.clientX;
    const y = touch.clientY;

    
    let hitMole = false;
  
    moles.current = moles.current.map(mole => {
      if (mole.isVisible &&
        x > mole.x && x < mole.x + canvasWidth.current * 0.2 &&
        y > mole.y && y < mole.y + canvasHeight.current * 0.2) 
      {
        setTimeout(() => {
            moledownAudio.current.play();  // 延迟播放音效
          }, 50)
        hitMole = true;
        const scoreChange = mole.isCorrect ? 10 : -5;
  
        // 更新得分
        score.current=score.current+scoreChange
  
        // 添加分数动画
        scoreAnimations.current.push({
          text: `${scoreChange > 0 ? '+' : ''}${scoreChange}`,
          x: mole.x + canvasWidth.current * 0.1,
          y: mole.y
        });
  
        return { ...mole, isVisible: false };
      }
      return mole;
    });
  
    // 播放锤子动画
    if (hitMole && hammerImage.current) {
      ctx.current?.drawImage(
        hammerImage.current.path,
        x - canvasWidth.current * 0.1, y - canvasHeight.current * 0.1,
        canvasWidth.current * 0.2, canvasHeight.current * 0.2
      );
      ctx.current?.draw();
    }
  };
  
  // 倒计时处理
  useEffect(() => {
    if (!isPlaying) {
        cancelAnimationFrame(animationRef.current!); // 停止动画
        return;
      }

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setIsPlaying(false)
          onEnd(score.current)
          clearInterval(timer)
          cancelAnimationFrame(animationRef.current!); 
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isPlaying])

  // 生命周期处理
  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = Taro.createCanvasContext('hammergameCanvas')
      initCanvas()
    }
  },[question])


  return (
    <View>
      <Canvas
        id="hammergameCanvas"
        canvasId="hammergameCanvas"
        style={{
            width: '100vw', // 使用视口宽度
            height: '100vh', // 使用视口高度
        }}
        onTouchStart={handleTap}
        ref={canvasRef}
      />
    </View>
  )
}

export default HammerGame


