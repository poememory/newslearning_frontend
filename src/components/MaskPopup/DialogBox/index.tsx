import { View} from '@tarojs/components'
import { useState } from 'react'
import './index.less'
import debounce from '@/method/debonce'
import {useGlobalContext} from "@/context/GlobalContext";
import AnimationText from "@/components/AnimationText";

interface DilogContent{
    content:string,
    type:string
}
interface DilogboxProps{
    onClose:()=>void,
    Dilogcontent:DilogContent[]
}
const Dilogbox: React.FC<DilogboxProps> = ({onClose,Dilogcontent}) => {
    const maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4';
    const femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'

    const {gender}=useGlobalContext()
    const [onShowDilog,setonShowDilog]=useState(0)
    function handleclick(){
        if(onShowDilog==Dilogcontent.length-1){onClose()}
        else setonShowDilog(prev => prev + 1);
    }
    function Onshow(){
        return <AnimationText content={Dilogcontent[onShowDilog].content}/>
    }
  return (
      <>
      <View className='Dilogbox' onClick={debounce(handleclick,300)}>
          <View className='Dilog_character teamate_character' style={{backgroundImage:`url(${gender=='male'?femaleImg:maleImg})`}} ></View>
          <View className='Dilog_character' style={{backgroundImage:`url(${gender=='male'?maleImg:femaleImg})`}}></View>
        <View className='DilogAvatar' style={{display:Dilogcontent[onShowDilog].type=="aside"?"none":''}}>
            {Dilogcontent[onShowDilog].type=='me'?'我':'同事'}
        </View>
        <Onshow></Onshow>
          <View className='click_icon_Dilogbox'> &gt;&gt;</View>
      </View>
      </>
  );
}

export default Dilogbox;
