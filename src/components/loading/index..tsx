import {View} from "@tarojs/components";
import './index.less'

function Loading ({images}){
    return(
        <View className="LoadingPage">
            <View className='Loading_icon'></View>
            {images.map(item=>{
                return(
                    <View style={{backgroundImage:`url${item}`,display:'none'}}></View>
                )
            })}
        </View>
    )
}

Loading.defaultProps = {
    images:[]
  };

export default Loading;
