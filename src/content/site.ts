export type L = { ar: string; en: string };

export const company = {
  name: { ar: "إكشاد آي تي", en: "Exshad IT" },
  domain: "exshad-it.com",
  tagline: { ar: "نطوّر المستقبل الرقمي بثقة وابتكار", en: "Building a confident digital future" },
  contactName: { ar: "الأستاذ عبدالله حكمي", en: "Mr Abdullah Hakkami" },
  phone: "+966 59 860 5303",
  phoneHref: "+966598605303",
  email: "info@exshad-it.com",
  address: { ar: "الرياض، المملكة العربية السعودية", en: "Riyadh, Saudi Arabia" },
  hours: { ar: "الأحد - الخميس: 8 ص - 5 م", en: "Sun - Thu: 8 AM - 5 PM" },
  founded: "2018",
};

export const nav: { to: string; label: L }[] = [
  { to: "/", label: { ar: "الرئيسية", en: "Home" } },
  { to: "/about", label: { ar: "من نحن", en: "About" } },
  { to: "/offers", label: { ar: "عروضنا", en: "Offers" } },
  { to: "/services", label: { ar: "الخدمات", en: "Services" } },
  { to: "/projects", label: { ar: "المشاريع", en: "Projects" } },
  { to: "/support", label: { ar: "الدعم", en: "Support" } },
];

