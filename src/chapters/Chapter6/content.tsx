import {useGlobalContext} from "@/context/GlobalContext";
import './index.less'
import { View ,Text} from "@tarojs/components";

export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[
        '今早的天空，似乎被一层淡淡的阴霾笼罩。'+'\n'+
        '刚过10点，你坐在工位上浏览着今天的新闻。'+'\n'+
        '这时，主编从办公室里匆忙出来：',

        '这可是一个大新闻，但是去医院蹲守是不是不太好，万一打扰到治疗了呢……\n你纠结着，决定：'

    ]

    const GapInfo=[
        {content:'这时，手机收到了推送消息，已经有媒体将Y先生逝世的消息发布了。'+'\n'+
            '接着就是报社那边的电话，一直追问你消息确认清楚了没有。'+'\n'+
            '你坚称医生那边还没有确切的消息，让他们不要轻易转载那条消息。',type:'blue'},
        {content:`“这次多亏${nickname}严格把关，才没有让假新闻从我们这边流出去。\n你们以后也要注意，消息审核务必严谨！\n”台下，一阵热烈的掌声，为你。`,type:'blue'},
        {content:'挂断电话后，一则“Y先生医治无效，于今日逝世”的新闻由你所在的报社发布，评论区下面是一众网友的哀悼。\n'+
         '没想到，Y先生的家人随即在社交媒体上澄清：假的！Y先生还在抢救。\n'+
        '看到回应，报社迅速删除了那条假的逝世消息，并真诚地向Y先生及其家人致以歉意，表示会深刻反思此次错误。',type:'blue'},
        {content:'网上的评论如洪水猛兽一般向你袭来，你一阵耳鸣，大脑停止了思考。\n'+
            '最后的记忆，停留在电话里主编的声音：\n'+
            '“这种事的后果也不用我说了，你回家反思几天吧……”',type:'green'},
            {
                content:'你们报社迅速删除了这条新闻，并发布了一则真诚的道歉声明。'+'\n'+
                    '但是网友们并不买账，甚至有人把这次发出来假新闻的媒体做了一个汇总，声称要将这些媒体钉在耻辱柱上，你们报社自然名列其中。'+'\n'+
                    '你作为当时支持转载新闻的一员，终究是引祸上身了。',type:'green'},
                {content:'你们报社抓紧时间编辑消息，将此新闻发布在网上，这一大反转让你们的新闻热度直线攀升。'+'\n'+
                    '“我们大家都要从这件事吸取经验，以后要注意，消息审核务必严谨！”主编有些后怕地拍了拍胸口，长舒一口气。'+'\n'+
                    '你看向一开始不满的那几个人，他们只是默默地坐在位置上，敲着键盘不知道在做些什么。'+'\n'+
                    '而此次事件的相关人员，从协助伪造新闻者到新闻审核者，也都受到了不同程度的处理。',type:'blue'}
                                
                ]
    const Dialog=[
        {
            others:{
            name:'',
            imgurl:'',
            self:'hands_down',
            },
            content:[
                {content:'你纠结着，决定：',type:'me'},
                ]
        },
        {
            others:{
            name:'',
            imgurl:'',
            self:'emo',
            },
            content:[
                {content:'你赶忙收拾好东西，开车前往医院。',type:'aside'},
                {content:'你到医院的时候，已经有很多同行到了，大家都不能直接进入病区，只能在医院门口徘徊等待。',type:'aside'},
                {content:'你看到旁边有个空位，便随地坐下一边等，一边尝试找人帮你和内部人员搭线，好得到更准确的消息。',type:'aside'},
                {content:'突然，周围嘈杂起来，你听到其他媒体的记者在说Y先生抢救失败，已经逝世了，大家都纷纷打电话将消息传回各自的媒体。',type:'aside'},
                {content:'你也慌忙地给主编打了电话。',type:'aside'},  
            ]
        },
        {
            others:{
            name:'',
            imgurl:'',
            self:'emo',
            },
            content:[
                {content:'主编，Y先生好像已经去世了。',type:'me'},
                {content:'不知道那个记者是从哪儿得到的消息，明明大家都进不去，听不到医生怎么说的……',type:'me'},
                {content:'但是大家都在给自家媒体发消息，应该没有什么问题，要不让报社那边抓紧时间发出去？',type:'me'}
                ]
        }
        ,
        {others:{
            name:'路过记者',
            imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEAbR9pGM5a0duaa.nqPZ64k3qHHFl73bC7E5uyqogDPIQVPthvDOFL2uzNlj4lmZ6sI8*NGf9xn91BC9uR1l9qg!/b&bo=7gQ4BAAAAAADF.Q!&rf=viewer_4',
            self:'emo',
        },
        content:[
            {content:'挂断电话后，你连忙拦着路过的一位记者，问他清不清楚消息是从哪儿来的。',type:'aside'},
            {content:'是那个记者说的，他说是从医院里的一个熟人那儿听到的。',type:'aside'},
             {content:'好像是那人在手术室附近听见一群人说什么‘不行了’之类的。',type:'aside'},
            ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'先前托人联系的内部人员也有了回复，你拿到了Y先生秘书的电话。',type:'aside'},
            {content:'你好，我是R社的记者，请问Y先生现在情况如何了？”',type:'aside'},  
            ]
        },
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'话落的一瞬间，你的消息发送了出去。',type:'aside'},
            {content:'你：主编，Y先生还在抢救，你们那边发出去吧。',type:'aside'},
            ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'hands_down',
        },
        content:[
            {content:'你的一位同事主动提出去医院打探消息，你继续待在报社里处理工作，和报社的所有同事一起等待消息。',type:'aside'},
            {content:'你的手机屏幕突然亮起，是一则新闻推送——有媒体消息称Y先生已经逝世，紧接着很多媒体接二连三地开始转载，这件事情的热度也越来越高。',type:'aside'},
            {content:'主编打电话给去医院蹲守的那个同事，问这个消息是否属实，对面说暂且无法确认消息来源，也并未收到医院医生的正式通告。',type:'aside'},
            {content:'挂了电话，办公室里的人面面相觑。',type:'aside'}
            ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'hands_down',
        },
        content:[
            {content:'你的选择是？',type:'aside'},
             ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'hands_down',
        },
        content:[
            {content:'最终，你们还是决定转载此消息。',type:'aside'},
            {content:'很多读者都在评论区下面哀悼。因为Y先生自身的高知名度，这条消息轰动一时，整体的数据和热度都很不错。',type:'aside'},
            {content:'然而，没过一会儿，Y先生的家人就在社交媒体上澄清：假的！Y先生还在抢救。',type:'aside'},
            {content:'评论区的留言也迅速转向。',type:'aside'},
             ]
        } ,
        {others:{
            name:'',
            imgurl:'',
            self:'hands_down',
        },
        content:[
            {content:' 保险起见，你们决定还是等消息确定后再发布。',type:'aside'},
            {content:' 看着网络上这件事的热度越来越高，有些人表示不满：放着这么火的事情不发，不知道在犹豫什么……',type:'aside'},
            {content:' 就在这时，在医院的同事传来了最新的消息：Y先生经过抢救，已脱离生命危险，但现在仍在观察中。',type:'aside'}]
        }
    ]
    const Choice=[ 
        [{content:'A.主编，我愿意去！',gap:1},
        {content:'B.还是不去打扰了吧',gap:19}],

        [{content:'A.我再核实一下，确认后给您答复',gap:1},
        {content:'B.确定，这边记者都在给自家媒体传送消息呢',gap:11}],

        [{content:'A.跟着转载，其他媒体发出的东西不会有问题',gap:1},
        {content:'B.还是等消息确定之后再发',gap:6}],

    ]
    const certain=[
        <View className="montor_word"></View>,
        <View className="monter_phone montor_phone_content"></View>,
        <View className="fire_page">
            <Text>抢救失败的消息不是医生正式宣布的。</Text>
        </View>,
        <View className="mishu_phone "></View>,
        <View className="fire_page">
            <View>你所在的报社第一时间在网络上公布了这一消息。</View>
            <View>舆论迅速转向，首发逝世消息的媒体受到千夫所指。</View>
            <Text style={{marginLeft:'20vw'}}>“消息都是假的，审核是干什么用的？”</Text>
            <Text style={{marginLeft:'0vw'}}> “某些媒体真是丢人啊”</Text>
            <Text style={{marginLeft:'13vw'}}>“现在做新闻门槛怪低的，什么假东西都能发出来”</Text>
            <Text >“媒体真的是为了流量什么事儿都敢干”</Text>
            <Text style={{marginLeft:'60w'}}> “这简直是吃人血馒头！连人的生死都可以随便造谣了，一定要追责！”</Text>
        </View>,
        <> 
        <View className="glass_break"></View>
         <View className="fire_page" >
            <Text style={{marginLeft:'20vw'}}>“消息都是假的，审核是干什么用的？”</Text>
            <Text style={{marginLeft:'0vw'}}> “某些媒体真是丢人啊”</Text>
            <Text style={{marginLeft:'13vw'}}>“现在做新闻门槛怪低的，什么假东西都能发出来”</Text>
            <Text >“媒体真的是为了流量什么事儿都敢干”</Text>
            <Text style={{marginLeft:'60w'}}> “这简直是吃人血馒头！连人的生死都可以随便造谣了，一定要追责！”</Text>
        </View>
        </>,
        <View className="temmate_words"></View>,
        <View className="fire_page">
            <Text style={{marginLeft:'20vw'}}>“消息都是假的，审核是干什么用的？”</Text>
            <Text style={{marginLeft:'0vw'}}> “某些媒体真是丢人啊”</Text>
            <Text style={{marginLeft:'13vw'}}>“现在做新闻门槛怪低的，什么假东西都能发出来”</Text>
            <Text >“媒体真的是为了流量什么事儿都敢干”</Text>
            <Text style={{marginLeft:'60w'}}> “这简直是吃人血馒头！连人的生死都可以随便造谣了，一定要追责！”</Text>
        </View>
    ]
    return {Info,GapInfo,Dialog,Choice,certain}
};
