import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

interface Bubble {
  id: number
  text: string
  isCorrect: boolean
  x: number
  y: number
}

interface Props {
  question: { title: string; correct: string[]; wrong: string[] }
  onEnd: (score: number) => void
}

const BubbleGame: React.FC<Props> = ({ question, onEnd }) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // 音效
  const bubblePopAudio = Taro.createInnerAudioContext()
  bubblePopAudio.src = require('@/assets/audio/boblebreak.mp3')

  useEffect(() => {
    // 生成泡泡，数量为 correct 和 wrong 的长度之和
    const bubblesList: Bubble[] = generateBubbles(question.correct.length + question.wrong.length)
    setBubbles(bubblesList)
  }, [question.correct, question.wrong])

  // 生成泡泡，泡泡随机分布在一个范围内，避免重叠
  const generateBubbles = (bubbleCount: number): Bubble[] => {
    const bubblesList: Bubble[] = []
    const maxWidth = 90
    const maxHeight = 70
    const minHorizontalSpacing = 25 // 水平最小间距
    const minVerticalSpacing = 35   // 垂直最小间距
  
    // 分阶段生成：先生成前50%的泡泡使用严格间距，后50%逐步放宽
    const phaseThreshold = Math.ceil(bubbleCount * 0.5)
    let currentPhase = 1
  
    const isOverlap = (x: number, y: number): boolean => {
      return bubblesList.some(bubble => {
        const xSpacing = currentPhase === 1 ? minHorizontalSpacing : minHorizontalSpacing * 0.8
        const ySpacing = currentPhase === 1 ? minVerticalSpacing : minVerticalSpacing * 0.8
        return Math.abs(bubble.x - x) < xSpacing && Math.abs(bubble.y - y) < ySpacing
      })
    }
  
    const allTexts = [...question.correct, ...question.wrong].sort(() => Math.random() - 0.5)
  
    // 生成算法
    const tryGeneratePosition = (): [number, number] => {
      let bestX = 0
      let bestY = 0
      let maxDistance = 0
      const attempts = 200 // 通过多次采样找到最优位置
  
      // 寻找距离现有泡泡最远的位置
      for (let i = 0; i < attempts; i++) {
        const x = Math.random() * (maxWidth - 15) + 5
        const y = Math.random() * (maxHeight - 15) + 5
        let minDistance = Infinity
  
        // 计算与所有现有泡泡的最小距离
        bubblesList.forEach(bubble => {
          const dx = bubble.x - x
          const dy = bubble.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < minDistance) minDistance = distance
        })
  
        // 保留最大间距的位置
        if (minDistance > maxDistance) {
          maxDistance = minDistance
          bestX = x
          bestY = y
        }
      }
      return [bestX, bestY]
    }
  
    for (let i = 0; i < bubbleCount; i++) {
      if (i >= phaseThreshold) currentPhase = 2
      
      const text = allTexts[i]
      const isCorrect = question.correct.includes(text)
      
      // 使用优化后的位置生成算法
      let [x, y] = tryGeneratePosition()
      let attempts = 0
      const maxAttempts = 300
  
      // 最终校验
      while (isOverlap(x, y) && attempts < maxAttempts) {
        [x, y] = tryGeneratePosition()
        attempts++
      }
  
      bubblesList.push({
        id: i,
        text,
        isCorrect,
        x,
        y,
      })
    }
  
    return bubblesList
  }

  // 点击泡泡事件
  const handleBubbleClick = (id: number, isCorrect: boolean) => {
    if (!isPlaying) return

    // 播放音效
    bubblePopAudio.play()

    // 更新得分
    const newScore = isCorrect ? score + 20 : score - 5
    setScore(newScore)

    // 移除点击的泡泡
    setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.id !== id))
  }

  // 结束游戏
  const handleEndGame = () => {
    setIsPlaying(false)
    onEnd(score)
  }

  return (
    <View className="bubble-game-container">
      <View className='bubble_title'>{question.title}</View>
      <View className="bubble_box">
        {bubbles.map((bubble) => (
          <View
            key={bubble.id}
            className="bubble"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              animation: `float ${Math.random() * 2 + 1}s ease-in-out infinite`, // 控制浮动的动画
            }}
            onClick={() => handleBubbleClick(bubble.id, bubble.isCorrect)}
          >
            {bubble.text.split('，').map((item, index) => (
              <View key={index} className="bubble-text">{item}</View>
            ))}
          </View>
        ))}
      </View>
      <View className='confirm' onClick={handleEndGame}>确认</View>
      <View className="score">
        <Text>Score: {score}</Text>
      </View>
    </View>
  )
}

export default BubbleGame