import {useGlobalContext} from "@/context/GlobalContext";
import './index.less'
import { View ,Text} from "@tarojs/components";


export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[
        
    ]

    const GapInfo=[
        {content:'报道发出之后，一时间得到了广泛的关注。'+'\n'+
            '各大媒体相继转载，报道中暖心帮清洁工撑伞的小女孩被大家纷纷夸赞。'+'\n'+
            '但是，在一众好评声中，你偶然留意到这样一条画风与其他明显不同的评论：'+'\n'+
            '“这伞logo怎么漏出来了？不会是故意打广告吧？”'+'\n'+
            '看见这条评论，你内心惴惴不安。'+'\n'+
            '要不还是再去找一下当事人核实一下，万一真是假的呢……'+'\n'+
            '但这可是我审核中出现的漏洞，如果是有意策划的，那我不就是发假新闻了吗？'+'\n'+
            '这要是爆出去了我还怎么在业内混……'+'\n'+
            '不过这条评论看起来也没什么人关注，应该不会掀起什么波澜吧……',type:'blue'},
        {content:'作为新闻事实的把关人，你没有尽到自己的职责，\n你的疏忽让一条不明来源、不明真假的消息流传出去，这是职业道德的丧失，\n你也为此得到了相应的处罚。\n但好在，你及时承认错误，事态还没有进入不可挽回的地步。\n受了一阵子业内的批评后，这件事也慢慢淡下去了.',type:'blue'},
        {content:'那下一次呢',type:'green'},
        {content:'一开始，领导有些质疑你的说法，\n毕竟这篇报道得到了知名媒体的发布和转载。'+'\n'+
            '但听你详细讲述了这起事件中的漏洞，还有你和清洁工的交流之后，领导同意你将真相报道出去。'+'\n'+
            '你迅速写出了一篇报道，将事件全貌完完整整地描述了下来，\n声明这是一场别有用心的商业策划，经审核完毕后就发布了出去。'+'\n'+
            '报道刚发布也同样遭到了民众的质疑，觉得你是为了反向“蹭热度”。\n但随着关注度的不断提升，有目击者站出来作证，也有人赞同你报道中指出的事件疑点。不久，首发这起事件的媒体将原新闻删除，并发布了一则澄清，承认该事件为商业策划。'+'\n'+
            '你的报道吸引了大量关注，人们纷纷称赞这才是真正负责任的记者。你因此得到报社的嘉奖，也成为业内赞誉的模范和榜样。',type:'green'},
            {
                content:'你不想在这件事热度正高的时候和舆论唱反调，因此并没有将真相说出来，而是沉默地看着同事将已经编辑好的新闻发了出去。'+'\n'+
                            '没过多久，就有网友指出新闻照片里的那把伞漏出来了logo，有商业炒作的嫌疑。'+'\n'+
                            '首发新闻的那家媒体迅速反应，删除原新闻的同时也澄清了事实真相。'+'\n'+
                            '你们报社也赶紧删掉了这篇新闻，而你全程无参与，并未被卷入假新闻的风波之中。',type:'green'}
            
                ]
    const Dialog=[
        {others:{
            name:'',
            imgurl:'',
            self:'common',
        },
        content:[
            {content:'这件事挺有价值的，我得赶紧去现场了解清楚。',type:'me'},
            ]
        },
        {others:{
            name:'报料人',
            imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGegN*Yglu97vWofmiPu1rEBroYWdmQ6Q4n4qU3LtsYbEUTjI8OQpDkik*995gdkXkuRK6Qfd156K0MF3YK.6ik!/b&bo=rQQ4BAAAAAADF6c!&rf=viewer_4',
            self:'common',
        },
        content:[
            {content:'看完短信，你随即前往现场，和报料人联系之后见了面。',type:'aside'},
            {content:'其实我跟同事我俩一开始也没想帮忙，但是那个小姑娘挺打动我们的，就帮着把那个清洁工大姐抬到阴凉一点儿的地方，等她缓过来就送去诊所了。',type:'t'},
            {content:'你们送到哪家诊所了？我想找她了解一下情况。',type:'me'},
            {content:'嗯……那个诊所也没名字，进去也就只有一个大夫在，估计不是很正规，但是应急嘛…',type:'t'},
            {content:'那可以带我去那里看一下吗？',type:'me'},
            {content:'清洁工大姐是这件事里的关键人物，你还是想采访到她。',type:'aside'},
            {content:'哎……我也还有事要忙，大概就是那边，”报料人手指了一个方向，“你去那儿找找看吧，不过估计那个大姐已经走了。”',type:'t'},
            {content:'说罢，报料人匆匆离开了。',type:'aside'},
            {content:'你顺着他指的方向找了半天，也没有找到那家诊所，只好返回原地，向周边人打听这件事。',type:'aside'}
            ]
        },
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'信息大致拼凑完整了，你回到报社，动笔开始写这篇报道。写着写着发现，这件事中间还存在一些疑问。你再次拨打报料人的电话，那头却传来一阵忙音，尝试了几次都是打不通。',type:'aside'},
            {content:'看着这篇已经成型的报道，你打算：',type:'aside'}
            ]
        }
        ,
        {others:{
            name:'清洁工',
            imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEENBffElRTUm2uWHROC6zc98fg1A.iyF1QCU.4IEtYxjHlEAJDLI8h9O66TFbZtepf1wH*gVgs9Kys9SUXZt0yc!/b&bo=rQQ4BAAAAAADB7c!&rf=viewer_4',
            self:'emo',
        },
        content:[
            {content:'几经波折，好在你终于找到了照片中晕倒的清洁工大姐。',type:'aside'},
            {content:'哎，他们当时说给我二百块钱，让我拍个公益广告。我也没想那么多，就按他们说的拍了。没想到后来登上新闻了。',type:'t'},
            {content:'看见新闻的时候我就怕出问题，就问当时让我拍广告的那个人怎么办，然后他就又塞给我一千块钱，让我别说出去……',type:'t'},
            {content:'除了我以外，还有别的人问过你这些问题吗……',type:'me'},
            {content:'你的声音有些颤抖。',type:'aside'},
            {content:'没有了，要我说，你们媒体还是早点把这事儿说清楚，这搞得我也良心不安的……',type:'t'}
            ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'你失魂落魄地回到报社，不知如何是好。',type:'aside'},
            {content:'现在看来还没有别的媒体了解这件事，而且也没有质疑的报道出来，把这个情况说出来倒是给我自己引祸上身了……',type:'aside'},
            {content:'你思索再三，决定：',type:'aside'},    
            ]
        },
        {others:{
            name:'报社领导',
            imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEGnntQgNgQFrtMk5ySORO58Y4z7HDiMH2WXXsmvFnwttQFsB3jyNOFwgGsVV3d5Z1K3Sk9xQNFs.jyZugVcWr4M!/b&bo=OARkBAAAAAADB34!&rf=viewer_4',
            self:'emo',
        },
        content:[
            {content:'你失魂落魄地回到报社，不知如何是好。',type:'aside'},
            {content:'你也当记者这么久了，怎么能犯这么低级的错误？消息来源都不仔细审核，这以后让读者还有业内怎么看我们？你自己反省去吧……',type:'t'},
            ]
        }
        ,
        {others:{
            name:'清洁工',
            imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEENBffElRTUm2uWHROC6zc98fg1A.iyF1QCU.4IEtYxjHlEAJDLI8h9O66TFbZtepf1wH*gVgs9Kys9SUXZt0yc!/b&bo=rQQ4BAAAAAADB7c!&rf=viewer_4',
            self:'emo',
        },
        content:[
            {content:'几经波折，好在你终于找到了照片中晕倒的清洁工大姐。',type:'aside'},
            {content:'哎，他们当时说给我二百块钱，让我拍个公益广告。我也没想那么多，就按他们说的拍了。没想到后来登上新闻了。',type:'t'},
            {content:'那个小姑娘和她妈妈也是雇来的。我们在那边拍了一个多小时呢。',type:'t'},
            {content:'和大姐聊了之后，你明白了这件事的全貌：这就是一场彻头彻尾的商业策划，这群人想借媒体之手炒作自家产品！',type:'aside'},
            ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'真相浮出水面，你当即决定取消报道。',type:'aside'},
            {content:'没想到，几个小时之后，有另一家媒体将这件事报道了出来，内容与那个所谓的“报料人”所述相差无几。',type:'aside'},
            {content:'报道发出之后，一时间得到了广泛的关注。',type:'aside'},
            {content:'各大媒体相继转载，报道中暖心帮清洁工撑伞的小女孩被大家纷纷夸赞……',type:'aside'},
            {content:'你打开手机，看到领导在工作群里发的消息',type:'aside'}
             ]
        }
        ,
        {others:{
            name:'',
            imgurl:'',
            self:'emo',
        },
        content:[
            {content:'你的选择是？',type:'aside'},
             ]
        }
    ]
    const Choice=[ 
        [{content:'A.现场照片和目击者都有了，把报道发出去吧',gap:1},
        {content:'B.再找当事人了解一下具体情况吧',gap:14}],

        [{content:'A.找当事人核实',gap:1},
        {content:'B.默不作声，等待热度消退',gap:8}],

        [{content:'A.主动澄清错误',gap:1},
        {content:'B.隐瞒实情',gap:5}],

        [{content:'A.揭露真相，申请将事实报道出去',gap:1},
        {content:'B.保持沉默，避免唱反调成为众矢之的',gap:4}],
    ]
    const certain=[
        <View className="unKnow_contact"></View>,
        <View className="unKnow_letter"></View>,
        <View className="fire_page">
            <Text>纸终究包不住火。</Text>
            <View>其他媒体敏锐地捕捉到你报道中的漏洞，迅速找到当事人求证。</View>
            <View className="fire_img"></View>
            <View>第二天，一篇题为《女孩为清洁工打伞系商业炒作》的报道一经发布便引起轩然大波。</View>
            <Text>你作为这一新闻的作者，成为人们批评指责的一大焦点</Text>
        </View>,
        <View className="chat_record"></View>
    ]
    return {Info,GapInfo,Dialog,Choice,certain}
};
