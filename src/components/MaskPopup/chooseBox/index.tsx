import { View, Text,Image} from '@tarojs/components'
import {useState, useEffect, Dispatch} from 'react'
import './index.less'
import debounce from "@/method/debonce";


interface ChooseContent{
    content:string,
    imgurl:any,
    gap:number
}
interface ChooseboxProps{
    onClose:()=>void,
    setChoice_gap:Dispatch<React.SetStateAction<number[]>>,
    choice_gap:number[],
    content:ChooseContent[]
}
const Choosebox: React.FC<ChooseboxProps> = ({onClose,setChoice_gap,choice_gap,content}) => {


    return (
        <>
            <View className='choosePage'>
                <View className='choosebox'>
                    <View className='choosebox_title'>
                            你的选择
                    </View>
                    <View className='choosebox_content'>
                        {content.map((item)=>{
                                return(
                                    <View className='choice_item'
                                      onClick={
                                        debounce(
                                            ()=>{onClose();
                                                            setChoice_gap([...choice_gap,item.gap])}
                                            ,300)
                                    }
                                    >

                                        <Image src={item.imgurl} className='choice_icon'></Image>

                                        {item.content.split('，').map((line)=>{
                                            return(<View className='choice_content'>{line}</View>)
                                        })}

                                    </View>
                                )
                        })}
                    </View>
                </View>
            </View>
        </>
    );
}

export default Choosebox;
