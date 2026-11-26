// ==========================================================================
// 1. EDITABLE CONFIGURATION & DATA
// ==========================================================================

// WhatsApp number (digits only, no '+')
const WHATSAPP_NUMBER = "201270684100";

// EDIT: paste my Web3Forms access key between the quotes
const WEB3FORMS_ACCESS_KEY = "b6f20e79-2154-47d0-a06b-a0ccdbf075c5";

// EDIT: add approved testimonials here: { name, role, company, linkedin, rating, text }
const TESTIMONIALS = [];

// EDIT: paste the PUBLIC profile link for Nafezly and Mostaql (open it in a private window to check it loads).
// A platform card appears only when its url is not empty.
const PLATFORMS = [
  { id: "khamsat", name: "Khamsat", url: "https://khamsat.com/user/alaa_abuafiaa", logo: "assets/platforms/khamsat.jpg" },
  { id: "kafiil", name: "Kafiil", url: "https://kafiil.com/u/alaaa_aboaaafyh", logo: "assets/platforms/kafiil.webp" },
  { id: "nafezly", name: "Nafezly", url: "", logo: "assets/platforms/nafezly.png" },
  { id: "mostaql", name: "Mostaql", url: "", logo: "assets/platforms/mostaql.png" }
];

// EDIT: project details, images, videos and links. Empty values are hidden automatically.
const PROJECTS = [
  {
    id: "diabetes",
    title: "Diabetes Risk Screening Model",
    category: "Machine Learning · Healthcare",
    summary: "A screening model for diabetes risk, with a live calculator. ROC-AUC 0.81 on unseen data, catching 96% of cases at the screening threshold.",
    image: "assets/projects/thumbnail_mockup.png",
    tags: ["Machine Learning", "Healthcare", "Python"],
    overview: [
      "Doctors can’t run every test on every patient, so a cheap first-pass score helps decide who needs one. I wanted to see how well a model could do that on the Pima Indians dataset, and to report the result honestly.",
      "The data had hidden problems. Zeros in glucose, blood pressure and insulin are physically impossible, so they were really missing values, and there were duplicate rows. I handled both inside the pipeline so nothing leaked into the test set. I compared three models with nested cross-validation, and since the differences were small I picked logistic regression as the simplest. I set the decision threshold using only training data and touched the test set once, at the end.",
      "On unseen data the model reached ROC-AUC 0.81. At the screening threshold it catches 96% of diabetic cases, though about half the people it flags turn out healthy. That’s fine for a first pass but not for diagnosis. Glucose drives most of the prediction. The test set is small (154 patients) and the data comes from one group, so I wouldn’t expect it to carry over to others."
    ],
    metrics: ["ROC-AUC 0.81", "96% of cases caught", "154 test patients"],
    keyFeatures: [
      "Found and fixed hidden missing values without leaking test data",
      "Nested cross-validation to compare tuned models fairly",
      "Screening threshold chosen from training data only",
      "Permutation importance and coefficients to explain the predictions",
      "Browser calculator that returns a risk score instantly"
    ],
    tools: ["Python", "pandas", "scikit-learn", "matplotlib", "JavaScript"],
    skills: [],
    gallery: [
      { src: "assets/projects/calculator_screenshot.png", caption: "Browser risk calculator" },
      { src: "assets/projects/05_test_curves.png", caption: "Test-set curves" },
      { src: "assets/projects/07_permutation_importance.png", caption: "Permutation importance" }
    ],
    role: "",
    results: "",
    note: "A first-pass screening score, not a diagnosis.",
    closing: "",
    video: "",      // EDIT: YouTube (Unlisted) / Drive link, or a local mp4 path
    github: "",     // EDIT
    demo: "",       // EDIT: link of the live calculator
    streamlit: "d:\ML NTI\diabetes-prediction\diabetes-prediction\Diabetes risk screening calculator.html"
  },
  {
    id: "healthcare-audit",
    title: "Healthcare Data Audit",
    category: "Machine Learning · Data Quality",
    summary: "A data audit of 55,500 hospital records. I found answers leaking between train and test, then showed that no model beats guessing.",
    image: "assets/projects/thumbnail_healthcare.png",
    tags: ["Machine Learning", "Data Quality", "Healthcare", "Python"],
    overview: [
      "I wanted to predict a patient’s test result (normal, abnormal or inconclusive) from a public hospital dataset of 55,500 records.",
      "While cleaning, I found about 5,000 near-duplicate records: same patient, same bill, same admission date, with only the age off by a year or two. If those land in both training and test data, a model can memorise them and look better than it is. I removed them along with 534 exact duplicates, fixed negative bills, and built the preprocessing inside a pipeline. Then I compared three models against a guessing baseline and tested every column against the target.",
      "The best model scored 33.9% against 33.6% for guessing, which isn’t a real difference, and no column had a significant relationship with the target. So this dataset has nothing a model can learn from, most likely because it is synthetic. I think that’s the more useful outcome. The app shows the checks that led to the conclusion and warns that its predictions are no better than chance."
    ],
    metrics: ["55,500 records", "~5,000 near-duplicates found", "33.9% vs 33.6% guessing"],
    keyFeatures: [
      "Detected near-duplicate leakage and removed it before splitting",
      "Statistical test of every column against the target",
      "Model compared with a guessing baseline using a significance test",
      "Single-file Streamlit app with EDA, preprocessing, modeling and prediction tabs",
      "Clear warning in the app that predictions are no better than chance"
    ],
    tools: ["Python", "pandas", "scikit-learn", "SciPy", "Streamlit"],
    skills: [],
    gallery: [],    // EDIT: add screenshots of the Streamlit app
    role: "",
    results: "",
    note: "",
    closing: "",
    video: "https://drive.google.com/file/d/1KgZDfJFcj9EjlYyFZcCxRQ4bY0ZUF1GJ/view?usp=sharing",
    github: "",     // EDIT
    demo: "",
    streamlit: ""   // EDIT: link of the Streamlit app
  },
  {
    id: "fish-game",
    title: "Fish Catching Game | Two-Player Arcade Game",
    category: "University team project",
    summary: "A two-player arcade game where players race to catch a randomly appearing fish with keyboard keys. First to 3 points wins.",
    image: "assets/projects/fish-game.png",
    tags: ["Game Development", "Animation", "Team project"],
    overview: [
      "Fish Catching Game is a fun and interactive two-player arcade game developed using Adobe Animate and ActionScript 3.0 as part of a team project.",
      "The game allows two players to compete against each other by catching a fish that appears randomly on the screen. Each player uses a different keyboard key to catch the fish: Player 1 uses L, while Player 2 uses A.",
      "Players earn points whenever they successfully catch the fish, and the first player to reach 3 points wins the game."
    ],
    metrics: [],
    keyFeatures: [
      "Two-player competitive gameplay",
      "Random fish appearance",
      "Keyboard-based controls",
      "Animated hand movements",
      "Real-time score updates",
      "Winner detection"
    ],
    tools: ["Adobe Animate", "ActionScript 3.0"],
    skills: ["Adobe Animate", "ActionScript 3.0", "Game Development", "2D Animation", "Interactive Programming"],
    gallery: [],    // EDIT: add screenshots
    role: "",       // EDIT: describe my part in the team
    results: "",
    note: "",
    closing: "This project helped us gain practical experience in interactive game development, animation, and programming logic.",
    video: "https://drive.google.com/file/d/1kw-_3cEr1QO4ZfTE0k9Xj4QsmgeShiIz/view?usp=sharing",
    github: "",     // EDIT
    demo: "",
    streamlit: ""
  }
];

