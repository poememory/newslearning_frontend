import { View } from '@tarojs/components'
import './index.less'
import {useState} from "react";
import KnowlegeBox from "@/components/MaskPopup/knowlegebox";
import debounce from "@/method/debonce";
import ProudPage from "@/components/proud";


interface GameBoardprops{
  backgroundImgurl:string,
    moral:number,
    money:number,
    proudNum:number
}
export default function GameBoard(GameBoardprops:GameBoardprops) {
    const [knowlege_show, setKnowlege_show] = useState(false)
    const [proud_show, setProud_show] = useState(false)
    let {backgroundImgurl,proudNum,moral,money}=GameBoardprops
  return(
      <View className='GameBoard_box'  style={{ backgroundImage: `url(${backgroundImgurl})` }}>
          {proud_show&&<ProudPage onclose={debounce(()=>setProud_show(false),150)} />}
          {knowlege_show&&<KnowlegeBox/>}
          <View className='GameBoard_Item_knowlege' onClick={debounce(()=>setKnowlege_show(!knowlege_show),150)}></View>
        <View className='GameBoard_Item_proud' onClick={()=>setProud_show(true)}>
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
