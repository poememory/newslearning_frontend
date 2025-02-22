import Loading from "@/components/loading/index.";
import PreloadResources from "@/components/preloader/preloader";
import { ScrollView, View } from "@tarojs/components";
import { GlobalProvider, useGlobalContext } from "@/context/GlobalContext";
import {  useEffect, useState } from "react";
import './index.less'
import Taro from "@tarojs/taro";
import debounce from "@/method/debonce";
import { url } from "inspector";

export default function Menu(){
    const router = Taro.getCurrentInstance().router;
    const { mode } = router.params;
    const {gender,nickname}=useGlobalContext()
    const maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4';
    const femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
    
    const imagesToload=[
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpxASiKDbBr6Ny7rTc0YyiLyHHnOFbCficI3ekN9QkaZnK86pGZ43CQTs9bEwpmwMGY!/b&bo=OASIBgAAAAADN6A!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrED03dpwfCM89Ly7UEqFtUALihIALbjLgt.418mlRGirXccwlMDQwXGLcCQJoWF2ShLcsnTF*bOY78XV1AnXEkFQ!/b&bo=OAQvBgAAAAADNwc!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE2*OQoF6kjOQ6BcA*d4P6AVpgIpakmgWugrjiFPq9ZPtbVNxOyeOPzvSHrPXNWVl8!/b&bo=OAQ4BgAAAAADNxA!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE4Y7IA8FB4CFeNQIeXKr9uOgrYcRkqyh.jOSdH39AFlpP1HtzsqWZMpeCu4CTCZ7A!/b&bo=OAQ8BgAAAAADNxQ!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpz0azSpMtxHVjN2YNkOOP62NcDHCX1iL4NFM.RcG23GINBsj2nwQJKzGr5S1hdNP90!/b&bo=OARBBgAAAAADRxk!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE660fLQ9j.2uXlc*DlpqBiczvMXD8bSrfXQRZxQmqstX3ZzzjkJesiC8qyYsEYDuU!/b&bo=OARUBgAAAAADN3w!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUHAQvQqDE9p4Xsg9z1*K9mr7ZkKVVyEhB.zE0LrKjjDnT5W7s0E6b0cV66rT6DFVUM!/b&bo=OAQgBgAAAAADNwg!&rf=viewer_4',
        'https://m.qpic.cn/psc?/a/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpwu9UHRerejmzg*a9NzUg96Yt*QoaSKWE2b.9bmW0sz1Q27ybkih6coHDDMvPYouEs!/b&bo=rgj.AwAAAAADRzk!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QzMb4gTg2hSJnSvJ2XSy4..Ee2JkC447mTg1bitqYSz*VnpqE5mIzxjg02cdJFkRMc!/b&bo=Ogk4BAAAAAADBy0!&rf=viewer_4'
    ]
      // 定义一些元素
  const items = [
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpxASiKDbBr6Ny7rTc0YyiLyHHnOFbCficI3ekN9QkaZnK86pGZ43CQTs9bEwpmwMGY!/b&bo=OASIBgAAAAADN6A!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrED03dpwfCM89Ly7UEqFtUALihIALbjLgt.418mlRGirXccwlMDQwXGLcCQJoWF2ShLcsnTF*bOY78XV1AnXEkFQ!/b&bo=OAQvBgAAAAADNwc!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE2*OQoF6kjOQ6BcA*d4P6AVpgIpakmgWugrjiFPq9ZPtbVNxOyeOPzvSHrPXNWVl8!/b&bo=OAQ4BgAAAAADNxA!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE4Y7IA8FB4CFeNQIeXKr9uOgrYcRkqyh.jOSdH39AFlpP1HtzsqWZMpeCu4CTCZ7A!/b&bo=OAQ8BgAAAAADNxQ!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpz0azSpMtxHVjN2YNkOOP62NcDHCX1iL4NFM.RcG23GINBsj2nwQJKzGr5S1hdNP90!/b&bo=OARBBgAAAAADRxk!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE660fLQ9j.2uXlc*DlpqBiczvMXD8bSrfXQRZxQmqstX3ZzzjkJesiC8qyYsEYDuU!/b&bo=OARUBgAAAAADN3w!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUHAQvQqDE9p4Xsg9z1*K9mr7ZkKVVyEhB.zE0LrKjjDnT5W7s0E6b0cV66rT6DFVUM!/b&bo=OAQgBgAAAAADNwg!&rf=viewer_4'];

        const [scrollLeft, setScrollLeft] = useState(0);
        const [scrollWidth, setScrollWidth] = useState(100); // 初始化滚动视图总宽度，使用相对数值
      
        const itemWidthVW = 18; // 元素宽度 (vw)
        const scrollViewWidthVW = 90; // 视图宽度 (vw)
      
        // 计算缩放比例
        const calculateScale = (index) => {
          const scrollLeftVW = (scrollLeft / scrollWidth) * 100; // 将scrollLeft转换为相对宽度 (vw)
          const center = scrollLeftVW + scrollViewWidthVW / 2;
          const itemCenter = index * itemWidthVW + itemWidthVW / 2;
          const distance = Math.abs(center - itemCenter);
          const maxDistance = scrollViewWidthVW / 2 + itemWidthVW;
      
          const scale = 1 - Math.min(distance / maxDistance, 1) * 0.5;
          return scale;
        };
      
        const handleScroll = (e) => {
          setScrollLeft(e.detail.scrollLeft); // 更新scrollLeft
          setScrollWidth(e.detail.scrollWidth); // 获取滚动视图的总宽度
        };
      
        function handleClick(index){
            switch (index) {
                case 0:
                    Taro.navigateTo({url:`/pages/gameChapters/chapter0/Chapter0packed`})
                    break;
                case 1:
                    Taro.navigateTo({url:`/pages/chapterSelect/index`})
                    break
                case 2:
                    Taro.navigateTo({url:`/pages/chapterSelect2/index`})
                    break
                case 3:
                    Taro.navigateTo({url:`/pages/gameChapters/chapter8/Chapter8packed`})
                    break
                case 4:
                    Taro.navigateTo({url:`/pages/gameChapters/chapter9/Chapter9packed`})
                    break
                case 5:
                    Taro.navigateTo({url:`/pages/chapterSelect3/index`})
                case 6:
                    Taro.navigateTo({url:`/pages/chapterSelect4/index`})
                default:
                    break;
            }
        }
        const [show_page,setshow_page]=useState(false)
        const getUserInfo = async (email) => {
            if(!email) {
                setshow_page(true)
                return
            }
            if(email=='admin'){
                setshow_page(true)
                return
            }
            try {
              const response = await Taro.request({
                url: 'https://www.gamefornewslearning.xyz/get-user-info', // 替换为你的服务器地址
                method: 'GET',
                data: {
                  email: email, // 传递邮箱参数
                }
              });
          
              if (response.statusCode === 200) {
                // 请求成功，处理返回的用户数据
                console.log('User Info:', response.data);
                Taro.setStorageSync('nickname',response.data.name)
                Taro.setStorageSync('gender',response.data.gender)
                Taro.setStorageSync('money',response.data.money)
                Taro.setStorageSync('moral',response.data.moral)
                Taro.setStorageSync('proud',response.data.proud.map((item)=>item?1:0).join(','))
              } else {
                console.error('Failed to fetch user info:', response.data);
              }
            } catch (error) {
              console.error('Error fetching user info:', error);
            } finally{
                setTimeout(()=>{
                    setshow_page(true)
                })
            }
          };
          const email=Taro.getStorageSync('email')
          function handleLogOut(){
            Taro.showModal({
              title: `您要退出登陆吗？`,
              content: '',
              success: function (res) {
                if (res.confirm) {
                  Taro.setStorageSync('email','')
                  Taro.setStorageSync('nickname','')
                  Taro.setStorageSync('gender','')
                  Taro.redirectTo({url:'/pages/characterPage/index'})
                } else if (res.cancel) {
                   return
                }
              }
            })
            
          }    

    return(
        <GlobalProvider>
        <PreloadResources images={imagesToload}  audios={[]} videos={[]} onPreloadComplete={()=>getUserInfo(email)}></PreloadResources>
        {
            show_page?
            <View className="menu_page" style={{backgroundImage:mode=='student'?`url(${imagesToload[7]})`:`url(${imagesToload[8]})`}}>
                
                    {mode=='student'?
                        <View className='avatar_menu' >
                            <View className='avatar_gender' onClick={handleLogOut} style={{backgroundImage:`url(${gender=='male'?maleImg:femaleImg})`}}></View>
                        </View>    
                        :
                        <View className="admin_check"  onClick={handleLogOut}>教师后台模式</View>
                    } 
                
                <ScrollView
                    className="scroll-container_menu"
                    scrollX
                    scrollWithAnimation
                    onScroll={handleScroll}
                    >
                    {items.map((item, index) => {
                        const scale = calculateScale(index); // 动态计算每个元素的缩放比例
                        return (
                        <View
                            key={index}
                            className="scroll-item"
                            onClick={()=>handleClick(index)}
                            style={{
                            backgroundImage:`url(${item})`,
                            backgroundSize:'cover',
                            transform: `scale(${scale})`, // 动态设置缩放比例
                            opacity: scale, // 距离越远，透明度越低
                            }}
                        >
                        </View>
                        );
                    })}
                    </ScrollView>
                {mode=='student'?
                  <>
                    <View className="memu_button" style={{right:'13vw',width:'10vw'}} onClick={()=>{Taro.navigateTo({url:'/pages/gamepage/gamechoose/index'})}}></View>
                    <View className="memu_button" style={{right:'2vw',width:'10vw'}} onClick={()=>{Taro.navigateTo({url:'/pages/knowlegePage/index'})}}></View>
                    <View className="memu_button" style={{right:'24vw',width:'10vw'}} onClick={()=>{Taro.navigateTo({url:'/pages/examplePage/index'})}}></View>
                  </>
                    :
                    <>
                    <View className="memu_button" style={{left:'1vw'}} onClick={()=>{Taro.showToast({title:'进入游客模式浏览章节内容',icon:'none'})}}></View>
                    <View className="memu_button" style={{left:'15vw'}} onClick={()=>{Taro.showToast({title:'点击上方章节查看',icon:'none'})}}></View>
                    <View className="memu_button" style={{right:'20vw'}} onClick={debounce(()=>Taro.navigateTo({url:'/pages/allstudents/index'}),300)}></View>
                    <View className="memu_button" style={{right:'3vw'}} onClick={()=>Taro.showModal({
                      title: '联系邮箱',
                      content: 'Newstudent2024@163.com,点击复制',
                      success: function (res) {
                        if (res.confirm) {
                          Taro.setClipboardData({
                            data: 'Newstudent2024@163.com',
                            success: () => {
                              Taro.showToast({
                                title: '复制成功',
                                icon: 'success',
                              })
                            }
                          })
                        } else if (res.cancel) {}
                      }
                    })}></View>
                    </>
                }
            </View>
            :<Loading images={imagesToload}></Loading>
        }
        </GlobalProvider>
    )
}