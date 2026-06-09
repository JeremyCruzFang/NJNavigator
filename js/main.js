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
      'brand.tag': '',

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
      'hero.note': 'Verified campus locations, phones, shuttle routes, a Chinese phrasebook, dining guide, and walking routes online.',
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
      'story.t1.body': 'Foundation of the Ming capital and one of the world’s longest surviving city walls.',
      'story.t1.modal': 'The Ming founding in Nanjing and the building of the city wall set the long-term shape of the city. The wall, gates, and inner districts still organize traffic patterns, neighborhoods, and the cognitive map of present-day Nanjing.',
      'story.t2.title': 'Republican-era Nanjing',
      'story.t2.body': 'Civic architecture, modern planning, and political memory of a changing nation.',
      'story.t2.modal': 'Republican-era Nanjing was more than a political capital. It was a city reshaped by modern planning, civic architecture, and symbolic public spaces. Sites such as the Sun Yat-sen Mausoleum, the Presidential Palace, and related modern landmarks preserve the memory of a changing nation.',
      'story.t2.cap1': 'Sun Yat-sen Mausoleum · approach axis',
      'story.t2.cap2': 'Sun Yat-sen Mausoleum · main steps',
      'story.t2.cap3': 'Presidential Palace · courtyard',
      'story.t2.cap4': 'Republican-era civic streetscape',
      'story.t3.title': 'Modern Nanjing',
      'story.t3.body': 'Skyline, cross-river transit, university districts, and contemporary city life.',
      'story.t3.modal': 'Modern Nanjing continues to grow upon layers of history. Its skyline, cross-river connections, university districts, commercial areas, and public cultural spaces reveal the energy of a contemporary city. Rather than replacing the past, modern Nanjing extends the city’s identity through new urban life, innovation, and international exchange.',
      'story.t3.cap1': 'Hexi skyline · contemporary Nanjing',
      'story.t3.cap2': 'Yangtze River bridges · cross-river transit',
      'story.t3.cap3': 'University district · campus life',
      'story.t3.cap4': 'Xinjiekou · commercial core',
      'story.t3.cap5': 'Public cultural space',

      'story.cat.republic':   'Republican',
      'story.cat.water':      'Water & Culture',
      'story.cat.education':  'Education',
      'story.cat.everyday':   'Everyday',
      'story.d1.title': 'Republican Legacy: Mausoleum and Presidential Palace',
      'story.d1.sub':   'Political memory and civic architecture',
      'story.d1.body':  'Nanjing’s Republican legacy connects political memory, architectural form, and national narrative. The Sun Yat-sen Mausoleum creates a solemn commemorative space through its axis and mountain setting, while the Presidential Palace preserves traces of modern governance, courtyards, and historical transition.',
      'story.d1.alt':   'Sun Yat-sen Mausoleum and Presidential Palace',
      'story.d2.title': 'Rivers and Culture: Qinhuai and Yangtze',
      'story.d2.sub':   'Poetry, lantern-lit nights, and openness',
      'story.d2.body':  'Water has shaped the character of Nanjing. The Qinhuai River nurtured poetry, lantern-lit scenes, markets, and nightlife, while the Yangtze River connected the city to trade, transport, and openness. Nanjing’s cultural memory has long moved with its waters.',
      'story.d2.alt':   'Qinhuai River and Yangtze waterfront',
      'story.d3.title': 'Imperial Examination and Jiangnan Examination Hall',
      'story.d3.sub':   'Generations of scholars in the Jiangnan tradition',
      'story.d3.body':  'The Jiangnan Examination Hall witnessed the institutional tradition of selecting talent in imperial China. It gathered generations of scholars and reflected the Jiangnan region’s emphasis on education, writing, and official service.',
      'story.d3.alt':   'Jiangnan Examination Hall',
      'story.d4.title': 'Everyday Heritage',
      'story.d4.sub':   'Lanes, food, markets, and small encounters',
      'story.d4.body':  'Nanjing’s heritage is not limited to monumental architecture. It also lives in lanes, food, markets, campuses, transport, and everyday encounters. A meal, a street, a bridge, or a riverside evening can all become entry points into understanding the city.',
      'story.d4.alt':   'Daily street life in Nanjing',

      'gallery.prev': 'Previous image',
      'gallery.next': 'Next image',

      'routes.eyebrow': 'Section 4',
      'routes.title': 'Explore Like a Local',
      'routes.lede': 'Two half-day routes designed for first-month arrivals. Tap a field to read the practical tip in a popup.',
      'routes.a.title': 'Route A · Museum & Lake',
      'routes.a.sub': 'Nanjing Museum → Xuanwu Lake',
      'routes.b.title': 'Route B · Tower & Drum Tower',
      'routes.b.sub': 'Zifeng Tower → Nanjing Drum Tower',
      'routes.meta.time': 'Best time',
      'routes.meta.transit': 'Transport',
      'routes.meta.duration': 'Duration',
      'routes.meta.practical': 'Practical tips',
      'routes.meta.cultural': 'Cultural notes',
      'routes.mapPickPlace': 'Choose a place to open in Amap ↗',
      'routes.mapAria.routeA': 'Open Route A map and choose a place',
      'routes.mapAria.routeB': 'Open Route B map and choose a place',
      'routes.placeSelect.title': 'Choose a place',
      'routes.placeSelect.intro': 'Pick a stop on this route — it will open in Amap.',
      'routes.a.imgCap.museum1': 'Nanjing Museum · entrance',
      'routes.a.imgCap.museum2': 'Nanjing Museum · gallery',
      'routes.a.imgCap.xuanwu1': 'Xuanwu Lake · lakeside view',
      'routes.a.imgCap.xuanwu2': 'Xuanwu Lake · skyline backdrop',
      'routes.b.imgCap.zifeng1': 'Zifeng Tower · daytime exterior',
      'routes.b.imgCap.zifeng2': 'Zifeng Tower · night view',
      'routes.b.imgCap.drum1':   'Nanjing Drum Tower · main building',
      'routes.b.imgCap.drum2':   'Nanjing Drum Tower · detail',

      'places.nanjingMuseum.name':                 'Nanjing Museum',
      'places.nanjingMuseum.bestTime':              'Recommended times are 9:00-11:30 or before 16:00 in the afternoon. The museum officially opens from 9:00 to 17:00, with last ticket check at 16:00, and is closed on Mondays except public holidays. Book in advance and avoid arriving too close to closing time.',
      'places.nanjingMuseum.transport':             'From campus, use the metro to reach the city center and transfer toward Minggugong Station, then walk to the museum. Within downtown Nanjing, Metro Line 2 to Minggugong Station is the most convenient option, followed by a short walk. Use AMap for real-time bus or taxi routing.',
      'places.nanjingMuseum.duration':              'Plan 2.5-4 hours. A focused visit to major galleries may take about 2 hours; a deeper visit including special exhibitions can take half a day.',
      'places.nanjingMuseum.practicalTips':         'Check reservation rules and required ID before visiting. The museum is large, so prioritize major areas such as history, art, or Republican-era galleries first. It is also a strong indoor option on rainy, very hot, or cold days.',
      'places.nanjingMuseum.culturalNotes':         'Nanjing Museum is a strong first stop for understanding the city’s historical depth. It is not just a single attraction, but a gateway into ancient civilization, Ming-Qing culture, and modern urban memory.',

      'places.xuanwuLake.name':                     'Xuanwu Lake Scenic Area',
      'places.xuanwuLake.bestTime':                 'Spring and autumn are the most comfortable seasons. Early morning, late afternoon, and sunset are ideal for walking, photos, and skyline views. The lakeside road is open 24 hours, while the five islets and Lovers’ Garden usually open from 6:00-22:00 from April to October and 6:00-21:00 from November to March.',
      'places.xuanwuLake.transport':                'Within downtown Nanjing, take Metro Line 1 to Xuanwumen Station, or Metro Line 3/4 to Jimingsi Station, then walk into the scenic area. If continuing from Nanjing Museum, use AMap for the best real-time metro, bus, or taxi option.',
      'places.xuanwuLake.duration':                 'Allow 1.5-2 hours for a light visit. If walking around the lake, visiting the islets, or photographing sunset, plan 3-5 hours.',
      'places.xuanwuLake.practicalTips':            'Xuanwu Lake is large, so a full loop is not necessary for a first visit. Choose Xuanwumen Gate, Liangzhou, Yingzhou, or the section near the city wall as a compact route. In summer, prepare sun protection and water; for night photos, use a stable phone grip or tripod if available.',
      'places.xuanwuLake.culturalNotes':            'Xuanwu Lake is a key window into Nanjing’s landscape pattern of mountains, water, city walls, and forests. It links the lake, the city wall, Purple Mountain, and the modern skyline, showing the shift from royal garden to public urban park.',

      'places.zifengTower.name':                    'Zifeng Tower',
      'places.zifengTower.bestTime':                'Late afternoon to evening is recommended for skyline and night views around Gulou. The public access status of the observation floor may change, so confirm through AMap, ticketing platforms, or on-site information before going. If uncertain, treat it as an exterior landmark and Gulou skyline stop.',
      'places.zifengTower.transport':               'Take Metro Line 1 or Line 4 to Gulou Station, then walk to the Zifeng Tower / Gulou Square area. It pairs well with Nanjing Drum Tower, Gulou Square, Hunan Road, or an evening view near Xuanwu Lake.',
      'places.zifengTower.duration':                'Allow 30-60 minutes for exterior photos and nearby views. If the observation floor is confirmed open and you enter, plan 1-2 hours.',
      'places.zifengTower.practicalTips':           'Do not assume the observation floor is open. For landmark photos, choose a clear evening or night. Haze, rain, or fog can significantly reduce visibility.',
      'places.zifengTower.culturalNotes':           'Zifeng Tower represents the height and business identity of modern Nanjing. Its contrast with nearby Drum Tower, Xuanwu Lake, and the Ming City Wall makes it a useful stop for understanding how ancient capital and modern metropolis coexist.',

      'places.drumTower.name':                      'Nanjing Drum Tower',
      'places.drumTower.bestTime':                  'Recommended times are 9:00-11:00 or 15:00-17:00, when the light is better and it is easy to combine with Zifeng Tower and Gulou Square. Commonly listed hours are 9:00-17:00 with last entry around 16:45, but check on-site notices.',
      'places.drumTower.transport':                 'Take Metro Line 1 or Line 4 to Gulou Station and walk from Exit 3 or nearby exits. It is in central Nanjing and pairs well with Zifeng Tower, Nanjing University Gulou Campus, and Hunan Road.',
      'places.drumTower.duration':                  'Plan 45-90 minutes. A quick photo stop may take 30-45 minutes; allow longer if you want to explore the architecture and surrounding square.',
      'places.drumTower.practicalTips':             'Drum Tower and Zifeng Tower are close to each other and work well in the same route. Use the contrast between historic architecture and the modern tower for photos, but pay attention to traffic and safe crossings.',
      'places.drumTower.culturalNotes':             'Nanjing Drum Tower is one of the historic landmarks of the city center, historically associated with timekeeping, ceremony, and urban order. Its position beside the modern Gulou commercial area shows how Nanjing’s historical center continues into the modern city.',

      'routes.foodieTitle': 'Foodie Corner',
      'action.viewDetails': 'View details →',

      'foodie.field.bestFor':     'Best for',
      'foodie.field.highlights':  'Why go',
      'foodie.field.description': 'Notes',

      'foodie.nanjingImpressions.name':        'Nanjing Impressions',
      'foodie.nanjingImpressions.teaser':      'A signature spot to try many Nanjing dishes in one visit.',
      'foodie.nanjingImpressions.imgCap':      'Nanjing salted duck — a signature local dish.',
      'foodie.nanjingImpressions.bestFor':     'First-time visitors who want to try many Nanjing dishes in one place.',
      'foodie.nanjingImpressions.highlights':  'Strong atmosphere and a retro teahouse-style setting make it visitor-friendly.',
      'foodie.nanjingImpressions.description': 'Recommended dishes include sweet taro balls, duck blood vermicelli soup, Beauty’s Porridge, salted duck, roast duck buns, and lion’s head meatballs. Deji Plaza and Confucius Temple branches are convenient, but expect queues at peak hours.',

      'foodie.maXiangXing.name':        'Ma Xiang Xing Halal Restaurant',
      'foodie.maXiangXing.teaser':      'A Nanjing time-honored halal restaurant.',
      'foodie.maXiangXing.bestFor':     'Visitors who want an old-school Nanjing time-honored restaurant.',
      'foodie.maXiangXing.highlights':  'A more local and traditional stop, listed among Nanjing time-honored restaurants.',
      'foodie.maXiangXing.description': 'Local sources list its address at No. 32 Yunnan North Road, Gulou District. Signature dishes include egg shaomai, squirrel-shaped fish, and phoenix-tail shrimp, offering a classic Jinling halal dining experience.',

      'foodie.lvliuju.name':        'Lvliuju Vegetarian Restaurant',
      'foodie.lvliuju.teaser':      'Old-Nanjing vegetarian dishes and dim sum.',
      'foodie.lvliuju.imgCap':      'Plum blossom cake — a classic Nanjing snack.',
      'foodie.lvliuju.bestFor':     'Visitors interested in Qinhuai-style dining, vegetarian dishes, dim sum, and time-honored restaurants.',
      'foodie.lvliuju.highlights':  'Another classic Nanjing time-honored brand, locally said to be founded in 1912.',
      'foodie.lvliuju.description': 'Specialties include vegetarian “roast duck,” shaomai, and beef potstickers. A commonly listed old-store address is No. 248 Taiping South Road, Qinhuai District. It feels more old-Nanjing than Nanjing Impressions and more focused on snacks and vegetarian dishes than Ma Xiang Xing.',

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

      'metro.title': 'Metro Map',
      'metro.desc': 'View or scan the Nanjing Metro map for route planning.',
      'metro.openInside': 'Open Metro Map',
      'metro.saveQr': 'Save QR Code',
      'metro.open.title': 'Nanjing Metro Map',
      'metro.open.iframeTitle': 'Nanjing Metro Map (metroman.cn)',
      'metro.open.loading': 'Loading the metro map…',
      'metro.open.fallback': 'The metro map may not allow embedded viewing. Open it in a new tab if the map does not load.',
      'metro.open.newTab': 'Open in New Tab ↗',
      'metro.qr.title': 'Save QR Code',
      'metro.qr.intro': 'Scan this QR code with another device to open the Nanjing Metro Map.',
      'metro.qr.alt': 'QR code linking to the Nanjing Metro map on metroman.cn',
      'metro.qr.download': 'Download QR Code',

      'footer.tag': 'A practical and cultural guide for international faculty at NUIST.',
      'footer.note': 'Verified campus locations, phones, shuttle routes, dining guide, and walking routes.',
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
      'brand.tag': '',

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
      'hero.note': '已核实地点、电话、班车线路、短语集、美食指南、南京故事与本地路线均已上线。',
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
      'story.t1.body': '明代建都的开端,与世界上现存最长城墙之一的修筑。',
      'story.t1.modal': '明代在南京定都、修筑城墙的早期决定,持续塑造着今日南京的城市格局。城门、内外城与街区延续至今,继续影响着城市的交通脉络与心理地图。',
      'story.t2.title': '民国时期南京',
      'story.t2.body': '近代政务、公共建筑与象征性公共空间塑造下的城市。',
      'story.t2.modal': '民国时期的南京不仅是政治中心,也是一座被现代城市规划、公共建筑和纪念性空间重新塑造的城市。中山陵、总统府以及一系列近代建筑共同构成了南京独特的城市记忆,让今天的访客能够在街道、台阶、庭院与建筑立面中感受近代中国的历史脉络。',
      'story.t2.cap1': '中山陵 · 神道与轴线',
      'story.t2.cap2': '中山陵 · 主台阶',
      'story.t2.cap3': '总统府 · 庭院',
      'story.t2.cap4': '民国时期市政街景',
      'story.t3.title': '现代南京',
      'story.t3.body': '天际线、跨江交通、大学园区与当代城市生活。',
      'story.t3.modal': '今天的南京在历史层积之上继续生长。高楼天际线、跨江交通、大学园区、商业街区与公共文化空间共同展现出现代城市的活力。现代南京不是对历史的替代,而是在城墙、江河与老街之外继续扩展城市生活、科技创新和国际交流的新界面。',
      'story.t3.cap1': '河西天际线 · 当代南京',
      'story.t3.cap2': '长江大桥群 · 跨江交通',
      'story.t3.cap3': '大学园区 · 校园生活',
      'story.t3.cap4': '新街口 · 商业核心',
      'story.t3.cap5': '公共文化空间',

      'story.cat.republic':   '民国',
      'story.cat.water':      '河流与文化',
      'story.cat.education':  '教育',
      'story.cat.everyday':   '日常',
      'story.d1.title': '民国遗产:中山陵与总统府',
      'story.d1.sub':   '政治记忆与公共建筑',
      'story.d1.body':  '南京的民国遗产将政治记忆、建筑美学与国家叙事连接在一起。中山陵以庄重的轴线和山势构成纪念空间,总统府则保存了近代政务、庭院建筑与历史变迁的痕迹。它们共同展示了南京作为近代中国重要政治中心的城市身份。',
      'story.d1.alt':   '中山陵与总统府',
      'story.d2.title': '河流与文化:秦淮河与长江',
      'story.d2.sub':   '诗歌、灯影与城市开放',
      'story.d2.body':  '水塑造了南京的城市气质。秦淮河孕育了诗歌、灯影、市井与夜生活,长江则连接贸易、交通与城市开放的方向。从河岸到桥梁,从夜游到市集,南京的文化记忆始终与水流相伴。',
      'story.d2.alt':   '秦淮河与长江河岸',
      'story.d3.title': '科举与江南贡院',
      'story.d3.sub':   '江南文脉与代代士子',
      'story.d3.body':  '江南贡院见证了古代中国选拔人才的制度传统。这里曾聚集无数士子,也承载着江南地区重视教育、文字与仕途的文化理想。理解江南贡院,就是理解南京如何在知识、制度与社会流动之间形成独特的历史位置。',
      'story.d3.alt':   '江南贡院',
      'story.d4.title': '日常的遗产',
      'story.d4.sub':   '街巷、饮食、市场与小相遇',
      'story.d4.body':  '南京的遗产不只存在于宏大的纪念建筑中,也存在于街巷、饮食、市场、校园、交通和日常交往里。真正的城市记忆往往来自普通人的生活路径:一顿饭、一条路、一座桥、一段夜晚的河岸,都可能成为理解南京的入口。',
      'story.d4.alt':   '南京日常街景',

      'gallery.prev': '上一张',
      'gallery.next': '下一张',

      'routes.eyebrow': '第四部分',
      'routes.title': '像本地人一样探索',
      'routes.lede': '为初到一个月的访客设计的两条半日路线。点击字段在弹窗中查看实用提示。',
      'routes.a.title': '路线 A · 博物院与玄武湖',
      'routes.a.sub': '南京博物院 → 玄武湖',
      'routes.b.title': '路线 B · 紫峰与鼓楼',
      'routes.b.sub': '紫峰大厦 → 南京鼓楼',
      'routes.meta.time': '建议时段',
      'routes.meta.transit': '交通',
      'routes.meta.duration': '用时',
      'routes.meta.practical': '实用提示',
      'routes.meta.cultural': '文化提示',
      'routes.mapPickPlace': '选择一个地点在高德地图中打开 ↗',
      'routes.mapAria.routeA': '打开路线 A 地图并选择地点',
      'routes.mapAria.routeB': '打开路线 B 地图并选择地点',
      'routes.placeSelect.title': '请选择地点',
      'routes.placeSelect.intro': '选择本路线上的一个地点,将在高德地图中打开。',
      'routes.a.imgCap.museum1': '南京博物院 · 主入口',
      'routes.a.imgCap.museum2': '南京博物院 · 馆区',
      'routes.a.imgCap.xuanwu1': '玄武湖 · 湖畔',
      'routes.a.imgCap.xuanwu2': '玄武湖 · 湖天背景',
      'routes.b.imgCap.zifeng1': '紫峰大厦 · 日间外观',
      'routes.b.imgCap.zifeng2': '紫峰大厦 · 夜景',
      'routes.b.imgCap.drum1':   '南京鼓楼 · 主楼',
      'routes.b.imgCap.drum2':   '南京鼓楼 · 局部',

      'places.nanjingMuseum.name':                 '南京博物院',
      'places.nanjingMuseum.bestTime':             '建议上午 9:00-11:30 或下午 14:00-16:00 前往。南京博物院官方开放时间为 9:00-17:00,16:00 停止检票,周一闭馆,法定节假日除外。热门时段人流较多,建议提前预约并避开临近闭馆时间。',
      'places.nanjingMuseum.transport':            '从校园出发可优先使用地铁组合前往市区,再换乘至明故宫站附近,之后步行抵达南京博物院。市区内前往可使用地铁 2 号线明故宫站,再步行约 300 米。也可使用高德地图实时规划公交或打车路线。',
      'places.nanjingMuseum.duration':             '建议预留 2.5-4 小时。如果只看核心展厅,约 2 小时;如果细看多个馆区与特展,建议半天。',
      'places.nanjingMuseum.practicalTips':        '务必提前确认预约规则和入馆证件。馆内空间较大,建议先看历史馆、艺术馆或民国馆等重点区域,再按兴趣补充。雨天、酷暑或寒冷天气时,南博是非常适合安排的室内目的地。',
      'places.nanjingMuseum.culturalNotes':        '南京博物院适合作为理解南京历史纵深的第一站。它不是单一景点,而是从古代文明、明清文化到近现代城市记忆的综合入口。',

      'places.xuanwuLake.name':                    '玄武湖景区',
      'places.xuanwuLake.bestTime':                '春秋季最舒适。日常建议清晨、傍晚或日落前后前往,适合散步、拍照和看城市天际线。玄武湖环湖路 24 小时开放,五洲及情侣园通常 4-10 月 6:00-22:00、11 月至次年 3 月 6:00-21:00。',
      'places.xuanwuLake.transport':               '市区内可乘地铁 1 号线至玄武门站,或乘地铁 3/4 号线至鸡鸣寺站,再步行进入景区。若从南京博物院接续前往,可使用高德地图选择地铁、公交或打车路线。',
      'places.xuanwuLake.duration':                '轻量游览建议 1.5-2 小时;如果环湖、上岛或拍摄夕阳,可预留 3-5 小时。',
      'places.xuanwuLake.practicalTips':           '玄武湖面积较大,不建议第一次来就完整环湖。可以选择玄武门入口、梁洲、樱洲或靠近城墙的一段作为精华路线。夏季注意防晒补水,晚间拍照建议带稳定设备。',
      'places.xuanwuLake.culturalNotes':           '玄武湖是南京"山水城林"格局的重要窗口。它连接湖泊、城墙、紫金山和现代天际线,也体现了南京从皇家园林到公共城市公园的转变。',

      'places.zifengTower.name':                   '紫峰大厦',
      'places.zifengTower.bestTime':               '建议傍晚至夜间前往,在鼓楼片区观看城市天际线和灯光效果更好。紫峰大厦观光层开放状态可能变化,建议出发前通过高德地图、购票平台或现场信息确认;若不确定,按"外观打卡 + 鼓楼片区城市景观"安排即可。',
      'places.zifengTower.transport':              '可乘地铁 1 号线或 4 号线至鼓楼站,出站后步行前往紫峰大厦所在的鼓楼广场片区。它适合和南京鼓楼、鼓楼广场、湖南路或玄武湖夜景组合安排。',
      'places.zifengTower.duration':               '外观与周边拍照约 30-60 分钟;如果确认观光层开放并进入参观,可预留 1-2 小时。',
      'places.zifengTower.practicalTips':          '不要默认观光层一定开放。若只是城市地标打卡,建议选择晴朗傍晚或夜间;如果天气雾霾、雨雾较重,高空视野会明显受影响。',
      'places.zifengTower.culturalNotes':          '紫峰大厦代表现代南京的高度与金融商务形象。它与周边的鼓楼、玄武湖、明城墙形成强烈对比,是理解南京"古都与现代都市并置"的好地点。',

      'places.drumTower.name':                     '南京鼓楼',
      'places.drumTower.bestTime':                 '建议上午 9:00-11:00 或下午 15:00-17:00 前往,光线较好,也便于和紫峰大厦、鼓楼广场一并游览。鼓楼公园常见开放信息为 9:00-17:00、16:45 停止入场,实际以现场公告为准。',
      'places.drumTower.transport':                '可乘地铁 1 号线或 4 号线至鼓楼站,从 3 号口或附近出口步行前往。这里位于南京市中心,适合与紫峰大厦、南京大学鼓楼校区、湖南路等组合。',
      'places.drumTower.duration':                 '建议预留 45-90 分钟。若只拍照和简单参观,约 30-45 分钟;若想慢慢看建筑和周边广场,可预留更久。',
      'places.drumTower.practicalTips':            '鼓楼与紫峰大厦距离近,适合放在同一条路线。拍摄时可以利用古建筑与现代高楼的同框对比,但注意道路车流和过街安全。',
      'places.drumTower.culturalNotes':            '南京鼓楼是城市中心历史地标之一,曾承担报时、礼仪和城市管理象征功能。它与现代鼓楼商圈并置,能直观看到南京历史中心向现代城市中心的延续。',

      'routes.foodieTitle': '美食角',
      'action.viewDetails': '查看详情 →',

      'foodie.field.bestFor':     '适合',
      'foodie.field.highlights':  '优势',
      'foodie.field.description': '说明',

      'foodie.nanjingImpressions.name':        '南京大牌档',
      'foodie.nanjingImpressions.teaser':      '一次性尝试多种南京菜的代表餐厅。',
      'foodie.nanjingImpressions.imgCap':      '南京盐水鸭 —— 南京经典菜品。',
      'foodie.nanjingImpressions.bestFor':     '第一次来南京、想一次吃到多种南京菜的人。',
      'foodie.nanjingImpressions.highlights':  '场景感强,复古茶馆式环境更适合游客体验。',
      'foodie.nanjingImpressions.description': '可点古法糖芋苗、鸭血粉丝、民国美龄粥、盐水鸭、烤鸭包、狮子头等。德基广场店、夫子庙店较方便,但热门时段排队明显。',

      'foodie.maXiangXing.name':        '马祥兴清真菜馆',
      'foodie.maXiangXing.teaser':      '南京老字号清真菜馆。',
      'foodie.maXiangXing.bestFor':     '想吃真正老南京老字号的人。',
      'foodie.maXiangXing.highlights':  '更推荐保留"本地感"的一站,出现在南京老字号名单中。',
      'foodie.maXiangXing.description': '本地资料列出的地址为鼓楼区云南北路32号。代表菜包括蛋烧卖、松鼠鱼、凤尾虾,正餐可以体验老派金陵清真菜。',

      'foodie.lvliuju.name':        '绿柳居',
      'foodie.lvliuju.teaser':      '老南京素菜与点心。',
      'foodie.lvliuju.imgCap':      '梅花糕 —— 南京经典点心。',
      'foodie.lvliuju.bestFor':     '想吃秦淮气质、素菜、点心和老字号的人。',
      'foodie.lvliuju.highlights':  '同样属于南京老字号,资料显示其创建于 1912 年。',
      'foodie.lvliuju.description': '特色包括素烧鸭、烧卖、牛肉锅贴,本地宝列出的老店地址为秦淮区太平南路248号。它比南京大牌档更"老南京",比马祥兴更偏点心和素菜体验。',

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

      'metro.title': '地铁线路图',
      'metro.desc': '查看或扫码打开南京地铁线路图,便于出行规划。',
      'metro.openInside': '打开线路图',
      'metro.saveQr': '保存二维码',
      'metro.open.title': '南京地铁线路图',
      'metro.open.iframeTitle': '南京地铁线路图(metroman.cn)',
      'metro.open.loading': '正在加载地铁线路图……',
      'metro.open.fallback': '该线路图页面可能不允许站内嵌入浏览。如无法加载,请在新标签页中打开。',
      'metro.open.newTab': '在新标签页打开 ↗',
      'metro.qr.title': '保存二维码',
      'metro.qr.intro': '使用其他设备扫描此二维码,即可打开南京地铁线路图。',
      'metro.qr.alt': '南京地铁线路图二维码(指向 metroman.cn)',
      'metro.qr.download': '下载二维码',

      'footer.tag': '面向南信大国际教师的生活与文化导航平台。',
      'footer.note': '已核实地点、电话、班车线路、美食指南与本地路线。',
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

  /* v3.2: lazy-image hydration helpers ------------------------------------
     - hydrateLazyImages(root): promote every data-src under root to src.
     - hydrateGalleryImage(gallery, index): hydrate only the Nth slide image.
     Used to keep non-active route / modal / TIME slides off the network until
     the user actually swipes / opens them. */
  function hydrateLazyImages(root) {
    $$('img[data-src]', root || document).forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    });
  }
  function hydrateGalleryImage(gallery, index) {
    if (!gallery) return;
    const slides = $$('.route-slide, .modal-gallery-slide', gallery);
    const slide = slides[index];
    if (!slide) return;
    hydrateLazyImages(slide);
  }

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
    // v2.5: img alt attribute i18n (deep dive cards)
    $$('[data-i18n-alt]').forEach(node => {
      const key = node.getAttribute('data-i18n-alt');
      if (dict[key] != null) node.setAttribute('alt', dict[key]);
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

    function hydrateSlide(i) {
      const s = slides[i];
      if (!s) return;
      const bg = s.getAttribute('data-bg');
      if (bg) {
        s.style.backgroundImage = "url('" + bg + "')";
        s.removeAttribute('data-bg');
      }
    }
    function render() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('is-active', i === idx));
      // v3.2: hydrate the active slide + the next one (preloads the next fade).
      hydrateSlide(idx);
      hydrateSlide((idx + 1) % slides.length);
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

    // v3.2: pre-hydrate slide 2 after initial paint so the first fade has its
    // image ready. Other slides hydrate as they become the active/next slide.
    if (slides.length > 1) {
      const warmup = () => hydrateSlide(1);
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(warmup, { timeout: 2000 });
      } else {
        setTimeout(warmup, 1500);
      }
    }
  }

  /* ---------- Amap jump helper ----------
     PC  → open https://www.amap.com/search?query=... in a new tab.
     Mobile → navigate the current tab to https://uri.amap.com/search?...&callnative=1.
              Amap's own page handles the App-launch handoff (keyword preserved).
              If the page doesn't hide within ~1.2s (App not installed / scheme
              blocked), we replace location with the &callnative=0 H5 fallback
              so the user always lands on a real search-result page with the
              keyword filled in. */
  function isMobileDevice() {
    if (typeof navigator === 'undefined') return false;
    const ua = navigator.userAgent || '';
    return /Android|iPhone|iPad|iPod|HarmonyOS|Mobile/i.test(ua);
  }

  // City pinned to Nanjing for sharper Amap search ranking. Encoded once.
  const AMAP_CITY = encodeURIComponent('南京');

  function buildAmapPcUrl(keyword) {
    // PC keeps the previously verified amap.com/search page — opens a real
    // web search results page with the keyword pre-filled.
    return 'https://www.amap.com/search?query=' + encodeURIComponent(keyword);
  }
  function buildAmapMobileNativeUrl(keyword) {
    // Mobile primary: HTTPS uri.amap.com with callnative=1. Amap's own page
    // attempts to launch the installed App with the same keyword preserved.
    return 'https://uri.amap.com/search?keyword=' + encodeURIComponent(keyword)
      + '&city=' + AMAP_CITY
      + '&view=map&src=NJNavigator&callnative=1';
  }
  function buildAmapMobileFallbackUrl(keyword) {
    // Mobile fallback: same page, callnative=0 — stays on the H5 result page
    // when the App is not installed or the App launch is blocked.
    return 'https://uri.amap.com/search?keyword=' + encodeURIComponent(keyword)
      + '&city=' + AMAP_CITY
      + '&view=map&src=NJNavigator&callnative=0';
  }

  function openAmapSearch(keyword) {
    const k = String(keyword == null ? '' : keyword).trim();
    if (!k) return;

    if (!isMobileDevice()) {
      // PC: unchanged behavior — open the working web search page in a new tab.
      window.open(buildAmapPcUrl(k), '_blank', 'noopener,noreferrer');
      return;
    }

    // Mobile: navigate the current tab to the HTTPS uri.amap.com page with
    // callnative=1. Amap itself decides whether to launch the App (keeping the
    // keyword) or render the H5 result page. We watch for the page hiding
    // (pagehide / visibilitychange) — if it doesn't hide within ~1.2s we
    // assume the App didn't take over and replace the location with the
    // callnative=0 H5 fallback so the user lands on a usable search page.
    const nativeUrl   = buildAmapMobileNativeUrl(k);
    const fallbackUrl = buildAmapMobileFallbackUrl(k);

    let hasLeftPage = false;
    const markLeft = () => { hasLeftPage = true; };

    window.addEventListener('pagehide', markLeft, { once: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) hasLeftPage = true;
    }, { once: true });

    try { window.location.href = nativeUrl; } catch (e) { /* ignore */ }

    window.setTimeout(() => {
      if (!hasLeftPage && !document.hidden) {
        window.location.href = fallbackUrl;
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

  /* ---------- v2.6: Section 4 — Routes, Places, Foodie Corner ---------- */
  const routeItems = [
    {
      id: 'route-a',
      titleKey: 'routes.a.title',
      subKey:   'routes.a.sub',
      images: [
        { src: 'assets/section4/routes/route-a/nanjing-museum-01.jpg', captionKey: 'routes.a.imgCap.museum1' },
        { src: 'assets/section4/routes/route-a/nanjing-museum-02.jpg', captionKey: 'routes.a.imgCap.museum2' },
        { src: 'assets/section4/routes/route-a/xuanwu-lake-01.jpg',    captionKey: 'routes.a.imgCap.xuanwu1' },
        { src: 'assets/section4/routes/route-a/xuanwu-lake-02.jpg',    captionKey: 'routes.a.imgCap.xuanwu2' }
      ],
      mapImage: 'assets/section4/routes/maps/route-a-map.jpg',
      placeIds: ['nanjing-museum', 'xuanwu-lake']
    },
    {
      id: 'route-b',
      titleKey: 'routes.b.title',
      subKey:   'routes.b.sub',
      images: [
        { src: 'assets/section4/routes/route-b/zifeng-tower-01.jpg', captionKey: 'routes.b.imgCap.zifeng1' },
        { src: 'assets/section4/routes/route-b/zifeng-tower-02.jpg', captionKey: 'routes.b.imgCap.zifeng2' },
        { src: 'assets/section4/routes/route-b/drum-tower-01.jpg',   captionKey: 'routes.b.imgCap.drum1' },
        { src: 'assets/section4/routes/route-b/drum-tower-02.jpg',   captionKey: 'routes.b.imgCap.drum2' }
      ],
      mapImage: 'assets/section4/routes/maps/route-b-map.jpg',
      placeIds: ['zifeng-tower', 'drum-tower']
    }
  ];

  const placeInfo = {
    'nanjing-museum': {
      nameKey: 'places.nanjingMuseum.name',
      amapKeyword: '南京博物院'
    },
    'xuanwu-lake': {
      nameKey: 'places.xuanwuLake.name',
      amapKeyword: '玄武湖景区'
    },
    'zifeng-tower': {
      nameKey: 'places.zifengTower.name',
      amapKeyword: '紫峰大厦'
    },
    'drum-tower': {
      nameKey: 'places.drumTower.name',
      amapKeyword: '南京鼓楼'
    }
  };

  const placeInfoFields = [
    { id: 'bestTime',      labelKey: 'routes.meta.time' },
    { id: 'transport',     labelKey: 'routes.meta.transit' },
    { id: 'duration',      labelKey: 'routes.meta.duration' },
    { id: 'practicalTips', labelKey: 'routes.meta.practical' },
    { id: 'culturalNotes', labelKey: 'routes.meta.cultural' }
  ];

  const foodieItems = [
    {
      id: 'nanjing-impressions',
      nameKey:        'foodie.nanjingImpressions.name',
      amapKeyword:    '南京大牌档',
      images: [{ src: 'assets/section4/food/salted-duck.jpg', captionKey: 'foodie.nanjingImpressions.imgCap' }],
      bestForKey:     'foodie.nanjingImpressions.bestFor',
      highlightsKey:  'foodie.nanjingImpressions.highlights',
      descriptionKey: 'foodie.nanjingImpressions.description'
    },
    {
      id: 'ma-xiang-xing',
      nameKey:        'foodie.maXiangXing.name',
      amapKeyword:    '马祥兴清真菜馆',
      images: [],
      bestForKey:     'foodie.maXiangXing.bestFor',
      highlightsKey:  'foodie.maXiangXing.highlights',
      descriptionKey: 'foodie.maXiangXing.description'
    },
    {
      id: 'lvliuju',
      nameKey:        'foodie.lvliuju.name',
      amapKeyword:    '绿柳居',
      images: [{ src: 'assets/section4/food/meihua-cake.jpg', captionKey: 'foodie.lvliuju.imgCap' }],
      bestForKey:     'foodie.lvliuju.bestFor',
      highlightsKey:  'foodie.lvliuju.highlights',
      descriptionKey: 'foodie.lvliuju.description'
    }
  ];

  /* ---------- v2.5: Section 3 Timeline (TIME-01..03) ----------
     Only TIME-02 and TIME-03 carry image galleries. TIME-01 stays text-only,
     so its `images` array is empty and renderTimelineModalHtml skips the
     gallery controls entirely. */
  const timelineItems = [
    {
      id: 'time-01',
      titleKey: 'story.t1.title',
      bodyKey:  'story.t1.modal',
      images: []
    },
    {
      id: 'time-02',
      titleKey: 'story.t2.title',
      bodyKey:  'story.t2.modal',
      images: [
        { src: 'assets/section3/time/time-02/TIME-02-01.webp', captionKey: 'story.t2.cap1', altKey: 'story.t2.cap1' },
        { src: 'assets/section3/time/time-02/TIME-02-02.webp', captionKey: 'story.t2.cap2', altKey: 'story.t2.cap2' },
        { src: 'assets/section3/time/time-02/TIME-02-03.webp', captionKey: 'story.t2.cap3', altKey: 'story.t2.cap3' },
        { src: 'assets/section3/time/time-02/TIME-02-04.webp', captionKey: 'story.t2.cap4', altKey: 'story.t2.cap4' }
      ]
    },
    {
      id: 'time-03',
      titleKey: 'story.t3.title',
      bodyKey:  'story.t3.modal',
      images: [
        { src: 'assets/section3/time/time-03/TIME-03-01.webp', captionKey: 'story.t3.cap1', altKey: 'story.t3.cap1' },
        { src: 'assets/section3/time/time-03/TIME-03-02.webp', captionKey: 'story.t3.cap2', altKey: 'story.t3.cap2' },
        { src: 'assets/section3/time/time-03/TIME-03-03.webp', captionKey: 'story.t3.cap3', altKey: 'story.t3.cap3' },
        { src: 'assets/section3/time/time-03/TIME-03-04.webp', captionKey: 'story.t3.cap4', altKey: 'story.t3.cap4' },
        { src: 'assets/section3/time/time-03/TIME-03-05.webp', captionKey: 'story.t3.cap5', altKey: 'story.t3.cap5' }
      ]
    }
  ];

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

    if (top.trigger === 'bus') {
      titleEl.textContent = dict['bus.modal.title'] || '';
      bodyEl.innerHTML = renderBusRoutesHtml(dict);
    } else if (top.trigger === 'metro-open') {
      titleEl.textContent = dict['metro.open.title'] || '';
      bodyEl.innerHTML = renderMetroOpenHtml(dict);
      wireMetroOpenIframe(bodyEl);
    } else if (top.trigger === 'metro-qr') {
      titleEl.textContent = dict['metro.qr.title'] || '';
      bodyEl.innerHTML = renderMetroQrHtml(dict);
    } else if (top.trigger === 'place-select') {
      titleEl.textContent = dict['routes.placeSelect.title'] || '';
      bodyEl.innerHTML = renderPlaceSelectHtml(top.routeId, dict);
      $$('.place-select-item', bodyEl).forEach(btn => {
        btn.addEventListener('click', () => {
          const kw = btn.getAttribute('data-amap-query') || '';
          openAmapSearch(kw);
          closeModal();
        });
      });
    } else if (top.trigger === 'place-info') {
      const place = placeInfo[top.placeId];
      const field = placeInfoFields.find(f => f.id === top.fieldId);
      const placeName = place ? (dict[place.nameKey] || '') : '';
      const fieldLabel = field ? (dict[field.labelKey] || '') : '';
      titleEl.textContent = placeName + ' · ' + fieldLabel;
      const bodyKey = 'places.' + camelizePlaceId(top.placeId) + '.' + top.fieldId;
      const text = dict[bodyKey] || '';
      bodyEl.innerHTML = '<p class="modal-prose">' + escapeHtml(text) + '</p>';
    } else if (top.trigger === 'foodie-detail') {
      const item = foodieItems.find(it => it.id === top.foodieId);
      titleEl.textContent = item ? (dict[item.nameKey] || '') : '';
      bodyEl.innerHTML = renderFoodieDetailHtml(item, dict);
      wireModalGallery(bodyEl);
      $$('.foodie-amap-btn', bodyEl).forEach(btn => {
        btn.addEventListener('click', () => {
          const kw = btn.getAttribute('data-amap-query') || '';
          openAmapSearch(kw);
        });
      });
    } else if (top.trigger === 'timeline') {
      const item = timelineItems.find(it => it.id === top.timelineId);
      titleEl.textContent = item ? (dict[item.titleKey] || '') : '';
      bodyEl.innerHTML = renderTimelineModalHtml(item, dict);
      wireModalGallery(bodyEl);
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

  function camelizePlaceId(id) {
    return String(id || '').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }

  /* ---------- Metro Map (v3.3) ----------
     - METRO_URL: live page that Open Metro Map iframes into.
     - METRO_QR_SRC: locally generated PNG (Python qrcode lib) encoding METRO_URL.
       File is regenerated on every QR update so old/wrong images can never load. */
  const METRO_URL = 'https://www.metroman.cn/maps/nanjing/network';
  const METRO_QR_SRC = 'assets/metro/nanjing-metro-map-qr.png';
  const METRO_QR_DOWNLOAD = 'nanjing-metro-map-qr.png';

  function renderMetroOpenHtml(dict) {
    const loadingTxt   = escapeHtml(dict['metro.open.loading'] || '');
    const iframeTitle  = escapeHtml(dict['metro.open.iframeTitle'] || '');
    const fallbackTxt  = escapeHtml(dict['metro.open.fallback'] || '');
    const newTabTxt    = escapeHtml(dict['metro.open.newTab'] || '');
    return (
      '<div class="metro-iframe-wrap">' +
        '<div class="metro-iframe-loading" data-role="loading">' + loadingTxt + '</div>' +
        '<iframe class="metro-iframe" data-role="frame"' +
          ' src="' + METRO_URL + '"' +
          ' title="' + iframeTitle + '"' +
          ' loading="lazy"' +
          ' referrerpolicy="no-referrer-when-downgrade"' +
          ' allow="fullscreen"></iframe>' +
      '</div>' +
      '<p class="metro-open-fallback">' + fallbackTxt + '</p>' +
      '<div class="metro-modal-actions">' +
        '<a class="btn btn-primary metro-modal-open"' +
          ' href="' + METRO_URL + '"' +
          ' target="_blank" rel="noopener noreferrer">' + newTabTxt + '</a>' +
      '</div>'
    );
  }

  /* Iframe hint hider: dismiss the loading text on iframe load, or after a
     6s safety timer if the load event never fires (CSP block / network error).
     The "Open in New Tab" button stays visible regardless. */
  function wireMetroOpenIframe(root) {
    const loadingEl = $('[data-role="loading"]', root);
    const frame     = $('[data-role="frame"]', root);
    if (!frame || !loadingEl) return;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      loadingEl.classList.add('is-hidden');
    };
    frame.addEventListener('load', finish, { once: true });
    setTimeout(finish, 6000);
  }

  function renderMetroQrHtml(dict) {
    const intro = '<p class="modal-intro modal-prose">'
      + escapeHtml(dict['metro.qr.intro'] || '') + '</p>';
    const qrAlt = escapeHtml(dict['metro.qr.alt'] || '');
    const dlTxt = escapeHtml(dict['metro.qr.download'] || '');
    return (
      intro +
      '<figure class="metro-modal-qr">' +
        '<img src="' + METRO_QR_SRC + '" alt="' + qrAlt + '"' +
          ' loading="lazy" decoding="async" />' +
      '</figure>' +
      '<div class="metro-modal-actions">' +
        '<a class="btn btn-primary metro-modal-download"' +
          ' href="' + METRO_QR_SRC + '"' +
          ' download="' + METRO_QR_DOWNLOAD + '">' + dlTxt + '</a>' +
      '</div>'
    );
  }

  function renderPlaceSelectHtml(routeId, dict) {
    const route = routeItems.find(r => r.id === routeId);
    if (!route) return '';
    const intro = '<p class="modal-intro">' + escapeHtml(dict['routes.placeSelect.intro'] || '') + '</p>';
    const list = route.placeIds.map(pid => {
      const p = placeInfo[pid];
      if (!p) return '';
      const name = escapeHtml(dict[p.nameKey] || '');
      return (
        '<button type="button" class="option-item place-select-item" data-amap-query="' + escapeHtml(p.amapKeyword) + '">' +
          '<span class="option-label">' + name + '</span>' +
          '<span class="option-go">' + escapeHtml(dict['action.openAmap'] || '') + '</span>' +
        '</button>'
      );
    }).join('');
    return intro + '<div class="option-list">' + list + '</div>';
  }

  function renderFoodieDetailHtml(item, dict) {
    if (!item) return '';
    // Optional gallery (single image or none — no nav controls when count <= 1).
    let gallery = '';
    if (item.images && item.images.length) {
      const slides = item.images.map((img, i) => (
        '<figure class="modal-gallery-slide' + (i === 0 ? ' is-active' : '') + '" data-idx="' + i + '">' +
          '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(dict[item.nameKey] || '') + '" loading="lazy" decoding="async" />' +
          '<figcaption>' + escapeHtml(dict[img.captionKey] || '') + '</figcaption>' +
        '</figure>'
      )).join('');
      const showCtrls = item.images.length > 1;
      const ctrls = showCtrls ? (
        '<div class="modal-gallery-counter"><span class="g-cur">1</span> / ' + item.images.length + '</div>'
      ) : '';
      gallery = '<div class="modal-gallery" data-total="' + item.images.length + '">' +
                 '<div class="modal-gallery-stage">' + slides + '</div>' +
                 ctrls +
               '</div>';
    }
    const row = (labelKey, valueKey) => (
      '<div class="foodie-row">' +
        '<span class="foodie-row-label">' + escapeHtml(dict[labelKey] || '') + '</span>' +
        '<p class="foodie-row-value">' + escapeHtml(dict[valueKey] || '') + '</p>' +
      '</div>'
    );
    return (
      gallery +
      '<div class="foodie-detail">' +
        row('foodie.field.bestFor',     item.bestForKey) +
        row('foodie.field.highlights',  item.highlightsKey) +
        row('foodie.field.description', item.descriptionKey) +
      '</div>' +
      '<button type="button" class="btn btn-primary foodie-amap-btn" data-amap-query="' + escapeHtml(item.amapKeyword) + '">' +
        escapeHtml(dict['action.openAmap'] || '') +
      '</button>'
    );
  }

  function renderTimelineModalHtml(item, dict) {
    if (!item) return '';
    const body = '<p class="modal-intro modal-prose">' + escapeHtml(dict[item.bodyKey] || '') + '</p>';
    if (!item.images || item.images.length === 0) return body;

    const slides = item.images.map((img, i) => {
      const cap = escapeHtml(dict[img.captionKey] || '');
      const alt = escapeHtml(dict[img.altKey] || cap);
      // v3.2: only the active slide loads immediately; others wait until the
      // user swipes / clicks the next button. wireModalGallery handles hydration.
      const srcAttr = (i === 0 ? 'src' : 'data-src');
      return (
        '<figure class="modal-gallery-slide' + (i === 0 ? ' is-active' : '') + '" data-idx="' + i + '">' +
          '<img ' + srcAttr + '="' + escapeHtml(img.src) + '" alt="' + alt + '" loading="lazy" decoding="async" />' +
          '<figcaption>' + cap + '</figcaption>' +
        '</figure>'
      );
    }).join('');

    const showControls = item.images.length > 1;
    const controlsHtml = showControls ? (
      '<button type="button" class="gallery-arrow prev" aria-label="' + escapeHtml(dict['gallery.prev'] || 'Previous image') + '">‹</button>' +
      '<button type="button" class="gallery-arrow next" aria-label="' + escapeHtml(dict['gallery.next'] || 'Next image') + '">›</button>' +
      '<div class="modal-gallery-counter"><span class="g-cur">1</span> / ' + item.images.length + '</div>'
    ) : '';

    return body +
      '<div class="modal-gallery" data-total="' + item.images.length + '">' +
        '<div class="modal-gallery-stage">' + slides + '</div>' +
        controlsHtml +
      '</div>';
  }

  function wireModalGallery(root) {
    const gallery = $('.modal-gallery', root);
    if (!gallery) return;
    const slides = $$('.modal-gallery-slide', gallery);
    if (slides.length === 0) return;
    // Single-image gallery: nothing to wire, just hydrate (no-op if eager).
    if (slides.length === 1) {
      hydrateGalleryImage(gallery, 0);
      return;
    }
    const total = slides.length;
    let idx = 0;
    const counter = $('.g-cur', gallery);
    const render = () => {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      if (counter) counter.textContent = String(idx + 1);
      // v3.2: hydrate current + next so the next click/swipe doesn't pause.
      hydrateGalleryImage(gallery, idx);
      hydrateGalleryImage(gallery, (idx + 1) % total);
    };
    const go = (delta) => { idx = (idx + delta + total) % total; render(); };
    const prev = $('.gallery-arrow.prev', gallery);
    const next = $('.gallery-arrow.next', gallery);
    if (prev) prev.addEventListener('click', () => go(-1));
    if (next) next.addEventListener('click', () => go(+1));
    // Initial hydration so the user sees the first image instantly and the
    // second one is ready when they tap next.
    hydrateGalleryImage(gallery, 0);
    hydrateGalleryImage(gallery, 1 % total);
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

  /* v2.6: renderRestaurantsHtml removed — Foodie Corner now uses real
     restaurant cards that open a dedicated foodie-detail modal. */

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
      trigger:    triggerEl.getAttribute('data-modal-trigger'),
      titleKey:   triggerEl.getAttribute('data-modal-title-key'),
      bodyKey:    triggerEl.getAttribute('data-modal-body-key'),
      optionsId:  triggerEl.getAttribute('data-options-id'),
      timelineId: triggerEl.getAttribute('data-timeline-id'),
      routeId:    triggerEl.getAttribute('data-route-id'),
      placeId:    triggerEl.getAttribute('data-place-id'),
      fieldId:    triggerEl.getAttribute('data-field-id'),
      foodieId:   triggerEl.getAttribute('data-foodie-id'),
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
  /* v2.6 swipe helper — fires onDelta(±1) when the touch crosses the threshold. */
  function attachSwipe(el, onDelta) {
    if (!el) return;
    let startX = 0, startY = 0, tracking = false;
    const THRESHOLD = 40;
    el.addEventListener('touchstart', ev => {
      if (!ev.touches || ev.touches.length !== 1) return;
      startX = ev.touches[0].clientX;
      startY = ev.touches[0].clientY;
      tracking = true;
    }, { passive: true });
    el.addEventListener('touchend', ev => {
      if (!tracking) return;
      tracking = false;
      const t = (ev.changedTouches && ev.changedTouches[0]) || null;
      if (!t) return;
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (Math.abs(dx) >= THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.2) {
        onDelta(dx < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

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

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      groups.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Go to card ' + (i + 1));
        if (i === 0) b.classList.add('is-active');
        b.addEventListener('click', () => go(i));
        dotsWrap.appendChild(b);
      });
    }

    function render() {
      track.style.transform = 'translateX(' + (-100 * idx) + '%)';
      if (dotsWrap) $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('is-active', i === idx));
    }
    function go(i) {
      idx = (i + groups.length) % groups.length;
      render();
    }
    if (prev) prev.addEventListener('click', () => go(idx - 1));
    if (next) next.addEventListener('click', () => go(idx + 1));

    // v2.6: swipe support — arrows are gone on .deck-single, swipe is the
    // main interaction along with the bottom dots.
    attachSwipe($('.deck-viewport', deck), d => go(idx + d));
  }

  /* ---------- v2.6: Route image galleries (no arrows, swipe + dots) ---------- */
  function initRouteGalleries() {
    $$('.route-gallery').forEach(gallery => {
      const slides = $$('.route-slide', gallery);
      const dotsWrap = $('.gallery-dots', gallery);
      if (slides.length === 0) return;

      let idx = 0;

      if (dotsWrap) {
        dotsWrap.innerHTML = '';
        slides.forEach((_, i) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('aria-label', 'Go to image ' + (i + 1));
          if (i === 0) b.classList.add('is-active');
          b.addEventListener('click', ev => { ev.stopPropagation(); go(i); });
          dotsWrap.appendChild(b);
        });
      }

      function render() {
        slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
        if (dotsWrap) $$('button', dotsWrap).forEach((d, i) => d.classList.toggle('is-active', i === idx));
        // v3.2: hydrate active + next so swipes feel instant without preloading
        // every non-visible slide up-front.
        hydrateGalleryImage(gallery, idx);
        hydrateGalleryImage(gallery, (idx + 1) % slides.length);
      }
      function go(i) {
        idx = (i + slides.length) % slides.length;
        render();
      }
      attachSwipe(gallery, d => go(idx + d));
      // v3.2: initial hydration — first slide already has src; hydrate slide #2
      // so the next swipe doesn't pause on network.
      hydrateGalleryImage(gallery, (idx + 1) % slides.length);
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
