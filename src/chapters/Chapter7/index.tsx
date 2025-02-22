import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import Taro from "@tarojs/taro";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJX4LETVoQm4j268UfySSB.dNvAkjV7UMTWTvvIDDr22Om6hBc5QHMNSh6bg8*Vn**U!/b&bo=AAXQAgAAAAABB*c!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEIm6LSeP8UYdbeKTlj40ffk6CU5NBfM.SpEbafURliPGhRmT*ZK1a3EnOwX2XfdCtQmiwPJeZRa5H2AF7dDsJ8s!/b&bo=AAXQAgAF0AIBFzA!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEIm6LSeP8UYdbeKTlj40ffn35VEXR0Bz2lKmTtq0ianAP75Dfs2PaUv199Zk5Vl38T0GOIt5xAwsHdPkmGOgyE4!/b&bo=QAa8CEAGvAgDR2I!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEIm6LSeP8UYdbeKTlj40fflZu7EYelCeoNF32QzZdBZcssWt6G.iru4XGzIxk*zebqhtsPKN*9.bv6..dzns1Bo!/b&bo=GAVgAxgFYAMDZ0I!&rf=viewer_4',//
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5gMT4CnPTt4Fl.dCdpVzm.qp24DA9hDKloD.uDL67JbhLeX0QvLwGEMYXWc1WExJrk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5jAdxgSewdjB3R7mS1DkbbCFwtelhzv*nA8pNvan3ofpbNjP.8OpYWqjHDsVyqNKEk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
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
            setDilogbox_show(true)
            break
        case 2:
            setDilogbox_show(false)
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break
        case 3:
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break
        case 4:
            setCertain_show(true)
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break
        case 5:
            setCertain_show(false)
            setDilog_content(1)
            setDilogbox_show(true)
            break
        case 6://
            setchoosebox_show(true)
            break
        case 7:
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(2)
            setDilogbox_show(true)
            break
        case 8:
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'}])
            setAttributeShow(true)
            break
        case 9:
            updateProud(()=>{
                            let newarr=proud
                            proud[1]=true
                            return newarr
                        })
             Taro.showModal({
                            title: '提示',
                            content: '恭喜解锁成就“迫于生计”！',
                            success: function (res) {
                                if (res.confirm) {
                                    setProgress(pre=>{return pre+1})
                                } else if (res.cancel) {
                                    setProgress(pre=>{return pre+1}) 
                                }
                            },
                        });
            break
        case 10:
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(3)
            setDilogbox_show(true)
            break
        case 11:
            setchoosebox_content(1)
            setchoosebox_show(true)
            break
        case 12:
            setCertain_index(1)
            setCertain_show(true)
            setDilog_content(4)
            setDilogbox_show(true)
            break
        case 13:
            setCertain_show(false)
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 14:
            setGapInfo_content(0)
            setGapInfoShow(true)
            break
        case 15:
            updateMoral(moral-50)
            updateMoney(money-200)
            setAttribute_content([{type:'moral',content:'-50'},{type:'money',content:'-200'}])
            setAttributeShow(true)
            break
        case 16:
            endChapter()
            break
        case 17://
            setGapInfo_content(1)
            setGapInfoShow(true)
            break
        case 18:
            updateMoral(moral-100)
            updateMoney(money-400)
            setAttribute_content([{type:'moral',content:'-100'},{type:'money',content:'-400'}])
            setAttributeShow(true)
            break
        case 19:
            endChapter()
            break
       default:
            break;
    }
};



const Chapter7Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={7}
            />
        </GlobalProvider>
    );
};

export default Chapter7Index;
