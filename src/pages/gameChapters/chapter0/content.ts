import {useGlobalContext} from "@/context/GlobalContext";

export const getContent = () => {
    const { nickname } = useGlobalContext();

    const Info=[]

    const GapInfo=[
        {content:'欢迎进入大富翁（新闻道德与法规摸底版)'+'\n'+
            '我们报社将带你回顾《中国新闻工作者职业道德准则》'+'\n'+
            '同时通过行业内一些真实发生的案例，对每个新晋实习生对待新闻道德与法规的态度进行摸底。'+'\n'+
            '在此过程中，我们的带教老师也会带你从不同角度对事件进行深入剖析。'+'\n'+
            '相信你在此前也接触过，有时新闻道德与法规相关问题并没有绝对的是非对错之分，希望你认真思考，做出自己的选择，不必受到他人影响。'+'\n'+
            '下面请你投掷骰子，抽出你的个人问卷并走向终点吧!',type:'blue'},
    ]
    const Dialog=[
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       {content:`您好，我是新来的实习生${nickname}，请问您是王老师吗？`,type:'me'},
                        {content:'没错，你在实习期内就是跟着我。',type:'teammate'},
                        {content:'今天是你实习第一天，不用着急上手，先熟悉一下我们这边的工作流程就行。',type:'teammate'},
                        {content:'另外，我们报社对新来的实习生历来有个惯例：考察一下对于新闻伦理、职业道德以及法律法规的认知水平，以防正式工作中出现严重的失范问题。',type:'teammate'},
                        {content:'我现在正好有时间，就带着你做一下吧。',type:'teammate'},
                        {content:`好的！`,type:'me'},
                ]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:'迫于生计，这个记者的选择是将这一选题进行下去，是无奈之举，但也是违背了职业道德。你如何看这件事呢？',type:'teammate'}
                ]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:`这起事件中还有一个值得注意的点。${nickname}，你有没有想过这条虚假新闻为什么能够逃过层层审查制度，被大肆转载呢？`,type:'teammate'},
                {content:'......',type:'me'},
                {content:'偷拍镜头表现形式和隐性采访的叙述形式？',type:'me'}
                ]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[      
                {content:'当年多胞胎的事引起了很大的轰动，多家媒体持续关注。',type:'teammate'},
                {content:'在这之中，某家媒体抢占先机，不仅得到了首发，而且通过揭露事情原委，引导一些渴求多胞胎的夫妇理性认识人工受孕。',type:'teammate'},
                {content:'从这一点看，有人认为媒体是在履行基本职能，保障公众的知情权。',type:'teammate'},
                {content:`${nickname}，你怎么看这种报道？`,type:'teammate'}]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:'关于这件事，其实还有很多细节。',type:'teammate'},
                {content:'陈永洲说最初是受朋友之托，让帮忙发表一条关于中联重科的负面稿件，用一万块钱当报酬。',type:'teammate'},
                {content:'陈永洲收到稿件后呢，核对了一些数据，就交给同事发表了。',type:'teammate'},
                {content:'熟人求帮忙，往往会出于人情，不好意思拒绝对方，特别是还收了好处。',type:'teammate'},
                {content:'不过这件事造成这么严重的后果，也有新闻检查上的漏洞。',type:'teammate'},
                {content:`${nickname}，如果你在工作中遇到熟人求帮忙的情况，你会怎么做`,type:'teammate'}
                ]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:'这件事是国内有名的媒介审判案例，至今还存在很多争议。',type:'teammate'},
                {content:'有人认为在这起事件中，舆论直接影响了最终的判决结果。',type:'teammate'},
                {content:'一些媒体在报道中掺杂了主观情绪，有意塑造肇事者的“恶官”形象，调动起了民众的对抗心理。',type:'teammate'},
                {content:'但也有人觉得，这起事件在处理过程中，慢慢有不了了之的迹象，是媒体的披露和报道才让事件有了最终的结果。',type:'teammate'},
                {content:`${nickname}，你怎么看？`,type:'teammate'}
                ]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:'就像我们前面提到的，隐性采访在一些难以通过常规手段获得真相的情况下，能够发挥巨大的作用。',type:'teammate'},
                {content:'但这一过程的隐瞒性有时会造成公民隐私权、肖像权等的被侵犯。',type:'teammate'},
                {content:'或是像这起事件中，被质疑有引诱犯罪的倾向，容易陷入道德上的被动地位，产生伦理问题。',type:'teammate'},
                {content:`${nickname}，你怎么看隐性采访呢？`,type:'teammate'}
                ]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:'当时的情况其实很危险，后来据这两个记者所说，其实当时他们本想拒绝这位母亲的。',type:'teammate'},
                {content:'一方面他们才刚进入灾区不久，报道任务还没进行。',type:'teammate'},
                {content:'另一方面，来时的路上就十分艰险，再带一个孩子重走一遍，前途更是凶险万分。',type:'teammate'},
                {content:'这种情况下，是先救人还是先报道？',type:'teammate'},
                {content:'这一问题不仅仅是处在这一情境下的两个记者所要决定的，更是整个新闻从业者群体经常会遇到的伦理困境。',type:'teammate'},
                {content:'假如说你就是当时的记者，你会做出什么样的选择？',type:'teammate'}
                ]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:'再想想，体会一下前面的例子。',type:'teammate'},]
            },
            {
                others:{
                    name:'王老师',
                    imgurl:'https://m.qpic.cn/psc?/V538RWjT3LWaf01APMuH1IS43y3oRyH9/TmEUgtj9EK6.7V8ajmQrEJXnkfRc6HEgVxX7Oo6K9bQuWPg6vyghPHwbNQnP.4QBCXi9vIT3UlmLatNqQzulxItZGeEm*TQwh3VSdX.xvqU!/b&bo=SgQ4BAAAAAADN2A!&rf=viewer_4',
                    self:'hands_down',
                },
                content:[       
                {content:'明天就开始跟着我跑新闻吧，让你亲身感受一下记者的工作。',type:'teammate'},
                {content:'嗯嗯！',type:'me'}
                ]
            }

    ]
    const Choice=[
        [
            {content:'A.优先考虑生计这一燃眉之急无可厚非',gap:2},
            {content:'B.违背职业道德的行为不可取',gap:1}
        ],
        [
            {content:'A.揭示了人工受孕过程中使用药物的危害性及产妇经受的巨大痛苦与危险，在公众对试管婴儿知之甚少的背景下报道了新闻事实，满足了公众的知情权',gap:2},
            {content:'B.经当事人同意而公开报道其隐私，侵犯了当事人的隐私权',gap:1}
        ],
        [
            {content:'A.新闻不应该成为谋取利益的手段',gap:1},
            {content:'B.如果内容核实无误，帮忙发一篇报道也没什么',gap:4}
        ],
        [
            {content:'A.新闻报道还是要站在客观的立场',gap:1},
            {content:'B.媒体调动舆论的力量惩恶扬善是合理的',gap:2},
        ],
        [
            {content:'A.隐性采访能够获取真实的新闻材料，保障公众的知情权',gap:1},
            {content:'B.隐性采访与隐瞒甚至是欺诈并行，是不符合道德的',gap:1},
        ],
        [
            {content:'A.答应母亲，把孩子带去安全区域',gap:1},
            {content:'B.拒绝带走孩子，等待救援队到来，再前往其他地方进行报道',gap:1},
            {content:'C.拒绝带走孩子，告知救援队营救位置后离开前往其他地方进行报道',gap:1}
        ],
        [
            {content:'A.道德是 绝对 的，伦理是 相对 的',gap:3},
            {content:'B.道德是 相对 的，伦理是 绝对 的',gap:1}
        ]
    ]
    const Tip_content=[
        ['虚假新闻','某年，某栏目播出深度调查新闻“纸箱馅包子”，通过暗访形式揭露了用废纸制作包子肉馅的行业乱象，经多方转载引发广泛关注。后经证实，该新闻为被策划出的虚假报道，错漏之处多达六处。据调查称，假新闻编造者曾接到群众电话反映所报道问题，被确定为报道专题，调查后并没有发现包子质量问题，但选题已上报，压力大，加之刚进入业内，既想出名又想挣钱，于是编造了谎话。'],
        ['隐私权','曾经有多个这样的案例，河北“五胞胎”孕妇王翠英、南京“四胞胎”母亲程女士等人造多胞胎妈妈，她们从申请人工受孕，到胚胎的发育，再到待产、临产、分娩，再到宝宝们的产后健康的全过程，一些媒体全然不顾当事人不要报道的恳求，事无巨细地大版面报道，引起了新闻界同仁的广泛关注。'],
        ['新闻寻租','陈永洲事件，谁该反思？相信对于新闻业内的人来说，陈永洲事件并不陌生。本节就来带大家简单回顾一下：《新快报》记者陈永洲，在大半年的时间里写了10多篇批评性报道，直指上市公司中联重科财务作假。报道一出，中联重科遭到沉重打击，股价大幅下跌。这种情况下，公司董事长助理在网上实名斥责陈永洲“诋毁中联重科”。后来，陈永洲被警方逮捕，最终坦承是受人指使，收人钱财，发表了关于中联重科的不实报道。'],
        ['媒介审判','媒介审判还是舆论监督？这个案例告诉你：上世纪90年代，某市公安局分局长酒后驾车致一死一伤。事件发生后，当地媒体进行了相关报道。随着案件细节的不断披露，这起事件激起了全国人民的公愤，社会上要求判肇事者死刑，国内一些媒体也大肆渲染“不杀不足以平民愤”。最终，肇事者被判处死刑，死前大呼“我是被记者杀死的！”。'],
        ['隐性采访','曾经有记者根据群众举报，对当地一调查院主任出售虚假调查报告单的事进行调查。在调查过程中，记者自称是某公司工作人员，用两万五从该院的一个副部长那里换来了一份编造的报告单。后来，这件事被媒体曝光，该副部长也遭到起诉。庭审中，这个副部长认为自己是钻进了记者设下的圈套，其辩护律师也认为这是记者的“钓鱼”行为。但公诉人认为，记者是为了公共利益实施暗访，没有刻意引诱违法犯罪的恶意。'],
        ['该救人还是该报道','多年前，某地发生地震，两名记者前往震中采访。途中偶遇一对母子，母亲被倒塌的房屋压碎了盆骨，当时4岁的儿子一直守在妈妈身边，在余震不断且不知何时能脱险的情况下，母亲为了保证儿子的安全，将儿子委托给两位记者，请求他们将儿子带到安全的地方。就这样，两名记者历经4个小时，轮流背着孩子徒步走出大山，保证了孩子的生命安全。'],//
        ['《中国新闻工作者职业道德准则》','第一条 全心全意为人民服务。忠于党、忠于祖国、忠于人民，把体现党的主张与反映人民心声统一起来，把坚持正确舆论导向与通达社情民意统一起来，把坚持正面宣传为主与正确开展舆论监督统一起来，发挥党和政府联系人民群众的桥梁纽带作用。'],
        ['《中国新闻工作者职业道德准则》','第二条 坚持正确舆论导向。坚持团结稳定鼓劲、正面宣传为主，弘扬主旋律、传播正能量，不断巩固和壮大积极健康向上的主流思想舆论。'],
        ['《中国新闻工作者职业道德准则》','第三条 坚持新闻真实性原则。把真实作为新闻的生命，努力到一线、到现场采访核实，坚持深入调查研究，报道做到真实、准确、全面、客观。'],
        ['《中国新闻工作者职业道德准则》','第四条 发扬优良作风。树立正确的世界观、人生观、价值观，加强品德修养，提高综合素质，抵制不良风气，保持一身正气，接受社会监督。'],
        ['《中国新闻工作者职业道德准则》','第五条 坚持改进创新。遵循新闻传播规律和新兴媒体发展规律，创新理念、内容、体裁、形式、方法、手段、业态等，做到体现时代性、把握规律性、富于创造性。'],
        ['《中国新闻工作者职业道德准则》','第六条 遵守法律纪律。增强法治观念，遵守宪法和法律法规，遵守党的新闻工作纪律，维护国家利益和安全，保守国家秘密。'],
        ['《中国新闻工作者职业道德准则》','第七条 对外展示良好形象。努力培养世界眼光和国际视野，讲好中国故事，传播好中国声音，积极搭建中国与世界交流沟通的桥梁，展现真实、立体、全面的中国。'],
    ]
    const white_board=[
        '要记得，真实是新闻的生命，虚假新闻已经不能算是新闻了，我希望你们这些新闻界的新鲜血液，不管在什么情况，都能做到最基本的新闻真实，不要让我失望，也不要让自己失望啊！谎言终究会被戳穿，像这条新闻的编造者最后就受到了法律的制裁。',
        '对了！偷拍暗访等隐性采访手段在现实中“屡建奇功”，但围绕它所引发的争议也层出不穷。在这起事件中，隐性采访被滥用，使用了策划、引诱、违法的手段，也是逃不了道德的质疑和拷问的。不过对于隐性采访，还是要就事论事，后面的例子中我再跟你细讲。',
        '这件事不排除这些媒体为吸引受众，获得高发行率，不惜故意侵犯公民隐私权的可能性，这反映了部分新闻从业人员自身职业道德素质的低下。隐私权作为公民的一项人格权，一旦被侵犯，对当事人的人格尊严所造成的影响是无法消除的，新闻传媒固然应以向社会公众提供真实全面的信息为其基本职能，但是新闻自由必须受到法律的限制，媒介的活动应在法律范围内进行，不能以报道的内容真实为由而随意侵犯公民依法享有的个人隐私权。我们作为媒体，应在追求新闻真实与公民个人隐私保护两者之间选取好一个平衡点。',
        '嗯，说得对。这种寻租行为是要坚决抵制和反对的，它对于我们媒体的形象、声誉，特别是公信力，都会造成严重的损害和打击。媒体一旦失去了老百姓的信任，那我们新闻行业生存的根基就彻底不复存在了。希望你记住今天的选择，在以后的工作里坚持自己正确的想法啊！',
        '我理解你不好意思拒绝这种人情往来，但不管怎么样，这种拿新闻去谋求不正当利益的行为，是必须抵制的。新闻寻租违背我们记者的职业道德，一经发现，绝不姑息。作为新闻人，我们一定要注重自律，坚守好法治底线和道德底线啊！',
        '判断是不是媒介审判，最关键的就是要看媒体的报道是不是客观的、理性的。媒介审判一般针对的是司法案件，如果媒体能对司法案件进行正当的、客观的报道，或者是理性的、建议性的评论，那就是正常的司法报道。但如果媒体对涉案人员武断地进行定罪、定刑等的报道或倾向性评判，就会在一定程度上影响到司法的公正，成为“媒介审判”。这是我们工作中必须规避的。',
        '隐性采访之所以存在，其实是与社会现实密切相关的。这一采访手段要获得道德上的正当性，其目的就必须符合公共利益，因此只适用于某种特殊场合、特殊题材或者特殊的采访对象。而这一手段使用合理与否，归根到底取决于新闻工作者的选择，隐性采访的运用必须非常谨慎，要控制在法律和道德的范围之内，或者是得到有关部门的授权，切记不能滥用啊！',
        '在伦理选择面前没有绝对的正确与错误，更多的是结合当时的具体情况做出你认为的最正确的选择。当然，有舍也有得，你既然做出了相关的决定，也就必须承担起做出选择背后应尽的责任，这才是最重要的。',

        `${nickname},做完这个摸底测试，想必你也感受到了，“道德”和“伦理”是始终交织在我们工作中的两个关键词，而在真正面对这些问题时，如何处理、如何抉择，我们坚守着这样一条准则：`+'\n'+'\n'+
        '道德是_____的，伦理是_____的'+`\n\n`+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0绝对\xa0\xa0\xa0\xa0\xa0相对',
    
        '没错，“道德不能相对化，伦理不能绝对化。”在敲诈勒索、杜撰新闻、调侃悲剧等道德问题面前必须坚守新闻人的底线，哪些事不能做，哪些事能做一定要想清楚。而在涉及隐性采访、媒介审判等伦理选择时，必须结合具体实际，折中做出你觉得在当时最正确的选择。也许你会在事后有所反思，觉得自己可能有些地方没有处理得很好。但你要相信，在一次次选择后你也会有所成长，对于同类事件的处理也会更加得心应手。',
        '还有最关键的，记住一定要守住法律的红线，绝不可以做违法的事情。我国对于新闻从业者的职业规范有明文规定，像你刚刚学习的《中国新闻工作者职业道德准则》就是个典型例子。带你回顾这些，就是希望你能守住底线，遵守规范，以后更好在这个行业里立足、成长。',
    ]
    return {Info,GapInfo,Dialog,Choice,Tip_content,white_board}
};
