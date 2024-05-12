import { View } from '@tarojs/components'
import {useState, Dispatch} from 'react'
import './index.less'
import debounce from "@/method/debonce";


interface ChooseContent{
    content:string,
    gap:number
}
interface ChooseboxProps{
    onClose:()=>void,
    setChoice_gap:Dispatch<React.SetStateAction<number[]>>,
    setChoice_index:Dispatch<React.SetStateAction<number[]>>,
    content:ChooseContent[]
}
const Choosebox: React.FC<ChooseboxProps> = ({onClose,setChoice_gap,setChoice_index,content}) => {
    const initialArr = Array(content.length).fill(false);
    const [ChocieArr, setChocieArr] = useState(initialArr);

    function handleClick(gap: number, index: number) {
        setChocieArr(prev => {
            return prev.map((item, i) => i === index ? item : !item);
        });

        setTimeout(() => {
            setChoice_gap(prev => [...prev, gap]);
            setChoice_index(prev => [...prev, index]);
            onClose();
        }, 1200);
    }

    return (
        <>
                <View className='choosebox'>
                        {content.map((item,index)=>{
                                return(
                                    <View className={`choice_item ${ChocieArr[index]?'fade-out' : ''}`}
                                      onClick={debounce(()=>handleClick(item.gap,index),200)}
                                    >
                                        {item.content}
                                    </View>
                                )
                        })}
                </View>
        </>
    );
}

export default Choosebox;
