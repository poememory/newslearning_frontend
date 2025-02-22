import HammerGame from "@/components/games/hammer"
import Taro from "@tarojs/taro"
import { useState, useEffect } from "react"

export default function HammerGamepage() {
  const arr = [
    { title: '伦理困境中，新闻工作者的真实报道与（ ）存在着冲突？', correct: ['他人隐私保护', '对当事人的关怀', '保护司法独立性'], wrong: ['隐性采访'] },
    { title: '五种基本的伦理理论包括（ ）', wrong: [], correct: ['中庸之道','效益主义','绝对律令','多元价值理论','社群主义'] },
    { title: '合乎伦理的新闻价值观包括（ ）', correct: ['准确','证实','坚韧','尊严','互惠','足量','公平','社区','多样性'] },
    { title: '道德评价包括（ ）', correct: ['良心','名誉'], wrong: ['美德'] },
    { title: '违反新闻职业道德的行为包括（ ）', wrong: [], correct: ['敲诈勒索','杜撰造假','有偿新闻','策划新闻','罔顾人伦'] },
    { title: '下列属于媒介审判发展阶段的是（ ）', wrong: [], correct: ['报纸审判','媒体审判','网络审判'] },
    { title: '新闻寻租包括（ ）', wrong: [], correct: ['写软文','新闻敲诈','有偿新闻','收封口费','先批评后删除'] },
    { title: '报道中属于侵犯隐私权的行为包括（ ）', wrong: [], correct: ['欺骗采访','强制采访','报道失实','报道轻佻','图文使用不当'] },
    { title: '暗访形式包括（ ）', wrong: [], correct: ['主动欺骗','被动欺骗','假扮他人'] },
    { title: '隐性采访应该遵循的原则（ ）', wrong: [], correct: ['合法性','公共利益原则','减少到的伤害原则','最后选择原则','暗访与明访相结合原则'] }
  ]

  const [index, setIndex] = useState(0)
  const [addup, setAddup] = useState(0)

  // handleNext函数，更新index和addup
  function handleNext(score: number) {
    setIndex(prev => {
      const newIndex = prev + 1
      if (newIndex < arr.length) {
        return newIndex
      } else {
        Taro.showModal({
          title: '完成',
          content: `你的总分是${addup}`,
          success: function (res) {
            if (res.confirm) {
                Taro.navigateBack()
            }else{
                Taro.navigateBack()
            }
          }
        })
        return prev // 到达最后一题时，保持当前index
      }
    })
    setAddup(prev => prev + score)
  }

  // 在index变化后重新渲染HammerGame组件
  useEffect(() => {
    console.log("Index has changed: ", index);
    console.log("Total score: ", addup);
  }, [index, addup]);

  return (
    <HammerGame
      key={index}
      question={arr[index]}  // 动态更新问题
      onEnd={(score) => handleNext(score)}  // 传递分数
    />
  )
}
