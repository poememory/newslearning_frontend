import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'
import { useEffect,useState } from 'react'
import { GlobalProvider,useGlobalContext } from '../.././context/GlobalContext'

interface GameBoardprops{
  backgroundImgurl:string
}
export default function GameBoard(GameBoardprops:GameBoardprops) {
  const { money, moral,proud} = useGlobalContext();
  let proudNum=proud.filter(item => item === true).length;
  let {backgroundImgurl}=GameBoardprops
  return(
    <GlobalProvider>
      <View className='GameBoard_box'  style={{ backgroundImage: `url(${backgroundImgurl})` }}>
        <View className='GameBoard_Item_proud'>
            {proudNum}/10
        </View>
        <View className='GameBoard_Item_money'>
            {money}
        </View>
        <View className='GameBoard_Item_heart'>
            {moral}
        </View>
      </View>
    </GlobalProvider>
  )
}
