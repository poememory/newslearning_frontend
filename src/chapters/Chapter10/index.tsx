import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEDH8J34U4cEn8k.rJz4S0teZ45Fn*xCIKVZNElXTrcTK5vq2ETR7*P3vt1oFvPx*HRzI5*n3v.klBSzK..Vy8HQ!/b&bo=Tgc4BAAAAAADB1c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJ3nXTcd3RykI4V*GU1AMAGmIbYSB*9Hu*hqRW3VWe.HrseV.N1vx5HYchqqDuswMKOVKTbAuEX6m4R6X0DGjhI!/b&bo=VQc4BAAAAAADB0w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJ3nXTcd3RykI4V*GU1AMAGpzXIAo4rZcHMfLNvBVD.8tShlfQvAAYP9nSZaq48SbeaD5fhIF6oXMoYmEMMq0WQ!/b&bo=GQg4BAAAAAADd38!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',//teacher
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS8f70lXLvR.FYqrZQFiLqC9Uo0lHMe2MErtKbQQReUJfdFUP.eeyDrnErns2Eohf6E!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS*QnL20iEhB0eIXYb1S1iW0OSeT0ymaLEZ8Tl7uWg9314rRNPudQi.YS5Uujsw.MuA!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4'
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
            setDilogbox_show(true)
            break;
        case 2:
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 3:
            setBackgroundImgurl(imagesToPeloader[2])
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 4:
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break;
        case 5:
            setBackgroundImgurl(imagesToPeloader[1])
            setDilog_content(1)
            setDilogbox_show(true)
            break;
        case 6:
            setDilog_content(2)
            setDilogbox_show(true)
            break
        case 7:
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break
        case 8:
            setDilog_content(3)
            setDilogbox_show(true)
            break;
        case 9://
            setchoosebox_show(true)
            break
        case 10://2
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break
        case 11:
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break;
        case 12:
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(4)
            setDilogbox_show(true)
            break
        case 13:
            setchoosebox_content(1)
            setchoosebox_show(true)
            break
        case 14://4
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_content(7)
            setForwordInfo_show(true)
            break
        case 15:
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(8)
            setForwordInfo_show(true)
            break
        case 16:
            setCertain_show(true)
            break
        case 17:
            endChapter()
            break
        case 18://5
            setForwordInfo_content(9)
            setForwordInfo_show(true)
            break
        case 19:
            setGapInfoShow(true)
            break
        case 20:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break
        case 21:
            endChapter()
            break
        case 22://3
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(5)
            setDilogbox_show(true)
            break
        case 23:
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(10)
            setForwordInfo_show(true)
            break
        case 24:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break
        case 25:
            endChapter()
            break;
        default:
            break;
    }
};



const Chapter10Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={10}
            />
        </GlobalProvider>
    );
};

export default Chapter10Index;
