import GameBoard from "@/components/GameBoard";
import Loading from "@/components/loading/index.";
import AttributeToast from "@/components/MaskPopup/AttributeToast";
import AttributeContent from "@/components/MaskPopup/AttributeToast/type";
import ChooseBox from "@/components/MaskPopup/chooseBox";
import Dilogbox from "@/components/MaskPopup/DialogBox";
import GapInfobox from "@/components/MaskPopup/gapInfo";
import PreloadResources from "@/components/preloader/preloader";
import { useGlobalContext } from "@/context/GlobalContext";
import { View } from "@tarojs/components";
import { getContent } from './content';
import { useEffect, useRef, useState } from "react";
import StepBoard from "./components/stepboard";
import Tipboard from "./components/tipboard";
import WhiteBoard from "./components/whiteboard";
import Taro from "@tarojs/taro";
import PieChart from "@/components/charts/PieChart";
import BarChart from "@/components/charts/BarChart";
import debounce from "@/method/debonce";

export default function Chapter0(){
        const [mode,setmode]=useState('student')
        const startTime = useRef(new Date().getTime());
        const { moral, money, proud, updateMoral, updateMoney, updateProud } = useGlobalContext();
    const imagesToPreloader=['https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bTFeVvyfbk3n.hL7b443v1qZ7fnzxvwbmwIbd*wP8hGuuz*TQAI*TQuCFJBbOVKHHg!/b&bo=AAXQAgAAAAABF.c!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJUMoRospvmgCRiQWxTkkBPC1TXxXdAdhH6iMrxZdMcO7cjNJ9QSkVu*wkLJTpZPyQQ!/b&bo=aAcsBAAAAAADN1U!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEED2xXSYUOLxxPpqNtAepJXn9jCCOh19LC3qkohc437NaZkjwT.JTiPEMi9KZNJ7TINotjmEIfXa3FHqWceXbRA!/b&bo=aAcsBAAAAAADJ0U!&rf=viewer_4',//background
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',//teacher
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS*QnL20iEhB0eIXYb1S1iW0OSeT0ymaLEZ8Tl7uWg9314rRNPudQi.YS5Uujsw.MuA!/b&bo=OAT3BQAAAAADB.w!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGUL1Cz77OWf.BfmavCgCS8f70lXLvR.FYqrZQFiLqC9Uo0lHMe2MErtKbQQReUJfdFUP.eeyDrnErns2Eohf6E!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4',//man-hands-down
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELEslxGGc08Bo3HJD3vooGzEZrdMIe2m3yNS0v8W.raSME8k0jAcf.x0D84eyiHPX17f.ToP9u.cBtmCLFosZdk!/b&bo=OARSBgAAAAADB0o!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPkUjDLgpbrAFBHpDsATKIOTJ7AFly4g8mGxv0.eFpu1EGYIgOWVSvBVqtp*5LHPO81oJuUrMBxxvjOLSW*4vX8!/b&bo=OARmBQAAAAADRz0!&rf=viewer_4',//man-icon
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGM*PqIshITX*4jS6D*waBTsshsUz4cpoy4UliGfVGDOxUXH5yF*TTz1ELH2dGsWQy0s.eV6baDsY*DCfhwbFQk!/b&bo=sgOyAwAAAAADByI!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ97FO9fJDLOey3bwBVQGhfhr3o4NUhoSF9PzR7m6NUBdoRC14mBIXfMPeIY.SQ1vpE!/b&bo=tAOzAwAAAAADJwU!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ8QeQVcZmP0HNZHZ1hV3McTjxKOgSPZv5IiR5fbXvISiFI4JLGy7VjbPYoY0K5elH4!/b&bo=7AP4AwAAAAADJxY!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ83Xa5.lDXhE6BnyLX0oOpNJ1TRlIducb1qZ*lO.iZuL0.Q9z0KJLdvWnMYIwZjHEE!/b&bo=*gP9AwAAAAADNxE!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGM*PqIshITX*4jS6D*waBRuOkbLbZ286yB.I2jMY32hJPMnjD4BOCuGsDFAFbbqf0ReC8Lje1dSoQCzeP3udd4!/b&bo=*QP.AwAAAAADNxE!&rf=viewer_4',
      'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEP2UMc*kqDwqdVX9VxdwuZ*dQhtLChCFve5uhFD2ZV5WptvWATBNDkYj9kik.KOWyBklM0y*JnVBWvjM8gzOR5s!/b&bo=5gHnAQAAAAADFzM!&rf=viewer_4'//dice
    ]
    const content = getContent();
    const [backgroundImgurl, setBackgroundImgurl] = useState(imagesToPreloader[0]);
    const [showPage, setShowPage] = useState(false);
    const [progress, setProgress] = useState<number>(0);

    const [Dilogbox_show, setDilogbox_show] = useState(false);
    const [Dilog_content, setDilog_content] = useState(0);

    const [StepBoard_show,setStepBoard_show]=useState(false)

    const [choosebox_show, setchoosebox_show] = useState(false);
    const [choosebox_content, setchoosebox_content] = useState(0);
    const [tip_show,setTip_show]=useState(false)
    const [tip_content,setTip_content]=useState(6)

    const [plotArr,setPlotArr]=useState([5,13,19,27,33,38])

    const [White_board_show,setWhite_board_show]=useState(false)
    const [white_board_index,setWhite_board_index]=useState(0)

    const [choice_gap, setChoice_gap] = useState<number[]>([0]);
    const [choice_index, setChoice_index] = useState<number>(0);

    const [AttributeShow, setAttributeShow] = useState(false);
    const [Attribute_content, setAttribute_content] = useState<AttributeContent[]>([]);

    const [GapInfoShow, setGapInfoShow] = useState(false);
    const [GapInfo_content, setGapInfo_content] = useState(0);

    const [choice_arr,set_choice_arr]=useState<any[]>([])

    const [admin_question,setAdminQuestion]=useState(0)
    const [piechartData,setPieChartData]=useState<any[]>([])
    const [barChartData,setBarChartData]=useState<any[]>([[{name:'',value:0}]])

    const [average_money,setAverage_money]=useState(1000)
    const [average_moral,setAverage_moral]=useState(100)
    useEffect(()=>{
        console.log(progress);
        switch (progress) {
            case 0:
                setDilogbox_show(true)
                break;
            case 1:
                setGapInfoShow(true)
                break;
            case 2:
                setGapInfoShow(false)
                setStepBoard_show(true)
                break;
            case 3:
                setTip_show(true)//all the tips
                break;
            case 4:
                setProgress(2)//back to board
                break;
            case 5://plot 1
                setWhite_board_show(false)
                setTip_content(0)
                setTip_show(true)
                break;
            case 6:
                setDilog_content(1)
                setDilogbox_show(true)
                break;
            case 7:
                setchoosebox_content(0)
                setchoosebox_show(true)
                break;
            case 8:
                updateMoral(moral+100)
                setAttribute_content([{type:'moral',content:'+100'}])
                setAttributeShow(true)
                break;
            case 9:
                setWhite_board_show(true)
                break;
            case 10:
                setDilog_content(2)
                setDilogbox_show(true)
                break;
            case 11:
                setWhite_board_index(1)
                setWhite_board_show(true)
                break;
            case 12:
                setProgress(2)
                break;
            case 13://plot 2
                setWhite_board_show(false)
                setTip_content(1)
                setTip_show(true)
                break;
            case 14:
                setDilog_content(3)
                setDilogbox_show(true)
                break;
            case 15:
                setchoosebox_content(1)
                setchoosebox_show(true)
                break;
            case 16:
                updateMoral(moral+100)
                setAttribute_content([{type:'moral',content:'+100'}])
                setAttributeShow(true)
                break;
            case 17:
                setWhite_board_index(2)
                setWhite_board_show(true)
                break;
            case 18:
                setProgress(2)
                break;
            case 19://plot 3
                setWhite_board_show(false)
                setTip_content(2)
                setTip_show(true)
                break;
            case 20:
                setDilog_content(4)
                setDilogbox_show(true)
                break;
            case 21:
                setchoosebox_content(2)
                setchoosebox_show(true)
                break;
            case 22:   
                setWhite_board_index(3)
                setWhite_board_show(true)
                break;
            case 23:
                updateMoral(moral+100)
                setAttribute_content([{type:'moral',content:'+100'}])
                setAttributeShow(true)
                break;
            case 24:
                setProgress(2)
                break;
            case 25:
                setWhite_board_index(4)
                setWhite_board_show(true)
                break;
            case 26:
                setProgress(2)
                break
            case 27://plot 4
                setWhite_board_show(false)
                setTip_content(3)
                setTip_show(true)
                break;
            case 28:
                setDilog_content(5)
                setDilogbox_show(true)
                break
            case 29:
                setchoosebox_content(3)
                setchoosebox_show(true)
                break;
            case 30:
                updateMoral(moral+100)
                setAttribute_content([{type:'moral',content:'+100'}])
                setAttributeShow(true)
                break;
            case 31:
                setWhite_board_index(5)
                setWhite_board_show(true)
                break;
            case 32:
                setProgress(2)
                break;
            case 33://plot 5
                setWhite_board_show(false)
                setTip_content(4)
                setTip_show(true)
                break;
            case 34:
                setDilog_content(6)
                setDilogbox_show(true)
                break
            case 35:
                setchoosebox_content(4)
                setchoosebox_show(true)
                break;
            case 36:
                setWhite_board_index(6)
                setWhite_board_show(true)
                break;
            case 37:
                setProgress(2)
                break;
            case 38://plot 6
                setWhite_board_show(false)
                setTip_content(5)
                setTip_show(true)
                break;
            case 39:
                setDilog_content(7)
                setDilogbox_show(true)
                break
            case 40:
                setchoosebox_content(5)
                setchoosebox_show(true)
                break;
            case 41:
                setWhite_board_index(7)
                setWhite_board_show(true)
                break;
            case 42:
                setProgress(2)
                break;
            case 43:
                setTip_show(false)
                setWhite_board_index(8)
                setWhite_board_show(true)
                break
            case 44:
                setchoosebox_content(6)
                setchoosebox_show(true)
                break;
            case 45:
                setDilog_content(8)
                setDilogbox_show(true)
                break
            case 46:
                setProgress(43)
                break
            case 47:
                setWhite_board_index(9)
                setWhite_board_show(true)
                break
            case 48:
                setWhite_board_index(10)
                setWhite_board_show(true)
                break
            case 49:
                setDilog_content(9)
                setDilogbox_show(true)
                break
            case 50:
                endChapter()
            default:
                break;
        }
    },[progress])
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
                    chapterIndex: 0, 
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
            Taro.setStorageSync('moral',moral)
            updateUserData()
            Taro.showModal({
                title: '提示',
                content: '你完成了该章节的内容！',
                success: function (res) {
                    if (res.confirm) {
                        Taro.redirectTo({url:'/pages/menu/index?mode=student'})
                    } else if (res.cancel) {
                        Taro.redirectTo({url:'/pages/menu/index?mode=student'})
                    }
                },
            });
    }
    function handleclose(e:number){
        setStepBoard_show(false)
        if([0,2,4,7,10,13].includes(e)) emitPlot()   
        else if([3,5,8,9,11].includes(e)) emitTip()
    }
    function emitPlot(){
        if(plotArr.length){
            const detinaton=plotArr[Math.floor(Math.random()*plotArr.length)]
            setProgress(detinaton)
            setPlotArr(pre=>{
                const temp=pre.filter((item)=>{return item!==detinaton})
                return temp
            })     
        }
        else{
            setProgress(43)
        }
    }
    function emitTip(){
        setProgress(pre=>{return pre+1})
        const num=6+Math.floor(Math.random() * 7)
        setTip_content(num)        
    }
    useEffect(()=>{
        console.log(plotArr);      
    },[plotArr])
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
                          chapterIndex:0
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
    return(
    <> 
     {mode=='student'?
        <>
        <PreloadResources images={imagesToPreloader} audios={[]} videos={[]} onPreloadComplete={handlePreloadComplete} />
        {showPage ?(
            <>
                <GameBoard game={true} backgroundImgurl={backgroundImgurl}></GameBoard>
                {Dilogbox_show && <Dilogbox onClose={() => { setDilogbox_show(false); setProgress(progress + 1); } } Dilogcontent={content.Dialog[Dilog_content]}></Dilogbox>}
                <View style={{display:StepBoard_show?'':'none'}}><StepBoard StepBoard_show={StepBoard_show} handleclose={handleclose}></StepBoard></View>
                {tip_show&&<Tipboard content={content.Tip_content[tip_content]} onclose={()=>{setTip_show(false);setProgress(pre=>{return pre+1})}}/>}
                {choosebox_show && <ChooseBox onClose={() => { setchoosebox_show(false); }} setChoice_gap={setChoice_gap} setChoice_index={setChoice_index} content={content.Choice[choosebox_content]}></ChooseBox>}
                {White_board_show && <WhiteBoard onClose={() => {setWhite_board_show(false);setProgress(progress + 1) }}  content={content.white_board[white_board_index]}></WhiteBoard>}
                {GapInfoShow && <GapInfobox onClose={() => { setGapInfoShow(false); setProgress(progress + 1); }} content={content.GapInfo[GapInfo_content]} />}
                {AttributeShow && <AttributeToast content={Attribute_content} onClose={() => { setAttributeShow(false); setProgress(progress + 1); }}></AttributeToast>}
            </>
        ):<Loading/>}
        </>
        :
        <>
                {showPage ?(
                    <View className="chapter_teacher" onClick={debounce(handleClick,300)}>
                        <View className='GameBoard_Item_back' onClick={()=>Taro.navigateBack()}>&lt;</View>
                        <View className="question_admin">
                            <View className="question_admin_title">序章 / 第{admin_question+1}题</View>
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
                            </View>
                            <View className="average_time_title">本题学生平均用时：</View>
                            <View className="average_time">{3 + Math.floor(Math.abs(Math.sin(0+ admin_question + new Date().getDate()) * 10000) % (18 - 3 + 1))}s</View>
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
    )
}