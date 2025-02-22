import {useGlobalContext} from "@/context/GlobalContext";
import { View,Text } from "@tarojs/components";

export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[
        `这天休假，你到家附近的商超闲逛。
        逛到食品区的时候，你本想买一些常吃的速食产品，却看到工作人员在大批量地下架一款自热火锅。
        你向工作人员询问，这一款怎么下架了？不卖了吗？
        工作人员告诉你，最近我们收到很多顾客投诉，说这个自热火锅买回去吃起来有异味，还有很多人吃完闹肚子进了医院。恐怕这一批是瑕疵品，他们也不敢再卖了。
        你很奇怪，这个品牌是本地的正规厂家生产的，也算是小有名气。
        按正常生产流程来说，一批货里会出现一个瑕疵品就不得了了，更别提在这方面对食品行业的要求有多高。
        于是，你走访了本地其他的一些超市，竟然发现同样的结果：该品牌产品大量收到顾客的投诉。
        你察觉事情不对，于是找了个借口向超市的工作人员要了一盒已经被下架的自热火锅，随后送到本地的市场监管局进行检测。`,

        `三天后，你拿到了检测报告。果然如你所料，这款自热火锅的防腐剂含量比国家制定的标准要高！
        但这包装上印的有检测报告号，既然不合格，是怎么流入市场的呢？
        你顺着报告号去查，发现是一家第三方检测机构负责该品牌的安全检测，更可怕的是，这家机构出具的检测报告上竟然显示商品各成分合格。
        这家机构恐怕也有问题……
        你决定先从工厂开始调查。`,

        `你自称经销商与厂家取得了联系，表达合作的意向。
        交谈过程中，厂家逐渐卸下了防备，给你透露出了更多产品信息。
        你见时机差不多成熟了，就装模作样地跟厂家开始谈价钱。`,

        `回到报社后，你将偷拍到的素材整理成稿，视频画面交给同事去剪辑。
        但你还是很在意那个做假报告的检测机构，如果不趁此机会曝出来，之后要害多少人、谋多少黑心钱？
        你决定再前往检测机构收集证据，将其所作所为一并曝光。
        ……`,

        `稳妥起见，你找了个借口离开，回去之后再想办法。
        ……
        证明这家检测机构有问题，你手头有厂家的录音和你自己找有关部门检测出来的真实报告单，你决定在报道中呈现这两个证据。
        虽然你为了保险，只用一两句话提这家检测机构，但报道发出后，人们不仅强烈谴责黑心工厂，也关注到了这家机构里面的猫腻。
        这引起有关部门的重视，一方面查办这家工厂，另一方面深入调查检测机构的不法手段。`,

        `你终于拿到了报告单，然后就匆匆回到报社编稿子。
        审核完毕后，你的报道发布了出去。
        不出所料，这篇报道引起了广泛关注，有关部门迅速行动，展开调查。
        没过几天，官方通报调查结果，证实工厂确有违规生产，检测机构有做虚假报告的违法行为，将移交法院审理。`,

        `开庭的时间到了，你作为最先曝光的记者，也参与了庭审。
        然而，检测机构的负责人声称，是你故意设套让他钻了进去，他的辩护律师也声称，你的这一行为属于钓鱼取证，有引诱犯罪的嫌疑。
        你最担心的事发生了，你无力辩解，只能呆呆地坐在位置上听他们的审判。`,

        `公诉人：肃静！\n尽管记者的暗访行为未得到有关司法机关的授权或追认，但这是出于公共利益的考量，\n不存在刻意引诱违法犯罪的恶意，原审认定被告人罪名成立！
        庭审结束后，你走出了法院的大门。
        外面阳光正好，今天是一个晴天……`
    ]
    const GapInfo=[
        {
            content:`多日之后，你在网上看到了官方的通报：
该检测机构存在伪造数据行为，现对有关涉案人员进行信息公布并上报失信名单。
相关负责人判处有期徒刑五年，罚款二十万元。` ,type:'green'
}
    ]
    const Dialog=[
        {
            others:{
                name:'厂家',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENYnkYmWVXtw7wzyVxCuTchVHrDndfw.wN8W2TAdGCgjYqLrPEH0eI1.WfpAnGegNQL00YUUlW4ZSKPMY75hpq8!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'进价再便宜一点啦，就当交个朋友，以后多合作啊。',type:'me'},
                    {content:'不行不行，我们成本也不低，再便宜点我们还怎么赚钱！',type:'teammate'},
                    {content:'哎，我也不是没有准备就过来的，你们成本多少，一般给的进价是多少，我们这一行的心里都有数，你可不能因为我是个新人就坑我啊！',type:'me'},
                    {content:'厂家犹豫了一下。',type:'teammate'},
                    {content:'既然你知道，那我也不藏着掖着了，之前成本低，我能给你再低一点的进价，现在成本上去了，这个价钱给不了。',type:'teammate'},
                    {content:'这你可得给我个说法了，就这么搪塞我，我们还怎么做生意？',type:'me'},
                    {content:'厂家沉默了一会儿，然后叹了一口气，看上去下了很大决心才开口。',type:'aside'},
                    {content:'看你也是诚心合作，那我也直接摊牌了，',type:'teammate'},
                    {content:'最近我们厂生产的东西一直被投诉，其实就是防腐剂不合格。怕以后被查到头上来，我们现在就换了一批更贵一点的防腐剂，这成本肯定就上去了……',type:'teammate'},
                    {content:'你一步一步套话，终于从厂家那里了解到全貌。',type:'aside'},
                    {content:'工厂为了降低成本，购买的食材全是市场上淘汰下来的不怎么新鲜的菜，然后又用超过规定标准量的劣质防腐剂，保证自热火锅的菜不会坏得太快。',type:'aside'},
                    {content:'防腐剂含量超标了怎么办？厂家说他们给检测机构交了一笔钱，帮他们搞了一份假的检验报告单，这才让自家产品正常放到市场上卖。',type:'aside'},
                    {content:'你摸了摸藏在口袋里的录音笔。',type:'aside'},
                    {content:'只有录音恐怕还不够……',type:'aside'},
                    {content:'你提出想去加工间参观一下，厂家闻言，一道道狐疑的目光投到你身上。',type:'aside'},
                    {content:'你选择说什么？',type:'aside'},
            ]
        },
        {
            others:{
                name:'厂家',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENYnkYmWVXtw7wzyVxCuTchVHrDndfw.wN8W2TAdGCgjYqLrPEH0eI1.WfpAnGegNQL00YUUlW4ZSKPMY75hpq8!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'你真的是来合作的吗？',type:'teammate'},
                    {content:'推搡之间，你口袋里的录音笔掉了出来……',type:'aside'},
            ]
        },
        {
            others:{
                name:'厂家',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrENYnkYmWVXtw7wzyVxCuTchVHrDndfw.wN8W2TAdGCgjYqLrPEH0eI1.WfpAnGegNQL00YUUlW4ZSKPMY75hpq8!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'厂家盯了你一会儿，然后示意你跟上去。',type:'aside'},
                    {content:'你松了一口气，跟商人谈钱还是更能让他们相信的……',type:'aside'},
                    {content:'你用早就藏在衣领的针孔摄像头拍下了加工间里工人处理烂菜叶子的画面，也把厂家拿着防腐剂给你介绍的过程记录了下来，',type:'aside'},
                    {content:'你看，你就照着这个名字去查，这是我们之前用的，这是现在用的，你去查，你看现在的是不是要贵得多……',type:'teammate'},
                    {content:'你表现出一副很满意的样子，热络地跟厂家说这个朋友交定了，然后做了一些口头上的承诺，就趁机脱身了。',type:'aside'},
            ]
        },
        {
            others:{
                name:'负责人',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxtbFhw*7jgET4LSrW9zmpnQf1oVkC96lVApLeoUv6Gjxy6FbMWsAWOecfL1J.UAP8!/b&bo=OATFBQAAAAADF84!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'到了那家检测机构后，你声称有要事，要见他们的负责人。',type:'aside'},
                    {content:'您好，有什么事？',type:'teammate'},
            ]
        },
        {
            others:{
                name:'负责人',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxtbFhw*7jgET4LSrW9zmpnQf1oVkC96lVApLeoUv6Gjxy6FbMWsAWOecfL1J.UAP8!/b&bo=OATFBQAAAAADF84!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'听完录音，那个负责人脸色变了变，随即一笑。',type:'aside'},
                    {content:'您拿着这段不知道从哪里来的录音，能说明什么？',type:'teammate'},
                    {content:'您要是没有更多证据证明，那我完全可以认为您是在诽谤。',type:'teammate'},
                    {content:'如果您还想被客客气气地请出去的话，现在请您把这段“伪造”的录音交给我，好吗？',type:'teammate'},
                    {content:'……',type:'me'},
            ]
        },
        {
            others:{
                name:'负责人',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxtbFhw*7jgET4LSrW9zmpnQf1oVkC96lVApLeoUv6Gjxy6FbMWsAWOecfL1J.UAP8!/b&bo=OATFBQAAAAADF84!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'你自称是那家速食加工厂的工作人员，因为换了防腐剂的成分，所以要开具新的检测报告。',type:'aside'},
                    {content:'负责人：你们老板这次让你个新人来了？知道规矩吗？',type:'teammate'},
                    {content:'那个负责人意味不明地笑了笑，向你搓了搓手指。',type:'aside'},
                    {content:'明摆是要钱……',type:'aside'},
                    {content:'你此前和厂家交谈中套出了他们是用多少钱买的报告单，所以提前准备好了包着钱的纸袋。',type:'aside'},
                    {content:'但你不免担心，如果拿钱向他们买假报告单，之后很可能被他们反咬一口，说你是钓鱼执法。',type:'aside'},
                    {content:'但眼下看起来也没有更好的方法能拿到证据了,你决定：',type:'me'},
            ]
        },
        {
            others:{
                name:'负责人',
                imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEI7lUTCkePn5bZmlezbY6QxtbFhw*7jgET4LSrW9zmpnQf1oVkC96lVApLeoUv6Gjxy6FbMWsAWOecfL1J.UAP8!/b&bo=OATFBQAAAAADF84!&rf=viewer_4',
                self:'hands_down',
            },
            content:[       
                    {content:'你把装了两万五的纸袋塞给了负责人。',type:'aside'},
                    {content:'他从袋口往里面看了看，满意地笑了笑。',type:'aside'},
                    {content:'在这儿等几分钟，报告单一会儿就给你送过来。',type:'teammate'},
            ]
        }
    ]
    const Choice=[
        [
            {content:'A.怎么，我都要卖你们的产品了，连看一下都不行吗？',gap:1},
            {content:'B.眼见为实，谁知道你刚才说的是不是不愿意降价的借口',gap:7},
        ],
        [
            {content:'A.重新选择',gap:2},
            {content:'B.放弃重新选择',gap:1},
        ],
        [
            {content:'A.把录音亮出来当面对峙',gap:1},
            {content:'B.自称工厂工作人员',gap:6},
        ],
        [
            {content:'A.重新选择',gap:2},
            {content:'B.放弃重新选择',gap:1},
        ],
        [
            {content:'A.找借口离开',gap:1},
            {content:'B.拿钱给负责人',gap:5},
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
