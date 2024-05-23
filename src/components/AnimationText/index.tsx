import { View,Text} from '@tarojs/components'
import {AnimationTextProps} from "@/components/AnimationText/type";
import './index.less'

export default function AnimationText(props:AnimationTextProps) {
    const {content,classname,style}=props
    return (
        <View className={`Animation_text`}>
            {content.split('').map((item,index)=>{
                return(
                <Text className={`Animation_text_char ${classname}`} style={{animationDelay:`${index*30}ms`}}>{item}</Text>
                )
            })}
        </View>
    )
}
