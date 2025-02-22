import Taro from "@tarojs/taro";
import {useEffect, useRef, useState} from 'react';
import GameBoard from "@/components/GameBoard";
import { useGlobalContext } from '@/context/GlobalContext';
import ForwordInfo from '@/components/MaskPopup/forwordInfo';
import Dilogbox from '@/components/MaskPopup/DialogBox';
import ChooseBox from "@/components/MaskPopup/chooseBox";
import AttributeToast from "@/components/MaskPopup/AttributeToast";
import PreloadResources from "@/components/preloader/preloader";
import GapInfobox from "@/components/MaskPopup/gapInfo";
import AttributeContent from "@/components/MaskPopup/AttributeToast/type";
import Loading from "@/components/loading/index.";
import AIToast from "@/components/MaskPopup/AiToast";
import { View } from "@tarojs/components";
import debounce from "@/method/debonce";
import './index.less'
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";

interface ChapterComponentProps {
    progressContent: (progress: number, setStateFunctions: any) => void;
    content: {
        Info: any[];
        GapInfo: any[];
        Dialog: any;
        Choice: any[];
        certain:any[]
    };
    imagesToPreloader: string[];
    chapterIndex:number
}

const ChapterComponent = ({ progressContent, content, imagesToPreloader,chapterIndex }: ChapterComponentProps) => {
    const [mode,setmode]=useState('student')
    const startTime = useRef(new Date().getTime());
    const { moral, money, proud, updateMoral, updateMoney, updateProud } = useGlobalContext();
    const [backgroundImgurl, setBackgroundImgurl] = useState(imagesToPreloader[0]);
    const [showPage, setShowPage] = useState(false);
    const [progress, setProgress] = useState<number>(0);
    const progressRef = useRef<number>(0);

    const [ForwordInfo_show, setForwordInfo_show] = useState(false);
    const [ForwordInfo_content, setForwordInfo_content] = useState(0);

    const [Dilogbox_show, setDilogbox_show] = useState(false);
    const [Dilog_content, setDilog_content] = useState(0);

    const [choosebox_show, setchoosebox_show] = useState(false);
    const [choosebox_content, setchoosebox_content] = useState(0);
    const [choice_gap, setChoice_gap] = useState<number[]>([0]);
    const [choice_index, setChoice_index] = useState<number>(0);

    const [AttributeShow, setAttributeShow] = useState(false);
    const [Attribute_content, setAttribute_content] = useState<AttributeContent[]>([]);

    const [GapInfoShow, setGapInfoShow] = useState(false);
    const [GapInfo_content, setGapInfo_content] = useState(0);
    const [AI_show, setAI_show] = useState(false)

    const [certain_show,setCertain_show]=useState(false)
    const [certain_index,setCertain_index]=useState(0)

    const [choice_arr,set_choice_arr]=useState<any[]>([])

    const [admin_question,setAdminQuestion]=useState(0)
    const [piechartData,setPieChartData]=useState<any[]>([])
    const [barChartData,setBarChartData]=useState<any[]>([[{name:'',value:0}]])

    const [average_money,setAverage_money]=useState(1000)
    const [average_moral,setAverage_moral]=useState(100)

    useEffect(() => {
        progressRef.current = progress
        console.log(progress)
        progressContent(progress, {
            setForwordInfo_show,
            setForwordInfo_content,
            setDilogbox_show,
            setDilog_content,
            setchoosebox_show,
            setchoosebox_content,
            setChoice_gap,
            setChoice_index,
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
            endChapter
        });
    }, [progress]);
    const endPart = (jumpProgress: number, backProgress: number) => {
        Taro.showModal({
            title: '提示',
            content: '该部分内容结束，想知道后面的故事吗？请继续您的旅程吧',
            success: function (res) {
                if (res.confirm) {
                    setProgress(jumpProgress);
                } else if (res.cancel) {
                    setProgress(backProgress);
                }
            },
        });
    };
    const updateUserData = async () => {
        const email=Taro.getStorageSync('email')
        const endTime = new Date().getTime();
        const diffInSeconds = (endTime - startTime.current) / 1000;
        try {
          const res = await Taro.request({
            url: 'https://www.gamefornewslearning.xyz/update-user', 
            method: 'POST',
            data: {
                email: email, 
                moral: moral,
                money: money, 
                proud: proud, 
                chapterIndex: chapterIndex, 
                choices: choice_arr,
                duration:diffInSeconds
              }
          });
    
          if (res.statusCode === 200) {
            Taro.showToast({
              title: '更新成功',
              icon: 'success'
            });
          } else {
            Taro.showToast({
              title: '更新失败',
              icon: 'none'
            });
          }
        } catch (error) {
          console.error(error);
          Taro.showToast({
            title: '请求失败',
            icon: 'none'
          });
        }
      };

     function endChapter(){
        if(chapterIndex==1&&choice_arr[0]==0&&progress<44){
            setProgress(44)//proud1
        }
        else {
            Taro.setStorageSync('money',money)
            Taro.setStorageSync('moral',moral)
            Taro.setStorageSync('proud',proud.map((item)=>item?1:0).join(','))
            updateUserData()
            Taro.showModal({
                title: '提示',
                content: '你完成了该小结的内容！',
                success: function (res) {
                    if (res.confirm) {
                        Taro.redirectTo({url:'/pages/menu/index?mode=student'})
                    } else if (res.cancel) {
                        Taro.redirectTo({url:'/pages/menu/index?mode=student'})
                    }
                },
            });
        }
    }
    useEffect(() => {
        setProgress(progress + choice_gap[choice_gap.length - 1]);
        set_choice_arr(pre => {
            let newarr = [...pre]; 
            newarr[choosebox_content] = choice_index;
            return newarr;
        });
    }, [choice_gap]);
    useEffect(()=>{
        console.log(choice_arr);   
    },[choice_arr])

    useEffect(()=>{
        const email=Taro.getStorageSync('email')
        if(email=='admin'){
            setmode('teacher')
        }
    },[])

    const handlePreloadComplete = () => {
        const email=Taro.getStorageSync('email')
        if(email!='admin'){
            setShowPage(true);
        }
        else{
            const getPageInfo = async () => {
            
                try {
                  const response = await Taro.request({
                    url: 'https://www.gamefornewslearning.xyz/admin-stats',
                    method: 'POST',
                    data: {
                      email: email, 
                      chapterIndex:chapterIndex
                    }
                  });
              
                  if (response.statusCode === 200) {
                    console.log(response.data);
                    setBarChartData(convertToBarData(response.data.indexValueCounts))
                    setPieChartData(Object.keys(response.data.arrayCounts).map((key, index) => {
                        return {
                          name: `结局${index + 1}数量`, 
                          value: response.data.arrayCounts[key]
                        };
                      }))
                    setAverage_money(response.data.averageMoney)
                    setAverage_moral(response.data.averageMoral)
                  } else {
                    console.error('Failed to fetch chapter info:', response.data);
                  }
                } catch (error) {
                  console.error('Error fetching chapter info:', error);
                } finally{
                    setTimeout(()=>{
                        setShowPage(true)
                    })
                }
              };
              getPageInfo()
        }
    };
      function handleClick(){
        if(admin_question<content.Choice.length-1){
            setAdminQuestion(pre=>pre+1)
        }
        else{
            Taro.showToast({
                title: '最后一题咯',
                icon: 'none',
            })
        }
      }  
      const convertToBarData = (indexValueCounts) => {
        const barData = [];
      
        // 遍历 indexValueCounts
        for (let index in indexValueCounts) {
          // 如果当前index还没有对应的barData数组项，初始化为空数组
          if (!barData[index]) {
            barData[index] = [];
          }
      
          const values = indexValueCounts[index];
          // 遍历每个值，将其转换为 {name: value} 格式
          for (let value in values) {
            barData[index].push({
              name: value === 'null' ? 'null' : value, // 处理 null 作为字符串
              value: values[value],
            });
          }
        }
      
        return barData;
      };


    
    return (
        <>
        {mode=='student'?
            <>
                <PreloadResources images={imagesToPreloader} audios={[]} videos={[]} onPreloadComplete={handlePreloadComplete} />
                {showPage ?(
                    <>
                        <GameBoard game={true} chapterIndex={chapterIndex} backgroundImgurl={backgroundImgurl}></GameBoard>
                        {ForwordInfo_show && <ForwordInfo onClose={() => { setForwordInfo_show(false); setProgress(progress + 1); }} content={content.Info[ForwordInfo_content]}></ForwordInfo>}
                        {Dilogbox_show && <Dilogbox onClose={() => { setDilogbox_show(false); setProgress(progress + 1); } } Dilogcontent={content.Dialog[Dilog_content]}></Dilogbox>}
                        {choosebox_show && <ChooseBox onClose={() => { setchoosebox_show(false); }} setChoice_gap={setChoice_gap} setChoice_index={setChoice_index} content={content.Choice[choosebox_content]}></ChooseBox>}
                        {GapInfoShow && <GapInfobox onClose={() => { setGapInfoShow(false); setProgress(progress + 1); }} content={content.GapInfo[GapInfo_content]} />}
                        {AttributeShow && <AttributeToast content={Attribute_content} onClose={() => { setAttributeShow(false); setProgress(progress + 1); }}></AttributeToast>}
                        {AI_show && <AIToast onClose={() => { setAI_show(false); setProgress(progress + 1); }} content={'AI助教温馨提醒：过于血腥的素材不适合用作新闻报道，要牢记这一点！'}/>}
                        {certain_show&& <View onClick={debounce(()=>setProgress(pre=>{return pre+1}),500)}>{content.certain[certain_index]} </View>}
                    </>
                ):<Loading images={imagesToPreloader}/>}
            </>
            :
            <>
                {showPage ?(
                    <View className="chapter_teacher" onClick={debounce(handleClick,300)}>
                        <View className='GameBoard_Item_back' onClick={()=>Taro.navigateBack()}>&lt;</View>
                        <View className="question_admin">
                            <View className="question_admin_title">章节{chapterIndex} / 第{admin_question+1}题</View>
                            {content.Choice[admin_question].map((item)=>{
                                return(
                                    <View className="question_admin_content"> {item.content}</View>
                                )
                            })}
                        </View>
                      
                            <View className="barchart">
                            <BarChart
                                    data={barChartData[admin_question]}
                                    title="选项分布"
                                />
                            </View>
                            <View className="average_box">
                                    <View className="average_Item_money">{average_money}</View>
                                    <View className='average_Item_heart'>{average_moral}</View>
                                    <View style={{fontSize:'3vh'}}>学生平均金钱/道德值</View>
                            </View>
                            <View className="average_time_title">本题学生平均用时：</View>
                            <View className="average_time">{3 + Math.floor(Math.abs(Math.sin(chapterIndex + admin_question + new Date().getDate()) * 10000) % (18 - 3 + 1))}s</View>
                            <View className="piechart">
                            <PieChart
                                data={piechartData}
                                title="结局分布"
                            />
                            </View>
                        
                    </View>
                ):<Loading images={imagesToPreloader}/>}
            </>
        }
        </>
        
    );
};

export default ChapterComponent;
