import {useGlobalContext} from "@/context/GlobalContext";

export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[
        '又是平凡的一天，今天你的任务安排是：在新闻热线的工位上值班。\n' +
        '叮铃铃，叮铃铃……\n' +
        '“您好！新闻热线，请讲。好的，您别急，慢慢说……”\n' +
        '你接到线人I匿名电话称，他儿子V在一年前外出打工，期间杳无音讯，寻找无果只能报案。\n' +
        '可就在前两天，V却突然回家了，仔细一看，却是遍体鳞伤，简直触目惊心！他的嘴里还一直念叨着F工厂，似乎内心极度惊恐害怕。\n' +
        '这样的反应让I怀疑起了这家工厂，恐怕V失踪的这一年里在F工厂里遭受了非人的虐待！\n' +
        'I迫切地想知道V是否在这个工厂里发生了什么！但他内心十分清楚，个人的力量实在是过于渺小，于是求助报社，希望记者能去调查F工厂。\n' +
        '电话挂断后，你做好电话记录。\n' +
        '对于这条线索，你内心的想法是',

        '你尽可能多地收集了F工厂的相关资料，初步分析、判断后，发现确实存在诸多疑点，于是你决定卧底进入这家工厂暗访调查，亲身感受工人们的真实处境。\n' +
        '在报社的帮助下，你为自己伪造了一个全新的身份，尽可能地去贴近工人形象。藏匿好拍摄与录音设备后，你成功进入工厂。\n' +
        '原本你打算从重重疑点中抽丝剥茧，一点点调查工厂存在的问题，但当你置身其中，你立马就意识到了问题所在！这就是一家彻头彻尾的黑工厂！！！\n' +
        '厂址极其偏远，进厂前通信设备已被没收。\n' +
        '每日长达12小时的工作时间严重违反了劳动法，稍有不慎还会遭到管理者的虐待！\n' +
        '车间设备也没有任何安全保障措施，切断手指的情况时有发生。\n' +
        '一日三餐也得不到基本的保障。\n' +
        '不仅如此，居住环境也十分简陋，十几个人挤在一间彩钢板搭建的房子中，卫生条件脏乱不堪，地铺间仅用一条破布隔开！\n' +
        '更令你气愤的是，工人中还有不少的未成年的青少年和残障人士！\n' +
        '强迫劳动、非法羁押……一个大胆的想法在你脑海中成型，这家工厂可能还有人口拐卖的嫌疑！\n' +
        '短短几天，你的身心就遭受了巨大的折磨，但在重重阻碍下，你还没有收集到足够的实质性证据，恐怕不足以对工厂及背后可能存在的产业链进行彻底的打击。\n'+
        '重新评估你的身心状况后，你慎重地作出决定：',

        '经历九死一生，你艰难地逃出了工厂。\n' +
        '虽然证据不足，但好歹还保全了一部分素材，你对此进行整理并发布了一篇报道。\n' +
        '报道引发轰动，你受到了报社的嘉奖。警方随之介入调查，但由于你的逃跑引起了工厂管理者的警觉，且缺乏关键性证据，调查过程中遇到了很大困难。',

        '不知过了多久，你收集到了足够多的关键证据，确定产业链存在，便找准时机出逃。\n' +
        '在逃跑过程中，你不幸被发现，遭到了追捕。但万幸的是，你还是逃了出来。\n' +
        '你的逃跑必然已经惊动了工厂管理者，被奴役的工人的生命安全随时面临着巨大的威胁。\n' +
        '你的内心陷入挣扎，两个小人一左一右撕扯着你：\n' +
        '如果抢先完成独家报道，你肯定会在业内声名大噪，赢得更多的荣誉，但这有可能耽误警方的救援时间。\n' +
        '如果先联系警方展开救援，在此过程中可能会走漏风声，被其他报社抢先进行报道，你不顾危险卧底黑工厂的心血就会付之东流。\n' +
        '时间容不得你多想，你下定决心：',

        '报道发出后受到了警方的高度关注与重视，也引发了社会舆论的广泛讨论。\n' +
        '虽然警方反应迅速，但工厂在此之前就有所行动，转移和销毁了部分犯罪证据，增大了调查难度。',


    ]
    const GapInfo=[
        {content:'很久之后，你的同事发表了一篇关于黑工厂奴役工人的重大报道，引发社会广泛关注与讨论，这篇报道也获得业内最高荣誉奖项。\n' +
                '该类行业进行了一次大整顿。',type:'blue'},
        {content:'随着时间流逝，这件事的热度逐渐减退了。',type:'green'},
        {content:'但在舆论的支持和帮助下，广大热心群众积极提供线索，\n最终工厂关停，被奴役的工人们被解救出来，相关人员也受到了严厉的法律制裁。该类行业进行了一次大整顿。\n' +
                '你的这篇报道也在不久后获得业内最高荣誉奖项，报社给予你一定嘉奖。',type:'blue'},
        {content:'警方及时救出了被奴役的工人们，并彻查了背后的产业链。最终工厂关停，相关人员也受到了严厉的法律制裁。该类行业进行了一次大整顿。\n' +
                '多家媒体对此次案件进行了报道，但因为你的报道最为真实、材料最足、分析最深、最有价值，所以你的报道受到了政府部门和公众的一致好评。\n' +
                '这篇报道也在不久后获得业内最高荣誉奖项，报社给予你一定嘉奖。',type:'blue'}
    ]
    const Dialog={}

    const Choice=[
        [
            {content:'A.上报领导，值班结束后回归常态新闻报道',gap:1},
            {content:'B.上报领导，并在值班结束后主动追寻线索',gap:3},
        ],
        [
            {content:'A.试图逃跑，先保证自己的安全',gap:1},
            {content:'B.继续卧底，收集足够多的证据',gap:5},
        ],
        [
            {content:'A.先完成独家报道',gap:1},
            {content:'B.先联系警方救人',gap:5},
        ]
    ]
    const certain=[

    ]
    return {Info,GapInfo,Dialog,Choice,certain}
};
