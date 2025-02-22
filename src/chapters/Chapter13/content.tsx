import {useGlobalContext} from "@/context/GlobalContext";
import { View,Text } from "@tarojs/components";

export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[
        `最近，你收到了群众举报。
        对面说X大道旁有一家C奶茶店，好几个顾客喝完他们的奶茶后都出现了闹肚子进医院的情况。
        他们怀疑是奶茶店卫生有问题，希望记者能去调查一下。
        你知道这个牌子的奶茶，一直营销自己干净卫生，为了让消费者放心，后厨都敞开给顾客看，使用的原料也会放在玻璃展柜里，都是当天的新鲜材料。
        你心想最近315也快到了，每年总逃不开食品安全问题。
        如果这家奶茶店确实有问题，那到时候报道还正好能和315热点配合一下……
        你当即决定开始调查，根据你的经验，你选择：`,

        `你设计了一份简历，隐去了一些可能会暴露的个人信息，拿着这份简历去这家奶茶店应聘店员。
        面试后，店长告知你可以来上班了。经过两天的培训，你正式上岗。
        点单、做奶茶、装材料……这些都是你需要做的工作。
        工作之余，你细心观察，寻找着证明这家店有问题的蛛丝马迹。
        一次更换原料时，你突然发现，几箱水果上的日期标签处有被撕过的痕迹。
        你心想也许这些奶茶用料有问题，但这也没办法当证据……
        第二天，你把针孔摄像头藏在衣领，去奶茶店上班。
        午休时，店长喊你的一个同事去仓库帮忙。你决定：`,

        `下班回家后，你把摄像头取出来，检查拍下的素材能不能用。
        确认没问题之后，你开始写文案剪视频。
        一晚上的时间，你把定稿送去审核。
        怕中间再生什么变故，你第二天依旧正常去奶茶店上班。
        报社编辑确认内容无误，但为了便于脱身，你让编辑晚几天再发布。`
     ]
    const GapInfo=[
        {
            type:'blue',
            content:`几天后，你借口老家出事，要回去处理，向店长辞了职。
回到报社，你联系编辑把报道发出去。
真相公开后，有关部门迅速反应，调查核实后查封了这家奶茶店。
经法院审理，该奶茶店负责人被罚款五万元，吊销该店经营许可证。
知道处理结果的那一刻，你正要把在那家奶茶店的工作牌丢进垃圾桶。`
        }
    ]
    const Dialog=[
        {
            others:{
                name:'店员',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxlrhcHRFyQaiMTDpgb4wL75ygzLvgbUGBh2D2IxIPRDgm.1kX*ldR9JBBhu2LziSk!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'你来到这家店，先点了一杯奶茶，坐在店内假装玩着手机实则在观察。',type:'aside'},
                    {content:'大概过了两小时，店内换班了，一个店员下班正往外走。',type:'aside'},
                    {content:'你悄悄跟在他的后面，走远一点后，你追上他。',type:'aside'},
                    {content:'您好，不好意思打扰一下！',type:'me'},
                    {content:'这位店员停下来，疑惑地看着你。',type:'aside'},
                    {content:'你开始向他解释你的来意，他眼神中的警惕越发的明显，在你说完后，他犹豫了几秒后摆了摆手。',type:'aside'},
                    {content:'你在说什么，我不清楚。',type:'teammate'},
                    {content:'你感受到他语气中的慌张，直觉告诉你，他应该知道些什么。',type:'aside'},
                    {content:'我也是进行一个小调查，不会暴露你的个人信息的，也是为了大家的安全和健康，希望你能提供一些线索和帮助。',type:'me'},
                    {content:'但是他的态度还是很强硬，直接转头就走。',type:'aside'},
                    {content:'询问一番无果，你想另寻办法。',type:'aside'},
                    {content:'但对面好像早有防备，每次你想去那家奶茶店踩点的时候，似乎总有一股无形的力量在阻挡你。',type:'aside'},
                    {content:'到最后，哪怕你只是在店外观望，都会受到店里人异样的眼光……',type:'aside'},
            ]
        },
        {
            others:{
                name:'店员',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxlrhcHRFyQaiMTDpgb4wL75ygzLvgbUGBh2D2IxIPRDgm.1kX*ldR9JBBhu2LziSk!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'店长只当你是新人，想好好表现，很爽快地让你一块儿过去。',type:'aside'},
                    {content:'到了仓库，店长和那个店员一起开始撕一堆箱子上的标签。',type:'aside'},
                    {content:'店长，这是要……？',type:'me'},
                    {content:'来，跟我们一块撕。',type:'teammate'},
                    {content:'你凑上去，发现这一堆是两天前送来的原料。',type:'aside'},
                    {content:'这不是前两天的水果吗？我们是要丢了吗？',type:'me'},
                    {content:'店长瞟了你一眼。',type:'aside'},
                    {content:'没干过奶茶这一行吧。',type:'teammate'},
                    {content:'你见店长不再说什么，就没敢轻举妄动，和他们一起撕标签。',type:'aside'},
                    {content:'撕完之后，店长拿了一堆空白标签给你，对你指了指你的同事。',type:'teammate'},
                    {content:'写上明天的日期，写好给他贴。',type:'teammate'},
                    {content:'你明白过来了：所谓的新鲜原料不过是人为操纵的结果！',type:'aside'},
                    {content:'你按兵不动，照店长要求的，开始写标签。',type:'aside'},
            ]
        },
        {
            others:{
                name:'店员',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxlrhcHRFyQaiMTDpgb4wL75ygzLvgbUGBh2D2IxIPRDgm.1kX*ldR9JBBhu2LziSk!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'你把目光移向平常特别喜欢唠嗑的姐姐。',type:'aside'},
                    {content:'哎，我怎么前两天听人说，咱们这儿用料不新鲜，有人喝进医院了？',type:'me'},
                    {content:'嗨，这多正常，奶茶店不都这样。',type:'teammate'},
                    {content:'咱们那用料不都要展出来的吗？',type:'me'},
                    {content:'换个标签，谁还知道是哪天产的！',type:'teammate'},
                    {content:'所以我说啊，没事儿别碰那奶茶，不是什么好东西……',type:'teammate'},
                    {content:'要不是为了赚这点儿钱……每天我看那烂水果都膈应！',type:'teammate'},
                    {content:'你应和着，留意到店长来了，就止了话头。',type:'aside'},
                    {content:'下班回家后，你把摄像头取出来，把音频调了出来。',type:'aside'},
                    {content:'确认素材没问题之后，你开始写稿子。',type:'aside'},
                    {content:'一晚上的时间，你把定稿送去审核。',type:'aside'},
                    {content:'怕中间再生什么变故，你第二天依旧正常去奶茶店上班。',type:'aside'},
                    {content:'报社编辑确认内容无误，但为了便于脱身，你让编辑晚几天再发布。',type:'aside'},
            ]
        }

    ]
    const Choice=[
        [
            {content:'A.旁敲侧击问店员',gap:1},
            {content:'B.应聘成为内部员工',gap:7},
        ],
        [
            {content:'A.重新选择',gap:3},
            {content:'B.放弃重新选择',gap:1},
        ],
        [
            {content:'A.主动提出帮忙',gap:1},
            {content:'B.向其他休息的同事打探情况',gap:6},
        ]
    ]

    const certain=[
        <View 
        style={{position:'absolute',top:'0',left:'0',width:'100vw',height:'100vh',backgroundColor:'black'
            ,display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'
        }}>
            <Text style={{color:'red',fontSize:'3vw'}}>你失败了</Text>
        </View>,
    ]
    return {Info,GapInfo,Dialog,Choice,certain}
};
