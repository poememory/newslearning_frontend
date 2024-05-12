import { View,Image } from '@tarojs/components'
import './index.less'
import { MaskPopupProps } from '../type';
import {useEffect, useState} from "react";
import AnimationText from "@/components/AnimationText";
import debounce from "@/method/debonce";


interface ForwordInfoProps extends MaskPopupProps{
  content:string;
}
const ForwordInfo: React.FC<ForwordInfoProps> = ({onClose,content}) => {
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
            <View className='click_icon_ForwordInfo'> &gt;&gt;</View>
        </View>
      </>
  );
}

export default ForwordInfo;
