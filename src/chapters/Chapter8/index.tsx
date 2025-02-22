import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEG2NkjONynNDM5Ug2rt5o4JEhHKT7czd.ktNsERwhP6LcV.TsHghy4OeGaTLAENBycxKZ614omLgByj7bM8Yj4o!/b&bo=5QiwBNwLQAYDB.o!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ.xGWM64*PVnQyczJJM8zsUmSoO5HG12Fc*JiEeTPD4iPRtGxCAvsBg5he2pgPGlHQ!/b&bo=WgiwBCILQAYDZ8s!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS*QnL20iEhB0eIXYb1S1iW0OSeT0ymaLEZ8Tl7uWg9314rRNPudQi.YS5Uujsw.MuA!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS8f70lXLvR.FYqrZQFiLqC9Uo0lHMe2MErtKbQQReUJfdFUP.eeyDrnErns2Eohf6E!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5gMT4CnPTt4Fl.dCdpVzm.qp24DA9hDKloD.uDL67JbhLeX0QvLwGEMYXWc1WExJrk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5jAdxgSewdjB3R7mS1DkbbCFwtelhzv*nA8pNvan3ofpbNjP.8OpYWqjHDsVyqNKEk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4'
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
        case 2://2
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 3:
            setDilogbox_show(true)
            break;
        case 4:
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(1)
            setDilogbox_show(true)
            break;
        case 5:
            setchoosebox_content(1)
            setchoosebox_show(true)
            break;
        case 6://4
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break
        case 7:
            setProgress(19)
            break
        case 8://5
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break;
        case 9:
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 10://7
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break
        case 11:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 12:
            setProgress(19)
            break
        case 13://8
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break
        case 14:
            setProgress(19)
            break
        case 15://3
            setBackgroundImgurl(imagesToPeloader[2])
            setDilog_content(2)
            setDilogbox_show(true)
            break
        case 16:
            setchoosebox_content(3)
            setchoosebox_show(true)
            break
        case 17://6
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break
        case 18:
            setProgress(19)
            break
        case 19://gapinfo
            setGapInfoShow(true)
            break
        case 20:
            setCertain_show(true)
            break
        case 21:
            setCertain_index(1)
            break
        case 22:
            setCertain_index(2)
            break
        case 23:
            setCertain_show(false)
            endChapter()
            break 
            break
        default:
            break;
    }
};



const Chapter8Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={8}
            />
        </GlobalProvider>
    );
};

export default Chapter8Index;
