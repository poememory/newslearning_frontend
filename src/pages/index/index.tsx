import { View} from '@tarojs/components'
import {useState} from 'react'
import Taro from '@tarojs/taro'
import './index.less'
import PreloadResources from "@/components/preloader/preloader";
import Loading from "@/components/loading/index.";

export default function Index() {
  const ImagesToload=[
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5poBJmiU5xmO2pNqWnW8.*eP17hc5Us8s0EHGM0FZNF9rr8csLheEQVTore9g4glKbRBXLMchCk4IcVPrPDnbgc!/b&bo=Lgk4BAAAAAADd0k!&rf=viewer_4',//index
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5mBQ*iN6nSL4uHMAxXZry78tw7Jzq.KBwNJ70icUyQtJEKtKojCVUoy2JhEbuTSZ1ykQaKOQuntLHzoH7NeRo.8!/b&bo=Jwk4BAAAAAABFyI!&rf=viewer_4',//characterPage
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5poBJmiU5xmO2pNqWnW8.*fWgR*FaVrLS2KEAVmF0JmYE4QRX73R9mYOrj8kadPpsiVouedSb00PSD0a.sHD0CQ!/b&bo=IAk4BAAAAAADh7c!&rf=viewer_4',//selcet
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEA.hcaaeIEpYAaIukYTkKk.H6NcE1oslELHC6Qk9GSoBCVW2HBcO6yrJm2tMePdQLC5cHius9QlLkSio9CbqRoI!/b&bo=Hwk4BAAAAAADBwg!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5p8ORP*v2CQ6N54yoyZG4JaKA*5mRyvmCzXay81W*FgSlMBEW7ooh9CMQBwUJKyAqxHC7gr9Xqv1.uiNAWMBAjI!/b&bo=HQTOAwAAAAADJ9Y!&rf=viewer_4',//airobot
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5pyKAkxLV6c.Yg.Ur3ZPCPV9QczKMVjgcjKPggkDteDR.i60Zg0sQ6AYLn2ZUTLZ3RTOBAl59f70y5LDAUpbv7s!/b&bo=CQLcAgAAAAADF.c!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5pyKAkxLV6c.Yg.Ur3ZPCPXIZm9kDrPeD9H39wrXDytSFgKCeWIZzx7qbMygn6ZvPsuo4*q8CIuaHmp2CiuQ3mM!/b&bo=CQLpAgAAAAADF9I!&rf=viewer_4',//icon
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',//man
  ]
    const [page_show, setPages_show] = useState(false)
    const [animaitonType, setAnimaitonType] = useState('')
    const handleclick=()=>{
      setAnimaitonType('black_fade')
      setTimeout(()=>{
          Taro.redirectTo({url:'/pages/characterPage/index'})
      },1000)
    }
  return (
      <>
        <PreloadResources images={ImagesToload} audios={[]} videos={[]} onPreloadComplete={()=>setPages_show(true)}></PreloadResources>
      {
        page_show?<View className={`homepage ${animaitonType}`} onClick={handleclick}></View>:<Loading images={ImagesToload}></Loading>
      }
      </>
  )
}
