import { View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import throttle from "@/method/throttle";



export default function ChaperSelect() {

    const handleclick=(item)=>{
        setTimeout(()=>{
            if([1,2].includes(item))
            Taro.navigateTo({url:`/pages/gameChapters/chapter${item+9}/Chapter${item+9}packed`})
        },800)
    }
    return (
        <View className={`ChaperSelectPage `} style={{backgroundImage:`url('https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOQPb6Fp0bpxalSEFJi7O4i3axqMkl3NIlKUJ2bXm05DLnUOsAXInyV9S6C6iQRSEQfDj2dtLa4BzQb8JhEz5nM!/b&bo=Hgk4BAAAAAABBws!&rf=viewer_4')`}}>
             <View style={{fontSize:'3vw',fontWeight:900,position:'absolute',top:'2vh',left:'2vw',color:'white'}} onClick={()=>Taro.navigateBack()}>&lt;</View>
            
            {
                [1,2,3,4].map((item,index)=>{
                    return(
                        <View className='ChaperSelect_item' onClick={throttle(()=>handleclick(item),2000)} key={index*999}/>
                    )
                })
            }
        </View>
    )
}
