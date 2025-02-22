import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENYnkYmWVXtw7wzyVxCuTcjBYWFqEuUSpkTX5WhohcNF1r1RQLsnO33AL7pJd.6bwAJr.LwU8rtyAsvQkf4QxfY!/b&bo=XQc4BAAAAAADh8Q!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENYnkYmWVXtw7wzyVxCuTchMYJ2Bz8UpdczHhsxGEy3Qeb8b.QK8E1txtrjnD5.AXKCzmndYYJpC9nGDrfNWMxA!/b&bo=UAc4BAAAAAADh8k!&rf=viewer_4', 
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENYnkYmWVXtw7wzyVxCuTcgHeRoFxey*9XDGpxi6cAlWE7evXC49RQAOEun6PqJDKCXlsdfoPAKEGY29G8QyiKs!/b&bo=Swc4BAAAAAADZzI!&rf=viewer_4',//background
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
            setchoosebox_show(true)
            break;
        case 2:
            setBackgroundImgurl(imagesToPeloader[2])
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 3://3
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 4:
            setchoosebox_content(1)
            setchoosebox_show(true)
            break;
        case 5://6
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break;
        case 6://8  
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break
        case 7://10
            setBackgroundImgurl(imagesToPeloader[0])
            setGapInfoShow(true)
            break
        case 8:
            setGapInfo_content(1)
            setGapInfoShow(true)
            break;
        case 9:
            setGapInfo_content(2)
            setGapInfoShow(true)
            break
        case 10:
            endChapter()
            break
        case 11://4
            setBackgroundImgurl(imagesToPeloader[2])
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break;
        case 12:
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 13://7
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break
        case 14://9
            setForwordInfo_content(7)
            setForwordInfo_show(true)
            break
        case 15:
            setProgress(7)
            break
        case 16://5
            setForwordInfo_content(8)
            setForwordInfo_show(true)
            break
        case 17:
            setProgress(13)
            break
        default:
            break;
    }
};



const Chapter14Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={14}
            />
        </GlobalProvider>
    );
};

export default Chapter14Index;
