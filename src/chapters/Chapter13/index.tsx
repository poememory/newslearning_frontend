import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPI6PMj2mlm89I.uh5.aWRCKgg06e.SYdB2ZqtecNeeaYAS4F0rU0FiJkSPfnPzeD8MSrELqAYybnviL1CBQ4G8!/b&bo=Swc4BAAAAAADdyI!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPI6PMj2mlm89I.uh5.aWRDTFRGGbA.7s13tu5BGMypb0bTCL*cfM*tYlcOjlLZVc7CMtBaZL726cUSlBRGrlgk!/b&bo=Ywc4BAAAAAADh*o!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS8f70lXLvR.FYqrZQFiLqC9Uo0lHMe2MErtKbQQReUJfdFUP.eeyDrnErns2Eohf6E!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS*QnL20iEhB0eIXYb1S1iW0OSeT0ymaLEZ8Tl7uWg9314rRNPudQi.YS5Uujsw.MuA!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxlrhcHRFyQaiMTDpgb4wL75ygzLvgbUGBh2D2IxIPRDgm.1kX*ldR9JBBhu2LziSk!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4'//shopper
]

const progressContent = (progress, setStateFunctions) => {
    const {
        setProgress,
        setForwordInfo_show,
        setForwordInfo_content,
        setDilogbox_show,
        setDilog_content,
        setchoosebox_show,
        setchoosebox_content,
        setAttributeShow,
        setAttribute_content,
        setGapInfoShow,
        setGapInfo_content,
        setCertain_show,
        setCertain_index,
        setAI_show,
        money,
        moral,
        proud,
        updateMoral,
        updateMoney,
        updateProud,
        setBackgroundImgurl,
        endPart,
        endChapter,
    } = setStateFunctions;

    switch (progress) {
        case 0:
            setForwordInfo_show(true)
            break;
        case 1:
            setBackgroundImgurl(imagesToPeloader[0])
            setchoosebox_content(0)
            setchoosebox_show(true)
            break;
        case 2://2
            setBackgroundImgurl(imagesToPeloader[1])
            setDilogbox_show(true)
            break;
        case 3:
            setCertain_show(true)
            break;
        case 4:
            setCertain_show(false)
            setchoosebox_content(1)
            setchoosebox_show(true)
            break;
        case 5:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 6:
            endChapter()
            break
        case 7:
            setProgress(1)
            break
        case 8://3
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 9:
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 10://4
            setBackgroundImgurl(imagesToPeloader[2])
            setDilog_content(1)
            setDilogbox_show(true)
            break
        case 11:
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 12:
            setGapInfoShow(true)
            break
        case 13:
            updateMoral(moral+50)
            setAttribute_content([{type:'moral',content:'+50'}])
            setAttributeShow(true)
            break
        case 14:
            endChapter()
            break
        case 15://5
            setDilog_content(2)
            setDilogbox_show(true)
            break
        case 16:
            setProgress(12)
            break
        default:
            break;
    }
};



const Chapter13Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={13}
            />
        </GlobalProvider>
    );
};

export default Chapter13Index;
