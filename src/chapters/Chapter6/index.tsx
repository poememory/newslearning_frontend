import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJX4LETVoQm4j268UfySSB.dNvAkjV7UMTWTvvIDDr22Om6hBc5QHMNSh6bg8*Vn**U!/b&bo=AAXQAgAAAAABB*c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJXAdQdvATUxBvTnR82WlDTvR.mtTxHnC3yYCYFg1oSSfZKXcu.CPOx9fH5kne5uScw!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJWT2vINc49c2W2n*ZWvcliXbIUPpCOHUETkQKTYS9.*ghFia3KK0D1**WLbS7DVhzM!/b&bo=QBU4BAAAAAADN3s!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJVckm7iV3SHluV66kCmwtZf3PBkO1TGp9ydcA8Z1bxHKkgf2daMCXlgo0tvod3lF5w!/b&bo=OAQyBQAAAAADFzk!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEAbR9pGM5a0duaa.nqPZ64k3qHHFl73bC7E5uyqogDPIQVPthvDOFL2uzNlj4lmZ6sI8*NGf9xn91BC9uR1l9qg!/b&bo=7gQ4BAAAAAADF.Q!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEAbR9pGM5a0duaa.nqPZ64nE2hZRi9phRHiwoCDhv5akZe8lae08Uaq6Spf8Xm1YBssNp94cvFhc3ZdLJ9UsduE!/b&bo=OAQtBQAAAAADFyY!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENxFgTl0Uv3cewinyR2EVEZSy6V1FpVMtGTFNErUxL.vmKCBnIsRXAN6kUqTq9pxk.b6JbRqcv.OVoJDVt4gbpQ!/b&bo=9AS5AgAAAAADB2k!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEAbR9pGM5a0duaa.nqPZ64nvNjb8HzAOPbgwaRlYbsBEWUxuUFE.lUog5pjmXfgCbRffmPTV0ZCxq*s3STH5gcU!/b&bo=5Aw4BAAAAAADN8Y!&rf=viewer_4',//
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5gMT4CnPTt4Fl.dCdpVzm.qp24DA9hDKloD.uDL67JbhLeX0QvLwGEMYXWc1WExJrk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5jAdxgSewdjB3R7mS1DkbbCFwtelhzv*nA8pNvan3ofpbNjP.8OpYWqjHDsVyqNKEk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',//
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS*QnL20iEhB0eIXYb1S1iW0OSeT0ymaLEZ8Tl7uWg9314rRNPudQi.YS5Uujsw.MuA!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS8f70lXLvR.FYqrZQFiLqC9Uo0lHMe2MErtKbQQReUJfdFUP.eeyDrnErns2Eohf6E!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
]

const progressContent = (progress, setStateFunctions) => {
    const {
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
        setAI_show,
        setCertain_show,
        setCertain_index,
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
        case 0:
            setBackgroundImgurl(imagesToPeloader[0])
            setForwordInfo_show(true)
            break
        case 1:
            setCertain_show(true)
            break
        case 2:
            setCertain_show(false)
            setDilogbox_show(true)
            break
        case 3:
            setchoosebox_show(true)
            break
        case 4://2
            setBackgroundImgurl(imagesToPeloader[1])
            setDilog_content(1)
            setDilogbox_show(true)
            break
        case 5:
            setCertain_index(1)
            setCertain_show(true)
            setDilog_content(2)
            setDilogbox_show(true)
            break
        case 6:
            setCertain_show(false)
            setchoosebox_content(1)
            setchoosebox_show(true)
            break
        case 7://3
            setDilog_content(3)
            setDilogbox_show(true)
            break
        case 8:
            setCertain_index(2)
            setCertain_show(true)
            break
        case 9:
            setCertain_show(false)
            setGapInfoShow(true)
            break
        case 10:
            setDilog_content(4)
            setDilogbox_show(true)
            break
        case 11:
            setCertain_index(3)
            setCertain_show(true)
            break
        case 12:
            setCertain_show(false)
            setDilog_content(5)
            setDilogbox_show(true)
            break
        case 13:
            setCertain_index(4)
            setCertain_show(true)
            break
        case 14:
            setBackgroundImgurl(imagesToPeloader[0])
            setCertain_show(false)
            setGapInfo_content(1)
            setGapInfoShow(true)
            break
        case 15:
            updateMoney(money+200)
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'},{type:'money',content:'+200'}])
            setAttributeShow(true)
            break
        case 16:
            endChapter()
            break
        case 17://4
            setGapInfo_content(2)
            setGapInfoShow(true)
            break
        case 18:
            setCertain_index(5)
            setCertain_show(true)
            break
        case 19:
            setCertain_show(false)
            setGapInfo_content(3)
            setGapInfoShow(true)
            break
        case 20:
            updateMoney(money-200)
            updateMoral(moral-100)
            setAttribute_content([{type:'moral',content:'-100'},{type:'money',content:'-200'}])
            setAttributeShow(true)
            break
        case 21:
            endChapter()
            break
        case 22://5
            setDilog_content(6)
            setDilogbox_show(true)
            break
        case 23:
            setCertain_index(6)
            setCertain_show(true)
            break
        case 24:
            setCertain_show(false)
            setDilog_content(7)
            setDilogbox_show(true)
            break
        case 25:
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 26://6
            setDilog_content(8)
            setDilogbox_show(true)
            break
        case 27:
            setCertain_index(7)
            setCertain_show(true)
            break
        case 28:
            setCertain_show(false)
            setGapInfo_content(4)
            setGapInfoShow(true)
            break
        case 29:
            updateMoney(money-100)
            updateMoral(moral-50)
            setAttribute_content([{type:'moral',content:'-50'},{type:'money',content:'-100'}])
            setAttributeShow(true)
            break
        case 30:
            endChapter()
            break
        case 31://7
            setDilog_content(9)
            setDilogbox_show(true)
            break
        case 32:
            setGapInfo_content(5)
            setGapInfoShow(true)
            break
        case 33:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break
        case 34:
            endChapter()
            break
        default:
            break;
    }
};



const Chapter6Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={6}
            />
        </GlobalProvider>
    );
};

export default Chapter6Index;
