import { View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import throttle from "@/method/throttle";



export default function ChaperSelect2() {

    const handleclick=(item)=>{
        setTimeout(()=>{
            if([1,2,3].includes(item))
            Taro.navigateTo({url:`/pages/gameChapters/chapter${item+4}/Chapter${item+4}packed`})
        },800)
    }
    return (
        <View className={`ChaperSelectPage `}>
            <View style={{fontSize:'3vw',fontWeight:800,position:'absolute',top:'2vh',left:'2vw',color:'white'}} onClick={()=>Taro.navigateBack()}>&lt;</View>
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
