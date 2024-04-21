import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'
import { useEffect,useState } from 'react'
import debounce from '@/method/debonce';
import GameBoard from "@/components/GameBoard";
import { GlobalProvider,useGlobalContext } from '../.././context/GlobalContext'
import ForwordInfo from '@/components/MaskPopup/forwordInfo';
import { mainInfo,firstInfo,firstDialog ,secondInfo} from './content';
import Dilogbox from '@/components/DialogBox';

const backgroundImgurl='https://s2.loli.net/2024/04/09/Enqt5QY93l4V1ov.png'
export default function Chapter1Index() {
    //const { money, moral, updateMoney, updateMoral } = useGlobalContext();
    const [progress,setProgress]=useState<number[]>([])
    const [ForwordInfo_show,setForwordInfo_show]=useState(false)
    const [ForwordInfo_content,setForwordInfo_content]=useState(mainInfo)
    const [Dilogbox_show,setDilogbox_show]=useState(false)
    useEffect(()=>{
        console.log(progress);
        switch (progress.length) {
            case 0://弹窗mainInfo
                setForwordInfo_show(true)
                break;
            case 1://弹窗前期
                setForwordInfo_content(firstInfo)
                setForwordInfo_show(true)
                break;
            case 2://对话
                setDilogbox_show(true)
                break;
            case 3://选择
                setForwordInfo_content(secondInfo)
                setForwordInfo_show(true)
                break;
            default:
                break;
        }   
    },[progress])
    function updateProgress(num:number) {
        setProgress((prevProgress) => {
            let newProgress = [...prevProgress,num]; 
            return newProgress;
        });
    }
    return(
    <GlobalProvider>
        <GameBoard backgroundImgurl={backgroundImgurl}></GameBoard>
        {ForwordInfo_show&&<ForwordInfo onClose={()=>{setForwordInfo_show(false);updateProgress(1)}} content={ForwordInfo_content}></ForwordInfo>}
        {Dilogbox_show&&<Dilogbox onClose={()=>{setDilogbox_show(false);updateProgress(1)}}  Dilogcontent={firstDialog}></Dilogbox>}
    </GlobalProvider>
    )
}
