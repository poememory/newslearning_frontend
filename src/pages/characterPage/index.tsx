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
    const [pageState,setPageState]=useState(0)
    const [loginState,setloginState]=useState(0)
    
    const [login_email,setLoginEmail]=useState('')
    const [login_password,setLoginPassword]=useState('')
    const [register_email,setregisterEmail]=useState('')
    const [register_password,setRegister_password]=useState('')
    const [confirmPasword,setConfirmPassword]=useState('')
    const [verify_code,setVerify_code]=useState('')

    const [verify_code_able,setVerify_code_able]=useState(true)
    useEffect(() => {
        const email=Taro.getStorageSync('email')
        if(email=='admin'){
          Taro.redirectTo({url:'/pages/menu/index?mode=teacher'})
        }
        else if(email){
            Taro.redirectTo({url:'/pages/backgroundInfo/index'})
        }
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
                setPageState(1)
        }
        else {
            Taro.showToast({
                title: '请填写',
                icon: 'error',
                duration: 2000
            })
        }
    }
    async function sendVerify_code(){
            if(!register_email){
                Taro.showToast({
                    title: '请填写邮箱',
                  });
                 return
            }
            if(!verify_code_able) {
                Taro.showToast({
                    title: '稍后再试',
                  });
                 return
            }
            try {
                Taro.showToast({
                    title: '稍等一下',
                  });
                const res = await Taro.request({
                  url:'https://www.gamefornewslearning.xyz/send-verification-code',
                  method: 'POST',
                  data: {
                    email:register_email,
                  }
                });
                if (res.statusCode === 200) {
                    setVerify_code_able(false)
                    setTimeout(() => {
                        setVerify_code_able(true)
                      }, 60000);
                  Taro.showToast({
                    title: '验证码已发送',
                    icon: 'success',
                  });
                } else {
                  Taro.showToast({
                    title: '发送失败，请重试',
                    icon: 'none',
                  });
                }
              } catch (error) {
                console.error('发送验证码失败:', error);
                Taro.showToast({
                  title: '发送失败，请重试',
                  icon: 'none',
                });
              }
    }
    async function handlregister() {
        if(register_password!=confirmPasword){
            Taro.showToast({
                title: '两次密码不同',
                icon: 'none',
              });
        }
        else{
            try {
                const res = await Taro.request({
                  url:'https://www.gamefornewslearning.xyz/register',
                  method: 'POST',
                  data: {
                    email:register_email,
                    password:register_password,
                    verificationCode:verify_code,
                    nickname:nickname_set,
                    gender:selectedGender
                  }
                });
                if (res.statusCode === 200) {
                  Taro.showToast({
                    title: '注册成功',
                    icon: 'success',
                  });
                } else {
                  Taro.showToast({
                    title: '注册失败',
                    icon: 'none',
                  });
                }
              } catch (error) {
                console.error('注册失败:', error);
                Taro.showToast({
                  title: '注册失败',
                  icon: 'none',
                });
              }
        }
    }
    async function handlogin() {
        if(!login_email||!login_password){
            Taro.showToast({
                title: '输入邮箱密码',
                icon: 'none',
              });
        }
        else if(login_email=='admin'&&login_password=='studentnews'){
          Taro.setStorageSync('email',login_email)
          Taro.redirectTo({url:'/pages/menu/index?mode=teacher'})
        }
        else{
            try {
                const res = await Taro.request({
                  url:'https://www.gamefornewslearning.xyz/login',
                  method: 'POST',
                  data: {
                    email:login_email,
                    password:login_password,
                  }
                });
                if (res.statusCode === 200) {
                  Taro.showToast({
                    title: '登陆成功',
                    icon: 'success',
                  });
                  Taro.setStorageSync('email',login_email)
                  Taro.setStorageSync('password',login_password)
                  Taro.redirectTo({url:'/pages/backgroundInfo/index'})
                } else {
                  Taro.showToast({
                    title: '登陆失败',
                    icon: 'none',
                  });
                }
              } catch (error) {
                console.error('登陆失败:', error);
                Taro.showToast({
                  title: '登陆失败',
                  icon: 'none',
                });
              }
        }
    }
    function handleTour(){
      Taro.setStorageSync('email','')
      Taro.setStorageSync('money','1000')
      Taro.setStorageSync('moral','100')
      Taro.setStorageSync('proud','0,0,0,0,0,0,0,0,0,0')
      Taro.redirectTo({url:'/pages/backgroundInfo/index'})
    }
    return (
        <View className={`CharacterPage `}>
            {!pageState?
            <View>
                    <View className='CharacterPage_title'>创建你的角色</View>
                    <View className={`Characterbox ${animationtype}`}>
                        <View className='Character_item'>
                            <View className='Character_item_title'>姓名：</View>
                            <Input value={nickname_set} maxlength={10} onInput={(e)=>setNickname_set(e.detail.value)} placeholder='输入昵称'></Input>
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
            :
            <View>
                <View className='login_box'>
                    <View className="login_title">
                        <View onClick={()=>setloginState(0)} style={{backgroundColor:!loginState?'#e48c48':''}}>登陆</View>
                        <View onClick={()=>setloginState(1)} style={{backgroundColor:loginState?'#e48c48':''}}>注册</View>
                    </View>
                    {!loginState?
                        <View className="login_box_center">
                            <View className="login_term">邮箱<Input value={login_email} onInput={(e)=>setLoginEmail(e.detail.value)}></Input></View>
                            <View className="login_term">密码<Input password value={login_password} onInput={(e)=>setLoginPassword(e.detail.value)}></Input></View>
                            <View className="login_term">
                                <View className="login_button" style={{backgroundColor:'#4650c5'}} onClick={debounce(handlogin,300)}>登陆</View>
                                <View className="login_button" style={{backgroundColor:'#4650c5'}} onClick={debounce(handleTour,300)}>游客模式</View>
                            </View>
                        </View>
                    :
                        <View className="login_box_center">
                            <View className="login_term">邮箱<Input value={register_email} onInput={(e)=>setregisterEmail(e.detail.value)}></Input></View>
                            <View className="login_term">验证码<Input value={verify_code} onInput={(e)=>setVerify_code(e.detail.value)} style={{width:'9vw',marginLeft:'5vw'}}></Input><View onClick={debounce(sendVerify_code,300)} className="login_button" style={{backgroundColor:verify_code_able?'#4650c5':'grey'}}>获取验证码</View></View>
                            <View className="login_term">密码<Input password value={register_password} onInput={(e)=>setRegister_password(e.detail.value)}></Input></View>
                            <View className="login_term">密码确认<Input password value={confirmPasword} onInput={(e)=>setConfirmPassword(e.detail.value)}></Input></View>
                            <View className="login_term">
                                <View className="login_button" style={{backgroundColor:'#4650c5'}} onClick={debounce(handlregister,300)}>注册</View>
                                <View className="login_button" style={{backgroundColor:'#4650c5'}} onClick={debounce(handleTour,300)}>游客模式</View>
                            </View>
                        </View>
                    }
                </View>
            </View>
            }
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
