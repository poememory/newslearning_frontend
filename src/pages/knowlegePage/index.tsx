import Knowlegebox from "@/components/MaskPopup/knowlegebox";
import { View } from "@tarojs/components";
import { useState } from "react";
import './index.less'
import Taro from "@tarojs/taro";

export default function KnowlegePage(){
    const [num,setNum]=useState(0)
    const arr=[0,1,5,8,9,10,12]
    return(
        <View style={{width:'100vw',height:'100vh'}}>
            <View style={{position:'absolute',top:'5vh',left:'4vw',width:'4vw'}} onClick={()=>Taro.navigateBack()}>&lt;</View>
            <Knowlegebox chapterIndex={num}></Knowlegebox>
            <View className="knowlege_index">
                {arr.map((item,index)=>{
                    return (
                        <View className="knowlege_index_item" onClick={()=>setNum(item)}>{index+1}</View>
                    )
                })} 
            </View>
            
        </View>
    )
}