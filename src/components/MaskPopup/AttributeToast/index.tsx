import { View } from '@tarojs/components'
import './index.less'
import { MaskPopupProps } from '../type';
import AttributeContent from "@/components/MaskPopup/AttributeToast/type";


interface AttributeToast extends MaskPopupProps{
    content:AttributeContent[]
}
const AttributeToast: React.FC<AttributeToast> = ({onClose,content}) => {
    return (
        <>
            <View className='AttributeToastPage' onClick={onClose}>
                <View className='AttributeToastbox'>
                    {content.map((item)=>{
                            return(
                                <View className='AttributeToast_item'
                                      style={{backgroundImage:item.type=='moral'?
                                              `url('https://s2.loli.net/2024/05/07/uWAN4bBhlvtjIPk.png')` :
                                               `url('https://s2.loli.net/2024/05/07/IeB5xaJ9WSrAGq7.png')` ,
                                          color:item.type=='money'?'#2D5E03':'#D62D1A'}}>
                                    {item.content}
                                </View>
                            )
                    })}
                </View>
            </View>
        </>
    );
}

export default AttributeToast;
