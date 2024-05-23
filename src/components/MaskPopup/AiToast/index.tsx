import debounce from '@/method/debonce'
import AnimationText from "@/components/AnimationText";
import { View} from '@tarojs/components'
import './index.less'




interface AIToastProps{
  onClose:()=>void,
  content:string
}
const AIToast: React.FC<AIToastProps> = ({onClose,content}) => {
  return (
    <>
      <View className='AIToastbox' onClick={debounce(onClose,300)}>
          <View className='AIrobot'></View>
          <AnimationText content={content}></AnimationText>
      </View>
    </>
  );
}

export default AIToast;
