import Loading from "@/components/loading/index.";
import PreloadResources from "@/components/preloader/preloader";
import { ScrollView, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import './index.less'

function Allstudents() {
    const [pageshow,setshow_page]=useState(true)
    const [users,setusers]=useState<any[]>([])
    const imagesToload=['https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJEgyKQLH2DX0O.4lvrNe7TYupWdC.Tkwq0zFX1Fl2jrSgk0ChlOcvS3JdmffPwPRKuI6ybFx14q51ClgbipdVg!/b&bo=IQk4BAAAAAADBzY!&rf=viewer_4']
    const getUsersInfo = async () => {
            try {
              const response = await Taro.request({
                url: 'https://www.gamefornewslearning.xyz/get-all-users', 
                method: 'GET',
              });
          
              if (response.statusCode === 200) {
                setusers(response.data)
              } else {
                console.error('Failed to fetch users info:', response.data);
              }
            } catch (error) {
              console.error('Error fetching users info:', error);
            } finally{
                  setshow_page(true)
            }
          };  
return (
    <>
     <PreloadResources images={imagesToload} videos={[]} audios={[]} onPreloadComplete={()=>getUsersInfo()}></PreloadResources>
    {pageshow?
        <View className="allstudent_page">
            <View className='GameBoard_Item_back' style={{color:'white'}} onClick={()=>Taro.navigateBack()}>&lt;</View>
            <View className="students_title"> 
                <View className="sub_title" >姓名</View>
                <View className="sub_title">邮箱</View>
                <View className="sub_title">性别</View>
                <View className="sub_title">进度</View>
                <View className="sub_title">学习时长</View>
            </View>
            <ScrollView className="scroll_students" scrollY>
            {users.map((item)=>{
                return(
                    <View className="user_item">
                        <View style={{width:'12vw'}}>{item.name}</View>
                        <View style={{width:'20vw'}}>{item.email}</View>
                        <View style={{width:'7vw'}}>{item.gender}</View>
                        <View style={{width:'22vw'}}>{item.process}/15</View>
                        <View style={{width:'18vw'}}>{Math.floor(item.duration/ 60)}分{item.duration%60}秒</View>
                    </View>
                )
            })}
            </ScrollView>
        </View>
        :
        <Loading images={imagesToload}></Loading>
    }
    </>
    
  );
}

export default Allstudents;
