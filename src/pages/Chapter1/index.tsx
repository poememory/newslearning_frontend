import './index.less'
import Taro, { useDidShow }  from "@tarojs/taro";
import {useEffect, useState} from 'react'
import GameBoard from "@/components/GameBoard";
import {GlobalProvider,useGlobalContext} from '@/context/GlobalContext';
import ForwordInfo from '@/components/MaskPopup/forwordInfo';
import {Info, Dialog,Choice} from './content';
import Dilogbox from '@/components/DialogBox';
import ChooseBox from "@/components/MaskPopup/chooseBox";
import AttributeToast from "@/components/MaskPopup/AttributeToast";
import PreloadResources from "@/components/preloader/preloader";
import AttributeContent from "@/components/MaskPopup/AttributeToast/type";



const imagesToPeloader: string[] = [
    'https://s2.loli.net/2024/05/06/pTgH6XMxbdIrusJ.jpg',
    'https://s2.loli.net/2024/05/07/G2jQepkFv6uyHNK.jpg',
    'https://s2.loli.net/2024/05/07/NmWschf6xrzkbl4.jpg',//background
    'https://s2.loli.net/2024/05/07/uWAN4bBhlvtjIPk.png',
    'https://s2.loli.net/2024/05/07/IeB5xaJ9WSrAGq7.png',//icon
    'https://s2.loli.net/2024/05/08/yniEfqs176wQ9u5.png',
    'https://s2.loli.net/2024/05/08/U2ck3Lfv6pmYu95.png',//man
]

