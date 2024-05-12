import './index.less'
import Taro, { useDidShow }  from "@tarojs/taro";
import {useEffect, useState} from 'react'
import GameBoard from "@/components/GameBoard";
import {GlobalProvider,useGlobalContext} from '@/context/GlobalContext';
import ForwordInfo from '@/components/MaskPopup/forwordInfo';
import { getContent } from './content';
import Dilogbox from '@/components/MaskPopup/DialogBox';
import ChooseBox from "@/components/MaskPopup/chooseBox";
import AttributeToast from "@/components/MaskPopup/AttributeToast";
import PreloadResources from "@/components/preloader/preloader";
import AttributeContent from "@/components/MaskPopup/AttributeToast/type";
import GapInfobox from "@/components/MaskPopup/gapInfo";




const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5iaKxJz0gOgiwGBvRarM3sX*plTfonGmrJCP3yNyLLERf7C6ZmcExAq4txPsf2ivu8VrT4nkvVp1PJnW9BbOLwg!/b&bo=Jwk4BAAAAAABBzI!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5iaKxJz0gOgiwGBvRarM3sWF.WDDi.WF4riwI.VZq9rHMyCUw8uU.vvVwhgmlkrLu6jxdfnj0*E*2XCDZtvX*YU!/b&bo=Jwk4BAAAAAABFyI!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5iaKxJz0gOgiwGBvRarM3sXJLl.E1E9Vw9Dlai.MFks1DeVgTh*x9mj3U7pTeNWNYI66kO6JtsYTuyNpvpaUmP8!/b&bo=Jwk4BAAAAAABFyI!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5pyKAkxLV6c.Yg.Ur3ZPCPV9QczKMVjgcjKPggkDteDR.i60Zg0sQ6AYLn2ZUTLZ3RTOBAl59f70y5LDAUpbv7s!/b&bo=CQLcAgAAAAADF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5pyKAkxLV6c.Yg.Ur3ZPCPXIZm9kDrPeD9H39wrXDytSFgKCeWIZzx7qbMygn6ZvPsuo4*q8CIuaHmp2CiuQ3mM!/b&bo=CQLpAgAAAAADF9I!&rf=viewer_4',//icon
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',//man
]

