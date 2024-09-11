import AnimationText from "@/components/AnimationText";
import debounce from "@/method/debonce";
import {useGlobalContext} from "@/context/GlobalContext";
import { useState} from "react";
import { View } from '@tarojs/components'
import './index.less'
import { MaskPopupProps } from '../type';




interface ForwordInfoProps extends MaskPopupProps{
  content:string;
}
const ForwordInfo: React.FC<ForwordInfoProps> = ({onClose,content}) => {
    const maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4';
    const femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
    const {gender}=useGlobalContext()
    const lineArr=content.split('\n')
    const [lineCount, setLineCount] = useState(0)
    const handleClick=()=>{
        if(lineCount!=lineArr.length-1)setLineCount(lineCount+1)
        else onClose()
    }
    function Onshow(){
        return <AnimationText content={lineArr[lineCount]}/>
    }


  return (
      <>
        <View className='ForwordInfobox' onClick={debounce(handleClick,200)}>
            <Onshow></Onshow>
            <View className='ForwordInfo_character' style={{backgroundImage:`url(${gender=='male'?maleImg:femaleImg})`}}></View>
            <View className='click_icon_ForwordInfo'> &gt;&gt;</View>
        </View>
      </>
  );
}

export default ForwordInfo;
