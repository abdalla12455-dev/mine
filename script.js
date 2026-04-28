/**
 * Portfolio Script — Abdullah Raad
 * Bilingual (EN/AR) with RTL support, localStorage persistence
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────
     TRANSLATIONS
  ───────────────────────────────────────── */
  const i18n = {
    en: {
      nav_about:    'About',
      nav_work:     'Work',
      nav_skills:   'Skills',
      nav_contact:  "Let's Talk",

      hero_name:        'Abdullah Raad',
      nav_logo_text:    'AR',

      hero_avail:       'Open to remote opportunities',
      hero_tagline:     'I build <span class="highlight">AI-powered systems</span> that scale —<br>not just demos.',
      hero_positioning: 'I build systems that understand language — not just process data.',
      hero_cta_projects:'View Projects',
      hero_cta_wa:      'WhatsApp Me',
      hero_cta_email:   'Email Me',

      about_eyebrow: 'Background',
      about_heading: 'The Engineering Edge',
      about_p1: "I don't write code — I architect intelligence. My discipline fuses advanced software engineering with linguistics, producing systems that don't just store and retrieve data, but understand context, intent, and human nuance.",
      about_p2: 'By embedding elite AI tools (Cursor, AntiGravity, LLM pipelines) directly into my development process, I consistently compress project timelines by <strong>60–80%</strong> — without cutting corners on architecture, security, or performance.',
      about_p3: 'The result: production-grade systems delivered at startup speed, built to withstand real-world concurrency, scale, and adversarial conditions.',
      metric_delivery: 'Faster Delivery',
      metric_systems:  'Production Systems',
      metric_langs:    'Languages Spoken',
      metric_race:     'Race Conditions',

      diff_eyebrow: 'Differentiators',
      diff_heading: 'What Makes Me Different',
      diff1_title: 'Language-Aware Engineering',
      diff1_body:  'As an English Trainer with a linguistics background, I architect NLP systems that parse cultural context, dialect nuance, and human intent — not just tokens and embeddings.',
      diff2_title: 'AI-Accelerated Delivery',
      diff2_body:  'I orchestrate advanced AI development environments — Cursor, AntiGravity, GitHub Copilot — to compress delivery timelines to a fraction of standard cycles. Same quality. Less time.',
      diff3_title: 'Production Over Prototypes',
      diff3_body:  'I build for real-world conditions: high-concurrency scenarios, pessimistic locking, atomic transactions, rate limiting. Systems that survive load, not just demos that survive a pitch.',

      proj_eyebrow: 'Production Systems',
      proj_heading: 'Featured Work',
      proj_sub:     'Real challenges. Intelligent architecture. Measurable outcomes.',
      psr_problem:  'Problem',
      psr_solution: 'Solution',
      psr_result:   'Result',

      p1_title: 'Iraqi Dialect AI Chat',
      p1_prob:  'Standard LLMs fail to comprehend Iraqi Arabic dialect — producing irrelevant, low-confidence outputs that erode user trust.',
      p1_sol:   'Engineered a localized NLP pipeline strictly fine-tuned on Iraqi dialect syntax, idioms, and phonetic patterns.',
      p1_res:   'Near-native dialect comprehension and culturally resonant responses — eliminating the language gap for Iraqi end users.',

      p2_title: 'Prompt Library SaaS Platform',
      p2_prob:  'Engineering teams lack centralized, versioned storage for AI prompts — resulting in duplicated effort and inconsistent outputs.',
      p2_sol:   'Built a multi-tenant SaaS platform with real-time workspaces, strict prompt versioning, and API integration layers.',
      p2_res:   'Standardized AI workflows across teams — reducing prompt redundancy and measurably improving LLM output quality.',

      p3_title: 'Plastic Surgery Booking System',
      p3_prob:  'Traffic spikes during booking releases caused race conditions — double-booking doctors\' schedules under concurrent load.',
      p3_sol:   'Rebuilt transaction layer with pessimistic DB locking, atomic queue processing, and strict rate limiting on booking endpoints.',
      p3_res:   'Zero double-bookings post-launch. System sustained peak loads without degradation or data inconsistency.',

      p4_title: 'Qiyafe Retail Platform',
      p4_prob:  'Legacy monolithic architecture couldn\'t scale during seasonal traffic spikes — causing failures and lost conversions.',
      p4_sol:   'Migrated to decoupled microservices architecture with a high-performance frontend and dedicated API gateway.',
      p4_res:   'Full availability during peak traffic. Accelerated customer conversion funnel and reduced infrastructure cost.',

      p5_title: 'School Data Tracker System',
      p5_prob:  'Educational administrators operated on fragmented data — no unified view of student attrition, GPA trends, or faculty load.',
      p5_sol:   'Deployed a centralized analytics dashboard combining fragmented data sources into real-time, interactive visual reports.',
      p5_res:   'Enabled data-driven administrative decisions — early intervention for at-risk students and streamlined institutional reporting.',

      skills_eyebrow: 'Capabilities',
      skills_heading: 'Technical Stack',
      skill1_title: 'AI & NLP',
      skill1_items: ['Prompt Engineering', 'Natural Language Processing', 'LLM Workflows & Orchestration', 'Fine-tuning & Evaluation'],
      skill2_title: 'Backend',
      skill2_items: ['Laravel Ecosystem', 'REST APIs Architecture', 'DB Transactions & Locking', 'Rate Limiting & Security'],
      skill3_title: 'Frontend',
      skill3_items: ['UI/UX Design Systems', 'Responsive & Mobile-First', 'Modern JS Frameworks', 'Performance Optimization'],
      skill4_title: 'Tools & DBs',
      skill4_items: ['Cursor · Lovable · Replit', 'AntiGravity · Git', 'MySQL · PostgreSQL', 'Docker · CI/CD'],

      lang_eyebrow: 'Multilingual',
      lang_heading: 'Languages',
      lang_arabic:  'Arabic',
      lang_arabic_level: 'Native · 100%',
      lang_iraqi:   'Iraqi Dialect',
      lang_iraqi_level: 'Native · 95%',
      lang_english: 'English',
      lang_english_level: 'Professional · 90%',

      contact_eyebrow: 'Get In Touch',
      contact_heading: "Let's Build Something.",
      contact_intro:   "I work with serious teams to build scalable, AI-integrated systems.<br>Choose how you'd like to reach out — I respond fast.",
      contact_email_title: 'Send an Email',
      contact_email_note:  'Best for detailed project discussions',
      contact_email_btn:   'Open Email Client',
      contact_wa_title:    'Message on WhatsApp',
      contact_wa_note:     'Fastest way to reach me',
      contact_wa_btn:      'Chat on WhatsApp',
      contact_location:    'Baghdad, Iraq',
      contact_avail:       'Open to Remote Opportunities',
      contact_timezone:    'GMT+3 · Usually replies within hours',

      form_name:           'Full Name',
      form_name_placeholder: 'Your Name',
      form_email:          'Email Address',
      form_email_placeholder: 'your@email.com',
      form_subject:        'Subject',
      form_subject_placeholder: 'How can I help you?',
      form_message:        'Message',
      form_message_placeholder: 'Tell me about your project...',
      form_submit:         'Send Message',
      form_submitting:     'Sending...',
      form_success:        'Thank you! Your message has been sent successfully.',
      form_error:          'Oops! There was a problem sending your message. Please try again.',

      footer_copy: '© 2026 Abdullah Raad — Engineered for Scale.',
      aria_nav_logo: 'Abdullah Raad - Home',
      aria_linkedin: 'Visit Abdullah Raad on LinkedIn',
      aria_whatsapp: 'Chat with Abdullah Raad on WhatsApp',
      page_title: 'Abdullah Raad | Full Stack Developer & AI Systems Architect',
      meta_description: 'Abdullah Raad — Full Stack Developer, AI Systems Architect & English Trainer based in Baghdad, Iraq. Building AI-powered production systems 60–80% faster.',
      
      alt_iraqi_chat: 'Iraqi Dialect AI Chat interface mockup',
      alt_prompt_saas: 'Prompt Library SaaS dashboard mockup',
      alt_booking_system: 'Clinic booking system dashboard mockup',
      alt_retail_platform: 'Qiyafe retail e-commerce dashboard mockup',
      alt_school_tracker: 'School performance analytics dashboard mockup',
    },

    ar: {
      nav_about:    'عني',
      nav_work:     'أعمالي',
      nav_skills:   'مهاراتي',
      nav_contact:  'تواصل معي',

      hero_name:        'عبدالله رعد',
      nav_logo_text:    'ع.ر',

      hero_avail:       'متاح للعمل عن بُعد',
      hero_tagline:     'أبني <span class="highlight">أنظمة مدعومة بالذكاء الاصطناعي</span> قابلة للتوسع —<br>وليست مجرد نماذج تجريبية.',
      hero_positioning: 'أبني أنظمة تفهم اللغة — لا تكتفي بمعالجة البيانات.',
      hero_cta_projects:'استعرض المشاريع',
      hero_cta_wa:      'تواصل عبر واتساب',
      hero_cta_email:   'راسلني إلكترونياً',

      about_eyebrow: 'نبذة عني',
      about_heading: 'الميزة الهندسية',
      about_p1: 'لا أكتب كوداً فحسب — بل أُصمّم أنظمة ذكية. تجمع منهجيتي بين هندسة البرمجيات المتقدمة وعلم اللغويات، لإنتاج أنظمة لا تخزّن البيانات وتسترجعها فقط، بل تفهم السياق والنية وطبيعة التواصل الإنساني.',
      about_p2: 'من خلال دمج أدوات الذكاء الاصطناعي المتطورة (Cursor, AntiGravity, LLM pipelines) في سير عملي التطويري، أُنجز المشاريع بشكل أسرع بنسبة <strong>60–80%</strong> — دون المساومة على جودة البنية، أو الأمان، أو الأداء.',
      about_p3: 'النتيجة: أنظمة على مستوى الإنتاج تُسلَّم بسرعة الشركات الناشئة، مصمَّمة لتتحمل أعباء العالم الحقيقي من تزامن واسع النطاق وقابلية توسع وظروف قصوى.',
      metric_delivery: 'تسليم أسرع',
      metric_systems:  'أنظمة إنتاجية',
      metric_langs:    'لغات أتقنها',
      metric_race:     'تعارضات في البيانات',

      diff_eyebrow: 'ما يميّزني',
      diff_heading: 'لماذا أنا مختلف؟',
      diff1_title: 'هندسة واعية باللغة',
      diff1_body:  'بوصفي مدرّب لغة إنجليزية ذو خلفية في اللغويات، أُصمّم أنظمة معالجة لغة طبيعية تستوعب السياق الثقافي، وفروق اللهجات، ونوايا المستخدم — لا مجرد رموز نصية ومتجهات رياضية.',
      diff2_title: 'تسليم مُسرَّع بالذكاء الاصطناعي',
      diff2_body:  'أُوظّف بيئات تطوير متقدمة مثل Cursor وAntiGravity وGitHub Copilot لضغط دورات التسليم إلى جزء يسير من الوقت المعتاد — بنفس الجودة، وفي وقت أقل بكثير.',
      diff3_title: 'أنظمة إنتاجية لا نماذج أولية',
      diff3_body:  'أبني للواقع: قفل قاعدة البيانات التشاؤمي، المعاملات الذرية، تحديد معدل الطلبات، والتحمّل تحت الحمل القصوى. أنظمة تصمد في الإنتاج — لا مجرد عروض تُقنع العملاء.',

      proj_eyebrow: 'أنظمة إنتاجية',
      proj_heading: 'أبرز المشاريع',
      proj_sub:     'تحديات حقيقية. بنية ذكية. نتائج قابلة للقياس.',
      psr_problem:  'المشكلة',
      psr_solution: 'الحل',
      psr_result:   'النتيجة',

      p1_title: 'شات الذكاء الاصطناعي باللهجة العراقية',
      p1_prob:  'نماذج اللغة الكبيرة القياسية تُخفق في فهم اللهجة العراقية، فتُنتج استجابات غير ذات صلة تُضعف ثقة المستخدم.',
      p1_sol:   'بنيت خط معالجة لغة طبيعية محلياً، مضبوطاً بدقة على بنية اللهجة العراقية وتعابيرها وأنماطها الصوتية.',
      p1_res:   'فهم شبه أصيل للهجة العراقية، مع استجابات ذات صدى ثقافي — يُزيل الحاجز اللغوي أمام المستخدمين المحليين.',

      p2_title: 'منصة SaaS لمكتبة البرومبتات',
      p2_prob:  'فرق الهندسة تفتقر إلى مكان مركزي لتخزين برومبتات الذكاء الاصطناعي وإصدارها، مما يُفضي إلى جهد مكرر ونتائج غير متسقة.',
      p2_sol:   'بنيت منصة SaaS متعددة المستأجرين توفر مساحات عمل تشاركية، وإصدار دقيق للبرومبتات، وطبقات تكامل مع الواجهات البرمجية.',
      p2_res:   'توحيد سير عمل الذكاء الاصطناعي عبر الفرق — مع تقليص التكرار وتحسين ملحوظ في جودة مخرجات النماذج.',

      p3_title: 'نظام حجز عيادات الجراحة التجميلية',
      p3_prob:  'الارتفاع المفاجئ في الطلبات خلال فترات الحجز يُسبّب تعارضات في قاعدة البيانات — مما يؤدي إلى حجوزات مزدوجة للأطباء.',
      p3_sol:   'أعدت بناء طبقة المعاملات باستخدام قفل قاعدة البيانات التشاؤمي، ومعالجة الطوابير الذرية، وتحديد صارم لمعدل الطلبات على نقاط الحجز.',
      p3_res:   'صفر حجوزات مزدوجة بعد الإطلاق. النظام يتحمل ذروة الحمل دون تراجع في الأداء أو تناقض في البيانات.',

      p4_title: 'منصة قيافة للتجزئة',
      p4_prob:  'البنية الأحادية القديمة عجزت عن التوسع خلال موجات الزيارات الموسمية — مما أفضى إلى أعطال وخسائر في التحويلات.',
      p4_sol:   'هاجرت النظام إلى بنية خدمات مصغّرة منفصلة، مع واجهة أمامية عالية الأداء وبوابة API مخصصة.',
      p4_res:   'توافر كامل خلال ذروة الزيارات، وتسريع لقمع التحويل، وتخفيض في تكاليف البنية التحتية.',

      p5_title: 'نظام تتبع بيانات المدارس',
      p5_prob:  'المسؤولون التعليميون يعملون على بيانات مجزأة — لا يوجد عرض موحد لمعدلات ترك الطلاب أو اتجاهات المعدلات أو أحمال أعضاء هيئة التدريس.',
      p5_sol:   'نشرت لوحة تحليلات مركزية تجمع مصادر بيانات متفرقة في تقارير مرئية تفاعلية ولحظية.',
      p5_res:   'قرارات إدارية مبنية على البيانات، مع تدخل مبكر للطلاب المعرّضين للخطر وتبسيط للتقارير المؤسسية.',

      skills_eyebrow: 'الكفاءات',
      skills_heading: 'المنظومة التقنية',
      skill1_title: 'الذكاء الاصطناعي ومعالجة اللغة',
      skill1_items: ['هندسة البرومبتات', 'معالجة اللغة الطبيعية (NLP)', 'تنسيق سير عمل النماذج الكبيرة (LLM)', 'الضبط الدقيق والتقييم'],
      skill2_title: 'الخلفية البرمجية',
      skill2_items: ['منظومة Laravel', 'بنية REST APIs', 'معاملات قاعدة البيانات والقفل', 'تحديد المعدل والأمان'],
      skill3_title: 'الواجهة الأمامية',
      skill3_items: ['أنظمة تصميم UI/UX', 'تصميم متجاوب وأولوية للجوال', 'أطر JavaScript الحديثة', 'تحسين الأداء'],
      skill4_title: 'الأدوات وقواعد البيانات',
      skill4_items: ['Cursor · Lovable · Replit', 'AntiGravity · Git', 'MySQL · PostgreSQL', 'Docker · CI/CD'],

      lang_eyebrow: 'التعدد اللغوي',
      lang_heading: 'اللغات',
      lang_arabic:  'العربية',
      lang_arabic_level: 'لغة أم · 100%',
      lang_iraqi:   'اللهجة العراقية',
      lang_iraqi_level: 'لغة أم · 95%',
      lang_english: 'الإنجليزية',
      lang_english_level: 'احترافي · 90%',

      contact_eyebrow: 'تواصل معي',
      contact_heading: 'لنبني شيئا معا',
      contact_intro:   'أعمل مع فرق جادة لبناء أنظمة قابلة للتوسع ومدمجة بالذكاء الاصطناعي.<br>اختر طريقة تواصلك — أرد بسرعة.',
      contact_email_title: 'راسلني عبر البريد',
      contact_email_note:  'الأنسب لمناقشات المشاريع التفصيلية',
      contact_email_btn:   'فتح البريد الإلكتروني',
      contact_wa_title:    'راسلني على واتساب',
      contact_wa_note:     'أسرع طريقة للوصول إليّ',
      contact_wa_btn:      'ابدأ المحادثة على واتساب',
      contact_location:    'بغداد، العراق',
      contact_avail:       'متاح للعمل عن بُعد',
      contact_timezone:    'GMT+3 · أرد عادةً خلال ساعات',

      form_name:           'الاسم الكامل',
      form_name_placeholder: 'اسمك الكريم',
      form_email:          'البريد الإلكتروني',
      form_email_placeholder: 'email@example.com',
      form_subject:        'الموضوع',
      form_subject_placeholder: 'كيف يمكنني مساعدتك؟',
      form_message:        'الرسالة',
      form_message_placeholder: 'حدثني عن مشروعك...',
      form_submit:         'إرسال الرسالة',
      form_submitting:     'جاري الإرسال...',
      form_success:        'شكراً لك! تم إرسال رسالتك بنجاح.',
      form_error:          'عذراً! حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',

      footer_copy: '© 2026 عبدالله رعد — مُصمَّم للنمو والتوسع.',
      aria_nav_logo: 'عبدالله رعد - الرئيسية',
      aria_linkedin: 'زيارة حساب عبدالله رعد على LinkedIn',
      aria_whatsapp: 'تحدث مع عبدالله رعد على واتساب',
      page_title: 'عبدالله رعد | مطور فول ستاك ومعماري أنظمة ذكاء اصطناعي',
      meta_description: 'عبدالله رعد — مطور فول ستاك، معماري أنظمة ذكاء اصطناعي ومدرب لغة إنجليزية في بغداد، العراق. أبني أنظمة إنتاجية مدعومة بالذكاء الاصطناعي بشكل أسرع بنسبة 60-80%.',

      alt_iraqi_chat: 'واجهة دردشة الذكاء الاصطناعي باللهجة العراقية',
      alt_prompt_saas: 'لوحة تحكم منصة مكتبة البرومبتات',
      alt_booking_system: 'لوحة تحكم نظام حجز العيادات',
      alt_retail_platform: 'لوحة تحكم منصة قياف للتجزئة',
      alt_school_tracker: 'لوحة تحليلات أداء المدارس',
    }
  };

  /* ─────────────────────────────────────────
     APPLY TRANSLATIONS
  ───────────────────────────────────────── */
  function applyLang(lang) {
    const t = i18n[lang];
    const isAr = lang === 'ar';

    /* HTML dir + lang attribute */
    document.documentElement.lang = lang;
    document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isAr);

    /* Document Title & Meta Description */
    if (t.page_title) {
      document.title = t.page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.meta_description) {
      metaDesc.setAttribute('content', t.meta_description);
    }
    
    /* Open Graph tags */
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle && t.page_title) ogTitle.setAttribute('content', t.page_title);
    if (ogDesc && t.meta_description) ogDesc.setAttribute('content', t.meta_description);

    /* Update every [data-i18n] element */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    /* Update aria-labels */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    /* Update Placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    /* Update Alt Texts */
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) {
        el.setAttribute('alt', t[key]);
      }
    });

    /* Skill list items */
    for (let i = 1; i <= 4; i++) {
      const ul = document.querySelector(`[data-skill-list="${i}"]`);
      if (ul && t[`skill${i}_items`]) {
        ul.innerHTML = t[`skill${i}_items`]
          .map(item => `<li>${item}</li>`).join('');
      }
    }

    /* Switcher button state */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Persist */
    localStorage.setItem('ar-portfolio-lang', lang);
  }

  /* ─────────────────────────────────────────
     LANGUAGE SWITCHER INIT
  ───────────────────────────────────────── */
  function initSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    if (!switcher) return;
    switcher.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;
      applyLang(btn.dataset.lang);
    });
  }

  /* ─────────────────────────────────────────
     NAVBAR SCROLL
  ───────────────────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ─────────────────────────────────────────
     HAMBURGER MENU
  ───────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ─────────────────────────────────────────
     SCROLL REVEAL
  ───────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ─────────────────────────────────────────
     LANGUAGE BAR ANIMATION
  ───────────────────────────────────────── */
  const langObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        langObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.lang-fill').forEach(el => langObserver.observe(el));

  /* ─────────────────────────────────────────
     ACTIVE NAV HIGHLIGHT
  ───────────────────────────────────────── */
  const sections    = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-links a');
  if (sections.length) {
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          allNavLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' }).forEach
      ? null
      : void 0;
  }

  /* ─────────────────────────────────────────
     CONTACT FORM HANDLING
     ───────────────────────────────────────── */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit');
    const submitBtnText = submitBtn ? submitBtn.querySelector('[data-i18n]') : null;

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const lang = localStorage.getItem('ar-portfolio-lang') || 'en';
      const t = i18n[lang];

      // Reset status
      status.classList.remove('success', 'error');
      status.textContent = '';
      
      // Loading state
      submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = t.form_submitting;

      const formData = new FormData(form);
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.classList.add('success');
          status.textContent = t.form_success;
          form.reset();
        } else {
          const data = await response.json();
          throw new Error(data.errors ? data.errors.map(err => err.message).join(', ') : t.form_error);
        }
      } catch (error) {
        status.classList.add('error');
        status.textContent = t.form_error;
      } finally {
        submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = t.form_submit;
      }
    });
  }

  /* ─────────────────────────────────────────
     BOOT
     ───────────────────────────────────────── */
  initSwitcher();
  initContactForm();
  const saved = localStorage.getItem('ar-portfolio-lang') || 'en';
  applyLang(saved);

})();
