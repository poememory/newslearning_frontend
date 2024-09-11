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
                                              `url('https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5pyKAkxLV6c.Yg.Ur3ZPCPV9QczKMVjgcjKPggkDteDR.i60Zg0sQ6AYLn2ZUTLZ3RTOBAl59f70y5LDAUpbv7s!/b&bo=CQLcAgAAAAADF.c!&rf=viewer_4')` :
                                               `url('https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5pyKAkxLV6c.Yg.Ur3ZPCPXIZm9kDrPeD9H39wrXDytSFgKCeWIZzx7qbMygn6ZvPsuo4*q8CIuaHmp2CiuQ3mM!/b&bo=CQLpAgAAAAADF9I!&rf=viewer_4')` ,
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
