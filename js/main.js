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
      'brand.tag': 'v2.4',

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
      'hero.note': 'v2.4 · Verified locations, phones, campus shuttle routes, a practical Chinese phrasebook, and a real dining guide online.',
      'hero.hideAria': 'Hide welcome card',
      'hero.label.nuist':        'NUIST',
      'hero.label.mingWall':     'Ming Wall',
      'hero.label.xuanwuLake':   'XuanWu Lake',
      'hero.label.skyline':      'Skyline',
      'hero.label.zhonghuaGate': 'ZhongHua Gate',

      'tag.verified': 'Verified',
      'tag.unverified': 'Needs verification',
      'tag.placeholder': 'Placeholder',

      'action.openAmap': 'Open in Amap ↗',
      'action.openBus': 'View routes →',
      'action.openFood': 'Browse dishes →',
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
      'survival.cards.security.title': 'Campus Security Office',
      'survival.cards.security.body': 'Campus security office at NUIST. Tap to open in Amap.',
      'survival.cards.security.telLabel': 'Tel',
      'survival.cards.hospital.title': 'Nearby Hospital',
      'survival.cards.hospital.body': 'Zhongda Hospital (Jiangbei Campus), Southeast University — closest large hospital to NUIST.',
      'survival.cards.hospital.telLabel': '24h Tel',
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
      'campus.points.waterford.body': 'Primary teaching and office area for international faculty — tap to choose a building.',
      'campus.points.library.title': 'Library',
      'campus.points.library.body': 'Quiet study floors, journals, and reserved reading rooms.',
      'campus.points.canteen.title': 'Canteen',
      'campus.points.canteen.body': 'Campus canteens — tap to choose which one to open in Amap.',
      'campus.points.clinic.title': 'Clinic',
      'campus.points.clinic.body': 'On-campus general outpatient clinic.',
      'campus.points.gate.title': 'Main Gate',
      'campus.points.gate.body': 'NUIST campus gates — choose a gate to open it in Amap.',
      'campus.points.bus.title': 'Bus / Campus Shuttle',
      'campus.points.bus.body': 'Campus shuttle routes — tap to view stop sequences.',
      'campus.diningTitle': 'Dining Guide',
      'campus.food.more.title': 'Show More',
      'campus.food.more.body': 'Eight more popular dishes around NUIST.',
      'campus.food.smell': 'Aroma',
      'campus.food.taste': 'Taste',
      'campus.food.texture': 'Texture',

      'campus.food.claypotChicken.name':         'Claypot-Flavored Chicken',
      'campus.food.claypotChicken.aroma':        'Rich savory sauce aroma',
      'campus.food.claypotChicken.taste':        'Savory with a mild kick',
      'campus.food.claypotChicken.texture':      'Tender chicken in a thick sauce',
      'campus.food.duckBloodVermicelli.name':    'Duck Blood Vermicelli Soup',
      'campus.food.duckBloodVermicelli.aroma':   'Light, fresh, savory broth',
      'campus.food.duckBloodVermicelli.taste':   'Fresh, salty, mellow',
      'campus.food.duckBloodVermicelli.texture': 'Silky vermicelli with delicate duck blood',
      'campus.food.crabSoupDumplings.name':      'Crab Roe Soup Dumplings',
      'campus.food.crabSoupDumplings.aroma':     'Bright crab aroma',
      'campus.food.crabSoupDumplings.taste':     'Sweet and juicy',
      'campus.food.crabSoupDumplings.texture':   'Soft skin, soup-filled inside',
      'campus.food.spicyHotPot.name':            'Spicy Hot Pot Mix',
      'campus.food.spicyHotPot.aroma':           'Numbing, spicy, fragrant',
      'campus.food.spicyHotPot.taste':           'Numbing-spicy and savory',
      'campus.food.spicyHotPot.texture':         'Many ingredients, layered textures',
      'campus.food.braisedChickenRice.name':     'Braised Chicken Rice',
      'campus.food.braisedChickenRice.aroma':    'Inviting savory sauce',
      'campus.food.braisedChickenRice.taste':    'Savory with a hint of sweetness',
      'campus.food.braisedChickenRice.texture':  'Soft chicken, well-soaked rice',
      'campus.food.bibimbap.name':               'Stone Pot Bibimbap',
      'campus.food.bibimbap.aroma':              'Fresh grainy aroma',
      'campus.food.bibimbap.taste':              'Savory with a mild kick',
      'campus.food.bibimbap.texture':            'Crispy rice crust, mixed toppings',
      'campus.food.lanzhouBeefNoodles.name':     'Lanzhou Beef Noodles',
      'campus.food.lanzhouBeefNoodles.aroma':    'Deep beef aroma',
      'campus.food.lanzhouBeefNoodles.taste':    'Savory with a mild kick',
      'campus.food.lanzhouBeefNoodles.texture':  'Chewy noodles, clear bright broth',
      'campus.food.yangzhouFriedRice.name':      'Yangzhou Fried Rice',
      'campus.food.yangzhouFriedRice.aroma':     'Rich egg aroma',
      'campus.food.yangzhouFriedRice.taste':     'Salty-savory, well balanced',
      'campus.food.yangzhouFriedRice.texture':   'Distinct grains, light and fluffy',
      'campus.food.fishWithTofu.name':           'Fish with Soft Tofu',
      'campus.food.fishWithTofu.aroma':          'Numbing-spicy and fragrant',
      'campus.food.fishWithTofu.taste':          'Fresh, hot, layered',
      'campus.food.fishWithTofu.texture':        'Tender fish, silky soft tofu',
      'campus.food.grilledFish.name':            'Grilled Fish',
      'campus.food.grilledFish.aroma':           'Deep smoky charcoal aroma',
      'campus.food.grilledFish.taste':           'Numbing-spicy and fragrant',
      'campus.food.grilledFish.texture':         'Crisp outside, tender inside',

      'dining.modal.title': 'More Dishes Around NUIST',
      'dining.modal.intro': 'Eight more popular dishes you can find around campus or nearby.',

      'map.placeholder': 'Embedded map placeholder — to be replaced with official / verified map iframe.',
      'map.openNuist': 'Open map.nuist.edu.cn ↗',
      'map.openAmap': 'Open in Amap ↗',
      'map.nuist.title': 'NUIST Campus Map',
      'map.nuist.desc': 'Official aerial map — tap to open map.nuist.edu.cn.',

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

      'options.modal.intro': 'Choose a destination — it will open in Amap.',

      'bus.modal.title': 'Bus / Campus Shuttle',
      'bus.modal.intro': 'Two NUIST campus shuttle lines. Tap and hold a stop name to copy.',
      'bus.modal.stopsLabel': 'Stops',
      'bus.routes.loop.name': 'Loop Line',
      'bus.routes.loop.desc': 'Circular, bidirectional service',
      'bus.routes.peak.name': 'Peak Line',
      'bus.routes.peak.desc': 'Bidirectional peak-hour service',
      'options.waterford.linjiang': 'Linjiang Tower (临江楼)',
      'options.waterford.yuejiang': 'Yuejiang Tower (阅江楼)',
      'options.canteen.xiyuanNew':    'Xiyuan New Canteen (西苑新食堂)',
      'options.canteen.binjiang2':    'Binjiang College 2nd Canteen (滨江学院第二食堂)',
      'options.canteen.staff':        'Faculty & Staff Canteen (教职工食堂)',
      'options.canteen.zhongyuanOld': 'Zhongyuan Old Canteen (中苑老食堂)',
      'options.gate.xiyuanN':     'Xiyuan North Gate (西苑北门)',
      'options.gate.xiyuanS':     'Xiyuan South Gate (西苑南门)',
      'options.gate.talentN':     'Talent Apartments North Gate (人才公寓北门)',
      'options.gate.zhongyuanS1': 'Zhongyuan South Gate #1 (中苑南1门)',
      'options.gate.dongyuanS':   'Dongyuan South Gate (东苑南门)',
      'options.gate.dongyuanN':   'Dongyuan North Gate (东苑北门)',
      'options.gate.dongyuanE':   'Dongyuan East Gate (东苑东门)',

      'restaurants.modal.title': 'Restaurant Recommendations',
      'restaurants.modal.intro': 'Placeholder list — restaurants below to be verified by the group. Tapping Go opens Amap (search keyword to be added later).',
      'restaurants.r1.name': 'Restaurant Name [TO BE ADDED]',
      'restaurants.r2.name': 'Restaurant Name [TO BE ADDED]',
      'restaurants.r3.name': 'Restaurant Name [TO BE ADDED]',
      'restaurants.addr.placeholder': '[Address to be verified]',

      'appendix.eyebrow': 'Section 5',
      'appendix.title': 'Appendix',
      'appendix.lede': 'A short, practical Chinese phrasebook for the first weeks on the ground.',
      'appendix.card.title': 'Practical Chinese Q&A',
      'appendix.card.body': 'Ten everyday Chinese phrases with pinyin, translation, and when to use them. Tap to browse the questions.',
      'appendix.card.cta': 'Open phrasebook →',
      'appendix.modal.listTitle': 'Practical Chinese Q&A',
      'appendix.modal.intro': 'Pick a question to see the Chinese phrase, pinyin, translation, and when to use it.',
      'appendix.detail.phrase': 'Chinese Phrase',
      'appendix.detail.pinyin': 'Pinyin',
      'appendix.detail.translation': 'English Translation',
      'appendix.detail.whenToUse': 'When to Use',

      'appendix.qa.q1.q':  'How to say hello?',
      'appendix.qa.q1.when':  'Used when meeting colleagues, students, or local residents for the first time.',
      'appendix.qa.q2.q':  'How to say thank you?',
      'appendix.qa.q2.when':  'Used to express gratitude in daily life, at work, or in social situations.',
      'appendix.qa.q3.q':  'How to say excuse me?',
      'appendix.qa.q3.when':  'Used when politely asking for directions, assistance, or someone’s attention.',
      'appendix.qa.q4.q':  'How to say it’s okay?',
      'appendix.qa.q4.when':  'Used when responding to thanks or accepting an apology.',
      'appendix.qa.q5.q':  'How to ask someone to speak more slowly?',
      'appendix.qa.q5.when':  'Used when you need someone to speak more slowly for better understanding.',
      'appendix.qa.q6.q':  'How to ask someone to wait a moment?',
      'appendix.qa.q6.when':  'Used during meetings, phone calls, or when you need a moment to handle something.',
      'appendix.qa.q7.q':  'How to politely ask for help?',
      'appendix.qa.q7.when':  'Used when politely requesting help from colleagues, staff, or local residents.',
      'appendix.qa.q8.q':  'How to say I need help?',
      'appendix.qa.q8.when':  'Used when facing a problem or needing immediate assistance.',
      'appendix.qa.q9.q':  'How to say I don’t understand?',
      'appendix.qa.q9.when':  'Used when you cannot understand spoken Chinese and need clarification.',
      'appendix.qa.q10.q': 'How to say nice to meet you?',
      'appendix.qa.q10.when': 'Used when introducing yourself and building professional or social connections.',

      'footer.tag': 'A practical and cultural guide for international faculty at NUIST.',
      'footer.version': 'Version: v2.4',
      'footer.note': 'Verified locations, phones, shuttle routes, phrasebook, and Dining Guide online.',
      'footer.telLabel': 'TEL',
      'footer.telSep': ': ',

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
      'brand.tag': 'v2.4',

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
      'hero.note': 'v2.4 · 已核实地点、电话、校园班车线路、实用中文短语集与南信大美食指南均已上线。',
      'hero.hideAria': '隐藏欢迎卡片',
      'hero.label.nuist':        'NUIST',
      'hero.label.mingWall':     'Ming Wall',
      'hero.label.xuanwuLake':   'XuanWu Lake',
      'hero.label.skyline':      'Skyline',
      'hero.label.zhonghuaGate': 'ZhongHua Gate',

      'tag.verified': '已核实',
      'tag.unverified': '待核实',
      'tag.placeholder': '占位',

      'action.openAmap': '在高德地图中打开 ↗',
      'action.openBus': '查看线路 →',
      'action.openFood': '查看菜品 →',
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
      'survival.cards.security.body': '南京信息工程大学校园保卫处。点击在高德地图中打开。',
      'survival.cards.security.telLabel': '电话',
      'survival.cards.hospital.title': '就近医院',
      'survival.cards.hospital.body': '东南大学附属中大医院江北院区,距南信大最近的综合性医院。',
      'survival.cards.hospital.telLabel': '24h 电话',
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
      'campus.points.waterford.body': '国际教师主要的教学与办公区 —— 点击选择具体楼宇。',
      'campus.points.library.title': '图书馆',
      'campus.points.library.body': '南京信息工程大学图书馆,自习、期刊与阅览室。',
      'campus.points.canteen.title': '食堂',
      'campus.points.canteen.body': '校内食堂 —— 点击选择具体食堂,在高德地图中打开。',
      'campus.points.clinic.title': '校内门诊',
      'campus.points.clinic.body': '南京信息工程大学综合门诊部,校内日常问诊。',
      'campus.points.gate.title': '校门',
      'campus.points.gate.body': '南京信息工程大学各校门 —— 点击选择具体校门,在高德地图中打开。',
      'campus.points.bus.title': 'Bus / 校园巴士',
      'campus.points.bus.body': '校园班车线路 —— 点击查看站点顺序。',
      'campus.diningTitle': '校园餐饮',
      'campus.food.more.title': '查看更多',
      'campus.food.more.body': '南信大周边另外 8 道热门菜品。',
      'campus.food.smell': '气味',
      'campus.food.taste': '味道',
      'campus.food.texture': '口感',

      'campus.food.claypotChicken.name':         '瓦香鸡',
      'campus.food.claypotChicken.aroma':        '酱香浓郁',
      'campus.food.claypotChicken.taste':        '咸鲜微辣',
      'campus.food.claypotChicken.texture':      '鸡肉嫩滑,汤汁浓厚',
      'campus.food.duckBloodVermicelli.name':    '鸭血粉丝汤',
      'campus.food.duckBloodVermicelli.aroma':   '鲜香清爽',
      'campus.food.duckBloodVermicelli.taste':   '鲜咸醇厚',
      'campus.food.duckBloodVermicelli.texture': '粉丝顺滑,鸭血细嫩',
      'campus.food.crabSoupDumplings.name':      '蟹黄汤包',
      'campus.food.crabSoupDumplings.aroma':     '蟹香浓郁',
      'campus.food.crabSoupDumplings.taste':     '鲜甜多汁',
      'campus.food.crabSoupDumplings.texture':   '外皮柔软,汤汁丰富',
      'campus.food.spicyHotPot.name':            '麻辣香锅',
      'campus.food.spicyHotPot.aroma':           '麻辣香浓',
      'campus.food.spicyHotPot.taste':           '麻辣鲜香',
      'campus.food.spicyHotPot.texture':         '食材丰富,层次分明',
      'campus.food.braisedChickenRice.name':     '黄焖鸡米饭',
      'campus.food.braisedChickenRice.aroma':    '酱香扑鼻',
      'campus.food.braisedChickenRice.taste':    '咸鲜微甜',
      'campus.food.braisedChickenRice.texture':  '鸡肉软嫩,米饭入味',
      'campus.food.bibimbap.name':               '石锅拌饭',
      'campus.food.bibimbap.aroma':              '谷物清香',
      'campus.food.bibimbap.taste':              '咸香微辣',
      'campus.food.bibimbap.texture':            '锅巴酥脆,食材丰富',
      'campus.food.lanzhouBeefNoodles.name':     '兰州牛肉面',
      'campus.food.lanzhouBeefNoodles.aroma':    '牛肉香浓',
      'campus.food.lanzhouBeefNoodles.taste':    '鲜香微辣',
      'campus.food.lanzhouBeefNoodles.texture':  '面条劲道,汤底清鲜',
      'campus.food.yangzhouFriedRice.name':      '扬州炒饭',
      'campus.food.yangzhouFriedRice.aroma':     '蛋香浓郁',
      'campus.food.yangzhouFriedRice.taste':     '咸鲜适口',
      'campus.food.yangzhouFriedRice.texture':   '米粒分明,松软爽口',
      'campus.food.fishWithTofu.name':           '豆花鱼',
      'campus.food.fishWithTofu.aroma':          '麻辣鲜香',
      'campus.food.fishWithTofu.taste':          '鲜辣浓郁',
      'campus.food.fishWithTofu.texture':        '鱼肉细嫩,豆花柔滑',
      'campus.food.grilledFish.name':            '烤鱼',
      'campus.food.grilledFish.aroma':           '炭烤香气浓郁',
      'campus.food.grilledFish.taste':           '麻辣鲜香',
      'campus.food.grilledFish.texture':         '外焦里嫩,肉质鲜美',

      'dining.modal.title': '南信大周边更多菜品',
      'dining.modal.intro': '另外 8 道在校园或周边常见的热门菜品。',

      'map.placeholder': '嵌入式地图占位 —— 后续将替换为官方 / 已核实的地图 iframe。',
      'map.openNuist': '打开 map.nuist.edu.cn ↗',
      'map.openAmap': '在高德地图中打开 ↗',
      'map.nuist.title': '南信大校园地图',
      'map.nuist.desc': '官方校园鸟瞰图 —— 点击跳转 map.nuist.edu.cn。',

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

      'options.modal.intro': '请选择目的地 —— 将在高德地图中打开。',

      'bus.modal.title': 'Bus / 校园巴士',
      'bus.modal.intro': '南信大校内两条班车线路。长按站点名可复制。',
      'bus.modal.stopsLabel': '站点',
      'bus.routes.loop.name': '循环线',
      'bus.routes.loop.desc': '循环对开',
      'bus.routes.peak.name': '高峰线',
      'bus.routes.peak.desc': '双向对开',
      'options.waterford.linjiang': '临江楼',
      'options.waterford.yuejiang': '阅江楼',
      'options.canteen.xiyuanNew':    '西苑新食堂',
      'options.canteen.binjiang2':    '滨江学院第二食堂',
      'options.canteen.staff':        '教职工食堂',
      'options.canteen.zhongyuanOld': '中苑老食堂',
      'options.gate.xiyuanN':     '西苑北门',
      'options.gate.xiyuanS':     '西苑南门',
      'options.gate.talentN':     '人才公寓北门',
      'options.gate.zhongyuanS1': '中苑南1门',
      'options.gate.dongyuanS':   '东苑南门',
      'options.gate.dongyuanN':   '东苑北门',
      'options.gate.dongyuanE':   '东苑东门',

      'restaurants.modal.title': '推荐餐厅',
      'restaurants.modal.intro': '占位列表 —— 以下餐厅待小组核实。点击「前往」打开高德地图(搜索关键字将在后续填入)。',
      'restaurants.r1.name': '餐厅名称 [待补充]',
      'restaurants.r2.name': '餐厅名称 [待补充]',
      'restaurants.r3.name': '餐厅名称 [待补充]',
      'restaurants.addr.placeholder': '[地址待核实]',

      'appendix.eyebrow': '第五部分',
      'appendix.title': '附录',
      'appendix.lede': '一份简洁实用的中文应急短语集,助你顺利度过到岗最初几周。',
      'appendix.card.title': '实用中文 Q&A',
      'appendix.card.body': '十句日常中文短语,含拼音、英文释义与使用场景。点击展开问题列表。',
      'appendix.card.cta': '打开短语集 →',
      'appendix.modal.listTitle': '实用中文 Q&A',
      'appendix.modal.intro': '选择一个问题,查看对应的中文短语、拼音、英文释义与使用场景。',
      'appendix.detail.phrase': '中文短语',
      'appendix.detail.pinyin': '拼音',
      'appendix.detail.translation': '英文释义',
      'appendix.detail.whenToUse': '使用场景',

      'appendix.qa.q1.q':  '怎么打招呼?',
      'appendix.qa.q1.when':  '与同事、学生或本地居民第一次见面时使用。',
      'appendix.qa.q2.q':  '怎么道谢?',
      'appendix.qa.q2.when':  '在日常生活、工作或社交场合表达感谢时使用。',
      'appendix.qa.q3.q':  '怎么说「不好意思」?',
      'appendix.qa.q3.when':  '在礼貌地问路、请求帮助或想引起他人注意时使用。',
      'appendix.qa.q4.q':  '怎么说「没关系」?',
      'appendix.qa.q4.when':  '在回应他人感谢或接受他人道歉时使用。',
      'appendix.qa.q5.q':  '怎么请对方说慢一点?',
      'appendix.qa.q5.when':  '需要对方放慢语速以便理解时使用。',
      'appendix.qa.q6.q':  '怎么请对方稍等一下?',
      'appendix.qa.q6.when':  '在会议、通话中,或需要短暂处理事情时使用。',
      'appendix.qa.q7.q':  '怎么礼貌地请人帮忙?',
      'appendix.qa.q7.when':  '在客气地请求同事、工作人员或本地居民帮忙时使用。',
      'appendix.qa.q8.q':  '怎么说「我需要帮助」?',
      'appendix.qa.q8.when':  '遇到困难或需要立即协助时使用。',
      'appendix.qa.q9.q':  '怎么说「我听不懂」?',
      'appendix.qa.q9.when':  '听不懂中文,需要对方进一步说明时使用。',
      'appendix.qa.q10.q': '怎么说「很高兴认识你」?',
      'appendix.qa.q10.when': '自我介绍以及建立工作或社交关系时使用。',

      'footer.tag': '面向南信大国际教师的生活与文化导航平台。',
      'footer.version': '版本:v2.4',
      'footer.note': '已核实地点、电话、校园班车线路、实用中文短语集与美食指南均已上线。',
      'footer.telLabel': 'TEL',
      'footer.telSep': ':',

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
    // v2.4: aria-label attribute i18n (e.g. hero card "Hide welcome card")
    $$('[data-i18n-aria]').forEach(node => {
      const key = node.getAttribute('data-i18n-aria');
      if (dict[key] != null) node.setAttribute('aria-label', dict[key]);
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

  /* ---------- hero carousel ----------
     One INTERVAL governs dwell + one TRANSITION governs fade. Every slide
     uses the same numbers, so cadence is identical across all five images. */
  const HERO_INTERVAL = 5000;   // dwell per slide (ms)
  const HERO_TRANSITION = 800;  // fade duration (ms) — mirrors CSS .hero-slide opacity transition

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
    const INTERVAL = HERO_INTERVAL;

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

  /* ---------- v2.1: Amap jump helper ----------
     PC  → open https://uri.amap.com/search?keyword=... in a new tab.
     Mobile → try amapuri:// deep link first, fall back to uri.amap.com.
              uri.amap.com itself also performs an App-or-Web handoff, which
              keeps WeChat / Safari in-app browsers usable when the custom
              scheme is silently blocked. */
  function isMobileDevice() {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent || '';
    return /Android|iPhone|iPad|iPod|HarmonyOS|Mobile/i.test(ua);
  }

  function buildAmapWebUrl(keyword) {
    return 'https://uri.amap.com/search?keyword=' + encodeURIComponent(keyword)
      + '&src=njnavigator&coordinate=gaode&callnative=1';
  }
  function buildAmapAppScheme(keyword) {
    // Official Amap URI for searching POIs — keywords + sourceApplication.
    return 'amapuri://poi?sourceApplication=njnavigator&keywords='
      + encodeURIComponent(keyword) + '&dev=0';
  }

  function openAmapSearch(keyword) {
    const k = String(keyword == null ? '' : keyword).trim();
    if (!k) return;
    const webUrl = buildAmapWebUrl(k);

    if (!isMobileDevice()) {
      window.open(webUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // Mobile path: attempt App scheme; if the page never hides (App not
    // installed / scheme blocked), navigate to the web URL as fallback.
    const scheme = buildAmapAppScheme(k);
    let switched = false;
    const onHide = () => { switched = true; };
    document.addEventListener('visibilitychange', onHide, { once: true });
    window.addEventListener('pagehide', onHide, { once: true });
    window.addEventListener('blur', onHide, { once: true });

    try { window.location.href = scheme; } catch (e) { /* ignore */ }

    setTimeout(() => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onHide);
      window.removeEventListener('blur', onHide);
      if (!switched && !document.hidden) {
        // App did not take over — fall back to Amap web (callnative=1
        // lets Amap retry the App handoff from its own page).
        window.location.href = webUrl;
      }
    }, 1200);
  }

  // Back-compat alias for any older callers.
  function openAmap(q) { openAmapSearch(q); }

  function initAmapJumps() {
    $$('[data-action="amap"]').forEach(el => {
      el.addEventListener('click', ev => {
        ev.preventDefault();
        const q = el.getAttribute('data-amap-query') || '';
        openAmapSearch(q);
      });
    });
  }

  /* ---------- v2.4: Dining Guide — 10 dishes ----------
     First two render directly on the page (Claypot-Flavored Chicken and Duck
     Blood Vermicelli Soup). The remaining eight live behind Show More → modal. */
  const diningItems = [
    { id: 'claypotChicken',      img: 'claypot-chicken' },
    { id: 'duckBloodVermicelli', img: 'duck-blood-vermicelli' },
    { id: 'crabSoupDumplings',   img: 'crab-roe-soup-dumplings' },
    { id: 'spicyHotPot',         img: 'spicy-hot-pot' },
    { id: 'braisedChickenRice',  img: 'braised-chicken-rice' },
    { id: 'bibimbap',            img: 'bibimbap' },
    { id: 'lanzhouBeefNoodles',  img: 'lanzhou-beef-noodles' },
    { id: 'yangzhouFriedRice',   img: 'yangzhou-fried-rice' },
    { id: 'fishWithTofu',        img: 'fish-with-tofu' },
    { id: 'grilledFish',         img: 'grilled-fish' }
  ];
  const diningMoreItems = diningItems.slice(2);

  /* ---------- v2.3: Practical Chinese Q&A (Appendix two-level modal) ----------
     Phrase / Pinyin / Translation stay verbatim across languages. The two
     question prompts and the "When to use" rationale do switch language. */
  const practicalChineseItems = [
    { id: 'q1',  phrase: '你好',         pinyin: 'Nǐ hǎo',                translation: 'Hello',                  questionKey: 'appendix.qa.q1.q',  whenKey: 'appendix.qa.q1.when'  },
    { id: 'q2',  phrase: '谢谢',         pinyin: 'Xiè xie',               translation: 'Thank you',              questionKey: 'appendix.qa.q2.q',  whenKey: 'appendix.qa.q2.when'  },
    { id: 'q3',  phrase: '不好意思',     pinyin: 'Bù hǎo yì si',          translation: 'Excuse me',              questionKey: 'appendix.qa.q3.q',  whenKey: 'appendix.qa.q3.when'  },
    { id: 'q4',  phrase: '没关系',       pinyin: 'Méi guān xi',           translation: 'It’s okay',              questionKey: 'appendix.qa.q4.q',  whenKey: 'appendix.qa.q4.when'  },
    { id: 'q5',  phrase: '请说慢一点',   pinyin: 'Qǐng shuō màn yì diǎn', translation: 'Please speak more slowly', questionKey: 'appendix.qa.q5.q', whenKey: 'appendix.qa.q5.when' },
    { id: 'q6',  phrase: '请稍等一下',   pinyin: 'Qǐng shāo děng yí xià', translation: 'Please wait a moment',   questionKey: 'appendix.qa.q6.q',  whenKey: 'appendix.qa.q6.when'  },
    { id: 'q7',  phrase: '麻烦你了',     pinyin: 'Má fan nǐ le',          translation: 'Sorry to trouble you',   questionKey: 'appendix.qa.q7.q',  whenKey: 'appendix.qa.q7.when'  },
    { id: 'q8',  phrase: '我需要帮助',   pinyin: 'Wǒ xū yào bāng zhù',    translation: 'I need help',            questionKey: 'appendix.qa.q8.q',  whenKey: 'appendix.qa.q8.when'  },
    { id: 'q9',  phrase: '我听不懂',     pinyin: 'Wǒ tīng bù dǒng',       translation: 'I don’t understand',     questionKey: 'appendix.qa.q9.q',  whenKey: 'appendix.qa.q9.when'  },
    { id: 'q10', phrase: '很高兴认识你', pinyin: 'Hěn gāo xìng rèn shi nǐ', translation: 'Nice to meet you',     questionKey: 'appendix.qa.q10.q', whenKey: 'appendix.qa.q10.when' }
  ];

  /* ---------- v2.2: Bus shuttle routes ----------
     Stop names stay in Chinese because there's no canonical English roster
     for these on-campus stops yet. Route name + description + UI chrome do
     switch language via the i18n keys below. */
  const busRoutes = [
    {
      id: 'loop',
      nameKey: 'bus.routes.loop.name',
      descKey: 'bus.routes.loop.desc',
      stops: ['行政楼南','行政楼北','气象楼北','文德楼','明德楼','人才公寓1号门','大礼堂南门','滨江食堂','滨江楼','图书馆','中苑老食堂','气象楼南','行政楼南']
    },
    {
      id: 'peak',
      nameKey: 'bus.routes.peak.name',
      descKey: 'bus.routes.peak.desc',
      stops: ['行政楼南','行政楼北','气象楼北','文德楼','明德楼','大礼堂','中苑老食堂','图书馆','逸夫楼','滨江楼','滨江食堂']
    }
  ];

  /* ---------- v2.1: Option groups for multi-choice cards ----------
     Cards that resolve to several Amap targets open a chooser popup; each
     option carries the exact Amap keyword to hand to openAmapSearch. */
  const optionGroups = {
    waterford: {
      titleKey: 'campus.points.waterford.title',
      options: [
        { labelKey: 'options.waterford.linjiang', keyword: '南京信息工程大学临江楼' },
        { labelKey: 'options.waterford.yuejiang', keyword: '南京信息工程大学阅江楼' }
      ]
    },
    canteen: {
      titleKey: 'campus.points.canteen.title',
      options: [
        { labelKey: 'options.canteen.xiyuanNew', keyword: '南京信息工程大学西苑新食堂' },
        { labelKey: 'options.canteen.binjiang2', keyword: '南京信息工程大学滨江学院第二食堂' },
        { labelKey: 'options.canteen.staff',     keyword: '南京信息工程大学教职工食堂' },
        { labelKey: 'options.canteen.zhongyuanOld', keyword: '南京信息工程大学中苑老食堂' }
      ]
    },
    gate: {
      titleKey: 'campus.points.gate.title',
      options: [
        { labelKey: 'options.gate.xiyuanN',    keyword: '南京信息工程大学西苑北门' },
        { labelKey: 'options.gate.xiyuanS',    keyword: '南京信息工程大学西苑南门' },
        { labelKey: 'options.gate.talentN',    keyword: '南京信息工程大学北门' },
        { labelKey: 'options.gate.zhongyuanS1',keyword: '南京信息工程大学南1门' },
        { labelKey: 'options.gate.dongyuanS',  keyword: '南京信息工程大学东苑南门' },
        { labelKey: 'options.gate.dongyuanN',  keyword: '南京信息工程大学东苑北门' },
        { labelKey: 'options.gate.dongyuanE',  keyword: '南京信息工程大学东苑东门' }
      ]
    }
  };

  /* ---------- v1: Modal system ---------- */
  /* Two-level modal flows (Appendix Q&A) use a stack: each entry captures
     enough state to re-render. Back pops one level; Close empties everything. */
  const modalState = {
    open: false,
    activeTrigger: null,   // DOM element that initially opened the modal
    stack: []              // each: { trigger, titleKey, bodyKey, optionsId, activeItemId }
  };

  function modalTop() {
    return modalState.stack[modalState.stack.length - 1] || null;
  }
  function pushModalLevel(level) {
    modalState.stack.push(level);
    renderModalContent();
  }
  function popModalLevel() {
    if (modalState.stack.length > 1) {
      modalState.stack.pop();
      renderModalContent();
    } else {
      closeModal();
    }
  }

  function renderModalContent() {
    const titleEl = $('#modalTitle');
    const bodyEl = $('#modalBody');
    if (!titleEl || !bodyEl) return;
    const lang = currentLang();
    const dict = i18n[lang] || i18n.en;
    const top = modalTop();
    if (!top) {
      titleEl.textContent = '';
      bodyEl.innerHTML = '';
      return;
    }
    // Toggle the dialog-level "has a parent level" flag so CSS can show
    // a Back affordance / indent the title only when there is somewhere to go.
    const dialog = $('.modal-dialog');
    if (dialog) dialog.classList.toggle('has-back', modalState.stack.length > 1);

    if (top.trigger === 'restaurants') {
      titleEl.textContent = dict['restaurants.modal.title'];
      bodyEl.innerHTML = renderRestaurantsHtml(dict);
      // Wire Go buttons inside the modal to openAmap.
      $$('.restaurant-item .btn-go', bodyEl).forEach(btn => {
        btn.addEventListener('click', () => {
          const q = btn.getAttribute('data-amap-query') || '';
          openAmapSearch(q);
        });
      });
    } else if (top.trigger === 'bus') {
      titleEl.textContent = dict['bus.modal.title'] || '';
      bodyEl.innerHTML = renderBusRoutesHtml(dict);
    } else if (top.trigger === 'dining-more') {
      titleEl.textContent = dict['dining.modal.title'] || '';
      bodyEl.innerHTML = renderDiningMoreHtml(dict);
    } else if (top.trigger === 'options') {
      const group = optionGroups[top.optionsId];
      if (group) {
        titleEl.textContent = dict[group.titleKey] || '';
        bodyEl.innerHTML = renderOptionsHtml(group, dict);
        $$('.option-item', bodyEl).forEach(btn => {
          btn.addEventListener('click', () => {
            const kw = btn.getAttribute('data-amap-query') || '';
            // Trigger Amap first while we are still inside the user gesture,
            // then close the modal — keeps the gesture available for App launch.
            openAmapSearch(kw);
            closeModal();
          });
        });
      } else {
        titleEl.textContent = '';
        bodyEl.innerHTML = '';
      }
    } else if (top.trigger === 'appendix-list') {
      titleEl.textContent = dict['appendix.modal.listTitle'] || '';
      bodyEl.innerHTML = renderAppendixListHtml(dict);
      $$('.qa-pill', bodyEl).forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-qa-id');
          pushModalLevel({ trigger: 'appendix-detail', activeItemId: id });
        });
      });
    } else if (top.trigger === 'appendix-detail') {
      const item = practicalChineseItems.find(it => it.id === top.activeItemId);
      titleEl.textContent = item ? (dict[item.questionKey] || '') : '';
      bodyEl.innerHTML = renderAppendixDetailHtml(item, dict);
      $$('.modal-back', bodyEl).forEach(btn => {
        btn.addEventListener('click', popModalLevel);
      });
    } else {
      titleEl.textContent = top.titleKey ? (dict[top.titleKey] || '') : '';
      const body = top.bodyKey ? (dict[top.bodyKey] || '') : '';
      bodyEl.innerHTML = '<p>' + escapeHtml(body) + '</p>';
    }
  }

  function renderAppendixListHtml(dict) {
    const intro = '<p class="modal-intro">' + escapeHtml(dict['appendix.modal.intro'] || '') + '</p>';
    const pills = practicalChineseItems.map(item => (
      '<button type="button" class="qa-pill" data-qa-id="' + escapeHtml(item.id) + '">' +
        '<span class="qa-pill-num">' + escapeHtml(item.id.toUpperCase()) + '</span>' +
        '<span class="qa-pill-text">' + escapeHtml(dict[item.questionKey] || '') + '</span>' +
      '</button>'
    )).join('');
    return intro + '<div class="qa-pill-list">' + pills + '</div>';
  }

  function renderAppendixDetailHtml(item, dict) {
    if (!item) return '';
    const backLabel = escapeHtml(dict['action.back'] || 'Back');
    const labels = {
      phrase:      escapeHtml(dict['appendix.detail.phrase']      || ''),
      pinyin:      escapeHtml(dict['appendix.detail.pinyin']      || ''),
      translation: escapeHtml(dict['appendix.detail.translation'] || ''),
      whenToUse:   escapeHtml(dict['appendix.detail.whenToUse']   || '')
    };
    return (
      '<button type="button" class="modal-back">' +
        '<span aria-hidden="true">←</span> ' + backLabel +
      '</button>' +
      '<div class="qa-detail">' +
        '<div class="qa-row qa-row-phrase">' +
          '<span class="qa-row-label">' + labels.phrase + '</span>' +
          '<span class="qa-row-value qa-phrase">' + escapeHtml(item.phrase) + '</span>' +
        '</div>' +
        '<div class="qa-row qa-row-pinyin">' +
          '<span class="qa-row-label">' + labels.pinyin + '</span>' +
          '<span class="qa-row-value qa-pinyin">' + escapeHtml(item.pinyin) + '</span>' +
        '</div>' +
        '<div class="qa-row qa-row-translation">' +
          '<span class="qa-row-label">' + labels.translation + '</span>' +
          '<span class="qa-row-value qa-translation">' + escapeHtml(item.translation) + '</span>' +
        '</div>' +
        '<div class="qa-row qa-row-when">' +
          '<span class="qa-row-label">' + labels.whenToUse + '</span>' +
          '<p class="qa-row-value qa-when">' + escapeHtml(dict[item.whenKey] || '') + '</p>' +
        '</div>' +
      '</div>'
    );
  }

  function renderDiningMoreHtml(dict) {
    const intro = '<p class="modal-intro">' + escapeHtml(dict['dining.modal.intro'] || '') + '</p>';
    const cards = diningMoreItems.map(item => {
      const name    = escapeHtml(dict['campus.food.' + item.id + '.name']    || '');
      const aroma   = escapeHtml(dict['campus.food.' + item.id + '.aroma']   || '');
      const taste   = escapeHtml(dict['campus.food.' + item.id + '.taste']   || '');
      const texture = escapeHtml(dict['campus.food.' + item.id + '.texture'] || '');
      const labels = {
        aroma:   escapeHtml(dict['campus.food.smell']   || ''),
        taste:   escapeHtml(dict['campus.food.taste']   || ''),
        texture: escapeHtml(dict['campus.food.texture'] || '')
      };
      return (
        '<article class="dish-card-mini">' +
          '<div class="dish-img-wrap">' +
            '<img src="assets/food/' + escapeHtml(item.img) + '.jpg" alt="' + name + '" loading="lazy" decoding="async" />' +
          '</div>' +
          '<div class="dish-mini-body">' +
            '<h5>' + name + '</h5>' +
            '<dl class="sensory">' +
              '<dt>' + labels.aroma   + '</dt><dd>' + aroma   + '</dd>' +
              '<dt>' + labels.taste   + '</dt><dd>' + taste   + '</dd>' +
              '<dt>' + labels.texture + '</dt><dd>' + texture + '</dd>' +
            '</dl>' +
          '</div>' +
        '</article>'
      );
    }).join('');
    return intro + '<div class="dining-more-list">' + cards + '</div>';
  }

  function renderBusRoutesHtml(dict) {
    const intro = '<p class="modal-intro">' + escapeHtml(dict['bus.modal.intro'] || '') + '</p>';
    const cards = busRoutes.map(route => {
      const stopsHtml = route.stops.map(s => (
        '<li class="bus-stop">' + escapeHtml(s) + '</li>'
      )).join('');
      return (
        '<section class="bus-route">' +
          '<header class="bus-route-head">' +
            '<h4 class="bus-route-name">' + escapeHtml(dict[route.nameKey] || '') + '</h4>' +
            '<span class="bus-route-desc">' + escapeHtml(dict[route.descKey] || '') + '</span>' +
          '</header>' +
          '<p class="bus-route-stops-label">' + escapeHtml(dict['bus.modal.stopsLabel'] || '') + '</p>' +
          '<ol class="bus-route-stops">' + stopsHtml + '</ol>' +
        '</section>'
      );
    }).join('');
    return intro + '<div class="bus-routes">' + cards + '</div>';
  }

  function renderOptionsHtml(group, dict) {
    const intro = '<p class="modal-intro">' + escapeHtml(dict['options.modal.intro'] || '') + '</p>';
    const list = group.options.map(opt => (
      '<button type="button" class="option-item" data-amap-query="' + escapeHtml(opt.keyword) + '">' +
        '<span class="option-label">' + escapeHtml(dict[opt.labelKey] || opt.labelKey) + '</span>' +
        '<span class="option-go">' + escapeHtml(dict['action.openAmap'] || '') + '</span>' +
      '</button>'
    )).join('');
    return intro + '<div class="option-list">' + list + '</div>';
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
    modalState.stack = [{
      trigger:  triggerEl.getAttribute('data-modal-trigger'),
      titleKey: triggerEl.getAttribute('data-modal-title-key'),
      bodyKey:  triggerEl.getAttribute('data-modal-body-key'),
      optionsId: triggerEl.getAttribute('data-options-id'),
      activeItemId: null
    }];
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
    const dialog = $('.modal-dialog', root);
    if (dialog) dialog.classList.remove('has-back');
    if (modalState.activeTrigger && typeof modalState.activeTrigger.focus === 'function') {
      modalState.activeTrigger.focus({ preventScroll: true });
    }
    modalState.activeTrigger = null;
    modalState.stack = [];
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

  /* v2.3: QR card stack removed with the Appendix QR / References cards. */

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

  /* ---------- v2.4: Welcome intro overlay + hero card close ----------
     - Overlay plays once per browser (gated by localStorage); cleared cache
       lets it play again.
     - Closing the hero card with "x" persists across visits.
     - Honors prefers-reduced-motion: skip the slow fade and snap to done. */
  const WELCOME_INTRO_KEY = 'unidockWelcomeIntroPlayed';
  const WELCOME_CARD_HIDDEN_KEY = 'unidockWelcomeCardHidden';

  function readFlag(key) {
    try { return localStorage.getItem(key) === '1'; } catch (e) { return false; }
  }
  function writeFlag(key, val) {
    try { localStorage.setItem(key, val ? '1' : '0'); } catch (e) { /* ignore */ }
  }

  function initWelcomeIntro() {
    const overlay = $('#welcomeOverlay');
    if (!overlay) return;
    const cardHidden = readFlag(WELCOME_CARD_HIDDEN_KEY);
    const introPlayed = readFlag(WELCOME_INTRO_KEY);
    // If hero card is already hidden by the user, don't force the welcome
    // overlay either — they've opted out of the welcome experience.
    if (cardHidden || introPlayed) {
      overlay.remove();
      return;
    }

    const reduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    overlay.classList.add('is-visible');
    document.body.classList.add('welcome-intro-active');

    const finish = () => {
      overlay.classList.remove('is-visible');
      overlay.classList.add('is-done');
      document.body.classList.remove('welcome-intro-active');
      // Mark played early so a fast reload doesn't replay it.
      writeFlag(WELCOME_INTRO_KEY, true);
      // Remove from DOM after the CSS transition ends, so it never blocks clicks.
      setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 600);
    };

    // Start the shrink-to-card phase after the hold window.
    const HOLD_MS = reduced ? 150 : 1800;
    setTimeout(() => {
      overlay.classList.add('is-leaving');
      // Wait for the leaving transition (~1s) before fully removing.
      setTimeout(finish, reduced ? 120 : 1100);
    }, HOLD_MS);
  }

  function initHeroCardClose() {
    const card = $('#heroCard');
    const btn = $('#heroCardClose');
    if (!card || !btn) return;
    if (readFlag(WELCOME_CARD_HIDDEN_KEY)) {
      card.classList.add('is-hidden');
      card.setAttribute('aria-hidden', 'true');
      return;
    }
    btn.addEventListener('click', () => {
      card.classList.add('is-hiding');
      // Wait for the fade-out then fully hide so it leaves no layout box.
      setTimeout(() => {
        card.classList.add('is-hidden');
        card.classList.remove('is-hiding');
        card.setAttribute('aria-hidden', 'true');
      }, 260);
      writeFlag(WELCOME_CARD_HIDDEN_KEY, true);
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    let saved = 'en';
    try { saved = localStorage.getItem('njn.lang') || 'en'; } catch (e) {}
    applyLang(saved);

    const langBtn = $('#langToggle');
    if (langBtn) langBtn.addEventListener('click', toggleLang);

    // v2.4: welcome intro must run before/with carousel so the overlay sits
    // above the hero from first paint.
    initWelcomeIntro();
    initHeroCardClose();

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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