// ==========================================================================
// 2. TRANSLATIONS (EN / AR). Tool names and technical terms stay in English.
// ==========================================================================
const I18N = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.education": "Education", "nav.credentials": "Credentials",
    "nav.skills": "Skills", "nav.experience": "Experience", "nav.services": "Services", "nav.projects": "Projects",
    "nav.achievements": "Achievements", "nav.testimonials": "Testimonials", "nav.cta": "Let's Collaborate",

    "hero.greeting": "Hello, I'm", "hero.title": "Alaa Ibrahim", "hero.subtitle": "Machine Learning Engineer",
    "hero.tagline": "Where Medical Informatics meets machine learning: turning health and business data into predictions you can understand and use.",
    "hero.viewWork": "View Work", "hero.downloadCV": "Download CV",

    "about.label": "About Me", "about.title": "Where Medicine Meets Data",
    "about.text": "I'm a Medical Informatics student who builds machine learning models from health and business data. Studying how medical data is structured helps me understand clinic and health datasets, and I apply the same workflow to business and research data: cleaning and exploring the data, training and comparing models, and explaining the results in plain language. I agree on a clear scope before I start, deliver on the date we set, and come back to you early if a problem comes up. I work in Arabic and English.",
    "about.edgeTitle": "My Edge:",
    "about.edgeDesc": "I pair a Medical Informatics background with hands-on machine learning training from IBM and NTI.",
    "about.location": "10th of Ramadan, Sharqia, Egypt",

    "edu.label": "Academic Path", "edu.title": "Education",
    "edu.degree": "Bachelor's Degree, Faculty of Computers and Information",
    "edu.major": "Major: Medical Informatics", "edu.institution": "Zagazig National University",
    "edu.period": "2024 - 2028", "edu.courseworkTitle": "Core Coursework",

    "cred.label": "Verification", "cred.title": "Credentials", "cred.viewCert": "Click to view",
    "cred.providerIBM": "Provider: IBM", "cred.providerUniv": "Provider: University level",
    "cred.providerZNU": "Provider: Zagazig National University",
    "cred.ibmTitle": "Artificial Intelligence Fundamentals",
    "cred.ibmDesc": "An introductory course on the fundamentals of artificial intelligence, issued by IBM.",
    "cred.icpcTitle": "ICPC Problem-Solving Contest",
    "cred.icpcDesc": "A certificate for taking part in the university-level ICPC contest, which is about solving algorithmic problems with code.",
    "cred.excellenceTitle": "Certificate of Academic Excellence",
    "cred.excellenceDesc": "Awarded by the university for ranking among the top students.",

    "skills.label": "Competencies", "skills.title": "Skills", "skills.tabTech": "Technical", "skills.tabSoft": "Soft Skills",
    "skills.tabTools": "Tools", "skills.tabLanguages": "Languages", "skills.tabExploring": "Currently Exploring",
    "skills.softIntro": "Pairing machine learning skills with clear communication, structured problem solving, and on-time delivery, and speaking up early when a problem comes up.",
    "skills.teamwork": "Teamwork", "skills.presentations": "Presentations", "skills.timeManagement": "Time Management",
    "skills.problemSolving": "Problem Solving", "skills.communication": "Communication", "skills.fastLearning": "Fast Learning",
    "skills.arabic": "Arabic", "skills.english": "English", "skills.exploringDesc": "Applied machine learning (NTI course)",

    "exp.label": "Professional Development", "exp.title": "Experience",
    "exp.traineeTitle": "Machine Learning for Data Analysis Trainee",
    "exp.provider": "National Telecommunication Institute (NTI) • ", "exp.officialSite": "Official NTI Website",
    "exp.date": "Oct 2026 – Present (Ongoing)",
    "exp.challengeLabel": "Challenge", "exp.challengeText": "Learning to turn raw data into predictions through the full machine learning workflow.",
    "exp.actionLabel": "Action", "exp.actionText": "Worked on a healthcare dataset through every step: cleaning, exploring, training, and evaluating models.",
    "exp.resultLabel": "Result", "exp.resultText": "Building foundational skills in applied machine learning (ongoing).",

    "services.label": "What I Deliver", "services.title": "Services",
    "services.s1Title": "Prediction Models", "services.s1Desc": "Classification and prediction models built from your data, delivered with commented code.",
    "services.s2Title": "Data Cleaning & Preparation", "services.s2Desc": "Cleaning messy data and preparing it for modeling with pandas and NumPy.",
    "services.s3Title": "Data Exploration & Charts", "services.s3Desc": "Finding patterns in your data and showing them in clear charts.",
    "services.s4Title": "Model Evaluation & Reports", "services.s4Desc": "Testing how well a model works and explaining the results in plain language so you can decide what to do.",
    "services.s5Title": "Medical & Health Data", "services.s5Desc": "Models for health and clinic records, as decision support, not a medical diagnosis.",
    "services.timingNote": "Timing is agreed before we start, usually around 5 days for simple projects.",
    "services.exclusionNote": "Not included: deep learning, cloud hosting, mobile apps, data collection, and medical diagnosis.",

    "projects.label": "Case Studies", "projects.title": "Projects",
    "projects.codeSoon": "Code: coming soon", "projects.viewDetails": "View Details",
    "projects.modalOverview": "Overview", "projects.modalFeatures": "Key Features", "projects.modalTools": "Tools & Technologies",
    "projects.modalRole": "Role", "projects.modalResults": "Results", "projects.modalNote": "Note",
    "projects.modalMetrics": "Results at a glance", "projects.modalGallery": "Screenshots", "projects.modalSkills": "Skills",
    "projects.videoPreview": "Project Video", "projects.githubBtn": "GitHub", "projects.demoBtn": "Live Demo",
    "projects.streamlitBtn": "Streamlit App", "projects.close": "Close project details",

    "achievements.label": "Milestones", "achievements.title": "Achievements",
    "achievements.item1Title": "ICPC Problem-Solving Contest", "achievements.item1Desc": "Participated at university level.",
    "achievements.item2Title": "Academic Excellence Recognition",
    "achievements.item2Desc": "Ranked among the top students at Zagazig National University and received a certificate for it.",

    "testimonials.label": "Feedback", "testimonials.title": "Testimonials", "testimonials.empty": "No testimonials yet.",
    "testimonials.leaveBtn": "Leave a Testimonial", "testimonials.modalTitle": "Add Your Testimonial",
    "testimonials.modalSubtitle": "Your feedback will be sent to Alaa for verification and publishing.",
    "testimonials.nameLabel": "Your Name *", "testimonials.namePlaceholder": "e.g. Sarah Ahmed",
    "testimonials.roleLabel": "Role / Title / Company *", "testimonials.rolePlaceholder": "e.g. Lead Data Scientist, HealthTech",
    "testimonials.linkedinLabel": "LinkedIn Profile URL (optional)", "testimonials.linkedinPlaceholder": "https://linkedin.com/in/username",
    "testimonials.ratingLabel": "Rating *", "testimonials.reviewLabel": "Your Review / Testimonial *",
    "testimonials.reviewPlaceholder": "Share your experience working with Alaa...",
    "testimonials.submitBtn": "Submit Testimonial", "testimonials.submitting": "Sending...",
    "testimonials.successMsg": "Thank you! Your testimonial was sent for review. It will appear after it is verified.",
    "testimonials.errorMsg": "Something went wrong. Please try again or email me directly.",
    "testimonials.notSetUp": "Sending is not set up yet.",

    "contact.label": "Get In Touch", "contact.title": "Let's Collaborate",
    "contact.subtext": "Send me a short description of your data and what you want to predict.",
    "contact.emailLabel": "Email", "contact.sendEmail": "Send Email", "contact.waLabel": "WhatsApp",
    "contact.waValue": "Direct Message", "contact.chatWithMe": "Chat with me", "contact.connect": "Connect",
    "contact.viewProfile": "View Profile",

    "footer.role": "Machine Learning Engineer · 10th of Ramadan, Egypt",
    "footer.connectLabel": "LET'S CONNECT",
    "footer.connectText": "I'm always open to talking about machine learning projects, health and business data, and ideas for turning data into predictions people can use.",
    "footer.whoLabel": "WHO AM I?",
    "footer.whoText": "I'm Alaa Ibrahim, a machine learning engineer who builds models that turn health and business data into predictions people can understand and use, with a Medical Informatics background.",

    "platforms.label": "Platforms", "platforms.intro": "You can also hire me on these freelance platforms.",
    "platforms.khamsat": "Khamsat", "platforms.kafiil": "Kafiil", "platforms.nafezly": "Nafezly", "platforms.mostaql": "Mostaql"
  },

  ar: {
    "nav.home": "الرئيسية", "nav.about": "عني", "nav.education": "التعليم", "nav.credentials": "الشهادات",
    "nav.skills": "المهارات", "nav.experience": "الخبرة", "nav.services": "الخدمات", "nav.projects": "المشاريع",
    "nav.achievements": "الإنجازات", "nav.testimonials": "الآراء", "nav.cta": "لنبدأ التعاون",

    "hero.greeting": "مرحباً، أنا", "hero.title": "Alaa Ibrahim", "hero.subtitle": "Machine Learning Engineer",
    "hero.tagline": "حيث تلتقي المعلوماتية الطبية بتعلم الآلة: تحويل البيانات الصحية وبيانات الأعمال إلى توقعات يمكنك فهمها واستخدامها.",
    "hero.viewWork": "شاهد أعمالي", "hero.downloadCV": "تحميل السيرة الذاتية",

    "about.label": "عني", "about.title": "حيث يلتقي الطب بالبيانات",
    "about.text": "أنا طالبة معلوماتية طبية أبني نماذج تعلم الآلة من البيانات الصحية وبيانات الأعمال. دراستي لكيفية تنظيم البيانات الطبية تساعدني على فهم بيانات العيادات والصحة، وأطبق نفس خطوات العمل على بيانات الأعمال والأبحاث: تنظيف البيانات واستكشافها، وتدريب النماذج ومقارنتها، وشرح النتائج بلغة بسيطة. أتفق على نطاق عمل واضح قبل البدء، وأسلّم في الموعد المتفق عليه، وأتواصل معك مبكراً إذا ظهرت أي مشكلة. أعمل بالعربية والإنجليزية.",
    "about.edgeTitle": "ميزتي:",
    "about.edgeDesc": "أجمع بين خلفية في المعلوماتية الطبية وتدريب عملي في تعلم الآلة من IBM وNTI.",
    "about.location": "العاشر من رمضان، الشرقية، مصر",

    "edu.label": "المسار الأكاديمي", "edu.title": "التعليم",
    "edu.degree": "بكالوريوس، كلية الحاسبات والمعلومات",
    "edu.major": "التخصص: Medical Informatics", "edu.institution": "جامعة الزقازيق الأهلية",
    "edu.period": "2024 - 2028", "edu.courseworkTitle": "المقررات الأساسية",

    "cred.label": "التوثيق", "cred.title": "الشهادات", "cred.viewCert": "اضغط للعرض",
    "cred.providerIBM": "الجهة: IBM", "cred.providerUniv": "الجهة: على مستوى الجامعة",
    "cred.providerZNU": "الجهة: جامعة الزقازيق الأهلية",
    "cred.ibmTitle": "Artificial Intelligence Fundamentals",
    "cred.ibmDesc": "دورة تمهيدية في أساسيات الذكاء الاصطناعي، صادرة عن IBM.",
    "cred.icpcTitle": "ICPC Problem-Solving Contest",
    "cred.icpcDesc": "شهادة مشاركة في مسابقة ICPC على مستوى الجامعة، وهي مسابقة لحل المسائل الخوارزمية بالبرمجة.",
    "cred.excellenceTitle": "Certificate of Academic Excellence",
    "cred.excellenceDesc": "ممنوحة من الجامعة لترتيبي ضمن أوائل الطلاب.",

    "skills.label": "الكفاءات", "skills.title": "المهارات", "skills.tabTech": "تقنية", "skills.tabSoft": "مهارات شخصية",
    "skills.tabTools": "الأدوات", "skills.tabLanguages": "اللغات", "skills.tabExploring": "أتعلمه حالياً",
    "skills.softIntro": "أجمع بين مهارات تعلم الآلة والتواصل الواضح وحل المشكلات بشكل منظم والتسليم في الموعد، وأتكلم مبكراً عند ظهور أي مشكلة.",
    "skills.teamwork": "العمل الجماعي", "skills.presentations": "العروض التقديمية", "skills.timeManagement": "إدارة الوقت",
    "skills.problemSolving": "حل المشكلات", "skills.communication": "التواصل", "skills.fastLearning": "سرعة التعلم",
    "skills.arabic": "العربية", "skills.english": "الإنجليزية", "skills.exploringDesc": "Applied machine learning (دورة NTI)",

    "exp.label": "التطوير المهني", "exp.title": "الخبرة",
    "exp.traineeTitle": "Machine Learning for Data Analysis Trainee",
    "exp.provider": "المعهد القومي للاتصالات (NTI) • ", "exp.officialSite": "الموقع الرسمي لـ NTI",
    "exp.date": "أكتوبر 2026 – حتى الآن (مستمر)",
    "exp.challengeLabel": "التحدي", "exp.challengeText": "تعلّم كيفية تحويل البيانات الخام إلى توقعات من خلال خطوات تعلم الآلة كاملة.",
    "exp.actionLabel": "ما فعلته", "exp.actionText": "العمل على بيانات رعاية صحية في كل خطوة: التنظيف والاستكشاف وتدريب النماذج وتقييمها.",
    "exp.resultLabel": "النتيجة", "exp.resultText": "بناء مهارات أساسية في تعلم الآلة التطبيقي (مستمر).",

    "services.label": "ما أقدمه", "services.title": "الخدمات",
    "services.s1Title": "Prediction Models", "services.s1Desc": "نماذج تصنيف وتوقع مبنية من بياناتك، مع كود موضّح بالتعليقات.",
    "services.s2Title": "Data Cleaning & Preparation", "services.s2Desc": "تنظيف البيانات غير المرتبة وتجهيزها للنمذجة باستخدام pandas وNumPy.",
    "services.s3Title": "Data Exploration & Charts", "services.s3Desc": "اكتشاف الأنماط في بياناتك وعرضها في رسوم بيانية واضحة.",
    "services.s4Title": "Model Evaluation & Reports", "services.s4Desc": "اختبار مدى كفاءة النموذج وشرح النتائج بلغة بسيطة لتقرر ما تفعله.",
    "services.s5Title": "Medical & Health Data", "services.s5Desc": "نماذج للسجلات الصحية وسجلات العيادات، كأداة لدعم القرار وليست تشخيصاً طبياً.",
    "services.timingNote": "يُتفق على الموعد قبل البدء، وعادةً حوالي 5 أيام للمشاريع البسيطة.",
    "services.exclusionNote": "غير مشمول: التعلم العميق، الاستضافة السحابية، تطبيقات الموبايل، جمع البيانات، والتشخيص الطبي.",

    "projects.label": "دراسات الحالة", "projects.title": "المشاريع",
    "projects.codeSoon": "الكود: قريباً", "projects.viewDetails": "عرض التفاصيل",
    "projects.modalOverview": "نظرة عامة", "projects.modalFeatures": "المميزات الرئيسية", "projects.modalTools": "الأدوات والتقنيات",
    "projects.modalRole": "دوري", "projects.modalResults": "النتائج", "projects.modalNote": "ملاحظة",
    "projects.modalMetrics": "النتائج باختصار", "projects.modalGallery": "لقطات من المشروع", "projects.modalSkills": "المهارات",
    "projects.videoPreview": "فيديو المشروع", "projects.githubBtn": "GitHub", "projects.demoBtn": "تجربة مباشرة",
    "projects.streamlitBtn": "تطبيق Streamlit", "projects.close": "إغلاق تفاصيل المشروع",

    "achievements.label": "محطات", "achievements.title": "الإنجازات",
    "achievements.item1Title": "ICPC Problem-Solving Contest", "achievements.item1Desc": "شاركت على مستوى الجامعة.",
    "achievements.item2Title": "تقدير التفوق الأكاديمي",
    "achievements.item2Desc": "جاء ترتيبي ضمن أوائل الطلاب في جامعة الزقازيق الأهلية، وحصلت على شهادة بذلك.",

    "testimonials.label": "الآراء", "testimonials.title": "الآراء", "testimonials.empty": "لا توجد آراء بعد.",
    "testimonials.leaveBtn": "اترك رأيك", "testimonials.modalTitle": "أضف رأيك",
    "testimonials.modalSubtitle": "سيصل رأيك إلى آلاء للتحقق منه ونشره.",
    "testimonials.nameLabel": "الاسم *", "testimonials.namePlaceholder": "مثال: سارة أحمد",
    "testimonials.roleLabel": "الوظيفة / الجهة *", "testimonials.rolePlaceholder": "مثال: Lead Data Scientist, HealthTech",
    "testimonials.linkedinLabel": "رابط LinkedIn (اختياري)", "testimonials.linkedinPlaceholder": "https://linkedin.com/in/username",
    "testimonials.ratingLabel": "التقييم *", "testimonials.reviewLabel": "رأيك *",
    "testimonials.reviewPlaceholder": "شاركنا تجربتك في العمل مع آلاء...",
    "testimonials.submitBtn": "إرسال الرأي", "testimonials.submitting": "جارٍ الإرسال...",
    "testimonials.successMsg": "شكراً لك! تم إرسال رأيك للمراجعة، وسيظهر بعد التحقق منه.",
    "testimonials.errorMsg": "حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرة على الإيميل.",
    "testimonials.notSetUp": "الإرسال غير مفعّل بعد.",

    "contact.label": "تواصل معي", "contact.title": "لنبدأ التعاون",
    "contact.subtext": "ابعت لي وصفاً قصيراً لبياناتك وما تريد توقعه.",
    "contact.emailLabel": "البريد الإلكتروني", "contact.sendEmail": "أرسل إيميل", "contact.waLabel": "واتساب",
    "contact.waValue": "رسالة مباشرة", "contact.chatWithMe": "تحدث معي", "contact.connect": "تواصل",
    "contact.viewProfile": "عرض الملف",

    "footer.role": "Machine Learning Engineer · العاشر من رمضان، مصر",
    "footer.connectLabel": "لنتواصل",
    "footer.connectText": "يسعدني دائماً الحديث عن مشاريع تعلم الآلة، والبيانات الصحية وبيانات الأعمال، وأفكار تحويل البيانات إلى توقعات يستفيد منها الناس.",
    "footer.whoLabel": "من أنا؟",
    "footer.whoText": "أنا آلاء إبراهيم، مهندسة تعلم آلة أبني نماذج تحوّل البيانات الصحية وبيانات الأعمال إلى توقعات يمكن فهمها واستخدامها، بخلفية في المعلوماتية الطبية.",

    "platforms.label": "المنصات", "platforms.intro": "تقدر كمان تتعاقد معايا من خلال منصات العمل الحر دي.",
    "platforms.khamsat": "Khamsat", "platforms.kafiil": "Kafiil", "platforms.nafezly": "Nafezly", "platforms.mostaql": "Mostaql"
  }
};

