import Taro from "@tarojs/taro";
import {useEffect, useRef, useState} from 'react';
import GameBoard from "@/components/GameBoard";
import { useGlobalContext } from '@/context/GlobalContext';
import ForwordInfo from '@/components/MaskPopup/forwordInfo';
import Dilogbox from '@/components/MaskPopup/DialogBox';
import ChooseBox from "@/components/MaskPopup/chooseBox";
import AttributeToast from "@/components/MaskPopup/AttributeToast";
import PreloadResources from "@/components/preloader/preloader";
import GapInfobox from "@/components/MaskPopup/gapInfo";
import AttributeContent from "@/components/MaskPopup/AttributeToast/type";
import Loading from "@/components/loading/index.";
import AIToast from "@/components/MaskPopup/AiToast";

interface ChapterComponentProps {
    progressContent: (progress: number, setStateFunctions: any) => void;
    content: {
        Info: any[];
        GapInfo: any[];
        Dialog: any[];
        Choice: any[];
    };
    imagesToPreloader: string[];
    chapterIndex:number
}

const ChapterComponent = ({ progressContent, content, imagesToPreloader,chapterIndex }: ChapterComponentProps) => {
    const { moral, money, proud, updateMoral, updateMoney, updateProud } = useGlobalContext();
    const [backgroundImgurl, setBackgroundImgurl] = useState(imagesToPreloader[0]);
    const [showPage, setShowPage] = useState(false);
    const [progress, setProgress] = useState<number>(0);
    const progressRef = useRef<number>(0);

    const [ForwordInfo_show, setForwordInfo_show] = useState(false);
    const [ForwordInfo_content, setForwordInfo_content] = useState(0);

    const [Dilogbox_show, setDilogbox_show] = useState(false);
    const [Dilog_content, setDilog_content] = useState(0);

    const [choosebox_show, setchoosebox_show] = useState(false);
    const [choosebox_content, setchoosebox_content] = useState(0);
    const [choice_gap, setChoice_gap] = useState<number[]>([0]);
    const [choice_index, setChoice_index] = useState<number[]>([]);

    const [AttributeShow, setAttributeShow] = useState(false);
    const [Attribute_content, setAttribute_content] = useState<AttributeContent[]>([]);

    const [GapInfoShow, setGapInfoShow] = useState(false);
    const [GapInfo_content, setGapInfo_content] = useState(0);
    const [AI_show, setAI_show] = useState(false)
    // useEffect(() => {
    //     const storedProgress = Taro.getStorageSync(`chapter${chapterIndex}_progress`)
    //     if(storedProgress){
    //         setForwordInfo_show(false)
    //         setProgress(storedProgress);
    //     }
    //     return () => {
    //         Taro.setStorageSync(`chapter${chapterIndex}_progress`, progressRef.current)
    //     }
    // }, []);
    const handlePreloadComplete = () => {
        setShowPage(true);
    };
    useEffect(() => {
        progressRef.current = progress
        console.log(progress)
        progressContent(progress, {
            setForwordInfo_show,
            setForwordInfo_content,
            setDilogbox_show,
            setDilog_content,
            setchoosebox_show,
            setchoosebox_content,
            setChoice_gap,
            setChoice_index,
            setAttributeShow,
            setAttribute_content,
            setGapInfoShow,
            setGapInfo_content,
            setAI_show,
            money,
            moral,
            proud,
            updateMoral,
            updateMoney,
            updateProud,
            setBackgroundImgurl,
            setProgress,
            endPart,
            endChapter
        });
    }, [progress]);
    const endPart = (jumpProgress: number, backProgress: number) => {
        Taro.showModal({
            title: '提示',
            content: '该部分内容结束，想知道后面的故事吗？请继续您的旅程吧',
            success: function (res) {
                if (res.confirm) {
                    setProgress(jumpProgress);
                } else if (res.cancel) {
                    setProgress(backProgress);
                }
            },
        });
    };

     function endChapter(){
        if(chapterIndex==1&&choice_index[0]==0&&progress<44){
            setProgress(44)
        }
        else {
            Taro.setStorageSync(`chapter${chapterIndex}_progress`, 0)
            Taro.setStorageSync('money',money)
            Taro.setStorageSync('moral',moral)
            Taro.setStorageSync('proud',proud.map((item)=>item?1:0).join(','))
            Taro.showModal({
                title: '提示',
                content: '你完成了该章节的内容！',
                success: function (res) {
                    if (res.confirm) {
                        Taro.navigateBack()
                    } else if (res.cancel) {
                        Taro.navigateBack()
                    }
                },
            });
        }
    }
    useEffect(() => {
        setProgress(progress + choice_gap[choice_gap.length - 1]);
    }, [choice_gap]);

    return (
        <>
            <PreloadResources images={imagesToPreloader} audios={[]} videos={[]} onPreloadComplete={handlePreloadComplete} />
            {showPage ?(
                <>
                    <GameBoard backgroundImgurl={backgroundImgurl} money={money} moral={moral} proudNum={proud.filter(Boolean).length}></GameBoard>
                    {ForwordInfo_show && <ForwordInfo onClose={() => { setForwordInfo_show(false); setProgress(progress + 1); }} content={content.Info[ForwordInfo_content]}></ForwordInfo>}
                    {Dilogbox_show && <Dilogbox onClose={() => { setDilogbox_show(false); setProgress(progress + 1); }} Dilogcontent={content.Dialog[Dilog_content]}></Dilogbox>}
                    {choosebox_show && <ChooseBox onClose={() => { setchoosebox_show(false); }} setChoice_gap={setChoice_gap} setChoice_index={setChoice_index} content={content.Choice[choosebox_content]}></ChooseBox>}
                    {GapInfoShow && <GapInfobox onClose={() => { setGapInfoShow(false); setProgress(progress + 1); }} content={content.GapInfo[GapInfo_content]} />}
                    {AttributeShow && <AttributeToast content={Attribute_content} onClose={() => { setAttributeShow(false); setProgress(progress + 1); }}></AttributeToast>}
                    {AI_show && <AIToast onClose={() => { setAI_show(false); setProgress(progress + 1); }} content={'AI助教温馨提醒：过于血腥的素材不适合用作新闻报道，要牢记这一点！'}/>}
                </>
            ):<Loading/>}
        </>
    );
};

export default ChapterComponent;
