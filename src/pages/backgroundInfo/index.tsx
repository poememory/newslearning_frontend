import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'
import { useEffect,useState } from 'react'
import debounce from '@/method/debonce';

export default function BackgroudInfo() {
  const [stat, setStat] = useState(["unmount", "unmount", "unmount", "unmount", "unmount", "unmount"]);
  useEffect(() => {
    let i=0
    const interval = setInterval(() => {
      setStat(prevStat => {
        const newStat = [...prevStat];
        newStat[i] = "mount";
        i++;
        return newStat;
      });
      if(i==6)clearInterval(interval)
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  function jumpPage(){
      let count = 0;
      for (let i = 0; i < stat.length; i++) {
          // 检查当前元素是否为 "unmount"，如果是则增加计数器
          if (stat[i] === "unmount") {
              count++;
          }
      }
    setStat(["mount", "mount", "mount", "mount", "mount", "mount"])
    setTimeout(() => {
       Taro.redirectTo(   {url:'/pages/gameChapters/Chapter1packed'})
    }, 200*count);
  }
  return (
    <View className='BackgroudInfo' onClick={debounce(jumpPage,300)}>
      <View className={'BackgroudInfo-item-'+stat[0]}>你是一名刚刚大学毕业的<Text>新闻专业的学生</Text></View>
      <View className={'BackgroudInfo-item-'+stat[1]}><Text>不久前，你收到了一家知名报社的Offer</Text></View>
      <View className={'BackgroudInfo-item-'+stat[2]}><Text>“实习记者”</Text>——你的<Text>新身份</Text>就此上线</View>
      <View className={'BackgroudInfo-item-'+stat[3]}>要知道，<Text>当好一名记者</Text>可不是学好课本里的知识就够的</View>
      <View className={'BackgroudInfo-item-'+stat[4]}>当课本里的一件件案例成为<Text>“你的生活”</Text></View>
      <View className={'BackgroudInfo-item-'+stat[5]}><Text>你</Text>……会怎么做呢？</View>
    </View>
  )
}