// ==========================================================================
// 3. APPLICATION LOGIC
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("portfolio-lang");
  let currentLang = savedLang === "ar" ? "ar" : "en";
  const getDict = () => I18N[currentLang] || I18N.en;

  // ---- helpers ----
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const chips = (arr) => arr.map((t) => `<span class="tag">${esc(t)}</span>`).join("");

  const refreshReveals = () => {
    if (typeof window.observeReveals === "function") window.observeReveals();
    else document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
  };

  // ---- Language ----
  const langToggleBtn = document.getElementById("lang-toggle");
  const langTextSpan = document.getElementById("lang-text");

  const setLanguage = (lang) => {
    currentLang = lang === "ar" ? "ar" : "en";
    localStorage.setItem("portfolio-lang", currentLang);
    document.documentElement.setAttribute("lang", currentLang);
    document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

    if (langToggleBtn) {
      langToggleBtn.setAttribute("aria-label", currentLang === "ar" ? "Switch language to English" : "Switch language to Arabic");
      langToggleBtn.setAttribute("title", currentLang === "ar" ? "Switch to English" : "تغيير اللغة إلى العربية");
    }
    if (langTextSpan) langTextSpan.textContent = currentLang === "ar" ? "EN" : "AR";

    const dict = getDict();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    renderProjects();
    renderTestimonials();
    renderPlatforms();
    refreshReveals();
  };

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => setLanguage(currentLang === "ar" ? "en" : "ar"));
  }

  // ---- WhatsApp links ----
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Alaa, I saw your portfolio and would like to talk about a project.")}`;
  document.querySelectorAll(".whatsapp-link").forEach((link) => { link.href = waUrl; });

  // ---- Theme ----
  const themeToggleBtn = document.getElementById("theme-toggle");
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    if (themeToggleBtn) {
      const next = theme === "dark" ? "light" : "dark";
      themeToggleBtn.setAttribute("aria-label", `Switch to ${next} theme`);
      themeToggleBtn.setAttribute("title", `Switch to ${next} theme`);
    }
  };
  applyTheme(localStorage.getItem("portfolio-theme") || "light");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  // ---- Mobile menu ----
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const closeMobileMenu = () => {
    if (navMenu && hamburgerBtn) {
      navMenu.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  };
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.querySelectorAll(".nav-link").forEach((l) => l.addEventListener("click", closeMobileMenu));
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) closeMobileMenu();
    });
  }

  // ---- Skills tabs ----
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      tabPanels.forEach((p) => { p.classList.remove("active"); p.hidden = true; });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (panel) { panel.classList.add("active"); panel.hidden = false; }
    });
  });

  // ---- Certificate lightbox (also used by project galleries) ----
  const certModal = document.getElementById("certificate-modal");
  const certBackdrop = document.getElementById("lightbox-backdrop");
  const certCloseBtn = document.getElementById("lightbox-close");
  const certImg = document.getElementById("lightbox-img");
  const certCaption = document.getElementById("lightbox-caption");
  let lastActiveCertTrigger = null;

  const openLightbox = (src, caption) => {
    if (!certModal || !certImg) return;
    lastActiveCertTrigger = document.activeElement;
    certImg.src = src;
    certImg.alt = caption || "";
    if (certCaption) certCaption.textContent = caption || "";
    certModal.hidden = false;
    document.body.style.overflow = "hidden";
    if (certCloseBtn) certCloseBtn.focus();
  };
  const closeLightbox = () => {
    if (!certModal) return;
    certModal.hidden = true;
    if (certImg) certImg.removeAttribute("src");
    const projectOpen = document.getElementById("project-modal") && !document.getElementById("project-modal").hidden;
    document.body.style.overflow = projectOpen ? "hidden" : "";
    if (lastActiveCertTrigger && typeof lastActiveCertTrigger.focus === "function") lastActiveCertTrigger.focus();
  };
  document.querySelectorAll(".certificate-trigger").forEach((t) => {
    t.addEventListener("click", () => {
      const full = t.getAttribute("data-full-img");
      if (full) openLightbox(full, t.getAttribute("data-caption") || "");
    });
  });
  if (certCloseBtn) certCloseBtn.addEventListener("click", closeLightbox);
  if (certBackdrop) certBackdrop.addEventListener("click", closeLightbox);

  // ---- Projects ----
  const projectsGrid = document.getElementById("projects-grid");
  const projectModal = document.getElementById("project-modal");
  const projectModalCloseBtn = document.getElementById("project-modal-close");
  const projectModalBackdrop = document.getElementById("project-modal-backdrop");
  const projectModalBody = document.getElementById("project-modal-body");
  let lastActiveProjectTrigger = null;

  const renderProjects = () => {
    if (!projectsGrid) return;
    const dict = getDict();
    projectsGrid.innerHTML = "";

    PROJECTS.forEach((proj) => {
      const card = document.createElement("article");
      card.className = "card project-card reveal";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${proj.title} - ${dict["projects.viewDetails"]}`);

      // GitHub button only appears when a link exists (no "coming soon" button)
      const actionBtn = proj.github
        ? `<a href="${esc(proj.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" onclick="event.stopPropagation();">${dict["projects.githubBtn"]}</a>`
        : "";

      card.innerHTML = `
        <div class="project-media-wrapper">
          <div class="project-thumbnail-box">
            <img src="${esc(proj.image)}" alt="${esc(proj.title)}" class="project-thumbnail-img" loading="lazy"
                 onerror="this.onerror=null; this.parentElement.classList.add('has-placeholder'); this.style.display='none';">
            <div class="project-thumbnail-placeholder" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
              <span>${esc(proj.title)}</span>
            </div>
          </div>
        </div>
        <div class="project-content">
          <span class="project-category">${esc(proj.category)}</span>
          <h3 class="project-title">${esc(proj.title)}</h3>
          <p class="project-summary">${esc(proj.summary)}</p>
          <div class="tag-list">${chips(list(proj.tags))}</div>
          <div class="project-actions">
            ${actionBtn}
            <span class="project-view-link">${dict["projects.viewDetails"]} &rarr;</span>
          </div>
        </div>`;

      card.addEventListener("click", () => openProjectModal(proj));
      card.addEventListener("keydown", (e) => {
        if (e.target === card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProjectModal(proj); }
      });
      projectsGrid.appendChild(card);
    });
  };

  const openProjectModal = (proj) => {
    if (!projectModal || !projectModalBody) return;
    lastActiveProjectTrigger = document.activeElement;
    const dict = getDict();
    const section = (title, inner, extra = "") => `<div class="modal-section ${extra}"><h4 class="modal-subheading">${title}</h4>${inner}</div>`;

    let videoHtml = "";
    if (proj.video && proj.video.trim() !== "") {
      const v = proj.video.trim();
      let inner;
      if (/youtube\.com|youtu\.be|drive\.google\.com/.test(v)) {
        let embed = v;
        if (v.includes("watch?v=")) embed = v.replace("watch?v=", "embed/");
        else if (v.includes("youtu.be/")) embed = v.replace("youtu.be/", "www.youtube.com/embed/");
        else if (v.includes("drive.google.com/file/d/")) embed = v.replace("/view", "/preview");
        inner = `<div class="project-video-wrapper"><iframe src="${esc(embed)}" title="${esc(proj.title)} Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
      } else {
        inner = `<div class="project-video-wrapper"><video src="${esc(v)}" controls playsinline preload="metadata"></video></div>`;
      }
      videoHtml = section(dict["projects.videoPreview"], inner, "modal-video-section");
    }

    const overviewHtml = list(proj.overview).map((p) => `<p>${esc(p)}</p>`).join("");
    const metricsHtml = list(proj.metrics).length ? section(dict["projects.modalMetrics"], `<div class="tag-list project-metrics">${chips(list(proj.metrics))}</div>`) : "";
    const featuresHtml = list(proj.keyFeatures).length ? section(dict["projects.modalFeatures"], `<ul class="modal-features-list">${list(proj.keyFeatures).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`) : "";
    const toolsHtml = list(proj.tools).length ? section(dict["projects.modalTools"], `<div class="tag-list">${chips(list(proj.tools))}</div>`) : "";
    const skillsHtml = list(proj.skills).length ? section(dict["projects.modalSkills"], `<div class="tag-list">${chips(list(proj.skills))}</div>`) : "";
    const galleryHtml = list(proj.gallery).length
      ? section(dict["projects.modalGallery"], `<div class="project-gallery">${list(proj.gallery).map((g) => `
          <figure class="project-gallery-item">
            <button type="button" class="project-gallery-btn" data-full-img="${esc(g.src)}" data-caption="${esc(g.caption || "")}">
              <img src="${esc(g.src)}" alt="${esc(g.caption || proj.title)}" loading="lazy" onerror="this.closest('figure').style.display='none'">
            </button>
            ${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}
          </figure>`).join("")}</div>`)
      : "";
    const roleHtml = proj.role ? section(dict["projects.modalRole"], `<p>${esc(proj.role)}</p>`) : "";
    const resultsHtml = proj.results ? section(dict["projects.modalResults"], `<p>${esc(proj.results)}</p>`, "modal-results-section") : "";
    const noteHtml = proj.note ? section(dict["projects.modalNote"], `<p>${esc(proj.note)}</p>`, "modal-note-section") : "";
    const closingHtml = proj.closing ? `<p class="modal-closing">${esc(proj.closing)}</p>` : "";

    let buttons = "";
    if (proj.github) buttons += `<a href="${esc(proj.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${dict["projects.githubBtn"]}</a>`;
    if (proj.demo) buttons += `<a href="${esc(proj.demo)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${dict["projects.demoBtn"]}</a>`;
    if (proj.streamlit) buttons += `<a href="${esc(proj.streamlit)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${dict["projects.streamlitBtn"]}</a>`;
    const footerActionsHtml = buttons ? `<div class="modal-footer-actions">${buttons}</div>` : "";

    projectModalBody.innerHTML = `
      <div class="modal-header-info">
        <span class="project-category">${esc(proj.category)}</span>
        <h3 class="modal-project-title">${esc(proj.title)}</h3>
        <p class="modal-project-summary">${esc(proj.summary)}</p>
        <div class="tag-list">${chips(list(proj.tags))}</div>
      </div>
      ${videoHtml}
      ${section(dict["projects.modalOverview"], overviewHtml)}
      ${metricsHtml}${featuresHtml}${toolsHtml}${skillsHtml}${galleryHtml}${roleHtml}${resultsHtml}${noteHtml}${closingHtml}
      ${footerActionsHtml}`;

    projectModalBody.querySelectorAll(".project-gallery-btn").forEach((b) => {
      b.addEventListener("click", () => openLightbox(b.dataset.fullImg, b.dataset.caption));
    });

    projectModal.hidden = false;
    document.body.style.overflow = "hidden";
    if (projectModalCloseBtn) projectModalCloseBtn.focus();
  };

  const closeProjectModal = () => {
    if (!projectModal) return;
    projectModal.hidden = true;
    if (projectModalBody) {
      projectModalBody.querySelectorAll("iframe").forEach((f) => (f.src = ""));
      projectModalBody.querySelectorAll("video").forEach((v) => v.pause());
      projectModalBody.innerHTML = "";
    }
    document.body.style.overflow = "";
    if (lastActiveProjectTrigger && typeof lastActiveProjectTrigger.focus === "function") lastActiveProjectTrigger.focus();
  };
  if (projectModalCloseBtn) projectModalCloseBtn.addEventListener("click", closeProjectModal);
  if (projectModalBackdrop) projectModalBackdrop.addEventListener("click", closeProjectModal);

  // ---- Testimonials ----
  const testimonialsGrid = document.getElementById("testimonials-grid");
  const testimonialsEmpty = document.getElementById("testimonials-empty");
  const openTestimonialBtn = document.getElementById("open-testimonial-btn");
  const testimonialModal = document.getElementById("testimonial-modal");
  const testimonialModalClose = document.getElementById("testimonial-modal-close");
  const testimonialModalBackdrop = document.getElementById("testimonial-modal-backdrop");
  const testimonialForm = document.getElementById("testimonial-form");
  const successMsg = document.getElementById("t-success-msg");
  const errorMsg = document.getElementById("t-error-msg");
  const submitBtn = document.getElementById("t-submit-btn");
  const starBtns = document.querySelectorAll(".rating-star-btn");
  const ratingInput = document.getElementById("t-rating");
  let lastActiveTestimonialTrigger = null;

  const renderTestimonials = () => {
    if (!TESTIMONIALS || TESTIMONIALS.length === 0) {
      if (testimonialsGrid) testimonialsGrid.innerHTML = "";
      if (testimonialsEmpty) testimonialsEmpty.hidden = false;
      return;
    }
    if (testimonialsEmpty) testimonialsEmpty.hidden = false; // keep the "Leave a Testimonial" button visible
    const emptyText = testimonialsEmpty && testimonialsEmpty.querySelector(".testimonials-empty-text");
    if (emptyText) emptyText.hidden = true;
    if (testimonialsGrid) {
      testimonialsGrid.innerHTML = TESTIMONIALS.map((item) => {
        const n = Math.max(1, Math.min(5, Number(item.rating) || 5));
        return `
          <div class="card testimonial-card reveal">
            <div class="testimonial-stars" aria-label="${n} out of 5 stars">${"★".repeat(n)}</div>
            <p class="testimonial-quote">“${esc(item.text)}”</p>
            <div class="testimonial-author">
              <h4 class="testimonial-name">${esc(item.name)}</h4>
              <p class="testimonial-role">${esc(item.role)}${item.company ? ` · ${esc(item.company)}` : ""}</p>
              ${item.linkedin ? `<a href="${esc(item.linkedin)}" target="_blank" rel="noopener noreferrer" class="testimonial-linkedin">LinkedIn</a>` : ""}
            </div>
          </div>`;
      }).join("");
    }
  };

  const openTestimonialModal = () => {
    if (!testimonialModal) return;
    lastActiveTestimonialTrigger = document.activeElement;
    testimonialModal.hidden = false;
    document.body.style.overflow = "hidden";
    if (successMsg) successMsg.hidden = true;
    if (errorMsg) errorMsg.hidden = true;
    const nameInput = document.getElementById("t-name");
    if (nameInput) nameInput.focus();
  };
  const closeTestimonialModal = () => {
    if (!testimonialModal) return;
    testimonialModal.hidden = true;
    document.body.style.overflow = "";
    if (lastActiveTestimonialTrigger && typeof lastActiveTestimonialTrigger.focus === "function") lastActiveTestimonialTrigger.focus();
  };
  if (openTestimonialBtn) openTestimonialBtn.addEventListener("click", openTestimonialModal);
  if (testimonialModalClose) testimonialModalClose.addEventListener("click", closeTestimonialModal);
  if (testimonialModalBackdrop) testimonialModalBackdrop.addEventListener("click", closeTestimonialModal);

  starBtns.forEach((star) => {
    star.addEventListener("click", () => {
      const val = parseInt(star.getAttribute("data-val"), 10) || 5;
      if (ratingInput) ratingInput.value = val;
      starBtns.forEach((b) => {
        const bv = parseInt(b.getAttribute("data-val"), 10) || 5;
        b.classList.toggle("selected", bv <= val);
        b.setAttribute("aria-checked", bv === val ? "true" : "false");
      });
    });
  });

  const resetStars = () => {
    if (ratingInput) ratingInput.value = "5";
    starBtns.forEach((b) => {
      b.classList.add("selected");
      b.setAttribute("aria-checked", b.getAttribute("data-val") === "5" ? "true" : "false");
    });
  };

  const showMsg = (box, text) => {
    if (successMsg) successMsg.hidden = true;
    if (errorMsg) errorMsg.hidden = true;
    if (box) { box.textContent = text; box.hidden = false; }
  };

  if (testimonialForm) {
    testimonialForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = getDict();

      // Spam traps: if filled, stop silently
      const bot = testimonialForm.querySelector('input[name="botcheck"]');
      const trap = testimonialForm.querySelector('input[name="_gotcha"]');
      if ((bot && bot.checked) || (trap && trap.value.trim() !== "")) {
        testimonialForm.reset();
        closeTestimonialModal();
        return;
      }

      if (!testimonialForm.checkValidity()) { testimonialForm.reportValidity(); return; }

      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.trim() === "") {
        showMsg(errorMsg, dict["testimonials.notSetUp"]);
        return;
      }

      const val = (id) => ((testimonialForm.querySelector(id) || {}).value || "").trim();
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY.trim(),
        subject: "New testimonial for approval",
        from_name: "Portfolio Testimonials",
        botcheck: false,
        name: val("#t-name"),
        role: val("#t-role"),
        linkedin: val("#t-linkedin"),
        rating: val("#t-rating") || "5",
        message: val("#t-review")
      };

      showMsg(null);
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = dict["testimonials.submitting"]; }

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok || data.success === false) throw new Error(data.message || "Web3Forms error");

        showMsg(successMsg, dict["testimonials.successMsg"]);
        testimonialForm.reset(); // cleared only after a successful send
        resetStars();
        setTimeout(closeTestimonialModal, 2600);
      } catch (err) {
        console.error("Testimonial submission failed:", err);
        showMsg(errorMsg, dict["testimonials.errorMsg"]); // the visitor's text stays in the form
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = getDict()["testimonials.submitBtn"]; }
      }
    });
  }

  // ---- Platforms ----
  const renderPlatforms = () => {
    const section = document.getElementById("platforms");
    const grid = document.getElementById("platforms-grid");
    if (!section || !grid) return;
    const dict = getDict();
    const label = document.getElementById("platforms-label");
    const intro = document.getElementById("platforms-intro");
    if (label) label.textContent = dict["platforms.label"];
    if (intro) intro.textContent = dict["platforms.intro"];

    const active = PLATFORMS.filter((p) => p.url && p.url.trim() !== "");
    if (active.length === 0) { section.hidden = true; return; }

    section.hidden = false;
    grid.innerHTML = active.map((p) => {
      const name = dict[`platforms.${p.id}`] || p.name;
      // Use the logo path written in PLATFORMS (jpg / webp / png all work)
      const logoSrc = p.logo || `assets/platforms/${p.id}.png`;
      return `
        <a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" class="platform-card reveal" aria-label="Alaa Ibrahim on ${esc(name)}">
          <div class="platform-logo-wrap">
            <img src="${esc(logoSrc)}" alt="${esc(name)} logo" class="platform-logo" loading="lazy"
                 onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="platform-logo-fallback" style="display:none;" aria-hidden="true">${esc(p.name.charAt(0).toUpperCase())}</div>
          </div>
          <span class="platform-name">${esc(name)}</span>
        </a>`;
    }).join("");
  };

  // ---- Escape key ----
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (certModal && !certModal.hidden) { closeLightbox(); return; }   // close the top layer first
    if (projectModal && !projectModal.hidden) closeProjectModal();
    if (testimonialModal && !testimonialModal.hidden) closeTestimonialModal();
    closeMobileMenu();
  });

  // ---- Scroll reveal ----
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("revealed"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

    window.observeReveals = () => {
      document.querySelectorAll(
        ".section-header, .about-content, .info-card, .education-card, .credential-card, .skills-wrapper, .experience-card, .service-card, .project-card, .achievement-card, .contact-card, .testimonial-card, .platform-card"
      ).forEach((el) => {
        if (!el.classList.contains("revealed")) { el.classList.add("reveal"); observer.observe(el); }
      });
    };
    window.observeReveals();
  }

  // ---- Missing-image fallback (safe: no `this` inside arrow functions) ----
  const neutralSvg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" rx="12" fill="#F8EAF0"/><path d="M30 65 L48 45 L58 55 L70 38 L85 65 Z" fill="#B5526B" opacity="0.45"/><circle cx="42" cy="35" r="7" fill="#B5526B" opacity="0.45"/></svg>'
  );
  document.querySelectorAll("img").forEach((img) => {
    const isLogo = img.classList.contains("brand-logo") || img.classList.contains("footer-logo");
    const useFallback = () => {
      if (isLogo && !img.src.endsWith("logo.svg")) { img.src = "assets/logo.svg"; return; }
      img.classList.add("img-fallback");
      img.src = neutralSvg;
    };
    img.addEventListener("error", useFallback, { once: true });
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src") && img.getAttribute("loading") !== "lazy") useFallback();
  });

  // ---- Start ----
  setLanguage(currentLang);
});