import { View, Text } from '@tarojs/components'
import './index.less'


interface GameBoardprops{
  backgroundImgurl:string,
    moral:number,
    money:number,
    proudNum:number
}
export default function GameBoard(GameBoardprops:GameBoardprops) {
  let {backgroundImgurl,proudNum,moral,money}=GameBoardprops
  return(
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
  )
}
