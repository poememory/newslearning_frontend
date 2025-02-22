import { GlobalProvider, useGlobalContext } from "@/context/GlobalContext";
import {View} from "@tarojs/components";
import './index.less'
//1 最美记者
//2 生计所迫
function ProudComponent({onclose}) {
    const { proud } = useGlobalContext();
    const arr=['最美记者','生计所迫','火眼金睛']
    return (
        <View className='ProudPage'>
            <View className='Proud_title'>成就</View>
            <View className='Proud_back' onClick={onclose}>&lt;</View>
            <View className='Proud_show_box'>
                {proud.map((item,index)=>{
                    return(item?
                        <View className='proud_item_success'>{arr[index]}</View>:<View className='proud_item_fail'></View>
                    )
                })}
            </View>
        </View>
    );
}

export default function ProudPage({onclose}) {
    return (
        <GlobalProvider>
            <ProudComponent onclose={onclose} />
        </GlobalProvider>
    );
}
