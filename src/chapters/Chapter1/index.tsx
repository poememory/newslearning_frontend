import ChapterComponent from "@/components/ChapterComponent";
import { getContent } from './content';
import Taro from "@tarojs/taro";
import {GlobalProvider} from "@/context/GlobalContext";


const imagesToPeloader: string[] = [
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5iaKxJz0gOgiwGBvRarM3sX*plTfonGmrJCP3yNyLLERf7C6ZmcExAq4txPsf2ivu8VrT4nkvVp1PJnW9BbOLwg!/b&bo=Jwk4BAAAAAABBzI!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5iaKxJz0gOgiwGBvRarM3sWF.WDDi.WF4riwI.VZq9rHMyCUw8uU.vvVwhgmlkrLu6jxdfnj0*E*2XCDZtvX*YU!/b&bo=Jwk4BAAAAAABFyI!&rf=viewer_4',
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5iaKxJz0gOgiwGBvRarM3sXJLl.E1E9Vw9Dlai.MFks1DeVgTh*x9mj3U7pTeNWNYI66kO6JtsYTuyNpvpaUmP8!/b&bo=Jwk4BAAAAAABFyI!&rf=viewer_4',//background
    'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5qP5HFQ4wofA*e6QI5x*Prw5zHNIKvMre1hPKc.tfPfswzpTa1syIZQDSIeL5piSFjuVFSkmeY3GlcJStEK.9Yk!/b&bo=Jwk4BAAAAAABJxI!&rf=viewer_4'
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
        case 1://前期-----------------------------------------------------------------------------------------------
            setForwordInfo_content(1)
            setForwordInfo_show(true)
            break;
        case 2://对话
            setDilogbox_show(true)
            break;
        case 3://选择提示
            setForwordInfo_content(2)
            setForwordInfo_show(true)
            break;
        case 4://选择
            setchoosebox_show(true)
            break;
        case 5://选择找孩子------------1
            setGapInfoShow(true)
            break;
        case 6:
            updateMoral(moral+10)
            updateMoney(money-100)
            setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'-100'}])
            setAttributeShow(true)
            break
        case 7:
            endPart(14,1)
            break
        case 8://选择陪伴------------2
            setGapInfo_content(1)
            setGapInfoShow(true)
            break;
        case 9:
            updateMoney(money-100)
            updateMoral(moral+10)
            setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'-100'}])
            setAttributeShow(true)
            break
        case 10:
            endPart(14,1)
            break
        case 11://选择离开------------3
            setGapInfo_content(2)
            setGapInfoShow(true)
            break;
        case 12:
            updateMoral(moral+5)
            updateMoney(money+100)
            setAttribute_content([{type:'moral',content:'+5'},{type:'money',content:'+100'}])
            setAttributeShow(true)
            break
        case 13:
            endPart(14,1)
            break
        case 14://中期----------------------------------------------------------------------------------------------
            setBackgroundImgurl(imagesToPeloader[1])
            setForwordInfo_content(3)
            setForwordInfo_show(true)
            break
        case 15://选择
            setchoosebox_content(1)
            setchoosebox_show(true)
            break
        case 16://跟随------1
            setForwordInfo_content(4)
            setForwordInfo_show(true)
            break
        case 17://选择(无关)
            setchoosebox_content(2)
            setchoosebox_show(true)
            break
        case 18:
            setAI_show(true)
            break
        case 19:
            setForwordInfo_content(5)
            setForwordInfo_show(true)
            break
        case 20://选择------
            setchoosebox_content(3)
            setchoosebox_show(true)
            break
        case 21://选择-------1.1
            setGapInfo_content(3)
            setGapInfoShow(true)
            break
        case 22:
            updateMoney(money+100)
            setAttribute_content([{type:'money',content:'+100'}])
            setAttributeShow(true)
            break
        case 23:
            endPart(28,14)
            break
        case 24://选择-------------------------2
            setGapInfo_content(4)
            setGapInfoShow(true)
            break
        case 25:
            endPart(28,14)
            break
        case 26://停留------2
            setGapInfo_content(5)
            setGapInfoShow(true)
            break
        case 27:
            endPart(28,14)
            break
        case 28://后期------------------------------------------------------------------------------------------------
            setBackgroundImgurl(imagesToPeloader[2])
            setForwordInfo_content(6)
            setForwordInfo_show(true)
            break
        case 29://选择
            setchoosebox_content(4)
            setchoosebox_show(true)
            break
        case 30://--------------1
            setForwordInfo_content(7)
            setForwordInfo_show(true)
            break
        case 31://选择
            setchoosebox_content(5)
            setchoosebox_show(true)
            break
        case 32://1.1
            setGapInfo_content(6)
            setGapInfoShow(true)
            break
        case 33:
            updateMoney(money+100)
            updateMoral(moral-10)
            setAttribute_content([{type:'moral',content:'-10'},{type:'money',content:'+100'}])
            setAttributeShow(true)
            break
        case 34:
            endChapter()
            break
        case 35://1.2
            setGapInfo_content(7)
            setGapInfoShow(true)
            break
        case 36:
            updateMoney(money+100)
            updateMoral(moral+5)
            setAttribute_content([{type:'moral',content:'+5'},{type:'money',content:'+100'}])
            setAttributeShow(true)
            break
        case 37:
            endChapter()
            break
        case 38:
            setGapInfo_content(7)
            setGapInfoShow(true)
            break
        case 39:
            updateMoney(money+100)
            updateMoral(moral+10)
            setAttribute_content([{type:'moral',content:'+10'},{type:'money',content:'+100'}])
            setAttributeShow(true)
            break
        case 40:
            endChapter()
            break
        case 41:
            setGapInfo_content(7)
            setGapInfoShow(true)
            break
        case 42:
            updateMoral(moral+5)
            setAttribute_content([{type:'moral',content:'+5'}])
            setAttributeShow(true)
            break
        case 43:
            endChapter()
            break
        case 44:
            setBackgroundImgurl(imagesToPeloader[3])
            setForwordInfo_content(8)
            setForwordInfo_show(true)
            break
        case 45:
            updateMoney(money+100)
            setAttribute_content([{type:'money',content:'+100'}])
            setAttributeShow(true)
            break
        case 46:
            updateProud(()=>{
                let newarr=proud
                proud[0]=true
                return newarr
            })
            Taro.showModal({
                title: '提示',
                content: '恭喜解锁成就“最美记者”！',
                success: function (res) {
                    if (res.confirm) {
                        endChapter()
                    } else if (res.cancel) {
                        endChapter()
                    }
                },
            });
        default:
            break;
    }
};



const Chapter1Index = () => {
    const content = getContent();
    return (
        <GlobalProvider>
            <ChapterComponent
                progressContent={progressContent}
                content={content}
                imagesToPreloader={imagesToPeloader}
                chapterIndex={1}
            />
        </GlobalProvider>
    );
};

export default Chapter1Index;
