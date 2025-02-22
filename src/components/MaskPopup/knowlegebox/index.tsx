import {ScrollView, View,Text} from '@tarojs/components'
import './index.less'
import {content} from './content'
import { useEffect, useState } from 'react'



const KnowlegeBox= ({chapterIndex}) => {
  
    const [contentIndex,setContentIndex]=useState(0)
    useEffect(()=>{
      
      if(chapterIndex==0)setContentIndex(0)
      else if(chapterIndex==1||chapterIndex==2||chapterIndex==3||chapterIndex==4)setContentIndex(1)
      else if(chapterIndex==5||chapterIndex==6||chapterIndex==7)setContentIndex(2)
      else if(chapterIndex==8)setContentIndex(3)
      else if(chapterIndex==9)setContentIndex(4)
      else if(chapterIndex==10||chapterIndex==11)setContentIndex(5)
      else if(chapterIndex==12||chapterIndex==13||chapterIndex==14)setContentIndex(6)
    },[chapterIndex])
    return (
        <>
            <View className='KnowlegeBox'>
                <View className='knowlege_robot'></View>
                <ScrollView className='KnowlegeBox_Info' scrollY={true}>
                    {
                      content[contentIndex].map((item)=>{
                        return(
                          <>
                          <Text className='KnowlegeBox_title'>{item.title}</Text>
                          <Text className='KnowlegeBox_content'>{item.content}</Text>
                          </>
                        )
                      })
                    }
                </ScrollView>

            </View>
        </>
    );
}

export default KnowlegeBox;