export default function Chapter1Index() {
    const { moral,money,proud,updateMoral,updateMoney,updateProud } = useGlobalContext();
    const [backgroundImgurl, setBackgroundImgurl] = useState(imagesToPeloader[0])
    const [showPage, setShowPage] = useState(false);
    const [progress,setProgress]=useState<number>(0)

    const [ForwordInfo_show,setForwordInfo_show]=useState(false)
    const [ForwordInfo_content,setForwordInfo_content]=useState(0)

    const [Dilogbox_show,setDilogbox_show]=useState(false)
    const [Dilog_content,setDilog_content]=useState(0)

    const [choosebox_show,setchoosebox_show]=useState(false)
    const [choosebox_content,setchoosebox_content]=useState(0)
    const [choice_gap,setChoice_gap]=useState<number[]>([0])
    const [choice_index, setChoice_index] = useState<number[]>([])

    const [AttributeShow, setAttributeShow] = useState(false)
    const [Attribute_content, setAttribute_content] = useState<AttributeContent[]>([])

    const [GapInfoShow, setGapInfoShow] = useState(false)
    const [GapInfo_content, setGapInfo_content] = useState(0)


    const {Info,GapInfo,Dialog,Choice} = getContent();
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
            case 0://
                setForwordInfo_show(true)
                break;
            case 1://前期-----------------------------------------------------------------------------------------------
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
                setGapInfoShow(true)
                break;
            case 6:
                updateMoral(moral+10)
                updateMoney(money-100)
                setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'-100'}])
                setAttributeShow(true)
                break
            case 7:
                endPart(14,1)
                break
            case 8://选择陪伴------------2
                setGapInfo_content(1)
                setGapInfoShow(true)
                break;
            case 9:
                updateMoney(money-100)
                updateMoral(moral+10)
                setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'-100'}])
                setAttributeShow(true)
                break
            case 10:
                endPart(14,1)
                break
            case 11://选择离开------------3
                setGapInfo_content(2)
                setGapInfoShow(true)
                break;
            case 12:
                updateMoral(moral+5)
                updateMoney(money+100)
                setAttribute_content([{type:'moral',content:'+5'},{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 13:
                endPart(14,1)
                break
            case 14://中期----------------------------------------------------------------------------------------------
                setBackgroundImgurl(imagesToPeloader[1])
                setForwordInfo_content(3)
                setForwordInfo_show(true)
                break
            case 15://选择
                setchoosebox_content(1)
                setchoosebox_show(true)
                break
            case 16://跟随------1
                setForwordInfo_content(4)
                setForwordInfo_show(true)
                break
            case 17://选择(无关)
                setchoosebox_content(2)
                setchoosebox_show(true)
                break
            case 18:
                setProgress(pre=>pre+1)
                break
            case 19:
                setForwordInfo_content(5)
                setForwordInfo_show(true)
                break
            case 20://选择------
                setchoosebox_content(3)
                setchoosebox_show(true)
                break
            case 21://选择-------1.1
                setGapInfo_content(3)
                setGapInfoShow(true)
                break
            case 22:
                updateMoney(money+100)
                setAttribute_content([{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 23:
                endPart(28,14)
                break
            case 24://选择-------------------------2
                setGapInfo_content(4)
                setGapInfoShow(true)
                break
            case 25:
                endPart(28,14)
                break
            case 26://停留------2
                setGapInfo_content(5)
                setGapInfoShow(true)
                break
            case 27:
                endPart(28,14)
                break
            case 28://后期------------------------------------------------------------------------------------------------
                setBackgroundImgurl(imagesToPeloader[2])
                setForwordInfo_content(6)
                setForwordInfo_show(true)
                break
            case 29://选择
                setchoosebox_content(4)
                setchoosebox_show(true)
                break
            case 30://--------------1
                setForwordInfo_content(7)
                setForwordInfo_show(true)
                break
            case 31://选择
                setchoosebox_content(5)
                setchoosebox_show(true)
                break
            case 32://1.1
                setGapInfo_content(6)
                setGapInfoShow(true)
                break
            case 33:
                updateMoney(money+100)
                updateMoral(moral-10)
                setAttribute_content([{type:'moral',content:'-10'},{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 34:
                endChapter()
                break
            case 35://1.2
                setGapInfo_content(7)
                setGapInfoShow(true)
                break
            case 36:
                updateMoney(money+100)
                updateMoral(moral+5)
                setAttribute_content([{type:'moral',content:'+5'},{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 37:
                endChapter()
                break
            case 38:
                setGapInfo_content(7)
                setGapInfoShow(true)
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
                setGapInfo_content(7)
                setGapInfoShow(true)
                break
            case 42:
                updateMoral(moral+5)
                setAttribute_content([{type:'moral',content:'+5'}])
                setAttributeShow(true)
                break
            case 43:
                endChapter()
                break
            case 44:
                setForwordInfo_content(8)
                setForwordInfo_show(true)
                break
            case 45:
                updateMoney(money+100)
                setAttribute_content([{type:'money',content:'+100'}])
                setAttributeShow(true)
                break
            case 46:
                updateProud(()=>{
                    let newarr=proud
                    proud[0]=true
                    return newarr
                })
                Taro.showModal({
                    title:'成就解锁',
                    content:'恭喜获得成就“最美记者”'
                })
                setProgress(prevState => prevState+1)
            case 47:
                Taro.showToast({
                    title:'end'
                })
            default:
                break;
        }
    },[progress])
    useEffect(() => {
        console.log(choice_index)
    }, [choice_index]);
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
        if(choice_index[0]==0){
            setProgress(44)
        }
        else Taro.showToast({
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
                    {choosebox_show&&<ChooseBox onClose={()=>{setchoosebox_show(false)}} setChoice_gap={setChoice_gap} setChoice_index={setChoice_index} content={Choice[choosebox_content]}></ChooseBox>}
                    {GapInfoShow&&<GapInfobox onClose={()=>{setGapInfoShow(false);setProgress(progress+1)}} content={GapInfo[GapInfo_content]}/>}
                    {AttributeShow&&<AttributeToast content={Attribute_content} onClose={()=>{setAttributeShow(false);setProgress(progress+1)}}></AttributeToast>}
            </>
        )
    }
    </GlobalProvider>


    )
}
