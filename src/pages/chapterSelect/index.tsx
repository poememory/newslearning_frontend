import debounce from "@/method/debonce";
import { View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'



export default function ChaperSelect() {

    const handleclick=(item)=>{
        setTimeout(()=>{
            Taro.navigateTo({url:`/pages/gameChapters/chapter${item}/Chapter${item}packed`})
        },800)
    }
    return (
        <View className={`ChaperSelectPage `}>
            {
                [1,2,3,4].map((item,index)=>{
                    return(
                        <View className='ChaperSelect_item' onClick={debounce(()=>handleclick(item),600)} key={index*999}/>
                    )
                })
            }
        </View>
    )
}
