import React, {createContext, PropsWithChildren, useContext, useEffect, useState} from 'react';
import Taro from '@tarojs/taro';
import Loading from "@/components/loading/index.";

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
    const [nickname,setNickname]=useState('')
    const [gender,setGender]=useState('')
    const [money, setMoney] = useState<number>(1000);
    const [moral, setMoral] = useState<number>(100);
    const [proud, setProud] = useState([false,false,false,false,false,false,false,false,false]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedNickname = Taro.getStorageSync('nickname');
                const storedGender = Taro.getStorageSync('gender');
                const storedMoney = Taro.getStorageSync('money');
                const storedMoral = Taro.getStorageSync('moral');
                const storedProud = Taro.getStorageSync('proud');

                if (storedNickname) {
                    setNickname(storedNickname);
                }
                if (storedGender) {
                    setGender(storedGender);
                }
                if (storedMoney) {
                    setMoney(storedMoney);
                }
                if (storedMoral) {
                    setMoral(storedMoral);
                }
                if (storedProud) {
                    setProud(() => {
                        return storedProud.split(',').map((item) => item === '1');
                    });
                }
            } catch (error) {
                console.error('Failed to fetch data from storage:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    // useEffect(() => {
    //     const saveData = async () => {
    //         try {
    //             await Taro.setStorage({ key: 'money', data: money });
    //             await Taro.setStorage({ key: 'moral', data: moral });
    //             await Taro.setStorage({ key: 'proud', data: proud.map(item => item ? '1' : '0').join(',') });
    //         } catch (error) {
    //             console.error('Failed to save data:', error);
    //         }
    //     };
    //     saveData();
    // }, [money, moral, proud]);
    // 改为每个章节结束存下
    const updateNickname= (data: string)=> {
        setNickname(data);
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
    if (loading) {
        return <Loading></Loading>
    }
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
