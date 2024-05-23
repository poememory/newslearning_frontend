import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5qP5HFQ4wofA*e6QI5x*Prw5zHNIKvMre1hPKc.tfPfswzpTa1syIZQDSIeL5piSFjuVFSkmeY3GlcJStEK.9Yk!/b&bo=Jwk4BAAAAAABBzI!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5qP5HFQ4wofA*e6QI5x*Pryt5yH5cGDqxorjL4artRYY5J1*y*20YzdNQQwI6ZTXVQpY07*yQ6bKC5F3kX6.N38!/b&bo=Jwk4BAAAAAABFyI!&rf=viewer_4'
]

const progressContent = (progress, setStateFunctions) => {
    const {
        setForwordInfo_show,
        setForwordInfo_content,
        setDilogbox_show,
        setchoosebox_show,
        setchoosebox_content,
        setAttributeShow,
        setAttribute_content,
        setGapInfoShow,
        setGapInfo_content,
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
        case 0://
            setForwordInfo_show(true)
            break;
        case 1://选择提示------------
            setchoosebox_show(true)
            break;
        case 2://1
            setGapInfoShow(true)
            break;
        case 3://
            endChapter()
            break;
        case 4://2
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 5://选择留与润
            setchoosebox_content(1)
            setchoosebox_show(true)
            break;
        case 6://2.1----润
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 7:
            setGapInfo_content(1)
            setGapInfoShow(true)
            break;
        case 8:
            updateMoney(money+100)
            updateMoral(moral+5)
            setAttribute_content([{type:'moral',content:'+5'},{type:'money',content:'+100'}])
            setAttributeShow(true)
            break
        case 9:
            endChapter()
            break;
        case 10://2.2----留
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break;
        case 11://选择救人和报道
            setchoosebox_content(2)
            setchoosebox_show(true)
            break;
        case 12://2.2.1-----报道
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break;
        case 13:
            setGapInfo_content(2)
            setGapInfoShow(true)
            break;
        case 14:
            updateMoney(money+500)
            updateMoral(moral+10)
            setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'+500'}])
            setAttributeShow(true)
            break;
        case 15:
            endChapter()
            break;
        case 16:
            setGapInfo_content(3)
            setGapInfoShow(true)
            break;
        case 17:
            updateMoney(money+500)
            updateMoral(moral+15)
            setAttribute_content([{type:'moral',content:'+15'},{type:'money',content:'+500'}])
            setAttributeShow(true)
            break;
        case 18:
            endChapter()
            break;
        default:
            break;
    }
};



const Chapter2Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={2}
            />
        </GlobalProvider>
    );
};

export default Chapter2Index;
