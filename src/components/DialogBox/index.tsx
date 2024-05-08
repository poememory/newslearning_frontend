import { View, Text,Image} from '@tarojs/components'
import { useState ,useEffect} from 'react'
import './index.less'
import debounce from '@/method/debonce'
import {useGlobalContext} from "@/context/GlobalContext";

interface DilogContent{
    content:string,
    type:string
}
interface DilogboxProps{
    onClose:()=>void,
    Dilogcontent:DilogContent[]
}
const Dilogbox: React.FC<DilogboxProps> = ({onClose,Dilogcontent}) => {
    const maleImg='https://s2.loli.net/2024/05/08/yniEfqs176wQ9u5.png';
    const femaleImg ='https://s2.loli.net/2024/05/08/U2ck3Lfv6pmYu95.png'

    const {gender}=useGlobalContext()
    const [onShowDilog,setonShowDilog]=useState(0)
    function handleclick(){
        if(onShowDilog==Dilogcontent.length-1){onClose()}
        else setonShowDilog(prev => prev + 1);
    }
  return (
      <>
      <View className='Dilogbox' onClick={debounce(handleclick,300)}>
          <View className='Dilog_character teamate_character' style={{backgroundImage:`url(${gender=='male'?femaleImg:maleImg})`}} ></View>
          <View className='Dilog_character' style={{backgroundImage:`url(${gender=='male'?maleImg:femaleImg})`}}></View>
        <View className='DilogAvatar' style={{display:Dilogcontent[onShowDilog].type=="aside"?"none":'',left:Dilogcontent[onShowDilog].type=="me"?'57vw':'0'}}>
            {Dilogcontent[onShowDilog].type=='me'?'我':'同事'}
        </View>
        <Text className='Dilogcontentbox'>{Dilogcontent[onShowDilog].content}</Text>
          <View className='click_icon'> &gt;&gt;</View>
      </View>
      </>
  );
}

export default Dilogbox;
