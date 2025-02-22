import {useGlobalContext} from "@/context/GlobalContext";
import Tipboard from "@/pages/gameChapters/chapter0/components/tipboard";
import { View } from "@tarojs/components";

export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[
        '结束了所有案例的学习，你开始动笔写总结报告。',

        '那个被收买成为政府机构代言人的记者，是新闻寻租的哪一类？',

        '选错了，再看看呢',

        '矿方为掩盖矿难事实给记者发钱，是新闻寻租的哪一类？',

        '“给钱就发稿”的刊物，是新闻寻租的哪一类？',

        '“新闻圣徒”的陨落，是新闻寻租的哪一类？',

        '介绍国内精神疾病专家的文章，是新闻寻租的哪一类？',

        '新闻寻租的问题简直是贯彻了新闻报道的始终！以后可得当心，不能踩了坑……'

     ]
    const GapInfo=[
    
    ]
    const Dialog=[
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'周一，按照惯例要开个集体会，于是你早早就到了报社。',type:'aside'},
                    {content:'会后，王老师叫住你了。',type:'aside'},
                    {content:`${nickname}来跟我一块儿看点资料，看完之后总结一份报告给我。`,type:'teammate'},
                    {content:'你怔了怔，反应了一下才想起来刚才开会讲的内容。',type:'aside'},
            ]
        },
        {
            others:{
                name:'领导',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGnntQgNgQFrtMk5ySORO58Y4z7HDiMH2WXXsmvFnwttQFsB3jyNOFwgGsVV3d5Z1K3Sk9xQNFs.jyZugVcWr4M!/b&bo=OARkBAAAAAADF24!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'最近有个媒体记者收钱写新闻的事儿在网上闹得沸沸扬扬，想必大家也听说了。',type:'teammate'},
                    {content:'这件事给我们媒体造成了极其恶劣的影响，官方也下发通知要求新闻媒体统一整改、严格管理，新闻记者加强新闻道德与伦理规范的学习。',type:'teammate'},
                    {content:'会后，各部门主要负责人留一下，我交代一下具体要求。',type:'teammate'},
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'你跟着王老师到了他的办公室，他在柜子里翻翻找找，拿出厚厚的一沓资料堆在办公桌上。',type:'aside'},
                    {content:'新闻寻租这个问题在你刚来的时候就让你接触过，今天看来是得系统讲一下了。',type:'teammate'},
                    {content:'来看看，想从哪里开始？',type:'teammate'},
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'这是典型的记者受贿写新闻，有没有觉得很熟悉？',type:'teammate'},
                    {content:'和陈永洲事件是一个类型的？',type:'me'},
                    {content:'没错，不过陈永洲事件属于商业上的恶性竞争，这个例子可就进入政治领域了。',type:'teammate'},
                    {content:'如果记者为了私利，和一些有异心的政治势力勾结，那影响更是严重！正常的社会秩序都要被扰乱了……',type:'me'},
                    {content:'特别是像这个例子里面的，牵扯到各国之间的政治斗争，如果为了一时私利做出损害别国甚至是本国国家利益的报道……',type:'teammate'},
                    {content:'后果更是不堪设想！在钱权利的诱惑下散播有失偏颇甚至是虚假的信息，轻则损害的是记者自己的名誉，重则威胁国际和平、国家安全，是坚决不可取的……',type:'me'},
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'200多个记者？难以想象……更可怕的是竟然没有人拒绝。',type:'me'},
                    {content:'这就是新闻寻租的另一种典型形式——收封口费。我们工作中最容易出现这种情况，你之后也有可能会碰到。',type:'teammate'},
                    {content:'当时这件事动静太大，还引来一群不知道什么身份的人，冒充记者来领钱。所以这200多个人里，有多少是真记者，多少是假记者，就不得而知了……',type:'teammate'},
                    {content:'假记者是可恨，但更该恨的是那些违背良知的真记者。',type:'me'},
                    {content:'“封口费”封的是正义的声音，如果媒体记者都不能把真相公之于众，那老百姓的切身利益谁来守护呢……',type:'me'},
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'老师，这份刊物也是非法出版物吧，从“给钱就给发稿”这一特点来看，它既没有合法程序，也没有经过有关部门审批。',type:'me'},
                    {content:'是的，这一系列活动看似与新闻传播有关，其性质却是利用记者身份谋取私利。',type:'teammate'},
                    {content:'这帮人已经视记者的职业操守为无知，视新闻出版规定如无物，视新闻媒体人的职业道德如无形，更遑论更高的职业追求和新闻理想。',type:'teammate'},
                    {content:'如果这样的事件多了，记者的公信力就全被这帮人败坏了，还有谁能相信我们真正的记者呢？',type:'me'},
                    {content:'“第四种权力”已经变成了一些“记者”编织权力关系网的登云梯，如果不加以整改，使记者回归本质的采写编评工作上来，这个行业在不久的将来将会遭受颠覆性破坏和毁灭性打击。',type:'teammate'},
                    {content:'唉，如果每个从业人员都能坚守职业道德该多好……',type:'me'},
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'确实，我国媒体面临的困难而复杂局面。投融资渠道不畅，收入来源单一，生存压力大。',type:'teammate'},
                    {content:'在这种形势下，职业道德也经受着严峻考验，但我们不能丧失我们作为新闻工作者的职业理想。',type:'teammate'},
                    {content:'要做“新闻的圣徒”，不做“金钱的囚徒”。',type:'me'},
                    {content:'媒介体制应该来一个大手术，重提新闻理想，审视当下的传媒体制，拉响防范新闻敲诈的警钟，创造条件让新闻圣徒永葆本色。',type:'teammate'},
                    {content:'希望我国媒体行业在未来能够更加健康地发展。',type:'me'}
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'这件事是因为什么被列进来的？看起来很正常……',type:'me'},
                    {content:'这就是很多读者容易弄混的一种情况，记者本身在报道时也可能不经意间出错。',type:'teammate'},
                    {content:'你再仔细看看，哪里有不对的。',type:'teammate'}
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'你对这一点也把握不到位啊，以后可得注意！',type:'teammate'},
                    {content:'这是典型的把新闻和广告混淆的情况，看似是一篇关于医学专家的人物通讯，实际上最后那里的专家会诊信息就暴露了这篇文章的本质——打广告！',type:'teammate'},
                    {content:'媒体并不是不能打广告，但前提是不能把广告和新闻混为一谈。',type:'teammate'},
                    {content:'有些商家为了更好的传播效果，或者是更大的利润，就给记者高额的广告费，让他们把广告以新闻的形式策划、发布出来。',type:'teammate'},
                    {content:'新闻的形式显然更具有说服力，但这样是很容易误导读者的。',type:'teammate'},
                    {content:'不得混淆新闻和广告的界限，不得以新闻的形式发布广告，这都是作为新闻工作者最基本的伦理规范。',type:'teammate'},
                    {content:'之前是我忽略这一点了，这次学到了！',type:'me'},
            ]
        },
        {
            others:{
                name:'王老师',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'没错，你对这一点把握还是挺到位的。',type:'teammate'},
                    {content:'这是典型的把新闻和广告混淆的情况，看似是一篇关于医学专家的人物通讯，实际上最后那里的专家会诊信息就暴露了这篇文章的本质——打广告！',type:'teammate'},
                    {content:'媒体并不是不能打广告，但前提是不能把广告和新闻混为一谈。',type:'teammate'},
                    {content:'有些商家为了更好的传播效果，或者是更大的利润，就给记者高额的广告费，让他们把广告以新闻的形式策划、发布出来。',type:'teammate'},
                    {content:'新闻的形式更有说服力，能更让读者相信，但这明显是在误导读者，根本不是客观报道！',type:'me'},
                    {content:'是的，不得混淆新闻和广告的界限，不得以新闻的形式发布广告，这些事作为新闻工作者最基本的伦理规范，务必留意。',type:'teammate'},
            ]
        },
    ]
    const Choice=[
        [
            {content:'A.对两位专家的介绍',gap:1},
            {content:'B.“生物因子修复疗法”',gap:1},
            {content:'C.情绪与健康之间的关系',gap:1},
            {content:'D.专家问答',gap:1},
            {content:'E.专家会诊信息',gap:3}
        ],
        [
            {content:'A.受贿写新闻',gap:3},
            {content:'B.收取“封口费”',gap:1},
            {content:'C.以宣传为名主动索贿',gap:1},
            {content:'D.利用舆论监督敲诈勒索',gap:1},
            {content:'E.混淆新闻与广告',gap:1},
        ],
        [
            {content:'A.受贿写新闻',gap:1},
            {content:'B.收取“封口费”',gap:3},
            {content:'C.以宣传为名主动索贿',gap:1},
            {content:'D.利用舆论监督敲诈勒索',gap:1},
            {content:'E.混淆新闻与广告',gap:1}
        ],
        [
            {content:'A.受贿写新闻',gap:1},
            {content:'B.收取“封口费”',gap:1},
            {content:'C.以宣传为名主动索贿',gap:3},
            {content:'D.利用舆论监督敲诈勒索',gap:1},
            {content:'E.混淆新闻与广告',gap:1},
        ],
        [
            {content:'A.受贿写新闻',gap:1},
            {content:'B.收取“封口费”',gap:1},
            {content:'C.以宣传为名主动索贿',gap:1},
            {content:'D.利用舆论监督敲诈勒索',gap:3},
            {content:'E.混淆新闻与广告',gap:1},
        ],
        [
            {content:'A.受贿写新闻',gap:1},
            {content:'B.收取“封口费”',gap:1},
            {content:'C.以宣传为名主动索贿',gap:1},
            {content:'D.利用舆论监督敲诈勒索',gap:1},
            {content:'E.混淆新闻与广告',gap:3},
        ],
    ]
    const info_content=[
        ['','一国主流媒体记者竟然是被收买的“代言人”？某年，外国一知名资深记者在接受采访时承认，他长期受贿，为西方作不公正、不客观的报道。“不光是我，很多西方记者都是这样。”这个记者说，曾经D国的一名情报局官员Q先生来找他，让他写一篇关于B国最高领导人K先生的文章。然而，这个记者一点儿都不了解B国和K先生，不知道该怎么写。没想到，Q先生直接给了他一篇已经完成的报道，报道内容是揭露“K先生制造化学武器、威胁其他国家的安全”。拿钱办事，第二天，这篇报道就署上了这名记者的名字并登报。不过几天的时间，整个西方媒体都按照这种调性来进行报道。“这难道是新闻自由和客观报道吗？”这个记者扪心自问。'],
        ['','某地一煤矿曾发生事故，导致一名矿工死亡。事故发生近一周后，一名记者接到自称该矿工人的举报，说矿方在事发后，没有将矿难死亡事故向上级汇报，反而想把这件事封杀。为了阻挠媒体报道，该矿负责人向前来采访的记者发放“封口费”。事故发生的第三天，有来自全国各地媒体的200多人聚集在煤矿办公楼领取“封口费”。这个记者接到举报后，前往现场拍下了发放“封口费”以及其他记者排队领钱的画面，并将其曝光了出去。这件事一经报道，矿方相关人员就受到查处，收受封口费的记者也受到了严厉的惩罚。'],
        ['','五年前，一位自称海外归国人士的W先生在D省创办刊物，聘请了并不具备记者从业资格证的L先生作为助手，诓骗企业“给钱就给发稿”，获取大量利益。五年后，W先生在海外创办“世界富商联合会”，凭借其五年内的人脉积淀，大肆拉拢各企事业高层、政府官员入会，收会费、拉赞助、搞培训、搞活动等敛财方式层出不穷。然而，海外创办的“世界富商联合会”网站定位却在D省，官方交易银行一直是D省下设的一个支行，就连海外归国人士的身份也是假的，W先生是土生土长的D省人。就这样一个看似漏洞百出的骗局，却存活了长达五年时间才被揭穿，说到底还是利用了大家对于“记者”这一身份的信任与支持，即使有时这个记者并不见得是真的。'],
        ['','“今日，沪市公安局宣布侦破一起以舆论监督为幌子、通过有偿新闻非法获取巨额利益的特大新闻敲诈案件，多名犯罪嫌疑人被依法采取刑事强制措施。”涉及人数之多，时间之长，范围之广，数额之大，罪名之多让人瞠目结舌。敲诈勒索、强迫交易、贪污受贿、职务侵占、挪用资金，曾经充满新闻理想的一代新闻圣徒就此陨落，整个社会为之震惊……“在我的工作职责发生变化的时候，我不仅是一个媒体人，同时也是一个媒体的经营管理者。在现实操作层面，我确实违背了在新闻操守层面的基本观念。”“虽然我们内部规章制度严格禁止此类事情，我们平时也三令五申说过，但在日常执行过程中，我是默认的，某种程度上起到了推波助澜的作用。”“我觉得这种变化让我有一种被撕裂的感觉；我觉得我违背了当初自己对新闻行业的承诺；所以，我觉得非常后悔。”但，后悔真的有用吗？'],
        ['','国内某家报纸曾刊登了一篇题为《抑郁症——现代人的杀手》的报道。这篇文章中介绍了两位神经内科专家。二人在失眠、神经衰弱、抑郁症及精神障碍的治疗领域深耕二十余年，他们所研发的“生物因子修复疗法”，帮助众多患者在约一周的治疗周期内实现病情好转，症状逐步缓解，快速恢复健康。这篇报道还探讨了情绪与健康之间的关系，强调保持积极乐观的心态对身体健康大有裨益，而像悲伤、焦虑、恐惧、愤怒等负面情绪，若长期存在，可能成为诱发疾病的潜在因素，对身心健康构成严重威胁。报道的后半部分还采用了专家问答的形式，详细解答了读者关于抑郁症的症状表现、潜在危害及有效治疗方法等方面的疑问，并提供了专家会诊的相关信息。']
    ]
    const certain=[
        <View style={{position:'absolute',top:'0',left:'0',width:'100vw',height:'100vh',backgroundSize:'100% 100%',backgroundImage:`url('https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEG2NkjONynNDM5Ug2rt5o4I.E4d.YGzxIkpMhgedFo4JJMncJ0.0Z4aSjg40X9RCbEYnc8Csd3gQJLsb6m7EX6g!/b&bo=XQc4BAAAAAADh8Q!&rf=viewer_4')`}}></View>,
        <Tipboard content={info_content[0]} onclose={()=>{}}></Tipboard>,
        <Tipboard content={info_content[1]} onclose={()=>{}}></Tipboard>,
        <Tipboard content={info_content[2]} onclose={()=>{}}></Tipboard>,
        <Tipboard content={info_content[3]} onclose={()=>{}}></Tipboard>,
        <Tipboard content={info_content[4]} onclose={()=>{}}></Tipboard>,
    ]
    return {Info,GapInfo,Dialog,Choice,certain}
};
