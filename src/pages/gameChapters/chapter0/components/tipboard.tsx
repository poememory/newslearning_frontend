import { View } from "@tarojs/components";
import './index.less'
import debounce from "@/method/debonce";

export default function Tipboard({content,onclose}){

    return(
        <View className="Tip_board" onClick={debounce(onclose,300)}>
            <View className="Tip_center">
                <View className="Tip_title">{content[0]}</View>
                <View className="tip_content">{content[1]} </View> 
            </View>            
        </View>
    )
}