export default function Chapter1Index() {
    const { moral,money,proud,updateMoral,updateMoney } = useGlobalContext();
    const [backgroundImgurl, setBackgroundImgurl] = useState('https://s2.loli.net/2024/05/06/pTgH6XMxbdIrusJ.jpg')
    const [showPage, setShowPage] = useState(false);
    const [progress,setProgress]=useState<number>(0)

    const [ForwordInfo_show,setForwordInfo_show]=useState(false)
    const [ForwordInfo_content,setForwordInfo_content]=useState(0)

    const [Dilogbox_show,setDilogbox_show]=useState(false)
    const [Dilog_content,setDilog_content]=useState(0)

    const [choosebox_show,setchoosebox_show]=useState(false)
    const [choosebox_content,setchoosebox_content]=useState(0)
    const [choice_gap,setChoice_gap]=useState<number[]>([0])

    const [AttributeShow, setAttributeShow] = useState(false)
    const [Attribute_content, setAttribute_content] = useState<AttributeContent[]>([])
    const handlePreloadComplete = () => {
        setShowPage(true);
        Taro.hideLoading(); // 隐藏加载提示
    };
    useDidShow(() => {
        Taro.showLoading({
            title: '加载中...',
            mask: true // 遮罩层，防止用户操作
        });
    });
    useEffect(()=>{
        console.log(progress)
        switch (progress) {
            case 0://弹窗mainInfo
                setForwordInfo_show(true)
                break;
            case 1://弹窗前期
                setForwordInfo_content(1)
                setForwordInfo_show(true)
                break;
            case 2://对话
                setDilogbox_show(true)
                break;
            case 3://选择提示
                setForwordInfo_content(2)
                setForwordInfo_show(true)
                break;
            case 4://选择
                setchoosebox_show(true)
                break;
            case 5://选择找孩子------------1
                updateMoral(moral+10)
                setAttribute_content([{type:'moral',content:'+10'}])
                setAttributeShow(true)
                break;
            case 6:
                setForwordInfo_content(3)
                setForwordInfo_show(true)
                break
            case 7:
                updateMoney(money-100)
                setAttribute_content([{type:'money',content:'-100'}])
                setAttributeShow(true)
                break
            case 8:
                endPart(17,1)
                break
            case 9://选择陪伴------------2
                updateMoral(moral+10)
                setAttribute_content([{type:'moral',content:'+10'}])
                setAttributeShow(true)
                break;
            case 10:
                setForwordInfo_content(4)
                setForwordInfo_show(true)
                break
            case 11:
                updateMoney(money-100)
                setAttribute_content([{type:'money',content:'-100'}])
                setAttributeShow(true)
                break
            case 12:
                endPart(17,1)
                break
            case 13://选择离开------------3
                updateMoral(moral+5)
                setAttribute_content([{type:'moral',content:'+5'}])
                setAttributeShow(true)
                break;
            case 14:
                setForwordInfo_content(5)
                setForwordInfo_show(true)
                break
            case 15:
                updateMoney(money+100)
                setAttribute_content([{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 16:
                endPart(17,1)
                break
            case 17:
                setBackgroundImgurl('https://s2.loli.net/2024/05/07/G2jQepkFv6uyHNK.jpg')
                setForwordInfo_content(6)
                setForwordInfo_show(true)
                break
            case 18:
                setForwordInfo_content(7)
                setForwordInfo_show(true)
                break
            case 19://选择
                setchoosebox_content(1)
                setchoosebox_show(true)
                break
            case 20://跟随------1
                setForwordInfo_content(8)
                setForwordInfo_show(true)
                break
            case 21://选择(无关)
                setchoosebox_content(2)
                setchoosebox_show(true)
                break
            case 22:
                setForwordInfo_content(9)
                setForwordInfo_show(true)
                break
            case 23:
                setForwordInfo_content(10)
                setForwordInfo_show(true)
                break
            case 24:
                setchoosebox_content(3)
                setchoosebox_show(true)
                break
            case 25://选择-------1.1
                setForwordInfo_content(11)
                setForwordInfo_show(true)
                break
            case 26:
                updateMoney(money+100)
                setAttribute_content([{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 27:
                endPart(30,17)
                break
            case 28://停留------2
                setForwordInfo_content(12)
                setForwordInfo_show(true)
                break
            case 29:
                endPart(30,17)
                break
            case 30:
                setBackgroundImgurl('https://s2.loli.net/2024/05/07/NmWschf6xrzkbl4.jpg')
                setForwordInfo_content(13)
                setForwordInfo_show(true)
                break
            case 31:
                setForwordInfo_content(14)
                setForwordInfo_show(true)
                break
            case 32://选择
                setchoosebox_content(4)
                setchoosebox_show(true)
                break
            case 33://--------------1
                setForwordInfo_content(15)
                setForwordInfo_show(true)
                break
            case 34://选择
                setchoosebox_content(5)
                setchoosebox_show(true)
                break
            case 35://1.1
                setForwordInfo_content(16)
                setForwordInfo_show(true)
                break
            case 36:
                updateMoney(money+100)
                updateMoral(moral-10)
                setAttribute_content([{type:'moral',content:'-10'},{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 37:
                endChapter()
                break
            case 38://1.2-----------2
                setForwordInfo_content(17)
                setForwordInfo_show(true)
                break
            case 39:
                updateMoney(money+100)
                updateMoral(moral+10)
                setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 40:
                endChapter()
                break
            case 41:
                setForwordInfo_content(18)
                setForwordInfo_show(true)
                break
            case 42:
                updateMoral(moral+5)
                setAttribute_content([{type:'moral',content:'+5'}])
                setAttributeShow(true)
                break
            case 43:
                endChapter()
                break
            default:
                break;
        }
    },[progress])

    function endPart(jumpProgress,backProgress){
        Taro.showModal({
            title: '提示',
            content: '该部分内容结束，想知道后面的故事吗？请继续您的旅程吧',
            success: function (res) {
                if (res.confirm) {
                    setProgress(jumpProgress)
                } else if (res.cancel) {
                    setProgress(backProgress)
                }
            }
        })
    }
    function endChapter(){
        Taro.showToast({
            title:'end'
        })
    }

    useEffect(() => {
        setProgress(progress+choice_gap[choice_gap.length-1])
    }, [choice_gap]);

    return(

    <GlobalProvider>
        <PreloadResources images={imagesToPeloader} audios={[]} videos={[]} onPreloadComplete={handlePreloadComplete} />
        {showPage && (
            <>

                    <GameBoard backgroundImgurl={backgroundImgurl} money={money} moral={moral} proudNum={0}></GameBoard>
                    {ForwordInfo_show&&<ForwordInfo onClose={()=>{setForwordInfo_show(false);setProgress(progress+1)}} content={Info[ForwordInfo_content]}></ForwordInfo>}
                    {Dilogbox_show&&<Dilogbox onClose={()=>{setDilogbox_show(false);setProgress(progress+1)}}  Dilogcontent={Dialog[Dilog_content]}></Dilogbox>}
                    {choosebox_show&&<ChooseBox onClose={()=>{setchoosebox_show(false)}} setChoice_gap={setChoice_gap} choice_gap={choice_gap} content={Choice[choosebox_content]}></ChooseBox>}
                    {AttributeShow&&<AttributeToast content={Attribute_content} onClose={()=>{setAttributeShow(false);setProgress(progress+1)}}></AttributeToast>}
            </>
        )
    }
    </GlobalProvider>


    )
}
