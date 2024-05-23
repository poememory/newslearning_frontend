import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5uMepbI9*PL*2d7u3p3yxMndSiXXTGO*WdbO5iTUFhFRs6hmesmlgtMpNTT*.n3beTpldpVL.5R5v4*5NfTqeos!/b&bo=Jwk4BAAAAAABJxI!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5mBQ*iN6nSL4uHMAxXZry78tw7Jzq.KBwNJ70icUyQtJEKtKojCVUoy2JhEbuTSZ1ykQaKOQuntLHzoH7NeRo.8!/b&bo=Jwk4BAAAAAABFyI!&rf=viewer_4'
]

const progressContent = (progress, setStateFunctions) => {
    const {
        setForwordInfo_show,
        setForwordInfo_content,
        setDilogbox_show,
        setchoosebox_show,
        setchoosebox_content,
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
        endChapter,
    } = setStateFunctions;

    switch (progress) {
        case 0://
            setForwordInfo_show(true)
            break;
        case 1://选择提示------------无关
            setchoosebox_show(true)
            break;
        case 2:
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 3://选择提示------------
            setchoosebox_content(1)
            setchoosebox_show(true)
            break;
        case 4://-------------------1
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 5:
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break;
        case 6://选择
            setchoosebox_content(2)
            setchoosebox_show(true)
            break;
        case 7://1.1
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break;
        case 8://选择
            setchoosebox_content(3)
            setchoosebox_show(true)
            break;
        case 9://1.1.1
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break;
        case 10:
            updateMoral(moral+5)
            setAttribute_content([{type:'moral',content:'+5'}])
            setAttributeShow(true)
            break;
        case 11://选择
            setchoosebox_content(4)
            setchoosebox_show(true)
            break;
        case 12://1.1.1.1
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break;
        case 13:
            updateMoney(money+100)
            setAttribute_content([{type:'money',content:'+100'}])
            setAttributeShow(true)
            break;
        case 14:
            endChapter()
            break;
        case 15://1.1.1.2
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break;
        case 16:
            updateMoney(money+100)
            setAttribute_content([{type:'money',content:'+100'}])
            setAttributeShow(true)
            break;
        case 17:
            endChapter()
            break;
        case 18://1.2
            setForwordInfo_content(7)
            setForwordInfo_show(true)
            break;
        case 19:
            updateMoney(money+100)
            setAttribute_content([{type:'money',content:'+100'}])
            setAttributeShow(true)
            break;
        case 20:
            endChapter()
            break;
        case 21://2
            updateMoral(moral+10)
            setAttribute_content([{type:'moral',content:'+10'}])
            setAttributeShow(true)
            break;
        case 22:
            setProgress(5)
            break
        default:
            break;
    }
};



const Chapter3Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={3}
            />
        </GlobalProvider>
    );
};

export default Chapter3Index;
