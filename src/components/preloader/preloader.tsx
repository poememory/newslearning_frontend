// PreloadResources.tsx
import Taro from '@tarojs/taro';
import { useEffect } from 'react'

interface PreloadResourcesProps {
  images: string[];
  audios: string[];
  videos: string[];
  onPreloadComplete: () => void;

}


const PreloadResources: React.FC<PreloadResourcesProps> = ({ images, audios,videos, onPreloadComplete }) => {
    const allResources = [...images];

    useEffect(() => {
        // const downloadPromises = allResources.map((item)=> {
        //     return new Promise<void>((resolve, reject) => {
        //         Taro.downloadFile({
        //             url: item,
        //             success: () => {
        //                 resolve()
        //             },
        //             fail: () => reject()
        //         });
        //     });
        // });

        // Promise.all(downloadPromises)
        //     .then(() => onPreloadComplete())
        //     .catch(() => onPreloadComplete());
        setTimeout(() => {
            onPreloadComplete()
        }, 2000);
    }, []);

    return null;
};

export default PreloadResources;
