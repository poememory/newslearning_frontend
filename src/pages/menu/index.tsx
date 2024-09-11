import Loading from "@/components/loading/index.";
import PreloadResources from "@/components/preloader/preloader";
import { ScrollView, View } from "@tarojs/components";
import { GlobalProvider } from "@/context/GlobalContext";
import { useEffect, useState } from "react";
import GameBoard from "@/components/GameBoard";
import './index.less'
import Taro from "@tarojs/taro";

export default function Menu(){
    const imagesToload=[
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpxASiKDbBr6Ny7rTc0YyiLyHHnOFbCficI3ekN9QkaZnK86pGZ43CQTs9bEwpmwMGY!/b&bo=OASIBgAAAAADN6A!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrED03dpwfCM89Ly7UEqFtUALihIALbjLgt.418mlRGirXccwlMDQwXGLcCQJoWF2ShLcsnTF*bOY78XV1AnXEkFQ!/b&bo=OAQvBgAAAAADNwc!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE2*OQoF6kjOQ6BcA*d4P6AVpgIpakmgWugrjiFPq9ZPtbVNxOyeOPzvSHrPXNWVl8!/b&bo=OAQ4BgAAAAADNxA!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE4Y7IA8FB4CFeNQIeXKr9uOgrYcRkqyh.jOSdH39AFlpP1HtzsqWZMpeCu4CTCZ7A!/b&bo=OAQ8BgAAAAADNxQ!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpz0azSpMtxHVjN2YNkOOP62NcDHCX1iL4NFM.RcG23GINBsj2nwQJKzGr5S1hdNP90!/b&bo=OARBBgAAAAADRxk!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUE660fLQ9j.2uXlc*DlpqBiczvMXD8bSrfXQRZxQmqstX3ZzzjkJesiC8qyYsEYDuU!/b&bo=OARUBgAAAAADN3w!&rf=viewer_4',
        'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEPl4ENrQp5xIEiXMRqiMvUHAQvQqDE9p4Xsg9z1*K9mr7ZkKVVyEhB.zE0LrKjjDnT5W7s0E6b0cV66rT6DFVUM!/b&bo=OAQgBgAAAAADNwg!&rf=viewer_4',
        'https://m.qpic.cn/psc?/a/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpwu9UHRerejmzg*a9NzUg96Yt*QoaSKWE2b.9bmW0sz1Q27ybkih6coHDDMvPYouEs!/b&bo=rgj.AwAAAAADRzk!&rf=viewer_4'
    ]
      // 定义一些元素
  const items = ['https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpxASiKDbBr6Ny7rTc0YyiLyHHnOFbCficI3ekN9QkaZnK86pGZ43CQTs9bEwpmwMGY!/b&bo=OASIBgAAAAADN6A!&rf=viewer_4',
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
            if(index==0){
                Taro.navigateTo({url:`/pages/gameChapters/chapter0/Chapter0packed`})
            }
            if(index==1){
                Taro.navigateTo({url:`/pages/chapterSelect/index`})
            }
            
        }
    const [show_page,setshow_page]=useState(false)
    return(
        <GlobalProvider>
        <PreloadResources images={imagesToload} videos={[]} audios={[]} onPreloadComplete={()=>setshow_page(true)}></PreloadResources>
        {
            show_page?
            <>
                <GameBoard game={false} backgroundImgurl="https://m.qpic.cn/psc?/a/TmEUgtj9EK6.7V8ajmQrELsuqzlIkg5XXu7hq2bSQpwu9UHRerejmzg*a9NzUg96Yt*QoaSKWE2b.9bmW0sz1Q27ybkih6coHDDMvPYouEs!/b&bo=rgj.AwAAAAADRzk!&rf=viewer_4"></GameBoard>
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
            </>
            :<Loading></Loading>
        }
        </GlobalProvider>
    )
}