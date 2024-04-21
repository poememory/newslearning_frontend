import { View } from '@tarojs/components'
import './index.less'
import { MaskPopupProps } from '../type';

interface ForwordInfoProps extends MaskPopupProps{
  content:string
}
const ForwordInfo: React.FC<ForwordInfoProps> = ({onClose,content}) => {
  return (
      <>
      <View className='ForwordInfoPage' onClick={onClose}>
        <View className='ForwordInfobox'>{content}</View>
      </View>
      </>
  );
}

export default ForwordInfo;
