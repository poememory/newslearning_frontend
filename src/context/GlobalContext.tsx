import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';
import Taro from '@tarojs/taro';

interface GlobalContextType {
    money: number;
    moral: number;
    proud: boolean[];
    updateMoney: (data: number) => void;
    updateMoral: (data: number) => void;
    updateProud: (data: boolean[])=> void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [money, setMoney] = useState<number>(1000);
    const [moral, setMoral] = useState<number>(100);
    const [proud, setProud] = useState([false,false,false,false,false,false,false,false,false,false]);
    useEffect(() => {
        const fetchData = async () => {
            if(Taro.getStorageSync('money')&&Taro.getStorageSync('moral')){
                setMoney(Taro.getStorageSync('money'));
                setMoral(Taro.getStorageSync('moral'));
            }
            if(Taro.getStorageSync('proud')){
                // setProud(()=>{
                //     const proudstr=Taro.getStorageSync('proud');
                //     let newarr=proudstr
                // })
            }
        };

        fetchData();
    }, []);

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
        <GlobalContext.Provider value={{ money,moral,proud,updateMoney, updateMoral,updateProud }}>
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
