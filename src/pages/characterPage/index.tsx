import React, {useEffect, useState} from 'react';
import { View, Text, Input, Image,Radio,RadioGroup,Label} from '@tarojs/components';
import './index.less';
import {GlobalProvider,useGlobalContext} from "@/context/GlobalContext";
import debounce from "@/method/debonce";
import Taro from "@tarojs/taro";

const CharacterComponent= () => {
    const maleImg='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5i0I89Es2GalbgnrzYwNwdhttwkV9sxQuVNvPwmM7aY4lwjgRnz4z*D5b9wyzRkXvZ286Ie5q8mdDntl.Yhce5c!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4';
    const femaleImg ='https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/ruAMsa53pVQWN7FLK88i5vBl3H6CM75IcTPtfukFsPwpCGV1wYEzsnULiwQzyke2HoggeAEnfeFYPVRPXW6BgnTAhk0HT*zQ2j5xTA*6dtA!/b&bo=OAT3BQAAAAADN9w!&rf=viewer_4'
    const {nickname,gender,updateNickname,updateGender}=useGlobalContext()
    const [nickname_set, setNickname_set] = useState<string>('');
    const [selectedGender, setSelectedGender] = useState<string>('');
    const [animationtype, setAnimationtype] = useState('')
    useEffect(() => {
        console.log(nickname,gender)
        setNickname_set(nickname)
        setSelectedGender(gender)
    }, []);
    useEffect(() => {
        setAnimationtype(`bgColorChange_${selectedGender}`)
    }, [selectedGender]);
    function Onshow_character() {
        return(
            <View className='character_img' style={{backgroundImage:`url(${selectedGender?(selectedGender=='male'?maleImg:femaleImg):''})`}}></View>
        )
    }
    async function handlesubmit(){
        if(nickname_set&&selectedGender){
            await Taro.setStorageSync('nickname',nickname_set)
            await Taro.setStorageSync('gender',selectedGender)
            await updateNickname(nickname_set)
            await updateGender(selectedGender)
                Taro.redirectTo({
                    url:'/pages/backgroundInfo/index'
                })
        }
        else {
            Taro.showToast({
                title: '请填写',
                icon: 'error',
                duration: 2000
            })
        }
    }
    return (
        <View className={`CharacterPage `}>
            <View className='CharacterPage_title'>创建你的角色</View>
            <View className={`Characterbox ${animationtype}`}>
                <View className='Character_item'>
                    <View className='Character_item_title'>昵称：</View>
                    <Input value={nickname_set} onInput={(e)=>setNickname_set(e.detail.value)} placeholder='输入昵称'></Input>
                </View>
                <View className='Character_item'>
                    <View className='Character_item_title'>性别：</View>
                    <RadioGroup onChange={(e)=>setSelectedGender(e.detail.value)}>
                            <Label className='radio-list__label'>
                                <Radio className='radio-list__radio' value={'male'} checked={selectedGender=='male'}>男</Radio>
                            </Label>
                            <Label className='radio-list__label'>
                                <Radio className='radio-list__radio' value={'female'} checked={selectedGender=='female'}>女</Radio>
                            </Label>
                    </RadioGroup>
                </View>
            </View>
            <Onshow_character></Onshow_character>
            <View className='CharacterPage_handle' style={{backgroundColor:nickname_set&&selectedGender?'#F09B59':'#C2C2C2'}} onClick={debounce(handlesubmit,150)}>继续</View>
        </View>
    );
};

const CharacterPage =()=>{
    return(
        <GlobalProvider>
            <CharacterComponent></CharacterComponent>
        </GlobalProvider>
    )
}

export default CharacterPage;
