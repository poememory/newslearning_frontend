import React from 'react';
import { View, Text } from '@tarojs/components';

interface BarChartProps {
  data: { name: string; value: number }[];
  title?: string;
  style?: React.CSSProperties;
}

const BarChart: React.FC<BarChartProps> = ({ data, title, style }) => { 
  const maxValue = Math.max(...data.map(item => item.value)) * 1.3; // 获取最大值，比例计算
  const colorArray = [
    '#c5a8ce', '#ef8476', '#cde0a5', '#8ccdbf', '#f9db95'
  ];

  const arr = {
    0: 'A', 1: "B", 2: 'C', 3: "D", 4: "E", 5: 'F', null: 'skip'
  };

  return (
    <View style={{ ...style, textAlign: 'center' }}>
      <View style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end', height: '35vh', width: '23vw' }}>
        {data.map((item, index) => (
          <View key={index} style={{ textAlign: 'center' }}>
            <Text>{item.value}</Text>
            <View
              style={{
                height: `${(item.value / maxValue) * 33}vh`,
                width: '3vw',
                backgroundColor: `${colorArray[index % colorArray.length]}`, // 按顺序获取颜色
              }}
            />
            <Text>{arr[item.name]}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: '3vh' }}>{title}</Text>
    </View>
  );
};

export default BarChart;
