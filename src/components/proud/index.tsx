import { GlobalProvider, useGlobalContext } from "@/context/GlobalContext";
import {View} from "@tarojs/components";
import './index.less'

function ProudComponent({onclose}) {
    const { proud } = useGlobalContext();

    return (
        <View className='ProudPage'>
            <View className='Proud_title'>成就</View>
            <View className='Proud_back' onClick={onclose}>&lt;</View>
            <View className='Proud_show_box'>
                {proud.map((item)=>{
                    return(item?
                        <View className='proud_item_success'>最美记者</View>:<View className='proud_item_fail'></View>
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
