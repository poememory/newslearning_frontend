import {ScrollView, View,Text} from '@tarojs/components'
import './index.less'
import {content} from './content'



const KnowlegeBox: React.FC = () => {

    return (
        <>
            <View className='KnowlegeBox'>
                <View className='knowlege_robot'></View>
                <ScrollView className='KnowlegeBox_Info' scrollY={true}>
                    {
                      content.map((item)=>{
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
