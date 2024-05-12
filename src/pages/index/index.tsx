import { View} from '@tarojs/components'
import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.less'

export default function Index() {
  useEffect(()=>{
    Taro.redirectTo({
      url:'/pages/backgroundInfo/index'
    })
  })
    const content='我扫覅觉得斯奥非农设定都觉得你发尽可能的反馈科技咋发你寄快递'
  return (
      <View className='homepage'>
    <View className='Show_item'>
        {content.split('').map((item,index)=>{
          return(
            <View className='showItem' style={{animationDelay:`${index*50}ms`}}>{item}</View>
          )
        })}
    </View>
      </View>
  )
}
