import { View ,Image} from "@tarojs/components";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import './index.less'
import Taro from "@tarojs/taro";
import throttle from "@/method/throttle";

export default function StepBoard({StepBoard_show,handleclose}){
    const {gender}=useGlobalContext()
    const icon=gender=='male'?
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELEslxGGc08Bo3HJD3vooGzEZrdMIe2m3yNS0v8W.raSME8k0jAcf.x0D84eyiHPX17f.ToP9u.cBtmCLFosZdk!/b&bo=OARSBgAAAAADB0o!&rf=viewer_4':
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPkUjDLgpbrAFBHpDsATKIOTJ7AFly4g8mGxv0.eFpu1EGYIgOWVSvBVqtp*5LHPO81oJuUrMBxxvjOLSW*4vX8!/b&bo=OARmBQAAAAADRz0!&rf=viewer_4'
    const backgroundImage='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJWIFRMoVtygkeqJJ09PM*G4RnDj08EpKEu3c5yIEMRXhPCrDNIdKCa6.BWKN9ABC*8!/b&bo=hgc4BAAAAAADhx8!&rf=viewer_4'
    const dice_img=['https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGM*PqIshITX*4jS6D*waBTsshsUz4cpoy4UliGfVGDOxUXH5yF*TTz1ELH2dGsWQy0s.eV6baDsY*DCfhwbFQk!/b&bo=sgOyAwAAAAADByI!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ97FO9fJDLOey3bwBVQGhfhr3o4NUhoSF9PzR7m6NUBdoRC14mBIXfMPeIY.SQ1vpE!/b&bo=tAOzAwAAAAADJwU!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ8QeQVcZmP0HNZHZ1hV3McTjxKOgSPZv5IiR5fbXvISiFI4JLGy7VjbPYoY0K5elH4!/b&bo=7AP4AwAAAAADJxY!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ83Xa5.lDXhE6BnyLX0oOpNJ1TRlIducb1qZ*lO.iZuL0.Q9z0KJLdvWnMYIwZjHEE!/b&bo=*gP9AwAAAAADNxE!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGM*PqIshITX*4jS6D*waBRuOkbLbZ286yB.I2jMY32hJPMnjD4BOCuGsDFAFbbqf0ReC8Lje1dSoQCzeP3udd4!/b&bo=*QP.AwAAAAADNxE!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ*dQhtLChCFve5uhFD2ZV5WptvWATBNDkYj9kik.KOWyBklM0y*JnVBWvjM8gzOR5s!/b&bo=5gHnAQAAAAADFzM!&rf=viewer_4'
    ]
    const [position, setPosition] = useState<number>(-1); // 角色的当前位置
    const [isMoving, setIsMoving] = useState<boolean>(false); // 是否在移动中
    const [isShaking,setIsShaking]=useState(false)
    const [current_dice,setCurrent_dice]=useState(1)
    const [shaking_dice,setShaking_dice]=useState(5)
    const [characterPosition, setCharacterPosition] = useState<{ top: number; left: number }>({ top: 180, left: 90 }); // 角色的初始位置（绝对定位坐标）
  
    const totalCells = 14;
    
    const cellCoordinates = [
        //0，2，4，7，10，13 剧情
        //3，5，8，9，11  tip
        //1，6，12
      { top: 85, left: 90 }, // 0号格子
      { top: 61, left: 90 }, // 1号格子
      { top: 38, left: 90 }, // 2号格子
      { top: 15, left: 90 }, // 3号格子
      { top: 15, left: 70 }, // 4号格子
      { top: 15, left: 50 }, // 5号格子
      { top: 15, left: 30 }, // 6号格子
      { top: 15, left: 10 }, // 7号格子
      { top: 38, left: 10 }, // 8号格子
      { top: 61, left: 10 }, // 9号格子
      { top: 85, left: 10 }, // 10号格子
      { top: 85, left: 30 }, // 11号格子
      { top: 85, left: 50 }, // 12号格子
      { top: 85, left: 70 }, // 13号格子
    ];
    useEffect(() => {
        Taro.startAccelerometer(); // 开启加速度计
        let lastTime = 0; // 上次摇晃时间
        let lastX = 0,
          lastY = 0,
          lastZ = 0; // 上次三个方向的加速度值
        const THRESHOLD = 0.2; // 阈值
    
        const deviceMotionHandler = (res) => {
          const x=res.x;
          const y=res.y;
          const z=res.z;
          const curTime = new Date().getTime();
          // 判断是否摇晃
          if (
            (curTime - lastTime > 3000 && lastX !== 0 && lastY !== 0 && lastZ !== 0)
          ) {
            const delta = Math.abs(x + y + z - lastX - lastY - lastZ);
            if (delta > THRESHOLD) {
              StepBoard_show?rollDice():'';
            }
            lastTime = curTime;
          }
          lastX = x;
          lastY = y;
          lastZ = z;
        };
        let timer=setInterval(() => {
            setShaking_dice(Math.floor(Math.random() * 6) + 1)
        }, 200);
        // 监听加速度计
        Taro.onAccelerometerChange(deviceMotionHandler);
    
        // 组件卸载时停止监听
        return () => {
          Taro.stopAccelerometer(); // 关闭加速度计
          clearInterval(timer)
          Taro.offAccelerometerChange(deviceMotionHandler); // 移除监听器
        };
      }, [position,StepBoard_show])
    // 投骰子函数
    const rollDiceHandle = () => {
      if (isMoving) return; // 如果正在移动，阻止新的投骰子
      const diceNumber = Math.floor(Math.random() * 6) + 1; // 模拟1-6的骰子点数
      const newTargetPosition = (position + diceNumber) % totalCells; // 计算目标位置
      if([1,6,12].includes(newTargetPosition))return rollDiceHandle()
      setIsShaking(true)
      setCurrent_dice(diceNumber)
      setTimeout(() => {
        setIsShaking(false)
      }, 1000);
      moveCharacter(newTargetPosition); // 开始移动角色
      setTimeout(() => {
        handleclose(newTargetPosition)
      }, diceNumber*300+1500);
    };
    const throttledRollDiceHandle = throttle(rollDiceHandle, 2000);
    const rollDice = () => {
      throttledRollDiceHandle(); // 使用节流后的函数
    };
    // 移动角色函数
    const moveCharacter = (targetPosition: number) => {
      setIsMoving(true);
      let currentPosition = position;
  
      const interval = setInterval(() => {
        currentPosition = (currentPosition + 1) % totalCells;
        setPosition(currentPosition);
        setCharacterPosition(cellCoordinates[currentPosition]); // 更新角色的坐标
  
        if (currentPosition === targetPosition) {
          clearInterval(interval);
          setIsMoving(false);
        }
      }, 300); // 每次移动的时间间隔
    };


    return(
        <View className="Step_board" style={{backgroundImage:`url(${backgroundImage})`}} >
            <View
                className="character"
                style={{ backgroundImage:`url(${icon})`,top: characterPosition.top + 'vh', left: characterPosition.left + 'vw' }}
            >
            </View>
            {position!=-1&&(isShaking?
            <Image className="dice_show shaking_ani" src={dice_img[shaking_dice-1]}></Image>:
            <Image className="dice_show" src={dice_img[current_dice-1]}></Image>)
            }
            <View className="dice_tip" onClick={rollDice}>
                点击/摇动 投掷骰子
            </View>
        </View>
    )
}