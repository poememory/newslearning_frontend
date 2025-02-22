import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Canvas } from '@tarojs/components';
import Taro from '@tarojs/taro';

interface PieChartProps {
  data: { name: string; value: number }[];
  title?: string;
  style?: React.CSSProperties;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, style }) => {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(200);  // 默认宽度
  const [canvasHeight, setCanvasHeight] = useState(200); // 默认高度

  const colorArray = [
     '#f9db95','#8ccdbf', '#cde0a5', '#ef8476', '#c5a8ce'
  ];

  let colorIndex = 0; // 用于索引颜色数组

  // 获取 Canvas 容器的尺寸
  useEffect(() => {
    if (canvasRef.current) {
      const query = Taro.createSelectorQuery();
      query.select('#pieChartCanvas').boundingClientRect((rect) => {
        setCanvasWidth(rect.width);
        setCanvasHeight(rect.height);
      }).exec();
    }
  }, []);

  const drawPieChart = (ctx: any) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const radius = Math.min(canvasWidth, canvasHeight) / 2 - 10; // 圆的半径，根据容器的大小动态调整
    const center = { x: canvasWidth / 2, y: canvasHeight / 2 }; // 圆心位置

    let startAngle = 0;

    // 遍历数据来画每个扇形
    data.forEach(item => {
      const angle = (item.value / total) * 2 * Math.PI; // 扇形的角度
      ctx.beginPath();
      ctx.moveTo(center.x, center.y); // 从圆心开始
      ctx.arc(center.x, center.y, radius, startAngle, startAngle + angle); // 画弧
      ctx.closePath();

      // 设置颜色并填充
      ctx.setFillStyle(colorArray[colorIndex % colorArray.length]); // 从颜色数组中取色
      ctx.fill();

      // 绘制文字
      const textAngle = startAngle + angle / 2; // 文字的位置为扇形的中间
      const textX = center.x + Math.cos(textAngle) * (radius / 1.5); // 计算文本的X坐标
      const textY = center.y + Math.sin(textAngle) * (radius / 1.5); // 计算文本的Y坐标

      ctx.setFillStyle('#000'); // 文字颜色
      ctx.setFontSize(11); // 文字大小
      ctx.fillText(`${item.name}: ${item.value}`, textX, textY); // 绘制文字

      // 更新颜色索引
      colorIndex += 1;

      // 更新起始角度
      startAngle += angle;
    });
  };

  useEffect(() => {
    if (canvasRef.current) {
      // 获取 Canvas 上下文
      const ctx = Taro.createCanvasContext('pieChartCanvas', canvasRef.current);
      drawPieChart(ctx); // 进行绘制
      ctx.draw(); // 触发绘制
    }
  }, [data, canvasWidth, canvasHeight]); // 每当 data 或尺寸发生变化时重新绘制

  return (
    <View style={{ ...style, textAlign: 'center' }}>
      <Canvas
        canvasId="pieChartCanvas"
        style={{ width: '18vw', height: '18vw' }}
        ref={canvasRef} // 使用 ref 来获取 Canvas 实例
        id="pieChartCanvas" // 添加 id 以便获取宽高
      />
      <Text style={{fontSize:'3vh'}}>{title}</Text>
    </View>
  );
};

export default PieChart;
