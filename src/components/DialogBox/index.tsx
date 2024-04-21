import { View, Text} from '@tarojs/components'
import { useState ,useEffect} from 'react'
import './index.less'
import debounce from '@/method/debonce'

interface DilogContent{
    content:string,
    type:string
}
interface DilogboxProps{
    onClose:()=>void,
    Dilogcontent:DilogContent[]
}
const Dilogbox: React.FC<DilogboxProps> = ({onClose,Dilogcontent}) => {
    const [onShowDilog,setonShowDilog]=useState(0)
    function handleclick(){
        if(onShowDilog==Dilogcontent.length-1){onClose();console.log('close');
        }
        else setonShowDilog(prev => prev + 1);
    }
  return (
      <>
      <View className='Dilogbox' onClick={debounce(handleclick,300)}>
        <View className='DilogAvatar' style={{display:Dilogcontent[onShowDilog].type=="aside"?"none":'',left:Dilogcontent[onShowDilog].type=="me"?'0':'57vw'}}>
            {Dilogcontent[onShowDilog].type=='me'?'我':'同事'}
        </View>
        <Text className='Dilogcontentbox'>{Dilogcontent[onShowDilog].content}</Text>
      </View>
      </>
  );
}

export default Dilogbox;
