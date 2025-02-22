import { View } from '@tarojs/components'
import './index.less'
import {useState} from "react";
import KnowlegeBox from "@/components/MaskPopup/knowlegebox";
import debounce from "@/method/debonce";
import ProudPage from "@/components/proud";
import { useGlobalContext } from '@/context/GlobalContext';
import Taro from '@tarojs/taro';


interface GameBoardprops{
  game:boolean,
  chapterIndex?:number,
  backgroundImgurl:string,
}
export default function GameBoard(GameBoardprops:GameBoardprops) {
  const maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4';
  const femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
    const {nickname,money,moral,proud,gender}=useGlobalContext()
    const [knowlege_show, setKnowlege_show] = useState(false)
    const [proud_show, setProud_show] = useState(false)
    let {game,backgroundImgurl,chapterIndex}=GameBoardprops

  return(
      <View className='GameBoard_box'  style={{ backgroundImage: `url(${backgroundImgurl})` }}>
          {proud_show&&<ProudPage onclose={debounce(()=>setProud_show(false),150)} />}
          {knowlege_show&&<KnowlegeBox chapterIndex={chapterIndex}/>}
          {game
          ?
          <>
            <View className='GameBoard_Item_back' onClick={()=>Taro.navigateBack()}>&lt;</View>
            <View className='GameBoard_Item_knowlege' onClick={debounce(()=>setKnowlege_show(!knowlege_show),150)}></View>
          </>
          :
          <View className='avatar_menu' >
            <View className='avatar_gender'  style={{backgroundImage:`url(${gender=='male'?maleImg:femaleImg})`}}></View>
          </View>
          }
          <View className='GameBoard_Item_proud' onClick={()=>setProud_show(true)}>
              {proud.filter(Boolean).length}/10
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
