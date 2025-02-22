import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import './index.less'
import { url } from "inspector";

export default function Gamechoose(){
    return(
        <View className="gamechoose_page">
            <View style={{position:'absolute',top:'5vh',left:'4vw',width:'4vw'}} onClick={()=>Taro.navigateBack()}>&lt;</View>
            <View onClick={()=>Taro.navigateTo({url:'/pages/gamepage/hammergame/index'})} className="gamechoose_page_item" style={{backgroundColor:' rgb(218, 140, 45);'}}><View className="mole_choose"></View>打地鼠</View>
            <View onClick={()=>Taro.navigateTo({url:'/pages/gamepage/bublegame/index'})} className="gamechoose_page_item bubble_choose" style={{backgroundColor:' rgb(210, 115, 199);'}}> <View className="buble_choose"></View>戳泡泡</View>
        </View>
    )
}