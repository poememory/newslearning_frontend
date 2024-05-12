import { View} from '@tarojs/components'
import './index.less'
import { MaskPopupProps } from '../type';
import {useEffect, useState} from "react";
import AnimationText from "@/components/AnimationText";
import debounce from "@/method/debonce";

interface Gapcontent{
    content:string,
    type:string
}
interface GapInfoProps extends MaskPopupProps{
    content:Gapcontent
}
const GapInfobox: React.FC<GapInfoProps> = ({onClose,content}) => {
    const [finished, setFinished] = useState(false)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFinished(true);
        }, content.content.split('').length * 50);

        return () => clearTimeout(timeoutId);
    }, [content]);
    function handleClick(){
        if(finished)onClose()
    }

    return (
        <>
            <View className={`GapInfoPage ${content.type=='blue'?'':'totalBlack'}`} onClick={debounce(handleClick,200)}>
                <View className={`GapInfo_text `}><AnimationText  content={content.content}/></View>
                <View className='click_icon_GapInfo' style={{display:finished?'':'none'}}> &gt;&gt;</View>
            </View>
        </>
    );
}

export default GapInfobox;
