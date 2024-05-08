import React, {createContext, PropsWithChildren, useContext, useEffect, useState} from 'react';
import Taro from '@tarojs/taro';

interface GlobalContextType {
    nickname:string;
    gender:string;
    money: number;
    moral: number;
    proud: boolean[];
    updateNickname:(data: string) => void;
    updateGender:(data: string) => void;
    updateMoney: (data: number) => void;
    updateMoral: (data: number) => void;
    updateProud: (data: boolean[])=> void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [nickname,setnickName]=useState('')
    const [gender,setGender]=useState('female')
    const [money, setMoney] = useState<number>(1000);
    const [moral, setMoral] = useState<number>(100);
    const [proud, setProud] = useState([false,false,false,false,false,false,false,false,false,false]);
    useEffect(() => {
        const fetchData = async () => {
            if(Taro.getStorageSync('nickname')&&Taro.getStorageSync('gender')){
                setMoney(Taro.getStorageSync('nickname'));
                setMoral(Taro.getStorageSync('gender'));
            }
            if(Taro.getStorageSync('money')&&Taro.getStorageSync('moral')){
                setMoney(Taro.getStorageSync('money'));
                setMoral(Taro.getStorageSync('moral'));
            }
            if(Taro.getStorageSync('proud')){
                setProud(()=>{
                    const proudstr=Taro.getStorageSync('proud');
                    return proudstr.split().map((item) => {
                        return item == 1
                    })
                })
            }
        };

        fetchData();
    }, []);
    const updateNickname= (data: string)=> {
        setnickName(data);
    };
    const updateGender= (data: string)=> {
        setGender(data);
    };
    const updateMoney = (data: number)=> {
        setMoney(data);
    };

    const updateMoral= (data: number) => {
        setMoral(data);
    };
    const updateProud= (data: boolean[]) => {
        setProud(data);
    };

    return (
        <GlobalContext.Provider value={{ nickname,gender,money,moral,proud,updateNickname,updateGender,updateMoney, updateMoral,updateProud }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};
