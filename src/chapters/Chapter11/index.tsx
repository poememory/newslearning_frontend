import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJ3nXTcd3RykI4V*GU1AMAFymgyuS4Cb*kSWCrLNCpfMKEI3ZbwsNYPn.mMKwWI5GF0u2UGb1pbzOrXakLRYA40!/b&bo=WAc4BAAAAAADdzE!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEIm6LSeP8UYdbeKTlj40fflTZ.IxE6t*SW*kUnxvkjur95sJGKLOEw3SE97jThXmxUl*WDFc.kmquOGvmnxf.SI!/b&bo=agc4BAAAAAADdwM!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEIm6LSeP8UYdbeKTlj40ffl4wmfHUa*geNKUk6RRg6L8qsNumWSLjge9QCVZQ7AABqod3n1RzMzxwJnAPqsFUeU!/b&bo=SQc4BAAAAAADZzA!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEIm6LSeP8UYdbeKTlj40ffng8Q4we*hjx5t2tkqVxLWFaleGNq9cU.vrO6uvEigLBXCeiu*S3cqMqiZld3EEFSw!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',//background
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
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 2:
            setBackgroundImgurl(imagesToPeloader[2])
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 3:
            setBackgroundImgurl(imagesToPeloader[4])
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break;
        case 4:
            setchoosebox_show(true)
            break;
        case 5://2
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break;
        case 6:
            setGapInfoShow(true)
            break
        case 7:
            endChapter()
            break
        case 8://3
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break;
        case 9:
            setGapInfoShow(true)
            break
        case 10:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break
        case 11:
            endChapter()
            break;
        default:
            break;
    }
};



const Chapter11Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={11}
            />
        </GlobalProvider>
    );
};

export default Chapter11Index;
