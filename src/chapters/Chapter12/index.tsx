import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJpH*QDiMKR1MI8Fm0dukXVJh11dwZZS4160t9Ac.9f131TOhtf*duMBi*FZ9IcLMHd6Z1jM6dmVubP8pqYTgAQ!/b&bo=kgc4BAAAAAADB4s!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPI6PMj2mlm89I.uh5.aWRDwAyPbV3LYZ.t*QhJVKprU4Sb2b0WcFBvCKfH4*TBcxEAI*pG9zdRzBXNrLi29kRs!/b&bo=oQc4BAAAAAADZ9g!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPI6PMj2mlm89I.uh5.aWRBL21rTgvFg1OmwAzeIB1QggfnnAYTd1ezxlgplhamyHWAEh7yuTA.c77cOLzP0jIQ!/b&bo=UAc4BAAAAAADdzk!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEIm6LSeP8UYdbeKTlj40ffng8Q4we*hjx5t2tkqVxLWFaleGNq9cU.vrO6uvEigLBXCeiu*S3cqMqiZld3EEFSw!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENYnkYmWVXtw7wzyVxCuTchVHrDndfw.wN8W2TAdGCgjYqLrPEH0eI1.WfpAnGegNQL00YUUlW4ZSKPMY75hpq8!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',//factoryer
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxtbFhw*7jgET4LSrW9zmpnQf1oVkC96lVApLeoUv6Gjxy6FbMWsAWOecfL1J.UAP8!/b&bo=OATFBQAAAAADF84!&rf=viewer_4',//fuzheren
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
            setDilogbox_show(true)
            break;
        case 4:
            setchoosebox_content(0)
            setchoosebox_show(true)
            break;
        case 5://3
            setDilog_content(1)
            setDilogbox_show(true)
            break;
        case 6:
            setCertain_show(true)
            break
        case 7:
            setCertain_show(false)
            setProgress(8)
            break
        case 8:
            setchoosebox_content(1)
            setchoosebox_show(true)
            break;
        case 9:
            endChapter()
            break
        case 10:
            setProgress(4)
            break
        case 11://4
            setDilog_content(2)
            setDilogbox_show(true)
            break;
        case 12:
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break
        case 13:
            setBackgroundImgurl(imagesToPeloader[3])
            setDilog_content(3)
            setDilogbox_show(true)
            break
        case 14:
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 15:
            setDilog_content(4)
            setDilogbox_show(true)
            break
        case 16:
            setCertain_show(true)
            break
        case 17:
            setCertain_show(false)
            setchoosebox_content(3)
            setchoosebox_show(true)
            break
        case 18:
            endChapter()
            break
        case 19:
            setProgress(14)
            break
        case 20://6
            setDilog_content(5)
            setDilogbox_show(true)
            break
        case 21:
            setchoosebox_content(4)
            setchoosebox_show(true)
            break
        case 22://7
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break
        case 23:
            setGapInfoShow(true)
            break
        case 24:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 25:
            endChapter()
            break
        case 26://8
            setDilog_content(6)
            setDilogbox_show(true)
            break
        case 27:
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break
        case 28:
            setBackgroundImgurl(imagesToPeloader[4])
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break    
        case 29:
            setForwordInfo_content(7)
            setForwordInfo_show(true)
            break
        case 30:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 31:
            endChapter()
        default:
            break;

    }
};



const Chapter12Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={12}
            />
        </GlobalProvider>
    );
};

export default Chapter12Index;
