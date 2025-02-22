import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";
import { accessSync } from "fs";


const imagesToPeloader: string[] = [
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEKx2bnbzmxtSiHbmGwHygpium3i9.aNPZNnh.lx6K5DZytK0UqsjEpi2WGoDfWuvrdPb18ty3Gx0MX*E3MToeOQ!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEKx2bnbzmxtSiHbmGwHygphdtkFOTWgmw*ukeNO1TElt.mKz6dtYnNeQDhaN.9NfY3IDoeibld0RkbWB8.5V5YU!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',//background
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEKx2bnbzmxtSiHbmGwHygpjZp5BcYwxsluoONUCMO3kjlxtETL17zJ7d9vZf6qnG452M7LMzruxTtibT*7KPcrs!/b&bo=gAc4BAAAAAADF4k!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGegN*Yglu97vWofmiPu1rEqgxsaftJyPdYGYjQz4JZPfcCQ9GLtefF12suqZVHVfPmH9pMnmFF2E2.FLDmgRks!/b&bo=gAc4BAAAAAADN6k!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGegN*Yglu97vWofmiPu1rEBroYWdmQ6Q4n4qU3LtsYbEUTjI8OQpDkik*995gdkXkuRK6Qfd156K0MF3YK.6ik!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEENBffElRTUm2uWHROC6zc98fg1A.iyF1QCU.4IEtYxjHlEAJDLI8h9O66TFbZtepf1wH*gVgs9Kys9SUXZt0yc!/b&bo=rQQ4BAAAAAADB7c!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGnntQgNgQFrtMk5ySORO58Y4z7HDiMH2WXXsmvFnwttQFsB3jyNOFwgGsVV3d5Z1K3Sk9xQNFs.jyZugVcWr4M!/b&bo=OARkBAAAAAADB34!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELEslxGGc08Bo3HJD3vooGwVaNRrBGqDPJ24OTCKwJlxNeQfUEN97EaQNeF39FexEY0ajFXo2SMg9PjNA2Ow92Y!/b&bo=OARyBQAAAAADF3k!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELEslxGGc08Bo3HJD3vooGyteDvbXCAzj3TC1MBlcEZxvjHWpebihctRsEs8eUneM90zgrrV*1suiso7g3ecdZs!/b&bo=OAQxBQAAAAADJwo!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELEslxGGc08Bo3HJD3vooGzvNzWg6MfCxK6smcTOjdm5NfVOd3ikZBS3T*Qs.zaWwHG.b63usrz8t4Ir4Jzo1rE!/b&bo=OARXBAAAAAADJ20!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELEslxGGc08Bo3HJD3vooGxO5hUIPlJ*saw5u5FgrKc7OGa5PNxtbnagvHXmvfswhWNYGsTBX4Cc2T5X21veeDM!/b&bo=GAVgAwAAAAABF04!&rf=viewer_4',//
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5gMT4CnPTt4Fl.dCdpVzm.qp24DA9hDKloD.uDL67JbhLeX0QvLwGEMYXWc1WExJrk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEOX25Nd6o41m*MWgysHe*5gMT4CnPTt4Fl.dCdpVzm.qp24DA9hDKloD.uDL67JbhLeX0QvLwGEMYXWc1WExJrk!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4'//sad
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
        case 0://
            setCertain_show(true)
            break;
        case 1:
            setCertain_index(1)
            break;
        case 2:
            setCertain_show(false)
            setDilogbox_show(true)
            break
        case 3:
            setBackgroundImgurl(imagesToPeloader[1])
            setDilog_content(1)
            setDilogbox_show(true)
            break
        case 4:
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(2)
            setDilogbox_show(true)
            break
        case 5:
            setchoosebox_show(true)
            break
        case 6://2
            setGapInfoShow(true)
            break
        case 7:
            setchoosebox_content(1)
            setchoosebox_show(true)
            break
        case 8://3
            setBackgroundImgurl(imagesToPeloader[2])
            setDilog_content(3)
            setDilogbox_show(true)
            break
        case 9:
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(4)
            setDilogbox_show(true)
            break
        case 10:
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 11://4
            setGapInfo_content(1)
            setGapInfoShow(true)
            break
        case 12:
            setGapInfo_content(2)
            setGapInfoShow(true)
            break
        case 13:
            updateMoney(money-50)
            updateMoral(moral-50)
            setAttribute_content([{type:'moral',content:'-50'},{type:'money',content:'-50'}])
            setAttributeShow(true)
            break
        case 14:
            endChapter()
            break
        case 15://5
            setCertain_index(2)
            setCertain_show(true)
            break
        case 16:
            setCertain_show(false)
            setDilog_content(5)
            setDilogbox_show(true)
            break
        case 17:
            updateMoney(money-100)
            updateMoral(moral-100)
            setAttribute_content([{type:'moral',content:'-100'},{type:'money',content:'-100'}])
            setAttributeShow(true)
            break
        case 18:
            endChapter()
            break
        case 19://6
            setBackgroundImgurl(imagesToPeloader[2])
            setDilog_content(6)
            setDilogbox_show(true)
            break
        case 20:
            setBackgroundImgurl(imagesToPeloader[0])
            setDilog_content(7)
            setDilogbox_show(true)
            break
        case 21:
            setDilog_content(8)
            setDilogbox_show(true)
            setCertain_index(3)
            setCertain_show(true)
            break;
        case 22:
            setCertain_show(false)
            setDilogbox_show(false)
            setchoosebox_content(3)
            setchoosebox_show(true)
            break;
        case 23://7
            setGapInfo_content(3)
            setGapInfoShow(true)
            break
        case 24:
            updateMoney(money+500)
            updateMoral(moral+100)
            setAttribute_content([{type:'moral',content:'+100'},{type:'money',content:'+500'}])
            setAttributeShow(true)
            break
        case 25:
            endChapter()
            break;
        case 26://8
            setGapInfo_content(4)
            setGapInfoShow(true)
            break
        case 27:
            updateMoral(moral+50)
            setAttribute_content([{type:'moral',content:'+50'}])
            setAttributeShow(true)
            break
        case 28:
            endChapter()
            break;
        default:
            break;
    }
};



const Chapter5Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={5}
            />
        </GlobalProvider>
    );
};

export default Chapter5Index;
