/* =================================================================
   NJNavigator v1 — main.js
   - i18n dictionary (EN / 中文)
   - Hero carousel
   - Smooth scroll + active nav highlighting
   - Mobile nav toggle
   - Reveal-on-scroll
   - v1: Amap jump helper, reusable modal system,
         story deep-dive deck, route image galleries, QR card stack
   ================================================================= */

(function () {
  'use strict';

  /* ---------- i18n dictionary ----------
     Keep keys flat-ish and grouped by section. All visible strings
     should have both EN and ZH entries here for the toggle. */
  const i18n = {
    en: {
      'meta.title': 'NJNavigator — A Guide for International Faculty in Nanjing',
      'brand.tag': 'v1',

      'nav.home': 'Home',
      'nav.survival': 'Survival',
      'nav.campus': 'Campus',
      'nav.story': 'Story',
      'nav.routes': 'Routes',
      'nav.appendix': 'Appendix',

      'hero.eyebrow': 'An onboarding portal for international faculty',
      'hero.title': 'Welcome to Nanjing',
      'hero.sub': 'A practical and cultural guide for international faculty at NUIST.',
      'hero.cta1': 'Start Exploring',
      'hero.cta2': 'Campus Essentials',
      'hero.note': 'v1 · Display logic and interaction layer. Final verified content still rolling in.',

      'tag.verified': 'Verified',
      'tag.unverified': 'Needs verification',
      'tag.placeholder': 'Placeholder',

      'action.openAmap': 'Open in Amap ↗',
      'action.openBus': 'Open bus guide →',
      'action.openFood': 'Open food page →',
      'action.readMore': 'Read more →',
      'action.showMore': 'Show More',
      'action.go': 'Go',
      'action.back': '← Back to home',
      'action.close': 'Close',

      'survival.eyebrow': 'Section 1',
      'survival.title': 'Welcome & Survival Kit',
      'survival.lede': 'The first three days made simple. Numbers to keep close, apps to install, and a few cultural notes that prevent friction.',
      'survival.cards.police.title': 'Police',
      'survival.cards.police.body': 'Nationwide emergency number for police assistance.',
      'survival.cards.amb.title': 'Ambulance',
      'survival.cards.amb.body': 'Nationwide medical emergency hotline.',
      'survival.cards.fire.title': 'Fire',
      'survival.cards.fire.body': 'Nationwide fire emergency hotline.',
      'survival.cards.security.title': 'Campus Security',
      'survival.cards.security.body': '24-hour campus security contact for NUIST / Waterford Institute area.',
      'survival.cards.security.note': 'Number to be confirmed by group.',
      'survival.cards.hospital.title': 'Nearby Hospital',
      'survival.cards.hospital.body': 'Recommended hospital with English-capable services near campus.',
      'survival.cards.hospital.note': 'Specific hospital to be confirmed.',
      'survival.appsTitle': 'Essential Apps',
      'survival.apps.alipay': 'Payments, transit QR, utilities, mini-programs.',
      'survival.apps.wechat': 'Messaging, payments, official accounts.',
      'survival.apps.amap': 'Navigation, transit, bilingual POI labels.',
      'survival.apps.didi': 'Ride-hailing with English interface option.',
      'survival.tip.title': 'Insider Tip · Why cash is less common',
      'survival.tip.body': 'Most daily transactions in Nanjing — buses, canteens, small shops — happen through Alipay or WeChat Pay QR codes. Carrying small cash is still wise, but linking a card to one of these apps is the single most useful onboarding step.',

      'campus.eyebrow': 'Section 2',
      'campus.title': 'Campus & Daily Routine',
      'campus.lede': 'Where to find a book, a meal, a clinic, and the gate. A working map of an academic day at NUIST.',
      'campus.points.waterford.title': 'Waterford Institute Area',
      'campus.points.waterford.body': 'Primary teaching and office area for international faculty.',
      'campus.points.library.title': 'Library',
      'campus.points.library.body': 'Quiet study floors, journals, and reserved reading rooms.',
      'campus.points.canteen.title': 'Canteen',
      'campus.points.canteen.body': 'Affordable daily meals, peak hours best avoided.',
      'campus.points.clinic.title': 'Clinic',
      'campus.points.clinic.body': 'On-campus first aid and routine consultations.',
      'campus.points.gate.title': 'Main Gate / Transport Access',
      'campus.points.gate.body': 'Bus stops, metro connections, and ride-hailing pickup.',
      'campus.points.bus.title': 'Bus',
      'campus.points.bus.body': 'Campus shuttles and city bus lines around NUIST.',
      'campus.diningTitle': 'Dining Guide',
      'campus.food.f1.title': 'Claypot-style Chicken',
      'campus.food.f2.title': 'Duck Blood Vermicelli Soup',
      'campus.food.more.title': 'Show More',
      'campus.food.more.body': 'See more campus and Nanjing food recommendations.',
      'campus.food.smell': 'Smell',
      'campus.food.taste': 'Taste',
      'campus.food.texture': 'Texture',
      'campus.food.context': 'Context',

      'map.placeholder': 'Embedded map placeholder — to be replaced with official / verified map iframe.',
      'map.openNuist': 'Open map.nuist.edu.cn ↗',
      'map.openAmap': 'Open in Amap ↗',

      'story.eyebrow': 'Section 3',
      'story.title': 'The Nanjing Story',
      'story.lede': 'A short walk through the layers of the city — Ming walls, Republican avenues, modern districts.',
      'story.t1.title': 'Ming Dynasty & the City Wall',
      'story.t1.body': '[Placeholder] Foundation of the Ming capital and construction of one of the world’s longest surviving city walls.',
      'story.t1.modal': '[Detailed information placeholder for this Nanjing Story card.] Founding of the Ming dynasty in Nanjing, the building of the city wall, and how that early decision still shapes the layout of the modern city.',
      'story.t2.title': 'Republican Era',
      'story.t2.body': '[Placeholder] Nanjing as a 20th-century capital — civic architecture, planning, and political memory.',
      'story.t2.modal': '[Detailed information placeholder for this Nanjing Story card.] Nanjing as a 20th-century capital — Republican-era avenues, civic buildings, and the political memory that lingers in the present streetscape.',
      'story.t3.title': 'Modern Nanjing',
      'story.t3.body': '[Placeholder] University clusters, metro expansion, and contemporary cultural life.',
      'story.t3.modal': '[Detailed information placeholder for this Nanjing Story card.] University clusters, metro expansion, and the cultural life of contemporary Nanjing — a city still rewriting itself.',
      'story.cat.heritage': 'Heritage',
      'story.cat.republic': 'Republican',
      'story.cat.water': 'Water & Culture',
      'story.cat.education': 'Education',
      'story.cat.modern': 'Modern',
      'story.cat.everyday': 'Everyday',
      'story.d1.title': 'The Wall & The City',
      'story.d1.sub': 'Ming City Wall & the present-day map',
      'story.d1.body': '[Ming City Wall historical analysis placeholder] How the wall shapes neighborhoods, traffic, and the cognitive map of present-day Nanjing.',
      'story.d2.title': 'Republican Legacy',
      'story.d2.sub': 'Civic spaces, not only monuments',
      'story.d2.body': '[Sun Yat-sen Mausoleum / Presidential Palace analysis placeholder] Reading Republican-era sites as living civic spaces, not only monuments.',
      'story.d3.title': 'Rivers & Culture',
      'story.d3.sub': 'The Qinhuai and the city’s literary memory',
      'story.d3.body': '[Placeholder] The Qinhuai River, the Yangtze, and how water has shaped Nanjing’s poetry, markets, and night life.',
      'story.d4.title': 'Imperial Examinations',
      'story.d4.sub': 'Jiangnan Examination Hall & the scholar city',
      'story.d4.body': '[Placeholder] How the Jiangnan Examination Hall positions Nanjing as a long-running center of Chinese scholarship.',
      'story.d5.title': 'Modern Nanjing',
      'story.d5.sub': 'Metro, universities, new districts',
      'story.d5.body': '[Placeholder] University clusters, metro expansion, Hexi new district, and the contemporary rhythm of the city.',
      'story.d6.title': 'Everyday Heritage',
      'story.d6.sub': 'Small habits, neighborhoods, and old trees',
      'story.d6.body': '[Placeholder] Street trees, old lanes, breakfast rituals — the everyday textures that hold the city together.',

      'routes.eyebrow': 'Section 4',
      'routes.title': 'Explore Like a Local',
      'routes.lede': 'Two half-day routes designed for first-month arrivals. Practical timing, transport, and one cultural prompt per stop.',
      'routes.a.title': 'Route A · History Buff',
      'routes.a.sub': 'Nanjing Museum → Ming Xiaoling Mausoleum',
      'routes.a.s1.t': 'Nanjing Museum',
      'routes.a.s2.t': 'Ming Xiaoling Mausoleum',
      'routes.b.title': 'Route B · Nature & Peace',
      'routes.b.sub': 'Xuanwu Lake → Zifeng Tower / Gulou Area',
      'routes.b.s1.t': 'Xuanwu Lake',
      'routes.b.s2.t': 'Zifeng Tower / Gulou',
      'routes.meta.time': 'Suggested time',
      'routes.meta.transit': 'Transport',
      'routes.meta.duration': 'Duration',
      'routes.meta.practical': 'Practical note',
      'routes.meta.cultural': 'Cultural note',
      'routes.foodieTitle': 'Foodie Corner',
      'routes.foodie.f1.title': 'Nanjing Salted Duck',
      'routes.foodie.f1.body': '[PLACEHOLDER] Brief cultural and sensory note to be written.',
      'routes.foodie.f2.title': 'Plum Blossom Cake',
      'routes.foodie.f2.body': '[PLACEHOLDER] Brief cultural and sensory note to be written.',
      'routes.foodie.f3.title': 'Local Restaurant',
      'routes.foodie.f3.body': '[PLACEHOLDER] Recommended restaurant to be confirmed by group.',

      'restaurants.modal.title': 'Restaurant Recommendations',
      'restaurants.modal.intro': 'Placeholder list — restaurants below to be verified by the group. Tapping Go opens Amap (search keyword to be added later).',
      'restaurants.r1.name': 'Restaurant Name [TO BE ADDED]',
      'restaurants.r2.name': 'Restaurant Name [TO BE ADDED]',
      'restaurants.r3.name': 'Restaurant Name [TO BE ADDED]',
      'restaurants.addr.placeholder': '[Address to be verified]',

      'appendix.eyebrow': 'Section 5',
      'appendix.title': 'Appendix',
      'appendix.lede': 'Reference material: ten useful phrases, sources, and a QR card stack for mobile use.',
      'appendix.phrasesTitle': '10 Essential Chinese Phrases',
      'appendix.phrase.usage': 'Usage context: [PLACEHOLDER]',
      'appendix.refsTitle': 'References',
      'appendix.ref.placeholder': 'Official source placeholder.',
      'appendix.qrTitle': 'QR Code',
      'appendix.qr.q1.title': 'Website Link',
      'appendix.qr.q1.body': 'QR Code Placeholder. To be replaced later.',
      'appendix.qr.q2.title': 'Subway Map',
      'appendix.qr.q2.body': 'QR Code Placeholder. To be replaced later.',
      'appendix.qr.q3.title': 'City Wall Virtual Tour',
      'appendix.qr.q3.body': 'QR Code Placeholder. To be replaced later.',

      'footer.tag': 'A practical and cultural guide for international faculty at NUIST.',
      'footer.version': 'Version: v1',
      'footer.note': 'Display logic in place. Verified content rolling in.',

      'bus.title': 'Bus · Getting around NUIST',
      'bus.lede': 'Placeholder guide to campus shuttles and city bus lines. Final stops, schedules, and routes to be verified.',
      'bus.section.guide.title': 'Bus Guide',
      'bus.section.guide.body': '[Placeholder] How to use city buses around Nanjing — payment (Alipay / WeChat transit QR), boarding etiquette, and announcements.',
      'bus.section.shuttle.title': 'Campus Shuttle',
      'bus.section.shuttle.body': '[Placeholder] NUIST campus shuttle stops, weekday and weekend frequency, and key destinations.',
      'bus.section.city.title': 'City Bus',
      'bus.section.city.body': '[Placeholder] Useful city bus lines around campus, gateway stops, and connections to metro.',
      'bus.section.notes.title': 'Notes to be verified',
      'bus.section.notes.body': '[Placeholder] Items the team still needs to confirm: timetable accuracy, fare details, last-bus times, and weather caveats.',

      'food.title': 'More Campus & Local Food',
      'food.lede': 'Placeholder list — more dishes around campus and across Nanjing. Final descriptions to follow.',
      'food.more.f1.title': 'FOOD-MORE-01',
      'food.more.f2.title': 'FOOD-MORE-02',
      'food.more.f3.title': 'FOOD-MORE-03',
      'food.more.f4.title': 'FOOD-MORE-04'
    },

    zh: {
      'meta.title': 'NJNavigator — 南京国际教师生活与文化导航',
      'brand.tag': 'v1',

      'nav.home': '首页',
      'nav.survival': '生存',
      'nav.campus': '校园',
      'nav.story': '故事',
      'nav.routes': '路线',
      'nav.appendix': '附录',

      'hero.eyebrow': '面向国际教师的到岗导览平台',
      'hero.title': '欢迎来到南京',
      'hero.sub': '面向南信大国际教师的生活与文化导航平台。',
      'hero.cta1': '开始浏览',
      'hero.cta2': '校园要点',
      'hero.note': 'v1 · 展示与交互层已落地,最终核实内容将持续补入。',

      'tag.verified': '已核实',
      'tag.unverified': '待核实',
      'tag.placeholder': '占位',

      'action.openAmap': '在高德地图中打开 ↗',
      'action.openBus': '查看公交指南 →',
      'action.openFood': '查看美食页 →',
      'action.readMore': '查看详情 →',
      'action.showMore': '查看更多',
      'action.go': '前往',
      'action.back': '← 返回首页',
      'action.close': '关闭',

      'survival.eyebrow': '第一部分',
      'survival.title': '欢迎与生存工具包',
      'survival.lede': '让前三天变得简单 —— 必备号码、必装应用,以及一些避免摩擦的文化提示。',
      'survival.cards.police.title': '报警',
      'survival.cards.police.body': '全国通用警务紧急电话。',
      'survival.cards.amb.title': '急救',
      'survival.cards.amb.body': '全国通用医疗急救电话。',
      'survival.cards.fire.title': '火警',
      'survival.cards.fire.body': '全国通用消防紧急电话。',
      'survival.cards.security.title': '校园保卫处',
      'survival.cards.security.body': '南信大 / 沃特福德学院区域 24 小时校园保卫联系方式。',
      'survival.cards.security.note': '具体号码需小组核实确认。',
      'survival.cards.hospital.title': '就近医院',
      'survival.cards.hospital.body': '校园附近、可提供英语服务的推荐医院。',
      'survival.cards.hospital.note': '具体医院信息待小组核实。',
      'survival.appsTitle': '必装应用',
      'survival.apps.alipay': '支付、公交码、生活缴费、小程序。',
      'survival.apps.wechat': '即时通讯、支付、公众号。',
      'survival.apps.amap': '导航、公交、双语兴趣点。',
      'survival.apps.didi': '网约车,可切换英文界面。',
      'survival.tip.title': '内部提示 · 为什么现金越来越少见',
      'survival.tip.body': '南京日常消费 —— 公交、食堂、小店 —— 几乎都通过支付宝或微信扫码完成。准备少量现金仍是稳妥之选,但把银行卡绑定到这两款应用之一,是落地后最有用的一步。',

      'campus.eyebrow': '第二部分',
      'campus.title': '校园与日常',
      'campus.lede': '找书、就餐、看诊、出入校门 —— 一份能跑通的南信大一天。',
      'campus.points.waterford.title': '沃特福德学院区域',
      'campus.points.waterford.body': '国际教师主要的教学与办公区。',
      'campus.points.library.title': '图书馆',
      'campus.points.library.body': '安静的自习层、期刊与预约阅览室。',
      'campus.points.canteen.title': '食堂',
      'campus.points.canteen.body': '价格亲民的日常餐饮,建议避开高峰时段。',
      'campus.points.clinic.title': '校医院',
      'campus.points.clinic.body': '校内急救与日常问诊。',
      'campus.points.gate.title': '校门 / 出行接驳',
      'campus.points.gate.body': '公交站、地铁接驳与网约车上车点。',
      'campus.points.bus.title': '公交',
      'campus.points.bus.body': '南信大周边的校园班车与城市公交线路。',
      'campus.diningTitle': '校园餐饮',
      'campus.food.f1.title': '瓦香鸡',
      'campus.food.f2.title': '鸭血粉丝汤',
      'campus.food.more.title': '查看更多',
      'campus.food.more.body': '查看更多校园与南京美食推荐。',
      'campus.food.smell': '气味',
      'campus.food.taste': '味道',
      'campus.food.texture': '口感',
      'campus.food.context': '场景',

      'map.placeholder': '嵌入式地图占位 —— 后续将替换为官方 / 已核实的地图 iframe。',
      'map.openNuist': '打开 map.nuist.edu.cn ↗',
      'map.openAmap': '在高德地图中打开 ↗',

      'story.eyebrow': '第三部分',
      'story.title': '南京的故事',
      'story.lede': '一段穿越城市层次的短行 —— 明城墙、民国大道、现代城区。',
      'story.t1.title': '明代与城墙',
      'story.t1.body': '[占位] 明代建都的开端,与世界上现存最长城墙之一的修筑。',
      'story.t1.modal': '[此卡片的详细信息占位] 明代在南京定都,城墙的修筑,以及这一早期决定如何持续塑造今日南京的城市格局。',
      'story.t2.title': '民国时期',
      'story.t2.body': '[占位] 作为 20 世纪首都的南京 —— 公共建筑、城市规划与政治记忆。',
      'story.t2.modal': '[此卡片的详细信息占位] 作为 20 世纪首都的南京 —— 民国大道、公共建筑,以及仍停驻在街景中的政治记忆。',
      'story.t3.title': '现代南京',
      'story.t3.body': '[占位] 高校群、地铁拓展与当代文化生活。',
      'story.t3.modal': '[此卡片的详细信息占位] 高校群、地铁拓展,以及当代南京的文化生活 —— 一座仍在书写自身的城市。',
      'story.cat.heritage': '历史遗产',
      'story.cat.republic': '民国',
      'story.cat.water': '河流与文化',
      'story.cat.education': '教育',
      'story.cat.modern': '现代',
      'story.cat.everyday': '日常',
      'story.d1.title': '城墙与城市',
      'story.d1.sub': '明城墙与今日的南京地图',
      'story.d1.body': '[明城墙历史分析占位] 城墙如何塑造今日南京的街区、交通与心理地图。',
      'story.d2.title': '民国遗产',
      'story.d2.sub': '公共空间,而不仅是纪念物',
      'story.d2.body': '[中山陵 / 总统府分析占位] 把民国时期场所读作仍在使用的公共空间,而不仅是纪念物。',
      'story.d3.title': '河流与文化',
      'story.d3.sub': '秦淮河与南京的文学记忆',
      'story.d3.body': '[占位] 秦淮河、长江,以及水如何塑造南京的诗歌、市集与夜生活。',
      'story.d4.title': '科举与江南贡院',
      'story.d4.sub': '江南贡院与文人城市',
      'story.d4.body': '[占位] 江南贡院如何将南京定位为长期的中国学术中心。',
      'story.d5.title': '现代南京',
      'story.d5.sub': '地铁、高校与新城',
      'story.d5.body': '[占位] 高校群、地铁拓展、河西新城,以及当代城市的节奏。',
      'story.d6.title': '日常的遗产',
      'story.d6.sub': '小习惯、街坊与老树',
      'story.d6.body': '[占位] 行道树、老巷、早餐摊 —— 把城市维系在一起的日常肌理。',

      'routes.eyebrow': '第四部分',
      'routes.title': '像本地人一样探索',
      'routes.lede': '为初到一个月的访客设计的两条半日路线。每站附带时间、交通与一条文化提示。',
      'routes.a.title': '路线 A · 历史向',
      'routes.a.sub': '南京博物院 → 明孝陵',
      'routes.a.s1.t': '南京博物院',
      'routes.a.s2.t': '明孝陵',
      'routes.b.title': '路线 B · 自然与宁静',
      'routes.b.sub': '玄武湖 → 紫峰大厦 / 鼓楼一带',
      'routes.b.s1.t': '玄武湖',
      'routes.b.s2.t': '紫峰大厦 / 鼓楼',
      'routes.meta.time': '建议时段',
      'routes.meta.transit': '交通',
      'routes.meta.duration': '用时',
      'routes.meta.practical': '实用提示',
      'routes.meta.cultural': '文化提示',
      'routes.foodieTitle': '美食角',
      'routes.foodie.f1.title': '南京盐水鸭',
      'routes.foodie.f1.body': '[占位] 简短的文化与感官描述,后续补写。',
      'routes.foodie.f2.title': '梅花糕',
      'routes.foodie.f2.body': '[占位] 简短的文化与感官描述,后续补写。',
      'routes.foodie.f3.title': '本地餐厅',
      'routes.foodie.f3.body': '[占位] 推荐餐厅待小组确认。',

      'restaurants.modal.title': '推荐餐厅',
      'restaurants.modal.intro': '占位列表 —— 以下餐厅待小组核实。点击「前往」打开高德地图(搜索关键字将在后续填入)。',
      'restaurants.r1.name': '餐厅名称 [待补充]',
      'restaurants.r2.name': '餐厅名称 [待补充]',
      'restaurants.r3.name': '餐厅名称 [待补充]',
      'restaurants.addr.placeholder': '[地址待核实]',

      'appendix.eyebrow': '第五部分',
      'appendix.title': '附录',
      'appendix.lede': '参考材料:十句实用短语、参考资料,以及移动端二维码卡片集。',
      'appendix.phrasesTitle': '十句实用中文短语',
      'appendix.phrase.usage': '使用场景:[占位]',
      'appendix.refsTitle': '参考资料',
      'appendix.ref.placeholder': '官方来源占位。',
      'appendix.qrTitle': '二维码',
      'appendix.qr.q1.title': '网站链接',
      'appendix.qr.q1.body': '二维码占位,后续将替换。',
      'appendix.qr.q2.title': '地铁线路图',
      'appendix.qr.q2.body': '二维码占位,后续将替换。',
      'appendix.qr.q3.title': '城墙虚拟漫游',
      'appendix.qr.q3.body': '二维码占位,后续将替换。',

      'footer.tag': '面向南信大国际教师的生活与文化导航平台。',
      'footer.version': '版本:v1',
      'footer.note': '展示与交互层已就绪,核实内容持续补入。',

      'bus.title': '公交 · 南信大周边出行',
      'bus.lede': '校园班车与城市公交占位指南。最终站点、时刻表与线路待核实。',
      'bus.section.guide.title': '公交指南',
      'bus.section.guide.body': '[占位] 南京公交的使用方法 —— 支付(支付宝 / 微信乘车码)、上车礼仪与广播提示。',
      'bus.section.shuttle.title': '校园班车',
      'bus.section.shuttle.body': '[占位] 南信大校园班车站点、工作日与周末班次、以及主要目的地。',
      'bus.section.city.title': '城市公交',
      'bus.section.city.body': '[占位] 校园周边常用城市公交线路、关键换乘站,以及与地铁的接驳。',
      'bus.section.notes.title': '待核实事项',
      'bus.section.notes.body': '[占位] 小组仍需确认的内容:时刻表准确性、票价细节、末班车时间,以及天气方面的说明。',

      'food.title': '更多校园与南京美食',
      'food.lede': '占位列表 —— 校园周边与南京全城的更多菜品。最终描述待补充。',
      'food.more.f1.title': 'FOOD-MORE-01',
      'food.more.f2.title': 'FOOD-MORE-02',
      'food.more.f3.title': 'FOOD-MORE-03',
      'food.more.f4.title': 'FOOD-MORE-04'
    }
  };

  /* ---------- helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------- language switching ---------- */
  function currentLang() {
    return document.documentElement.getAttribute('data-lang') || 'en';
  }
  function t(key) {
    const dict = i18n[currentLang()] || i18n.en;
    return dict[key] != null ? dict[key] : key;
  }
  function applyLang(lang) {
    if (!i18n[lang]) lang = 'en';
    const dict = i18n[lang];
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    $$('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (dict[key] != null) {
        if (node.tagName === 'TITLE') node.textContent = dict[key];
        else node.textContent = dict[key];
      }
    });

    // If a modal is open, re-render its content for the new language.
    if (modalState.open) renderModalContent();

    try { localStorage.setItem('njn.lang', lang); } catch (e) {}
  }

  function toggleLang() {
    const current = currentLang();
    const next = current === 'en' ? 'zh' : 'en';
    document.body.classList.add('lang-fading');
    setTimeout(() => {
      applyLang(next);
      requestAnimationFrame(() => document.body.classList.remove('lang-fading'));
    }, 180);
  }

  /* ---------- hero carousel ---------- */
  function initCarousel() {
    const carousel = $('#heroCarousel');
    if (!carousel) return;
    const slides = $$('.hero-slide', carousel);
    const dotsWrap = $('#heroDots');
    const prev = $('#heroPrev');
    const next = $('#heroNext');
    if (slides.length === 0) return;

    let idx = 0;
    let timer = null;
    const INTERVAL = 5500;

    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      if (i === 0) b.classList.add('is-active');
      b.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(b);
    });

    function render() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('is-active', i === idx));
    }
    function go(i, userInitiated) {
      idx = (i + slides.length) % slides.length;
      render();
      if (userInitiated) restart();
    }
    function nextSlide() { go(idx + 1); }
    function start() { timer = setInterval(nextSlide, INTERVAL); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    prev.addEventListener('click', () => go(idx - 1, true));
    next.addEventListener('click', () => go(idx + 1, true));
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) start(); else stop(); });
    }, { threshold: 0.1 });
    io.observe(carousel);
  }

  /* ---------- v1: Amap jump helper ----------
     Shared helper so future areas can pass a search keyword (street name,
     POI, lat/lng) and we only update one place. Passing nothing is the
     v1 default — we don't invent locations or fake coordinates yet. */
  function openAmap(query) {
    // TODO(v1+): once locations are verified, build a search URL like
    //   `https://uri.amap.com/search?keywords=${encodeURIComponent(query)}`
    // and respect coordinates per stop.
    const base = 'https://uri.amap.com/';
    const url = query ? base + 'search?keywords=' + encodeURIComponent(query) : base;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function initAmapJumps() {
    $$('[data-action="amap"]').forEach(el => {
      el.addEventListener('click', ev => {
        ev.preventDefault();
        const q = el.getAttribute('data-amap-query') || '';
        openAmap(q);
      });
    });
  }

  /* ---------- v1: Modal system ---------- */
  const modalState = {
    open: false,
    trigger: null,
    activeTrigger: null,
    titleKey: null,
    bodyKey: null
  };

  function renderModalContent() {
    const titleEl = $('#modalTitle');
    const bodyEl = $('#modalBody');
    if (!titleEl || !bodyEl) return;
    const lang = currentLang();
    const dict = i18n[lang] || i18n.en;

    if (modalState.trigger === 'restaurants') {
      titleEl.textContent = dict['restaurants.modal.title'];
      bodyEl.innerHTML = renderRestaurantsHtml(dict);
      // Wire Go buttons inside the modal to openAmap.
      $$('.restaurant-item .btn-go', bodyEl).forEach(btn => {
        btn.addEventListener('click', () => {
          // v1: no prefilled query yet — easy to add later via data-amap-query.
          const q = btn.getAttribute('data-amap-query') || '';
          openAmap(q);
        });
      });
    } else {
      titleEl.textContent = modalState.titleKey ? (dict[modalState.titleKey] || '') : '';
      const body = modalState.bodyKey ? (dict[modalState.bodyKey] || '') : '';
      bodyEl.innerHTML = '<p>' + escapeHtml(body) + '</p>';
    }
  }

  function renderRestaurantsHtml(dict) {
    const items = [
      { nameKey: 'restaurants.r1.name', addrKey: 'restaurants.addr.placeholder' },
      { nameKey: 'restaurants.r2.name', addrKey: 'restaurants.addr.placeholder' },
      { nameKey: 'restaurants.r3.name', addrKey: 'restaurants.addr.placeholder' }
    ];
    const intro = '<p class="modal-intro">' + escapeHtml(dict['restaurants.modal.intro']) + '</p>';
    const list = items.map(it => (
      '<div class="restaurant-item">' +
        '<div>' +
          '<p class="r-name">' + escapeHtml(dict[it.nameKey]) + '</p>' +
          '<p class="r-addr">' + escapeHtml(dict[it.addrKey]) + '</p>' +
        '</div>' +
        '<button type="button" class="btn-go" data-amap-query="">' + escapeHtml(dict['action.go']) + '</button>' +
      '</div>'
    )).join('');
    return intro + '<div class="restaurant-list">' + list + '</div>';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function openModal(triggerEl) {
    const root = $('#modalRoot');
    if (!root) return;
    modalState.open = true;
    modalState.activeTrigger = triggerEl;
    modalState.trigger = triggerEl.getAttribute('data-modal-trigger');
    modalState.titleKey = triggerEl.getAttribute('data-modal-title-key');
    modalState.bodyKey = triggerEl.getAttribute('data-modal-body-key');
    renderModalContent();
    root.hidden = false;
    document.body.classList.add('modal-open');
    // Move focus into the dialog for keyboard users.
    const dialog = $('.modal-dialog', root);
    if (dialog) dialog.focus({ preventScroll: true });
  }

  function closeModal() {
    const root = $('#modalRoot');
    if (!root) return;
    modalState.open = false;
    root.hidden = true;
    document.body.classList.remove('modal-open');
    if (modalState.activeTrigger && typeof modalState.activeTrigger.focus === 'function') {
      modalState.activeTrigger.focus({ preventScroll: true });
    }
    modalState.activeTrigger = null;
    modalState.trigger = null;
    modalState.titleKey = null;
    modalState.bodyKey = null;
  }

  function initModal() {
    const root = $('#modalRoot');
    if (!root) return;
    $$('[data-modal-trigger]').forEach(btn => {
      btn.addEventListener('click', ev => {
        ev.preventDefault();
        openModal(btn);
      });
    });
    $$('[data-modal-close]', root).forEach(el => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalState.open) closeModal();
    });
  }

  /* ---------- v1: Story deep-dive deck ---------- */
  function initDeck() {
    const deck = $('#storyDeck');
    if (!deck) return;
    const track = $('#deckTrack', deck);
    const groups = $$('.deck-group', track);
    const prev = $('#deckPrev');
    const next = $('#deckNext');
    const dotsWrap = $('#deckDots');
    if (!track || groups.length === 0) return;

    let idx = 0;

    dotsWrap.innerHTML = '';
    groups.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Go to pair ' + (i + 1));
      if (i === 0) b.classList.add('is-active');
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
    });

    function render() {
      track.style.transform = 'translateX(' + (-100 * idx) + '%)';
      $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('is-active', i === idx));
    }
    function go(i) {
      idx = (i + groups.length) % groups.length;
      render();
    }
    prev.addEventListener('click', () => go(idx - 1));
    next.addEventListener('click', () => go(idx + 1));
  }

  /* ---------- v1: Route image galleries ---------- */
  function initRouteGalleries() {
    $$('.route-gallery').forEach(gallery => {
      const slides = $$('.route-slide', gallery);
      const prev = $('.gallery-arrow.prev', gallery);
      const next = $('.gallery-arrow.next', gallery);
      const dotsWrap = $('.gallery-dots', gallery);
      if (slides.length === 0) return;

      let idx = 0;

      dotsWrap.innerHTML = '';
      slides.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Go to image ' + (i + 1));
        if (i === 0) b.classList.add('is-active');
        b.addEventListener('click', ev => { ev.stopPropagation(); go(i); });
        dotsWrap.appendChild(b);
      });

      function render() {
        slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
        $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('is-active', i === idx));
      }
      function go(i) {
        idx = (i + slides.length) % slides.length;
        render();
      }
      prev.addEventListener('click', ev => { ev.stopPropagation(); go(idx - 1); });
      next.addEventListener('click', ev => { ev.stopPropagation(); go(idx + 1); });
    });
  }

  /* ---------- v1: QR card stack ---------- */
  function initQrStack() {
    const stack = $('#qrStack');
    if (!stack) return;
    const slides = $$('.qr-slide', stack);
    const dotsWrap = $('#qrDots');
    const prev = $('#qrPrev');
    const next = $('#qrNext');
    if (slides.length === 0) return;

    let idx = 0;
    let timer = null;
    const INTERVAL = 6000;

    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Go to QR ' + (i + 1));
      if (i === 0) b.classList.add('is-active');
      b.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(b);
    });

    function render() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('is-active', i === idx));
    }
    function go(i, userInitiated) {
      idx = (i + slides.length) % slides.length;
      render();
      if (userInitiated) restart();
    }
    function start() { timer = setInterval(() => go(idx + 1), INTERVAL); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    prev.addEventListener('click', () => go(idx - 1, true));
    next.addEventListener('click', () => go(idx + 1, true));
    stack.addEventListener('mouseenter', stop);
    stack.addEventListener('mouseleave', start);

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) start(); else stop(); });
    }, { threshold: 0.2 });
    io.observe(stack);
  }

  /* ---------- mobile nav ---------- */
  function initNavToggle() {
    const btn = $('#navToggle');
    const nav = $('#primaryNav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    $$('#primaryNav a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---------- header shadow on scroll ---------- */
  function initHeaderScroll() {
    const header = $('#siteHeader');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- active nav highlight ---------- */
  function initActiveNav() {
    const sections = $$('main section[id]');
    const links = $$('.primary-nav a[href^="#"]');
    if (sections.length === 0 || links.length === 0) return;
    const map = new Map();
    links.forEach(a => {
      const id = a.getAttribute('href').slice(1);
      map.set(id, a);
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('is-active'));
          const link = map.get(e.target.id);
          if (link) link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => io.observe(s));
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    const targets = $$('.reveal');
    if (targets.length === 0) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(t => t.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => io.observe(t));
  }

  /* ---------- boot ---------- */
  function boot() {
    let saved = 'en';
    try { saved = localStorage.getItem('njn.lang') || 'en'; } catch (e) {}
    applyLang(saved);

    const langBtn = $('#langToggle');
    if (langBtn) langBtn.addEventListener('click', toggleLang);

    initCarousel();
    initNavToggle();
    initHeaderScroll();
    initActiveNav();
    initReveal();

    // v1 wiring
    initAmapJumps();
    initModal();
    initDeck();
    initRouteGalleries();
    initQrStack();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
