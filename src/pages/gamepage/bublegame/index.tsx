
import BubbleGame from "@/components/games/buble"
import Taro from "@tarojs/taro"
import { useState } from "react"

export default function BubleGamepage() {
    const [index,setIndex]=useState(0)
    const arr=[
        {
            title:'以下哪些行为违反了新闻职业道德？',
            correct:['杜撰新闻，采访造假',
                    '见钱眼开，强取豪夺',
                    '调侃悲剧，罔顾人伦',
                    '耸人听闻，敲诈勒索'],
            wrong:['新闻自由，媒介审判','涉性案件，媒体披露']
          },
        {
            title:'以下哪些行为可能会违反了新闻职业伦理？',
            correct:['记者该救人，还是该报道',
                '冷血策划，煽情哗众',
                '消息来源该不该保护'],
            wrong:['涉性案件，媒体披露']
        },
        {
            title:'有关伦理与道德的描述，请选择其中正确的一项。',
            correct:['道德是绝对的，伦理是相对的'],
            wrong:['道德是相对的，伦理是绝对的']
        },
        {
            title:'以下哪几项是《中国新闻工作者职业道德准则》的有关内容？',
            correct:['全心全意为人民服务',
                    '坚持正确舆论导向',
                    '坚持新闻真实性原则',
                    '发扬优良作风',
                    '坚持改进创新',
                    '遵守法律纪律',
                    '对外展示良好形象'],
            wrong:[]
        },
        {
            title:'媒介审判的发展具有哪些阶段性特征？',
            correct:['报纸审判',
                    '媒体审判',
                    '舆论（网络）审判'],
            wrong:[]
        },
        {
            title:'合乎伦理的新闻价值观具体内涵是什么？',
            correct:['准确，证实','坚韧，尊严','公平，社区','多样性，透明性'],
            wrong:['互惠，定量']
        },
        {
            title:'虚假新闻的表现形式有哪些？',
            correct:['无中生有，凭空捏造',
                    '风捉影，道听途说',
                    '发挥想象，添枝加叶',
                    '移花接木，偷梁换柱',
                    '掩耳盗铃，自欺欺人',
                    '缺乏常识，漏洞百出'],
            wrong:[]
        },
        {
            title:'暗访形式有哪些？',
            correct:['主动欺骗',
                    '被动欺骗',
                    '假扮他人'],
            wrong:[]
        },
        {
            title:'隐性采访遵循的原则有哪些？',
            correct:['合法性',
                    '公共利益原则',
                    '减少到的伤害原则',
                    '最后选择原则',
                    '暗访与明访相结合原则'],
            wrong:[]
        }
    ]
    function handleNext(score){
        Taro.showModal({
                  title: '完成',
                  content: `你的本题得分是${score}`,
                  success: function (res) {
                    if (res.confirm) {
                        if(index<arr.length-1){
                            setIndex(pre=>pre+1)
                        }
                        else{
                            Taro.navigateBack()
                        }
                    }else{
                        if(index<arr.length-1){
                            setIndex(pre=>pre+1)
                        }
                        else{
                            Taro.navigateBack()
                        }
                    }
                  }
                })
    }
  return (
    <BubbleGame
      key={index}
      question={arr[index]}  
      onEnd={(score) => handleNext(score)}  
    />
  )
}
