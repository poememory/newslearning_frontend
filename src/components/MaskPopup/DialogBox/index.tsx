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
    Dilogcontent:{
        others:{
            name:string,
            imgurl:string,
            self:string,
        },
        content:DilogContent[]
    }

}
const Dilogbox: React.FC<DilogboxProps> = ({onClose,Dilogcontent}) => {
    let maleImg
    let femaleImg
    const {gender}=useGlobalContext()
    switch (Dilogcontent.others.self) {
        case 'common':
            maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4';
            femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
            break;
        case 'hands_down':
            maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS*QnL20iEhB0eIXYb1S1iW0OSeT0ymaLEZ8Tl7uWg9314rRNPudQi.YS5Uujsw.MuA!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4'
            femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS8f70lXLvR.FYqrZQFiLqC9Uo0lHMe2MErtKbQQReUJfdFUP.eeyDrnErns2Eohf6E!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
            break;
        case 'emo':
            maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5gMT4CnPTt4Fl.dCdpVzm.qp24DA9hDKloD.uDL67JbhLeX0QvLwGEMYXWc1WExJrk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4'
            femaleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5jAdxgSewdjB3R7mS1DkbbCFwtelhzv*nA8pNvan3ofpbNjP.8OpYWqjHDsVyqNKEk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4'
            break
        default:
            maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4';
            femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
            break;
    }
    const [onShowDilog,setonShowDilog]=useState(0)
    function handleclick(){
        if(onShowDilog==Dilogcontent.content.length-1){onClose()}
        else setonShowDilog(prev => prev + 1);
    }
    function Onshow(){
        return <AnimationText content={Dilogcontent.content[onShowDilog].content}/>
    }
  return (
      <>
      <View className='Dilogbox' onClick={debounce(handleclick,300)}>
          <View className={`${Dilogcontent.others.imgurl=='sex'?'teamate_character':'certain_character'}`} style={{backgroundImage:`url(${Dilogcontent.others.imgurl=='sex'?(gender=='male'?femaleImg:maleImg):Dilogcontent.others.imgurl})`}} ></View>
          <View className='Dilog_character' style={{backgroundImage:`url(${gender=='male'?maleImg:femaleImg})`}}></View>
        {Dilogcontent.others.name&&<View className='DilogAvatar' style={{display:Dilogcontent.content[onShowDilog].type=="aside"?"none":''}}>
            {Dilogcontent.content[onShowDilog].type=='me'?'我':Dilogcontent.others.name}
        </View>}
        <View style={{width:'55vw'}}><Onshow></Onshow></View>
          <View className='click_icon_Dilogbox'> &gt;&gt;</View>
      </View>
      </>
  );
}

export default Dilogbox;
