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
  return (
    <View></View>
  )
}
