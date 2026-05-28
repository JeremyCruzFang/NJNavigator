/* =================================================================
   NJNavigator v0 — main.js
   - i18n dictionary (EN / 中文)
   - Hero carousel
   - Smooth scroll + active nav highlighting
   - Mobile nav toggle
   - Reveal-on-scroll
   ================================================================= */

(function () {
  'use strict';

  /* ---------- i18n dictionary ----------
     Keep keys flat-ish and grouped by section. All visible v0 strings
     should have both EN and ZH entries here for the toggle. */
  const i18n = {
    en: {
      'meta.title': 'NJNavigator — A Guide for International Faculty in Nanjing',
      'brand.tag': 'v0 · placeholder',

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
      'hero.note': 'v0 · Visual foundation. Final content and verified facts to follow.',

      'tag.verified': 'Verified',
      'tag.unverified': 'Needs verification',
      'tag.placeholder': 'Placeholder',

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
      'campus.points.routine.title': 'Daily Routine',
      'campus.points.routine.body': 'A typical Monday–Friday rhythm for a new arrival.',
      'campus.routine.l1': 'Morning coffee & office hours',
      'campus.routine.l2': 'Canteen lunch (11:30–12:30)',
      'campus.routine.l3': 'Afternoon teaching / research',
      'campus.routine.l4': 'Evening walk / Xuanwu Lake',
      'campus.diningTitle': 'Dining Guide',
      'campus.food.f1.title': 'Tomato and egg over rice',
      'campus.food.f2.title': 'Braised pork ribs',
      'campus.food.f3.title': 'Duck blood vermicelli soup',
      'campus.food.smell': 'Smell',
      'campus.food.taste': 'Taste',
      'campus.food.texture': 'Texture',
      'campus.food.context': 'Context',

      'map.placeholder': 'Embedded map placeholder — to be replaced with official / verified map iframe.',

      'story.eyebrow': 'Section 3',
      'story.title': 'The Nanjing Story',
      'story.lede': 'A short walk through the layers of the city — Ming walls, Republican avenues, modern districts.',
      'story.t1.title': 'Ming Dynasty & the City Wall',
      'story.t1.body': '[Placeholder] Foundation of the Ming capital and construction of one of the world’s longest surviving city walls.',
      'story.t2.title': 'Republican Era',
      'story.t2.body': '[Placeholder] Nanjing as a 20th-century capital — civic architecture, planning, and political memory.',
      'story.t3.title': 'Modern Nanjing',
      'story.t3.body': '[Placeholder] University clusters, metro expansion, and contemporary cultural life.',
      'story.d1.title': 'The Wall & The City',
      'story.d1.body': '[Ming City Wall historical analysis placeholder] How the wall shapes neighborhoods, traffic, and the cognitive map of present-day Nanjing.',
      'story.d2.title': 'Republican Legacy',
      'story.d2.body': '[Sun Yat-sen Mausoleum / Presidential Palace analysis placeholder] Reading Republican-era sites as living civic spaces, not only monuments.',

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
      'routes.foodie.f2.title': 'Duck Blood Vermicelli Soup',
      'routes.foodie.f2.body': '[PLACEHOLDER] Brief cultural and sensory note to be written.',
      'routes.foodie.f3.title': 'Local Restaurant',
      'routes.foodie.f3.body': '[PLACEHOLDER] Recommended restaurant to be confirmed by group.',

      'appendix.eyebrow': 'Section 5',
      'appendix.title': 'Appendix',
      'appendix.lede': 'Reference material: ten useful phrases, sources, a QR for mobile use, and the AI disclosure required by the course.',
      'appendix.phrasesTitle': '10 Essential Chinese Phrases',
      'appendix.phrase.usage': 'Usage context: [PLACEHOLDER]',
      'appendix.refsTitle': 'References',
      'appendix.ref.placeholder': 'Official source placeholder.',
      'appendix.qrTitle': 'QR Code',
      'appendix.qr.body': 'Website link / subway map / useful resource placeholder.',
      'appendix.aiTitle': 'AI Usage Disclosure',
      'appendix.aiBody': 'AI Usage Disclosure: [TO BE COMPLETED BY EACH STUDENT]. Each contributor should declare tools used, the nature of assistance, and verification steps performed.',

      'footer.tag': 'A practical and cultural guide for international faculty at NUIST.',
      'footer.version': 'Version: v0 (visual foundation)',
      'footer.domain': 'Future domain: njnavigator.site',
      'footer.note': 'All factual content currently marked as placeholder.'
    },

    zh: {
      'meta.title': 'NJNavigator — 南京国际教师生活与文化导航',
      'brand.tag': 'v0 · 占位版本',

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
      'hero.note': 'v0 · 视觉与结构搭建版本,最终内容与核实信息将陆续补充。',

      'tag.verified': '已核实',
      'tag.unverified': '待核实',
      'tag.placeholder': '占位',

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
      'campus.points.routine.title': '日常节奏',
      'campus.points.routine.body': '一个新到教师周一至周五的典型节奏。',
      'campus.routine.l1': '上午咖啡与办公时间',
      'campus.routine.l2': '食堂午餐(11:30–12:30)',
      'campus.routine.l3': '下午教学 / 研究',
      'campus.routine.l4': '傍晚散步 / 玄武湖',
      'campus.diningTitle': '校园餐饮',
      'campus.food.f1.title': '番茄炒蛋盖饭',
      'campus.food.f2.title': '红烧排骨',
      'campus.food.f3.title': '鸭血粉丝汤',
      'campus.food.smell': '气味',
      'campus.food.taste': '味道',
      'campus.food.texture': '口感',
      'campus.food.context': '场景',

      'map.placeholder': '嵌入式地图占位 —— 后续将替换为官方 / 已核实的地图 iframe。',

      'story.eyebrow': '第三部分',
      'story.title': '南京的故事',
      'story.lede': '一段穿越城市层次的短行 —— 明城墙、民国大道、现代城区。',
      'story.t1.title': '明代与城墙',
      'story.t1.body': '[占位] 明代建都的开端,与世界上现存最长城墙之一的修筑。',
      'story.t2.title': '民国时期',
      'story.t2.body': '[占位] 作为 20 世纪首都的南京 —— 公共建筑、城市规划与政治记忆。',
      'story.t3.title': '现代南京',
      'story.t3.body': '[占位] 高校群、地铁拓展与当代文化生活。',
      'story.d1.title': '城墙与城市',
      'story.d1.body': '[明城墙历史分析占位] 城墙如何塑造今日南京的街区、交通与心理地图。',
      'story.d2.title': '民国遗产',
      'story.d2.body': '[中山陵 / 总统府分析占位] 把民国时期场所读作仍在使用的公共空间,而不仅是纪念物。',

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
      'routes.foodie.f2.title': '鸭血粉丝汤',
      'routes.foodie.f2.body': '[占位] 简短的文化与感官描述,后续补写。',
      'routes.foodie.f3.title': '本地餐厅',
      'routes.foodie.f3.body': '[占位] 推荐餐厅待小组确认。',

      'appendix.eyebrow': '第五部分',
      'appendix.title': '附录',
      'appendix.lede': '参考材料:十句实用短语、参考资料、移动端二维码,以及课程要求的 AI 使用说明。',
      'appendix.phrasesTitle': '十句实用中文短语',
      'appendix.phrase.usage': '使用场景:[占位]',
      'appendix.refsTitle': '参考资料',
      'appendix.ref.placeholder': '官方来源占位。',
      'appendix.qrTitle': '二维码',
      'appendix.qr.body': '网站链接 / 地铁图 / 实用资源占位。',
      'appendix.aiTitle': 'AI 使用说明',
      'appendix.aiBody': 'AI 使用说明:[由每位同学填写]。每位作者需声明使用的工具、协助方式与所做的核实步骤。',

      'footer.tag': '面向南信大国际教师的生活与文化导航平台。',
      'footer.version': '版本:v0(视觉与结构搭建)',
      'footer.domain': '未来域名:njnavigator.site',
      'footer.note': '当前所有事实性内容均标记为占位。'
    }
  };

  /* ---------- helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------- language switching ---------- */
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

    try { localStorage.setItem('njn.lang', lang); } catch (e) {}
  }

  function toggleLang() {
    const current = document.documentElement.getAttribute('data-lang') || 'en';
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

    // build dots
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

    // pause when off-screen (saves CPU on long pages)
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) start(); else stop(); });
    }, { threshold: 0.1 });
    io.observe(carousel);
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
    // close on link tap
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
