import { View,Text } from "@tarojs/components";
import './index.less'
import debounce from "@/method/debonce";

export default function WhiteBoard({onClose,content}){
    return(
        <View className="White_board" onClick={debounce(onClose,300)}>
            <View className="white_board_content"><Text>{content}</Text></View>
        </View>
    )
}