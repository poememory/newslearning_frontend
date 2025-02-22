import {useGlobalContext} from "@/context/GlobalContext";
import './index.less'
import { View ,Text} from "@tarojs/components";

export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[
        '新的一周开始了，又到了提交选题的时候。'+'\n'+
        '你想起之前接到的一个电话。',

        '政府新出台了相关政策文件，食品安全正是最近的热门话题。'+
        '结合举报电话，一篇关于“纸馅包子”的选题策划成型。'+
        '选题会上汇报之后，这一方案得到了领导的认可，你也成了这个选题的负责人。',

        '你开始去包子店周边走访调查。'+'\n'+
        '然而，你耗费了大量的精力，从自己买来尝、到打探包子店老板和常客的口风，用尽各种方法，都找不到任何证据证明这家包子店有违规操作。'+'\n'+
        '……是假的吗？',

        '手机上，领导一条条催促的信息发来。'

    ]

    const GapInfo=[
        {content:'你伪造新闻事实，严重损害了商家的声誉，因此受到了相应的处罚。\n'+
        '不过，你主动承认，因而从轻处理。\n'+
        '而此次事件的相关人员，从协助伪造新闻者到新闻审核者，也都受到了不同程度的处理。',type:'blue'},
        {content:'有关部门大规模排查后，发现这一事件是伪造出来的虚假新闻。\n'+
        '调查结果公布后，社内领导轮番质问你究竟是怎么做出来这一报道的。\n'+
        '迫于压力，你最后还是承认了伪造新闻的事实。\n'+
        '真相大白之后，你因为伪造新闻事实，严重损害商家声誉，造成了恶劣的社会影响，受到了严厉的惩罚。\n'+
        '而此次事件的相关人员，从协助伪造新闻者到新闻审核者，也都受到了不同程度的处理。',type:'green'},

                                
                ]
    const Dialog=[
        {
            others:{
            name:'未知联系人',
            imgurl:'',
            self:'hands_down',
            },
            content:[
                {content:'你好，我……我要举报！',type:'ohters'},
                {content:'M路上有一家Z包子店，也算是我们这边有名的店了，但是我从他们家包子里吃出了纸屑！',type:'ohters'},
                {content:'我找他们理论，他们根本不承认！ ',type:'ohters'},
                {content:'他们肯定心里有鬼，你们媒体能不能去曝光一下，赶紧让这种祸害倒闭了！',type:'ohters'},
                ]
        },
        {
            others:{
            name:'',
            imgurl:'',
            self:'emo',
            },
            content:[
                {content:'你后悔自己这么草率地把不明来源、不明真假的消息当作选题上报，如今无从取证，稿子自然是写不下去了……',type:'aside'},
                {content:'可这是你转正的第一个选题，花费了你大量的时间和精力。',type:'aside'},
                {content:'如果这个都交不上去的话，恐怕这个月只能拿到那一点点的基本工资了。',type:'aside'},
                {content:'你又要租房子又要生活，日常开销也不少。',type:'aside'},
                {content:'之前实习期的工资又少得可怜，现在手头压根没有什么积蓄。',type:'aside'},  
                {content:'到底怎么办呢？',type:'aside'},  
            ]
        },
        {
            others:{
            name:'',
            imgurl:'',
            self:'emo',
            },
            content:[
                {content:'你想要重新寻找选题，然而截止日期将至，慌乱之下，你找不到一点灵感。‘',type:'me'},
                {content:'看着领导催促时的语气越来越不耐烦，你急得团团转。',type:'me'},
                {content:'无奈之下，你又回到了“纸馅包子”选题，想要死马当成活马医，试图自行将这一选题圆回来。',type:'me'}
                ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'虽然你没有确切的证据，只有一条群众热线，但你相信无风不起浪，“纸馅包子”在市面上肯定是存在的。',type:'aside'},
            {content:'“说不定我这样报道能误打误撞把店家诈出来……”',type:'aside'},
            {content:'思虑再三，你决定策划一则“揭露纸馅包子”的新闻。',type:'aside'},
            {content:'按照你个人的倾向，你选择以这种形式来报道：',type:'aside'},
            ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'在你的运作下，你按照计划伪造出了一则报道。',type:'aside'},
            {content:'有意设计出来的拍摄内容配合着细节满满而具有诱导性的文字，看起来和别的深度报道没什么两样。',type:'aside'},
            {content:'将报道传给审核的时候，你内心忐忑不安，生怕被发现问题。',type:'aside'},
            {content:'但好在，审核并未提出任何质疑，你的报道顺利地发布了出去。',type:'aside'},
            {content:'发出后，你的报道一时间引发了轰动。',type:'aside'},
            {content:'不仅你的同事、领导纷纷叫好，国内的多家媒体也相继转载，引起了大家对于食品安全问题的担忧。',type:'aside'},
            {content:'当地食品卫生局迅速反应，着手展开调查。',type:'aside'},
            {content:'随着事态扩大，你的内心越发惶恐不安。',type:'aside'},
            {content:'我应该站出来澄清事实，及时止损，不能让事态再扩大了！再这样下去迟早要出大事！',type:'aside'},
            {content:'但是，无风不起浪，有群众反映说明这种问题是存在的，应该不会查出这是我策划出来的新闻吧？说不定他们还真查出来制作、售卖“纸馅包子”的商家呢……',type:'aside'},
            {content:'我坚决不能承认这件事情，如果承认了，那我以后在这家媒体、这个行业还怎么干下去啊？说不定还要坐牢呢！这可怎么办啊……',type:'aside'},
            {content:'你的内心十分挣扎。纠结了很久，你作出决定:',type:'aside'},  
            ]
        }
       
    ]
    const Choice=[ 
        [{content:'A.另找选题，重新做起',gap:1},
        {content:'B.自行创造“纸馅包子”，将选题圆回来',gap:4}],

        [{content:'A.图文描述店家“制作纸馅包子”',gap:1},
        {content:'B.视频呈现店家“制作纸馅包子“',gap:1}],

        [{content:'A.澄清真相',gap:1},
        {content:'B.默不作声',gap:4}],

    ]
    const certain=[
        <View className="boss_info"></View>,
        <View className="newspaper"></View>
    ]
    return {Info,GapInfo,Dialog,Choice,certain}
};
