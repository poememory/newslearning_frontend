import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJUMoRospvmgCRiQWxTkkBPC1TXxXdAdhH6iMrxZdMcO7cjNJ9QSkVu*wkLJTpZPyQQ!/b&bo=aAcsBAAAAAADN1U!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',//teacher
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEG2NkjONynNDM5Ug2rt5o4I.E4d.YGzxIkpMhgedFo4JJMncJ0.0Z4aSjg40X9RCbEYnc8Csd3gQJLsb6m7EX6g!/b&bo=XQc4BAAAAAADh8Q!&rf=viewer_4',//cloud
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGnntQgNgQFrtMk5ySORO58Y4z7HDiMH2WXXsmvFnwttQFsB3jyNOFwgGsVV3d5Z1K3Sk9xQNFs.jyZugVcWr4M!/b&bo=OARkBAAAAAADF24!&rf=viewer_4',//leader
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
            setDilogbox_show(true)
            break;
        case 1:
            setCertain_show(true)
            break;
        case 2:
            setCertain_show(false)
            setDilog_content(1)
            setDilogbox_show(true)
            break;
        case 3:
            setCertain_show(true)
            break;
        case 4:
            setCertain_show(false)
            setDilog_content(2)
            setDilogbox_show(true)
            break;
        case 5:
            setCertain_index(1)
            setCertain_show(true)
            break;
        case 6:
            setCertain_show(false)
            setDilog_content(3)
            setDilogbox_show(true)
            break
        case 7:
            setCertain_index(2)
            setCertain_show(true)
            break
        case 8:
            setCertain_show(false)
            setDilog_content(4)
            setDilogbox_show(true)
            break;
        case 9:
            setCertain_index(3)
            setCertain_show(true)
            break
        case 10:
            setCertain_show(false)
            setDilog_content(5)
            setDilogbox_show(true)
            break
        case 11:
            setCertain_index(4)
            setCertain_show(true)
            break;
        case 12:
            setCertain_show(false)
            setDilog_content(6)
            setDilogbox_show(true)
            break
        case 13:
            setCertain_index(5)
            setCertain_show(true)
            break
        case 14:
            setCertain_show(false)
            setDilog_content(7)
            setDilogbox_show(true)
            break
        case 15:
            setchoosebox_show(true)
            break
        case 16:
            setDilog_content(8)
            setDilogbox_show(true)
            break
        case 17:
            setProgress(21)
            break
        case 18:
            setDilog_content(9)
            setDilogbox_show(true)
            break
        case 19:
            updateProud(()=>{
                        let newarr=proud
                        proud[2]=true
                        return newarr
                    })
            Taro.showModal({
                        title: '提示',
                        content: '恭喜解锁成就“火眼金睛”！',
                        success: function (res) {
                            if (res.confirm) {
                                setProgress(pre=>{return pre+1})
                            } else if (res.cancel) {
                                setProgress(pre=>{return pre+1}) 
                            }
                        },
                    });
            break
        case 20:
            setForwordInfo_show(true)
            break
        case 21://1
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break
        case 22:
            setchoosebox_content(1)
            setchoosebox_show(true)
            break
        case 23:
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break
        case 24:
            setProgress(21)
            break
        case 25:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 26://2
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break
        case 27:
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 28:
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break
        case 29:
            setProgress(26)
            break
        case 30:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 31://3
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break
        case 32:
            setchoosebox_content(3)
            setchoosebox_show(true)
            break
        case 33:
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break
        case 34:
            setProgress(31)
            break
        case 35:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 36://4
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break
        case 37:
            setchoosebox_content(4)
            setchoosebox_show(true)
            break
        case 38:
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break
        case 39:
            setProgress(36)
            break
        case 40:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 41://5
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break
        case 42:
            setchoosebox_content(5)
            setchoosebox_show(true)
            break
        case 43:
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break
        case 44:
            setProgress(41)
            break
        case 45:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break;
        case 46:
            setForwordInfo_content(7)
            setForwordInfo_show(true)
            break
        case 47:
            endChapter()
        default:
            break;
    }
};



const Chapter9Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={9}
            />
        </GlobalProvider>
    );
};

export default Chapter9Index;
