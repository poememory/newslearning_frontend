import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'
import { useEffect,useState } from 'react'
import debounce from '@/method/debonce';

export default function BackgroundInfo() {
  const [stat, setStat] = useState(["unmount", "unmount", "unmount", "unmount", "unmount", "unmount"]);
  const handleClick = () => {
        let updatedStat = [...stat];
        let firstUnmountIndex = updatedStat.findIndex(item => item === "unmount");
        if (firstUnmountIndex !== -1) {
            updatedStat[firstUnmountIndex] = "mount";
        } else {
            Taro.redirectTo({url:'/pages/gameChapters/Chapter1packed'})
        }
        setStat(updatedStat);
    };
  return (
    <View className='BackgroudInfo' onClick={debounce(handleClick,200)}>
      <View className={'BackgroudInfo-item-'+stat[0]}>你是一名刚刚大学毕业的<Text>新闻专业的学生</Text></View>
      <View className={'BackgroudInfo-item-'+stat[1]}><Text>不久前，你收到了一家知名报社的Offer</Text></View>
      <View className={'BackgroudInfo-item-'+stat[2]}><Text>“实习记者”</Text>——你的<Text>新身份</Text>就此上线</View>
      <View className={'BackgroudInfo-item-'+stat[3]}>要知道，<Text>当好一名记者</Text>可不是学好课本里的知识就够的</View>
      <View className={'BackgroudInfo-item-'+stat[4]}>当课本里的一件件案例成为<Text>“你的生活”</Text></View>
      <View className={'BackgroudInfo-item-'+stat[5]}><Text>你</Text>……会怎么做呢？</View>
        <View className='click_icon_backgroundInfo'> &gt;&gt;</View>
    </View>
  )
}
