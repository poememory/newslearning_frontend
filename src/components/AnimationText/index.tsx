import { View,Text} from '@tarojs/components'
import {AnimationTextProps} from "@/components/AnimationText/type";
import './index.less'

export default function AnimationText(props:AnimationTextProps) {
    const {content,classname}=props
    return (
        <View className={`Animation_text ${classname}`}>
            {content.split('').map((item,index)=>{
                return(
                <Text className={`Animation_text_char`} style={{animationDelay:`${index*30}ms`}}>{item}</Text>
                )
            })}
        </View>
    )
}
