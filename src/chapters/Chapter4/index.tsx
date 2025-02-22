import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import {GlobalProvider} from "@/context/GlobalContext";


const imagesToPeloader: string[] = [
  'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5u6U4ntjPsmBuxp4Rw6jqPOD6n*F3zsfM3crmGl2Uv221IAZVR6wVv41HTAfV6MZZR6.uPRSUy2nAExbMp6Filk!/b&bo=Jwk4BAAAAAABBzI!&rf=viewer_4'
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
        setProgress,
        endPart,
        endChapter,
    } = setStateFunctions;

    switch (progress) {
        case 0://
            setForwordInfo_show(true)
            break;
        case 1://选择提示-----------f1
            setchoosebox_show(true)
            break;
        case 2:
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 3://选择提示-----------f2
            setchoosebox_content(1)
            setchoosebox_show(true)
            break;
        case 4://1.1 or 1.2
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 5://选择提示-----------f3
            setchoosebox_content(2)
            setchoosebox_show(true)
            break;
        case 6://1.1.1 or 1.1.2
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break;
        case 7://选择提示-----------f4
            setchoosebox_content(3)
            setchoosebox_show(true)
            break;
        case 8://1.1.1.1
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break;
        case 9://选择提示-----------f5
            setchoosebox_content(4)
            setchoosebox_show(true)
            break;
        case 10://1.1.1.1.1
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break;
        case 11:
            setGapInfoShow(true);
            break;
        case 12:
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break;
        case 13://选择提示-----------f6
            setchoosebox_content(5)
            setchoosebox_show(true)
            break;
        case 14://1.1.1.1.1.1
            setForwordInfo_content(7)
            setForwordInfo_show(true)
            break;
        case 15:
            setGapInfo_content(1)
            setGapInfoShow(true);
            break;
        case 16:
            updateMoral(moral+5)
            setAttribute_content([{type:'moral',content:'+5'}])
            setAttributeShow(true)
            break;
        case 17:
            endChapter()
            break;
        case 18://1.1.1.1.1.2
            setGapInfo_content(2)
            setGapInfoShow(true);
            break;
        case 19:
            updateMoral(moral+5)
            setAttribute_content([{type:'moral',content:'+5'}])
            setAttributeShow(true)
            break;
        case 20:
            endChapter()
            break;
        case 21://1.1.1.1.2
            setGapInfo_content(3)
            setGapInfoShow(true);
            break;
        case 22:
            updateMoral(moral+10)
            setAttribute_content([{type:'moral',content:'+10'}])
            setAttributeShow(true)
            break;
        case 23:
            endChapter()
            break;
        case 24://1.1.1.2
            setForwordInfo_content(8)
            setForwordInfo_show(true)
            break;
        case 25://选择提示-----------
            setchoosebox_content(6)
            setchoosebox_show(true)
            break;
        case 26://1.1.1.2.1
            setGapInfo_content(4)
            setGapInfoShow(true);
            break;
        case 27:
            updateMoney(money+100)
            updateMoral(moral+10)
            setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'+100'}])
            setAttributeShow(true)
            break;
        case 28:
            endChapter()
            break;
        case 29://1.1.1.2.2
            setGapInfo_content(5)
            setGapInfoShow(true);
            break;
        case 30:
            updateMoral(moral+10)
            setAttribute_content([{type:'moral',content:'+10'}])
            setAttributeShow(true)
            break;
        case 31:
            endChapter()
            break;
        default:
            break;
    }
};



const Chapter4Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={4}
            />
        </GlobalProvider>
    );
};

export default Chapter4Index;