export const ui = {
  startProject: { ar: "ابدأ مشروعك", en: "Start your project" },
  freeConsult: { ar: "استشارة مجانية", en: "Free consultation" },
  bookConsult: { ar: "احجز استشارتك المجانية", en: "Book your free consultation" },
  evaluate: { ar: "قيم نشاطك التجاري مجاناً", en: "Get a free business assessment" },
  heroTitle: {
    ar: "شريكك لصناعة مستقبل رقمي متفوق",
    en: "Your partner for an outstanding digital future",
  },
  heroSub: {
    ar: "حلول تقنية وتسويقية متكاملة: أنظمة، متاجر، تطبيقات، وحملات تحقق نتائج حقيقية.",
    en: "Integrated tech and marketing solutions: systems, stores, apps, and campaigns that deliver.",
  },
  partners: { ar: "شركاء النجاح", en: "Our partners" },
  partnersSub: {
    ar: "نفخر بثقة شركائنا واعتزازنا بالتعاون مع جهات مميزة.",
    en: "Proud of the trust of our partners and distinguished collaborations.",
  },
  includes: { ar: "تشمل هذه الباقة:", en: "This package includes:" },
  subscribeNow: { ar: "اشترك الآن", en: "Subscribe now" },
  subscribeSystem: { ar: "اشترك في النظام الآن", en: "Subscribe to the system" },
  mostWanted: { ar: "الأكثر طلباً", en: "Most popular" },
  riyal: { ar: "ريال", en: "SAR" },
  yearSub: { ar: "اشتراك سنة", en: "1 year subscription" },
  startsFrom: { ar: "يبدأ من", en: "Starts from" },
  discover: { ar: "اكتشف أكثر", en: "Discover more" },
  contactUs: { ar: "تواصل معنا", en: "Contact us" },
  callNow: { ar: "اتصل الآن", en: "Call now" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
};

export const stats: { value: string; label: L }[] = [
  { value: "150+", label: { ar: "مشروع مكتمل", en: "Completed projects" } },
  { value: "120+", label: { ar: "عميل راضٍ", en: "Happy clients" } },
  { value: "98%", label: { ar: "معدل النجاح", en: "Success rate" } },
  { value: "7+", label: { ar: "سنوات خبرة", en: "Years of experience" } },
];

export const marketingServices: { title: L; desc: L; items: L[] }[] = [
  {
    title: { ar: "إدارة حسابات التواصل الاجتماعي", en: "Social media management" },
    desc: {
      ar: "نقوم بإدارة حساباتك باحترافية من خلال التخطيط للمحتوى، جدولة المنشورات، متابعة التفاعل، وبناء حضور رقمي يعكس هوية علامتك.",
      en: "We manage your accounts professionally: content planning, scheduling, engagement, and a digital presence that reflects your brand.",
    },
    items: [
      { ar: "إعداد خطة محتوى شهرية", en: "Monthly content plan" },
      { ar: "جدولة ونشر المنشورات", en: "Scheduling and publishing" },
      { ar: "متابعة الرسائل والتفاعل", en: "Messages and engagement follow-up" },
      { ar: "تحسين الهوية البصرية للحساب", en: "Improving the account's visual identity" },
      { ar: "تقارير أداء شهرية مع توصيات", en: "Monthly reports with recommendations" },
    ],
  },
  {
    title: { ar: "إنشاء المتاجر الإلكترونية", en: "E-commerce store development" },
    desc: {
      ar: "نصمم ونطوّر متاجر إلكترونية احترافية تركز على سهولة الاستخدام وتجربة شراء سلسة ترفع معدلات التحويل.",
      en: "We design professional stores focused on usability and a smooth buying experience that raises conversion.",
    },
    items: [
      { ar: "تصميم متجر احترافي ومتجاوب", en: "Professional responsive store design" },
      { ar: "تنظيم المنتجات والتصنيفات", en: "Products and categories setup" },
      { ar: "صفحات بيع واضحة ومحفزة", en: "Clear, persuasive sales pages" },
      { ar: "ربط وسائل الدفع والشحن", en: "Payment and shipping integrations" },
      { ar: "لوحة تحكم سهلة للطلبات والمخزون", en: "Simple orders and inventory dashboard" },
    ],
  },
  {
    title: { ar: "تصميم الهوية البصرية", en: "Brand identity design" },
    desc: {
      ar: "نبني هوية بصرية متكاملة تمنح علامتك حضورًا مميزًا وثابتًا في جميع المنصات.",
      en: "A complete visual identity that gives your brand a distinctive, consistent presence everywhere.",
    },
    items: [
      { ar: "تصميم الشعار", en: "Logo design" },
      { ar: "اختيار الألوان والخطوط", en: "Colors and typography" },
      { ar: "تصميم العناصر البصرية", en: "Visual elements" },
      { ar: "إعداد دليل هوية مبسط", en: "Simplified brand guide" },
      { ar: "قوالب موحدة لمنشورات السوشيال ميديا", en: "Unified social media templates" },
    ],
  },
  {
    title: { ar: "الحملات الإعلانية الممولة", en: "Paid ad campaigns" },
    desc: {
      ar: "حملات مدروسة تستهدف الجمهور المناسب بدقة مع تحسين مستمر لأفضل عائد على الميزانية.",
      en: "Well-planned campaigns with precise targeting and continuous optimization for the best ROI.",
    },
    items: [
      { ar: "إعداد استراتيجية الحملة", en: "Campaign strategy" },
      { ar: "استهداف الجمهور المناسب", en: "Accurate audience targeting" },
      { ar: "كتابة وتصميم الإعلان", en: "Ad copywriting and design" },
      { ar: "تحليل النتائج والتحسين المستمر", en: "Analysis and continuous optimization" },
      { ar: "تحليل المنافسين ووضع خطة تميز", en: "Competitor analysis and differentiation" },
    ],
  },
  {
    title: { ar: "تصوير المنتجات والخدمات", en: "Product & service photography" },
    desc: {
      ar: "تصوير احترافي يبرز جودة منتجاتك ويبني الثقة ويرفع تأثير المحتوى التسويقي.",
      en: "Professional photography that highlights quality, builds trust, and boosts marketing impact.",
    },
    items: [
      { ar: "تصوير منتجات احترافي", en: "Professional product shoots" },
      { ar: "تصوير خدمات ومشاهد عمل", en: "Service and behind-the-scenes shoots" },
      { ar: "تجهيز محتوى بصري للإعلانات", en: "Visual content for ads" },
      { ar: "إبراز التفاصيل بأسلوب جذاب", en: "Attractive detail highlighting" },
      { ar: "تعديل الصور وتهيئتها للنشر", en: "Retouching and export for all platforms" },
    ],
  },
  {
    title: { ar: "تحسين المتاجر والمواقع للتحويل", en: "Conversion optimization" },
    desc: {
      ar: "نحسّن صفحاتك لتصبح أكثر وضوحًا وإقناعًا مع التركيز على تجربة المستخدم وتحفيز الإجراء.",
      en: "We make your pages clearer and more persuasive, focused on UX and driving action.",
    },
    items: [
      { ar: "تحسين واجهة الصفحات", en: "Page interface improvements" },
      { ar: "تعزيز تجربة المستخدم", en: "Stronger user experience" },
      { ar: "تقوية الدعوات لاتخاذ الإجراء", en: "Stronger calls to action" },
      { ar: "رفع معدل التحويل والمبيعات", en: "Higher conversion and sales" },
      { ar: "اختبار الأزرار والنماذج", en: "Buttons and forms testing" },
    ],
  },
];

export const packages: {
  name: L;
  period: L;
  price: string;
  oldPrice?: string;
  note?: L;
  desc: L;
  featured?: boolean;
  items: L[];
}[] = [
  {
    name: { ar: "باقة البداية", en: "Starter package" },
    period: { ar: "شهر واحد", en: "1 month" },
    price: "1,500",
    desc: {
      ar: "مناسبة للمشاريع الصغيرة أو العملاء الذين يريدون تجربة الخدمة.",
      en: "Ideal for small businesses or clients trying the service.",
    },
    items: [
      { ar: "إدارة منصتين تواصل اجتماعي", en: "2 social platforms managed" },
      { ar: "خطة محتوى شهرية", en: "Monthly content plan" },
      { ar: "12 منشورًا شهريًا", en: "12 posts per month" },
      { ar: "12 تصميمًا", en: "12 designs" },
      { ar: "كتابة الكابتشن والهاشتاقات", en: "Captions and hashtags" },
      { ar: "جدولة ونشر المحتوى", en: "Scheduling and publishing" },
      { ar: "متابعة أساسية للتفاعل", en: "Basic engagement follow-up" },
      { ar: "تقرير أداء مختصر", en: "Short performance report" },
    ],
  },
  {
    name: { ar: "باقة النمو", en: "Growth package" },
    period: { ar: "3 أشهر", en: "3 months" },
    price: "4,200",
    oldPrice: "4,500",
    note: { ar: "(متوسط 1,400 ريال شهرياً)", en: "(avg. 1,400 SAR / month)" },
    featured: true,
    desc: {
      ar: "للأنشطة التي تريد نتائج أوضح وحضورًا أقوى.",
      en: "For businesses wanting clearer results and a stronger presence.",
    },
    items: [
      { ar: "إدارة 2 إلى 3 منصات", en: "2–3 platforms managed" },
      { ar: "استراتيجية محتوى لمدة 3 أشهر", en: "3-month content strategy" },
      { ar: "16 منشورًا شهريًا", en: "16 posts per month" },
      { ar: "16 تصميمًا شهريًا", en: "16 designs per month" },
      { ar: "4 ريلز شهريًا", en: "4 reels per month" },
      { ar: "كتابة الكابتشن والهاشتاقات", en: "Captions and hashtags" },
      { ar: "جدولة ونشر المحتوى", en: "Scheduling and publishing" },
      { ar: "متابعة منتظمة للتفاعل", en: "Regular engagement follow-up" },
      { ar: "تحسين الهوية البصرية للحساب", en: "Account visual identity boost" },
      { ar: "تقرير شهري مع توصيات", en: "Monthly report with recommendations" },
    ],
  },
  {
    name: { ar: "باقة الاحتراف", en: "Pro package" },
    period: { ar: "6 أشهر", en: "6 months" },
    price: "7,800",
    oldPrice: "9,000",
    note: { ar: "(متوسط 1,300 ريال شهرياً)", en: "(avg. 1,300 SAR / month)" },
    desc: {
      ar: "للشركات والمشاريع التي تريد إدارة مستقرة ونموًا مستمرًا.",
      en: "For companies wanting stable management and continuous growth.",
    },
    items: [
      { ar: "إدارة 3 منصات", en: "3 platforms managed" },
      { ar: "استراتيجية تسويق متكاملة", en: "Full marketing strategy" },
      { ar: "20 منشورًا شهريًا", en: "20 posts per month" },
      { ar: "20 تصميمًا شهريًا", en: "20 designs per month" },
      { ar: "8 ريلز شهريًا", en: "8 reels per month" },
      { ar: "كتابة محتوى إعلاني احترافي", en: "Professional ad copywriting" },
      { ar: "جدولة ونشر المحتوى", en: "Scheduling and publishing" },
      { ar: "إدارة أوسع للتفاعل", en: "Extended engagement management" },
      { ar: "تطوير مستمر للهوية البصرية", en: "Ongoing identity development" },
      { ar: "تقارير شهرية تفصيلية", en: "Detailed monthly reports" },
    ],
  },
];

export const systems: { name: string; price: string; desc: L; items: L[]; badge?: L }[] = [
  {
    name: "Exshad Sender",
    price: "2000",
    desc: {
      ar: "أقوى أداة لإرسال الحملات الإعلانية المؤتمتة عبر الواتساب والوصول لآلاف العملاء بضغطة زر.",
      en: "A powerful tool for automated WhatsApp campaigns reaching thousands of customers in one click.",
    },
    items: [
      { ar: "إرسال رسائل غير محدودة", en: "Unlimited messages" },
      { ar: "فلترة الأرقام النشطة", en: "Active number filtering" },
      { ar: "ردود تلقائية متطورة", en: "Advanced auto-replies" },
      { ar: "دعم الوسائط (صور، فيديو، ملفات)", en: "Media support (images, video, files)" },
      { ar: "تقارير تسليم مفصلة", en: "Detailed delivery reports" },
      { ar: "تحديثات مجانية طوال السنة", en: "Free updates all year" },
    ],
  },
  {
    name: "Exshad Data",
    price: "1500",
    desc: {
      ar: "نظام ذكي لاستخراج بيانات العملاء المستهدفين من الخرائط والمنصات لبناء قاعدة بيانات ذهبية.",
      en: "A smart system to extract target customer data from maps and platforms into a golden database.",
    },
    items: [
      { ar: "سحب البيانات من Google Maps", en: "Google Maps data extraction" },
      { ar: "استخراج أرقام الهواتف والإيميلات", en: "Phone and email extraction" },
      { ar: "سحب بيانات من منصات التواصل", en: "Social platform data" },
      { ar: "تصنيف البيانات حسب النشاط", en: "Classification by industry" },
      { ar: "تصدير ملفات Excel جاهزة", en: "Ready Excel exports" },
      { ar: "دعم فني مخصص", en: "Dedicated support" },
    ],
  },
  {
    name: "Exshad Track",
    price: "2500",
    badge: { ar: "نظام تتبع احترافي", en: "Pro tracking system" },
    desc: {
      ar: "برنامج احترافي لإدارة وتتبع المناديب عبر سطح المكتب وتطبيق أندرويد مع رؤية مباشرة للمسارات والتقارير.",
      en: "Professional field-rep tracking on desktop and Android with live routes, sessions, and reports.",
    },
    items: [
      { ar: "تتبع مباشر للمندوبين", en: "Live rep tracking" },
      { ar: "عرض الخريطة والمسارات ونقاط التوقف", en: "Map, routes and stop points" },
      { ar: "تقارير وسجل جلسات واضح", en: "Clear reports and session log" },
      { ar: "لوحة تحكم للمدير", en: "Manager dashboard" },
      { ar: "تطبيق أندرويد للمندوب", en: "Android app for reps" },
    ],
  },
];

export const techServices: { title: L; desc: L; tags: string[]; price: string }[] = [
  {
    title: { ar: "تطبيقات الجوال", en: "Mobile apps" },
    desc: {
      ar: "تطبيقات حديثة وسريعة لأنظمة iOS و Android مع تجربة مستخدم سلسة.",
      en: "Modern, fast iOS and Android apps with a smooth user experience.",
    },
    tags: ["React Native", "Flutter", "Firebase"],
    price: "1500",
  },
  {
    title: { ar: "الذكاء الاصطناعي", en: "Artificial intelligence" },
    desc: {
      ar: "حلول ذكية تعتمد على تعلم الآلة لتحليل البيانات وتطوير الأداء.",
      en: "Smart machine-learning solutions for data analysis and better performance.",
    },
    tags: ["Machine Learning", "NLP", "Python"],
    price: "3000",
  },
  {
    title: { ar: "تطوير المواقع", en: "Web development" },
    desc: {
      ar: "مواقع سريعة ومستجيبة بتصميم عصري يلائم كافة الأجهزة.",
      en: "Fast, responsive websites with modern design across all devices.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind"],
    price: "2000",
  },
  {
    title: { ar: "الأمن السيبراني", en: "Cybersecurity" },
    desc: {
      ar: "حماية بياناتك وأنظمتك من التهديدات الرقمية بأنظمة أمان متطورة.",
      en: "Protecting your data and systems with advanced security.",
    },
    tags: ["Encryption", "Cloud Security", "Auditing"],
    price: "2500",
  },
  {
    title: { ar: "الحلول السحابية", en: "Cloud solutions" },
    desc: {
      ar: "نقل وإدارة بياناتك على السحابة لضمان التوافر العالي والوصول السريع.",
      en: "Cloud migration and management for high availability and fast access.",
    },
    tags: ["AWS", "Azure", "Cloud DevOps"],
    price: "1800",
  },
  {
    title: { ar: "التجارة الإلكترونية", en: "E-commerce" },
    desc: {
      ar: "متاجر إلكترونية متكاملة تساعدك على البيع عبر الإنترنت وزيادة أرباحك.",
      en: "Complete online stores that help you sell more and grow profits.",
    },
    tags: ["Shopify", "WooCommerce", "Payment Gateway"],
    price: "2200",
  },
];

export const advantages: { title: L; desc: L }[] = [
  {
    title: { ar: "أداء عالي", en: "High performance" },
    desc: { ar: "سرعة فائقة وأداء استثنائي في جميع التطبيقات", en: "Exceptional speed across all apps" },
  },
  {
    title: { ar: "أمان قوي", en: "Strong security" },
    desc: { ar: "حماية متقدمة وتشفير من الدرجة الأولى", en: "Advanced protection and first-class encryption" },
  },
  {
    title: { ar: "نمو مستدام", en: "Sustainable growth" },
    desc: { ar: "حلول قابلة للتوسع تنمو مع أعمالك", en: "Scalable solutions that grow with you" },
  },
  {
    title: { ar: "دعم كامل", en: "Full support" },
    desc: { ar: "فريق دعم فني متوفر دائماً لمساعدتك", en: "A support team always ready to help" },
  },
];

export const values: L[] = [
  { ar: "التميز في الأداء والجودة", en: "Excellence in performance and quality" },
  { ar: "الابتكار والتطوير المستمر", en: "Innovation and continuous improvement" },
  { ar: "الشفافية والمصداقية", en: "Transparency and credibility" },
  { ar: "العمل الجماعي والتعاون", en: "Teamwork and collaboration" },
];

export const about = {
  title: { ar: "شريكك التقني الموثوق للنمو الرقمي", en: "Your trusted tech partner for digital growth" },
  body: {
    ar: "تأسست إكشاد آي تي عام 2018 برؤية واضحة: تقديم حلول تقنية متطورة تغيّر طريقة عمل الشركات والمؤسسات. اليوم، نحن فريق متميز ننجز مشاريع ضخمة لعملاء من مختلف أنحاء العالم العربي.",
    en: "Exshad IT was founded in 2018 with a clear vision: advanced technology solutions that change how organizations work. Today we are a distinguished team delivering large projects across the Arab world.",
  },
  vision: {
    ar: "أن نكون الشريك التقني الأول للشركات الراغبة في التحول الرقمي والابتكار",
    en: "To be the first technology partner for companies pursuing digital transformation",
  },
  mission: {
    ar: "تقديم حلول تقنية مبتكرة تلبي احتياجات العملاء وتدفع عجلة النمو",
    en: "Delivering innovative solutions that meet client needs and drive growth",
  },
  facts: [
    { value: "2018", label: { ar: "سنة التأسيس", en: "Founded" } },
    { value: "25+", label: { ar: "خبير تقني", en: "Tech experts" } },
    { value: "150+", label: { ar: "مشروع ناجح", en: "Successful projects" } },
  ],
};

export const testimonials: { quote: L; name: L; role: L }[] = [
  {
    quote: {
      ar: "تجربة رائعة مع إكشاد آي تي، الفريق محترف ومتعاون والنتائج فاقت توقعاتنا.",
      en: "A great experience with Exshad IT — a professional team and results beyond expectations.",
    },
    name: { ar: "محمد العتيبي", en: "Mohammed Al-Otaibi" },
    role: { ar: "شركة الأمل للتجارة", en: "Al-Amal Trading" },
  },
  {
    quote: {
      ar: "منصة التعليم التي طوروها لنا غيرت طريقة عملنا بالكامل وجودة التنفيذ عالية.",
      en: "The learning platform they built changed how we work entirely; execution quality is high.",
    },
    name: { ar: "نورة السعيد", en: "Noura Al-Saeed" },
    role: { ar: "مؤسسة النجاح التعليمية", en: "Al-Najah Education" },
  },
  {
    quote: {
      ar: "المتجر الإلكتروني الذي بنوه لنا ساهم في زيادة مبيعاتنا بنسبة 150%.",
      en: "The online store they built increased our sales by 150%.",
    },
    name: { ar: "عبدالرحمن الشهري", en: "Abdulrahman Al-Shehri" },
    role: { ar: "المتجر الرقمي", en: "Digital Store" },
  },
];

export const projects: { title: L; category: L; desc: L; result: L }[] = [
  {
    title: { ar: "متجر إلكتروني للأزياء", en: "Fashion e-commerce store" },
    category: { ar: "تجارة إلكترونية", en: "E-commerce" },
    desc: {
      ar: "متجر متكامل مع ربط الدفع والشحن ولوحة تحكم للمخزون.",
      en: "Full store with payments, shipping and inventory dashboard.",
    },
    result: { ar: "+150% في المبيعات", en: "+150% in sales" },
  },
  {
    title: { ar: "منصة تعليمية", en: "Learning platform" },
    category: { ar: "تطوير مواقع", en: "Web development" },
    desc: {
      ar: "منصة دورات مع اختبارات وشهادات ولوحة تقارير للمعلمين.",
      en: "Courses platform with quizzes, certificates and teacher reports.",
    },
    result: { ar: "12,000 طالب", en: "12,000 students" },
  },
  {
    title: { ar: "تطبيق توصيل", en: "Delivery app" },
    category: { ar: "تطبيقات جوال", en: "Mobile apps" },
    desc: {
      ar: "تطبيق iOS و Android مع تتبع مباشر للمندوبين والطلبات.",
      en: "iOS and Android app with live order and rep tracking.",
    },
    result: { ar: "4.8 تقييم", en: "4.8 rating" },
  },
  {
    title: { ar: "نظام تتبع المناديب", en: "Field rep tracking system" },
    category: { ar: "أنظمة", en: "Systems" },
    desc: {
      ar: "لوحة تحكم للمدير وتطبيق للمندوب مع تقارير مسارات وجلسات.",
      en: "Manager dashboard and rep app with route and session reports.",
    },
    result: { ar: "-30% وقت الجولات", en: "-30% route time" },
  },
  {
    title: { ar: "حملة إعلانية لمطعم", en: "Restaurant ad campaign" },
    category: { ar: "تسويق", en: "Marketing" },
    desc: {
      ar: "حملة ممولة مع محتوى بصري وتصوير احترافي للمنتجات.",
      en: "Paid campaign with visual content and pro product photography.",
    },
    result: { ar: "×3 الطلبات", en: "3× orders" },
  },
  {
    title: { ar: "هوية بصرية لعيادة", en: "Clinic brand identity" },
    category: { ar: "هوية بصرية", en: "Branding" },
    desc: {
      ar: "شعار ودليل هوية وقوالب موحدة لجميع المنصات.",
      en: "Logo, brand guide and unified templates for all platforms.",
    },
    result: { ar: "هوية موحدة", en: "Unified identity" },
  },
];

export const faqs: { q: L; a: L }[] = [
  {
    q: { ar: "كم يستغرق تنفيذ المشروع؟", en: "How long does a project take?" },
    a: {
      ar: "يعتمد على حجم المشروع: المواقع من 2 إلى 4 أسابيع، والأنظمة والتطبيقات من 4 إلى 10 أسابيع.",
      en: "It depends on scope: websites take 2–4 weeks, systems and apps 4–10 weeks.",
    },
  },
  {
    q: { ar: "هل تقدمون دعمًا بعد التسليم؟", en: "Do you provide post-launch support?" },
    a: {
      ar: "نعم، كل مشروع يشمل فترة دعم فني مجانية، مع خطط صيانة شهرية أو سنوية.",
      en: "Yes, every project includes a free support period, with monthly or yearly maintenance plans.",
    },
  },
  {
    q: { ar: "كيف تبدأ رحلة العمل معكم؟", en: "How do we start working together?" },
    a: {
      ar: "تواصل معنا عبر الهاتف أو الواتساب، نحدد احتياجك في استشارة مجانية، ثم نرسل عرضًا واضحًا بالخطة والتكلفة.",
      en: "Contact us by phone or WhatsApp, we scope your needs in a free consultation, then send a clear plan and quote.",
    },
  },
  {
    q: { ar: "هل يمكن تخصيص الباقات؟", en: "Can packages be customized?" },
    a: {
      ar: "بالتأكيد، نصمم باقة خاصة تناسب نشاطك وميزانيتك.",
      en: "Absolutely, we tailor a package to your business and budget.",
    },
  },
];
