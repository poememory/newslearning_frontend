import { ScrollView, View,Text } from "@tarojs/components";
import { useState } from "react";
import './index.less'
import content from'./content'
import Taro from "@tarojs/taro";

export default function ExamplePage(){
    const [num,setnum]=useState(0)
    return(
        <>
       {num==0?
        <View className="example_index">
            <View style={{position:'absolute',top:'5vh',left:'4vw',width:'4vw'}} onClick={()=>Taro.navigateBack()}>&lt;</View>
            <View className="example_index_item">
                {[1,2,3,4,5,6].map((item)=>{
                    return(
                        <View onClick={()=>setnum(item)}></View>
                    )
                })}
            </View>
           
        </View>
        :
        <View className="example_content_page">
            <View style={{position:'absolute',top:'5vh',left:'4vw',width:'4vw'}} onClick={()=>setnum(0)}>&lt;</View>
            <ScrollView className="scroll_example" scrollY>
                <Text>{content[num-1]}</Text>
            </ScrollView>
        </View>
        }
        </>
    )
}