// Centralized, typed bilingual content for the PULSE landing.
// All copy lives here so components stay presentational.

export type Lang = "ru" | "en";
export type Theme = "dark" | "light";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  /** Raw display value, e.g. "250+", "8 лет". */
  v: string;
  /** Label under the number. */
  l: string;
}

/** Stat with the numeric part parsed out for the count-up animation. */
export interface ParsedStat extends Stat {
  count: number;
  suffix: string;
}

export interface Service {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface CaseItem {
  cat: string;
  title: string;
  metric: string;
  /** Placeholder caption shown in the empty image slot. */
  ph: string;
  /** Optional public URL of the live project. */
  url?: string;
}

/** A group of technologies for one discipline (frontend, backend, etc.). */
export interface TechGroup {
  title: string;
  items: string[];
}

/** A single row in the development-timelines table. */
export interface Timeline {
  task: string;
  time: string;
}

/** A capability area with a title and a list of detailed bullet points. */
export interface Capability {
  title: string;
  points: string[];
}

/** One section of the privacy policy. */
export interface PrivacySection {
  heading: string;
  body: string[];
}

/** Case with a stable id for image-slot persistence. */
export interface CaseWithId extends CaseItem {
  id: string;
}

export interface Plan {
  name: string;
  price: string;
  tag: string;
  featured: boolean;
  cta: string;
  features: string[];
}

export interface Member {
  name: string;
  role: string;
  ph: string;
}

export interface MemberWithId extends Member {
  id: string;
}

export interface Content {
  brand: string;
  themeTip: string;
  ctaNav: string;
  popular: string;
  navLinks: NavLink[];
  heroEyebrow: string;
  heroPre: string;
  heroAccent: string;
  heroSub: string;
  cta1: string;
  cta2: string;
  marquee: string;
  stats: Stat[];
  logosTitle: string;
  principlesTitle: string;
  principles: string[];
  capSeq: string;
  capKicker: string;
  capTitle: string;
  capLead: string;
  capabilities: Capability[];
  servSeq: string;
  servKicker: string;
  servTitle: string;
  servLead: string;
  services: Service[];
  techSeq: string;
  techKicker: string;
  techTitle: string;
  techLead: string;
  techStack: TechGroup[];
  caseSeq: string;
  caseKicker: string;
  caseTitle: string;
  caseLead: string;
  cases: CaseItem[];
  timeSeq: string;
  timeKicker: string;
  timeTitle: string;
  timeLead: string;
  timeColTask: string;
  timeColTime: string;
  timelines: Timeline[];
  priceSeq: string;
  priceKicker: string;
  priceTitle: string;
  priceLead: string;
  plans: Plan[];
  priceNote: string;
  teamSeq: string;
  teamKicker: string;
  teamTitle: string;
  teamLead: string;
  team: Member[];
  contactSeq: string;
  contactKicker: string;
  contactTitle: string;
  contactLead: string;
  socials: string[];
  fName: string;
  fContact: string;
  fService: string;
  fMsg: string;
  serviceOptions: string[];
  fSubmit: string;
  fPrivacy: string;
  fPrivacyLink: string;
  success: string;
  footTagline: string;
  footNav: string;
  footSocialTitle: string;
  footContactTitle: string;
  footCity: string;
  footRights: string;
  footMade: string;
  footLegal: string;
  privacyLink: string;
  privacyBack: string;
  privacyTitle: string;
  privacyUpdated: string;
  privacyIntro: string;
  privacySections: PrivacySection[];
  consentTitle: string;
  consentText: string;
  consentAccept: string;
}

export const CONTENT: Record<Lang, Content> = {
  ru: {
    brand: "ПУЛЬС",
    themeTip: "Сменить тему",
    ctaNav: "Обсудить проект",
    popular: "Хит",
    navLinks: [
      { label: "Услуги", href: "#services" },
      { label: "Возможности", href: "#capabilities" },
      { label: "Технологии", href: "#tech" },
      { label: "Кейсы", href: "#cases" },
      { label: "Сроки", href: "#timelines" },
      { label: "Контакты", href: "#contact" },
    ],
    heroEyebrow: "Цифровое агентство полного цикла",
    heroPre: "Превращаем идеи в",
    heroAccent: "цифровой рост",
    heroSub:
      "Сайты, интернет-магазины, автоматизация (МойСклад, CRM), интеграции оплат, серверы, SEO и поддержка — под ключ. Работаем по Нальчику, всей КБР и удалённо.",
    cta1: "Обсудить проект",
    cta2: "Смотреть кейсы",
    marquee: "Сайты • Приложения • SMM • Дизайн • SEO • ИИ-боты • Брендбуки • Реклама • ",
    stats: [
      { v: "8 лет", l: "на digital-рынке" },
      { v: "250+", l: "запущенных проектов" },
      { v: "40", l: "специалистов в команде" },
      { v: "98%", l: "клиентов возвращаются" },
    ],
    logosTitle: "НАМ ДОВЕРЯЮТ БОЛЕЕ 250 КОМПАНИЙ",
    principlesTitle: "Общие принципы разработки",
    principles: [
      "Написание технической документации",
      "Проектирование архитектуры программного обеспечения",
      "Разработка клиент-серверных продуктов",
      "Разработка мобильных приложений",
      "Разработка высоконагруженных систем",
      "Разработка прикладного программного обеспечения",
      "Поддержка и сопровождение продуктов",
      "Разработка продуктов по методологии Agile",
    ],
    capSeq: "02",
    capKicker: "Возможности",
    capTitle: "Что мы делаем — по направлениям",
    capLead: "Полный перечень компетенций: разработка, автоматизация (МойСклад, CRM), интеграции, серверы, SEO, сопровождение и дизайн.",
    capabilities: [
      { title: "Разработка Frontend", points: [
        "Архитектуры MVC, MVVM, REST API",
        "Рендеринг на клиенте (SPA) и на сервере (SSR)",
        "Сайты любой сложности и интернет-магазины",
        "Личные кабинеты в сфере услуг ЖКХ и системы платежей",
        "Системы «ПО как услуга» (SaaS)",
        "Интерфейсы под мобильные устройства и планшеты",
        "CRM-системы и панели администрирования",
      ] },
      { title: "Разработка Backend", points: [
        "Высоконагруженные системы, архитектуры MVC, REST API",
        "Java: Spring Boot, Spring MVC, Spring Security, Java EE",
        "Hibernate ORM, Spring JPA, Lombok, Apache Commons, Guava",
        "JavaScript: Node.js, Next.js, Express, Sequelize ORM",
        "PHP: Symfony, Laravel, WordPress, Doctrine ORM",
        "Тестирование JUnit, JMeter; миграции Liquibase",
        "Авто-документирование REST API через Swagger UI",
      ] },
      { title: "Мобильные приложения", points: [
        "Архитектуры MVC, MVP, MVVM, VIPER, REST API",
        "iOS (нативно): Swift, SwiftUI, UIKit, Core Data, Texture",
        "Android (нативно): Java/Kotlin, Android SDK, Retrofit2, Dagger, Room",
        "Кроссплатформа: Flutter/Dart (Vanilla, Scoped Model, BLoC)",
        "React Native и Apache Cordova (JS/TS, Redux/MobX)",
        "Публикация в App Store, Google Play и AppGallery",
      ] },
      { title: "Прикладное ПО", points: [
        "Программы под Windows, macOS и Linux",
        "ПО под контрольно-кассовую технику Атол и Эвотор",
        "Языки C#, Java, Pascal, C++, JavaScript, Swift, Dart",
        "Фреймворки .NET Framework, Qt, Electron, Flutter",
      ] },
      { title: "Инфраструктура для разработки", points: [
        "Непрерывная интеграция и развёртывание CI/CD",
        "Контейнеризация Docker, оркестрация Kubernetes",
        "Системы версий Git, GitLab, GitHub, Bitbucket",
        "Управление проектами Jira, Trello",
        "Вики-системы Confluence, GitBook",
      ] },
      { title: "Администрирование Linux (Ubuntu/Debian)", points: [
        "Установка и настройка Linux, пользователи и права доступа",
        "HTTP-сервер Nginx: маршрутизация, кэширование, фильтры",
        "SSL-сертификаты через Certbot",
        "БД MySQL, Node.js, Docker",
        "Написание Bash-скриптов",
      ] },
      { title: "Администрирование Windows Server", points: [
        "Установка и настройка Windows Server, IIS, MS SQL Server",
        "Виртуализация VMware vSphere (HA, репликация, тюнинг)",
        "Сетевая инфраструктура ЦОД на Cisco, WatchGuard",
        "Корпоративная телефония Oktell, Panasonic TDE100/200",
        "Active Directory, Exchange, DFS, WSUS, RDS; PowerShell",
        "СХД Synology, мониторинг Zabbix, резервное копирование",
        "Информационная безопасность: WatchGuard NGFW, IPS, VPN, Anti-Bot",
      ] },
      { title: "Проектирование баз данных", points: [
        "Установка на Windows/Linux, настройка, резервирование, восстановление",
        "Оптимизация и разделение прав доступа",
        "Концептуальное, логическое и физическое проектирование",
        "Нормализация и оптимизация связей и ключей",
        "СУБД: MySQL, PostgreSQL, MS SQL Server, Firebird, SQLite",
      ] },
      { title: "Интеграция эквайринга и платежей", points: [
        "Эквайринг PayU, Best2Pay, Альфа-Банк, Сбербанк, Монета, UCS, PayKeeper",
        "Платёжные сервисы Киберплат, А3, Монета",
        "Интеграция мобильных приложений с Apple Pay и Google Pay",
      ] },
      { title: "Автоматизация бизнеса", points: [
        "Настройка облачного учёта «МойСклад» под ваши процессы",
        "Двусторонняя интеграция «МойСклад» с интернет-магазином",
        "Складской учёт, товарная матрица, модификации и штрихкоды",
        "Импорт каталога из прайсов поставщиков и Excel",
        "Автообновление цен, остатков и статусов заказов",
      ] },
      { title: "Интеграции с бизнес-инструментами", points: [
        "Онлайн-оплата: карты, СБП, Яндекс Пэй с чеками по ФЗ-54",
        "Подключение CRM: amoCRM, Битрикс24 — заявки в сделки",
        "Telegram-бот: мгновенные уведомления команде о заказах",
        "WhatsApp Business: авто-уведомления и быстрый диалог",
        "Доменная почта name@company.ru с SPF, DKIM, DMARC",
      ] },
      { title: "Серверы и безопасность", points: [
        "Настройка VPS/VDS: Nginx, Docker, Node.js, MySQL",
        "Перенос сайта на новый сервер без простоя",
        "SSL-сертификаты Let's Encrypt с автопродлением",
        "Автоматическое резервное копирование в облако",
        "Защита от взлома, спама и укрепление сервера",
      ] },
      { title: "SEO и аналитика", points: [
        "Базовая SEO: Title/H1–H6, robots, sitemap, Schema.org",
        "Яндекс.Метрика и Google Analytics 4, Вебвизор",
        "Настройка целей и конверсий для рекламы",
        "SEO-аудит с картой действий для выхода в топ",
      ] },
      { title: "Сопровождение и контент", points: [
        "Регулярное ведение сайтов, сервера и хостинга",
        "Наполнение контентом и вёрстка материалов",
        "Добавление товаров и создание новых страниц",
        "Срочные работы и восстановление в день обращения",
      ] },
      { title: "Дизайн", points: [
        "Инструменты: Figma, Photoshop, CorelDraw, Adobe Illustrator, X-mind, Axure",
        "Логотипы и фирменный стиль",
        "Сценарии сайтов/приложений с проработкой юзабилити",
        "Веб-интерфейсы для десктопа и мобильных, прототипирование",
        "Адаптивные макеты, стайлгайды, UX/UI-паттерны",
        "Типографика, ретушь фото, общая стилистика и концепция",
      ] },
    ],
    servSeq: "01",
    servKicker: "Услуги",
    servTitle: "Полный цикл digital под ключ",
    servLead:
      "От стратегии и дизайна до разработки, продвижения и поддержки — всё в одной команде.",
    services: [
      { num: "01", title: "Сайты и веб-приложения", desc: "Сайты любой сложности, интернет-магазины, личные кабинеты ЖКХ, системы платежей, CRM и панели администрирования (SPA и SSR).", tags: ["React", "Next.js", "Angular", "TypeScript"] },
      { num: "02", title: "Мобильная разработка", desc: "Нативные и кроссплатформенные приложения под iOS и Android с публикацией в App Store, Google Play и AppGallery.", tags: ["Swift", "Kotlin", "Flutter", "React Native"] },
      { num: "03", title: "Backend и высоконагруженные системы", desc: "Клиент-серверные продукты и REST API на Java, Node.js и PHP с авто-документированием Swagger.", tags: ["Java / Spring", "Node.js", "PHP", "REST API"] },
      { num: "04", title: "Прикладное ПО и десктоп", desc: "Программы под Windows, macOS и Linux, интеграция с контрольно-кассовой техникой Атол и Эвотор.", tags: ["C# / .NET", "C++ / Qt", "Electron", "ККТ"] },
      { num: "05", title: "Базы данных", desc: "Проектирование, администрирование, резервирование и оптимизация СУБД на всех этапах.", tags: ["PostgreSQL", "MySQL", "MS SQL", "SQLite"] },
      { num: "06", title: "Интеграция эквайринга и платежей", desc: "Подключение приёма платежей и платёжных сервисов к сайтам и мобильным приложениям.", tags: ["PayU", "Сбербанк", "Apple Pay", "Google Pay"] },
      { num: "07", title: "DevOps и инфраструктура", desc: "CI/CD, контейнеризация, администрирование серверов Linux и Windows Server, мониторинг и информационная безопасность.", tags: ["Docker", "Kubernetes", "Nginx", "CI/CD"] },
      { num: "08", title: "Дизайн и UX/UI", desc: "Логотипы и фирменный стиль, прототипирование, адаптивные макеты, стайлгайды и проработка юзабилити.", tags: ["Figma", "UX/UI", "Прототипы", "Айдентика"] },
    ],
    techSeq: "03",
    techKicker: "Технологии",
    techTitle: "Наш технологический стек",
    techLead: "Проверенные инструменты для каждого этапа — от фронтенда до инфраструктуры и платежей.",
    techStack: [
      { title: "Frontend", items: ["HTML", "CSS", "Sass", "LESS", "React", "Next.js", "Angular", "Electron", "JavaScript (ES6/ES7)", "TypeScript", "Redux", "Ant Design", "Axios", "Styled Components", "jQuery", "Node.js", "npm / Yarn", "PM2", "Webpack", "Babel", "JEST", "БЭМ"] },
      { title: "Backend — Java", items: ["Java 11", "Kotlin", "Groovy", "Spring Boot", "Spring MVC", "Spring Security", "Java EE", "Spring JPA", "Hibernate ORM", "Lombok", "Apache Commons", "Guava", "JUnit", "JMeter", "Tomcat", "Liquibase", "Maven", "Gradle"] },
      { title: "Backend — JS / PHP", items: ["Node.js", "Next.js", "Express", "Sequelize ORM", "PHP", "Symfony", "Laravel", "WordPress", "Doctrine ORM", "Swagger UI"] },
      { title: "Мобильная разработка", items: ["Swift", "SwiftUI", "UIKit", "Core Data", "Texture", "Java / Kotlin", "Android SDK", "Retrofit2", "Dagger", "Room", "Flutter", "Dart", "BLoC", "React Native", "Apache Cordova", "Redux / MobX"] },
      { title: "Прикладное ПО", items: ["C#", "Java", "Pascal", "C++", "Swift", "Dart", ".NET Framework", "Qt", "Electron", "Flutter", "Атол / Эвотор"] },
      { title: "Базы данных", items: ["MySQL", "PostgreSQL", "Microsoft SQL Server", "Firebird", "SQLite"] },
      { title: "DevOps и инфраструктура", items: ["CI/CD", "Docker", "Kubernetes", "Git", "GitLab", "GitHub", "Bitbucket", "Jira", "Trello", "Confluence", "GitBook", "Nginx", "Certbot / SSL", "Bash"] },
      { title: "Windows Server", items: ["Windows Server", "VMware vSphere", "Cisco", "WatchGuard NGFW", "Oktell", "Panasonic TDE", "Active Directory", "Exchange", "DFS", "WSUS", "RDS", "PowerShell", "Synology", "Zabbix", "IIS", "MS SQL Server"] },
      { title: "Эквайринг и платежи", items: ["PayU", "Best2Pay", "Альфа-Банк", "Сбербанк", "Монета", "UCS", "PayKeeper", "Киберплат", "А3", "Apple Pay", "Google Pay"] },
      { title: "Дизайн", items: ["Figma", "Photoshop", "CorelDraw", "Adobe Illustrator", "X-mind", "Axure"] },
    ],
    caseSeq: "04",
    caseKicker: "Кейсы",
    caseTitle: "Проекты, которыми гордимся",
    caseLead: "Результат в цифрах важнее красивых слов. Вот что мы делаем для клиентов.",
    cases: [
      { cat: "Сайт под ключ", title: "EcoTech07 — сайт регоператора ТКО в КБР", metric: "Проект запущен · Next.js + VPS", ph: "ecotech07.eco07.ru", url: "https://ecotech07.eco07.ru/" },
      { cat: "Приём платежей ЖКХ", title: "Сайт приёма платежей за ЖКХ", metric: "Рабочая версия за 2,5 мес", ph: "secure.mdr26.ru", url: "https://secure.mdr26.ru" },
      { cat: "Веб-разработка", title: "Сайт ООО «Экологистика»", metric: "Запуск за 2 месяца", ph: "ecologistika.com", url: "https://ecologistika.com" },
      { cat: "Мобильная", title: "Приложение «Экологистика»", metric: "iOS и Android за 2 месяца", ph: "мобильное приложение" },
      { cat: "Backend", title: "Серверная часть под ключ", metric: "REST API за 1,5–2,5 мес", ph: "highload backend" },
      { cat: "Веб-разработка", title: "Landing-страница", metric: "Запуск за неделю", ph: "landing" },
      { cat: "Интеграции", title: "Подключение эквайринга", metric: "PayU · Сбербанк · Apple Pay", ph: "платежи" },
    ],
    timeSeq: "05",
    timeKicker: "Сроки",
    timeTitle: "Средние сроки разработки",
    timeLead: "Ориентировочные сроки по типовым задачам. Точную оценку даём после брифа.",
    timeColTask: "Задача",
    timeColTime: "Срок",
    timelines: [
      { task: "Разработка landing-страницы сайта", time: "1 неделя" },
      { task: "Серверная часть для сайта или мобильного приложения", time: "1,5 – 2,5 месяца" },
      { task: "Сайт приёма платежей за ЖКХ (secure.mdr26.ru)", time: "рабочая версия — 2,5 мес, доработки — 1 мес" },
      { task: "Сайт для ООО «Экологистика» (ecologistika.com)", time: "2 месяца" },
      { task: "Мобильное приложение «Экологистика»", time: "2 месяца" },
    ],
    priceSeq: "06",
    priceKicker: "Цены",
    priceTitle: "Прозрачные тарифы",
    priceLead: "Стартовые пакеты для бизнеса и частников. Точную смету считаем после брифа.",
    plans: [
      { name: "Старт", price: "от 90 000 ₽", tag: "Лендинг или соцсети под ключ", featured: false, cta: "Выбрать", features: ["Лендинг или сайт-визитка", "Базовый дизайн", "Настройка аналитики", "Запуск за 2–3 недели"] },
      { name: "Бизнес", price: "от 250 000 ₽", tag: "Сайт + продвижение", featured: true, cta: "Обсудить", features: ["Многостраничный сайт", "Индивидуальный дизайн", "SMM или контекст — 1 мес", "SEO-оптимизация", "Поддержка 3 месяца"] },
      { name: "Под ключ", price: "индивидуально", tag: "Комплексный digital", featured: false, cta: "Запросить смету", features: ["Веб + мобильная разработка", "Брендбук и айдентика", "SMM + таргет + контент", "Чат-боты и автоматизация", "Выделенная команда"] },
    ],
    priceNote: "Все цены ориентировочные. Финальную стоимость зафиксируем после короткого брифа.",
    teamSeq: "07",
    teamKicker: "Команда",
    teamTitle: "Люди за результатом",
    teamLead: "Дизайнеры, разработчики, маркетологи и продюсеры — одна команда под ваш проект.",
    team: [
      { name: "Анна Северова", role: "Креативный директор", ph: "фото" },
      { name: "Дмитрий Лозовой", role: "Tech Lead", ph: "фото" },
      { name: "Марина Куль", role: "Head of SMM", ph: "фото" },
      { name: "Игорь Венц", role: "Арт-директор", ph: "фото" },
      { name: "Олег Тарасов", role: "Lead-разработчик", ph: "фото" },
      { name: "Катя Рим", role: "Project Manager", ph: "фото" },
    ],
    contactSeq: "06",
    contactKicker: "Контакты",
    contactTitle: "Расскажите о проекте",
    contactLead:
      "Ответим в течение дня, зададим правильные вопросы и предложим решение под вашу задачу. Основной регион работы — Нальчик и вся Кабардино-Балкарская Республика.",
    socials: ["Telegram", "WhatsApp", "VK", "YouTube"],
    fName: "Имя",
    fContact: "Телефон или e-mail",
    fService: "Интересующая услуга",
    fMsg: "Сообщение",
    serviceOptions: ["Разработка сайта / приложения", "SMM и соцсети", "Дизайн и контент", "SEO и реклама", "Брендбук", "ИИ и автоматизация", "Другое"],
    fSubmit: "Отправить заявку",
    fPrivacy: "Нажимая кнопку, вы соглашаетесь с ",
    fPrivacyLink: "политикой конфиденциальности",
    success: "Спасибо! Мы свяжемся с вами в ближайшее время.",
    footTagline:
      "Цифровое агентство полного цикла: сайты, приложения, соцсети и реклама для любого бизнеса.",
    footNav: "Навигация",
    footSocialTitle: "Соцсети",
    footContactTitle: "Контакты",
    footCity: "Нальчик · Кабардино-Балкарская Республика · удалённо",
    footRights: "Все права защищены.",
    footMade: "Сделано с любовью к digital",
    footLegal: "Правовая информация",
    privacyLink: "Политика конфиденциальности",
    privacyBack: "← На главную",
    privacyTitle: "Политика конфиденциальности",
    privacyUpdated: "Последнее обновление: 2 июля 2026 г.",
    privacyIntro:
      "Настоящая Политика конфиденциальности описывает, как агентство ПУЛЬС («мы», «Оператор») собирает, использует и защищает персональные данные пользователей сайта. Отправляя данные через формы на сайте, вы подтверждаете согласие с условиями этой Политики.",
    privacySections: [
      {
        heading: "1. Общие положения",
        body: [
          "Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и иными применимыми нормами законодательства.",
          "Использование сайта означает согласие пользователя с настоящей Политикой и условиями обработки его персональных данных.",
        ],
      },
      {
        heading: "2. Какие данные мы собираем",
        body: [
          "Данные, которые вы сообщаете добровольно через формы обратной связи: имя, телефон или адрес электронной почты, а также текст сообщения и выбранная услуга.",
          "Технические данные, собираемые автоматически: IP-адрес, тип устройства и браузера, источник перехода, а также данные файлов cookie и систем веб-аналитики.",
        ],
      },
      {
        heading: "3. Цели обработки данных",
        body: [
          "Обработка заявок, ответ на обращения и подготовка коммерческих предложений.",
          "Информирование о статусе проекта и оказание согласованных услуг.",
          "Улучшение работы сайта, анализ посещаемости и качества сервиса.",
        ],
      },
      {
        heading: "4. Правовые основания",
        body: [
          "Основанием обработки является согласие пользователя, которое он даёт при отправке формы, а также исполнение договора и требования законодательства.",
          "Согласие может быть отозвано в любой момент путём обращения по контактам, указанным ниже.",
        ],
      },
      {
        heading: "5. Передача данных третьим лицам",
        body: [
          "Мы не продаём и не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных законом.",
          "Данные могут обрабатываться доверенными подрядчиками (хостинг, сервисы аналитики и рассылок) исключительно в объёме, необходимом для оказания услуг, и на условиях конфиденциальности.",
        ],
      },
      {
        heading: "6. Сроки хранения",
        body: [
          "Персональные данные хранятся не дольше, чем этого требуют цели их обработки, либо до момента отзыва согласия пользователем.",
          "По истечении срока хранения данные удаляются или обезличиваются.",
        ],
      },
      {
        heading: "7. Файлы cookie и аналитика",
        body: [
          "Сайт использует файлы cookie и системы веб-аналитики для корректной работы и улучшения сервиса.",
          "Вы можете отключить cookie в настройках браузера, однако это может ограничить работу отдельных функций сайта.",
        ],
      },
      {
        heading: "8. Права пользователя",
        body: [
          "Вы вправе получать информацию об обработке своих данных, требовать их уточнения, блокирования или удаления, а также отозвать согласие на обработку.",
          "Для реализации своих прав направьте запрос на указанный ниже адрес электронной почты.",
        ],
      },
      {
        heading: "9. Защита данных",
        body: [
          "Мы применяем организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.",
        ],
      },
      {
        heading: "10. Изменения политики",
        body: [
          "Мы можем периодически обновлять настоящую Политику. Актуальная версия всегда доступна на этой странице с указанием даты последнего обновления.",
        ],
      },
      {
        heading: "11. Контакты",
        body: [
          "По вопросам обработки персональных данных вы можете связаться с нами по адресу: hello@puls.digital.",
        ],
      },
    ],
    consentTitle: "Мы заботимся о ваших данных",
    consentText:
      "Продолжая пользоваться сайтом, вы подтверждаете, что ознакомились и согласны с ",
    consentAccept: "Принять и продолжить",
  },
  en: {
    brand: "PULSE",
    themeTip: "Switch theme",
    ctaNav: "Start a project",
    popular: "Top",
    navLinks: [
      { label: "Services", href: "#services" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Tech", href: "#tech" },
      { label: "Work", href: "#cases" },
      { label: "Timelines", href: "#timelines" },
      { label: "Contact", href: "#contact" },
    ],
    heroEyebrow: "Full-cycle digital agency",
    heroPre: "We turn ideas into",
    heroAccent: "digital growth",
    heroSub:
      "Websites, online stores, business automation (MoySklad, CRM), payment integrations, servers, SEO and support — turnkey. We work across Nalchik, all of Kabardino-Balkaria and remotely.",
    cta1: "Start a project",
    cta2: "View our work",
    marquee: "Websites • Apps • SMM • Design • SEO • AI bots • Brandbooks • Ads • ",
    stats: [
      { v: "8 yrs", l: "in the digital market" },
      { v: "250+", l: "projects shipped" },
      { v: "40", l: "specialists on the team" },
      { v: "98%", l: "of clients come back" },
    ],
    logosTitle: "TRUSTED BY 250+ COMPANIES",
    principlesTitle: "General development principles",
    principles: [
      "Writing technical documentation",
      "Software architecture design",
      "Client-server product development",
      "Mobile app development",
      "High-load systems development",
      "Applied software development",
      "Product support and maintenance",
      "Agile development methodology",
    ],
    capSeq: "02",
    capKicker: "Capabilities",
    capTitle: "What we do — by area",
    capLead: "The full list of competencies: development, automation (MoySklad, CRM), integrations, servers, SEO, support and design.",
    capabilities: [
      { title: "Frontend development", points: [
        "MVC, MVVM, REST API architectures",
        "Client-side (SPA) and server-side (SSR) rendering",
        "Websites of any complexity and e-commerce",
        "Utility (ЖКХ) billing portals and payment systems",
        "Software-as-a-Service (SaaS) systems",
        "Interfaces for mobile devices and tablets",
        "CRM systems and admin panels",
      ] },
      { title: "Backend development", points: [
        "High-load systems, MVC and REST API architectures",
        "Java: Spring Boot, Spring MVC, Spring Security, Java EE",
        "Hibernate ORM, Spring JPA, Lombok, Apache Commons, Guava",
        "JavaScript: Node.js, Next.js, Express, Sequelize ORM",
        "PHP: Symfony, Laravel, WordPress, Doctrine ORM",
        "Testing with JUnit, JMeter; migrations via Liquibase",
        "REST API auto-documentation with Swagger UI",
      ] },
      { title: "Mobile apps", points: [
        "MVC, MVP, MVVM, VIPER, REST API architectures",
        "iOS (native): Swift, SwiftUI, UIKit, Core Data, Texture",
        "Android (native): Java/Kotlin, Android SDK, Retrofit2, Dagger, Room",
        "Cross-platform: Flutter/Dart (Vanilla, Scoped Model, BLoC)",
        "React Native and Apache Cordova (JS/TS, Redux/MobX)",
        "Publishing to App Store, Google Play and AppGallery",
      ] },
      { title: "Applied software", points: [
        "Software for Windows, macOS and Linux",
        "Software for Atol and Evotor point-of-sale hardware",
        "Languages C#, Java, Pascal, C++, JavaScript, Swift, Dart",
        "Frameworks .NET Framework, Qt, Electron, Flutter",
      ] },
      { title: "Development infrastructure", points: [
        "Continuous integration and deployment CI/CD",
        "Docker containerization, Kubernetes orchestration",
        "Version control Git, GitLab, GitHub, Bitbucket",
        "Project management Jira, Trello",
        "Wiki systems Confluence, GitBook",
      ] },
      { title: "Linux administration (Ubuntu/Debian)", points: [
        "Linux install and setup, users and access rights",
        "Nginx HTTP server: routing, caching, filters",
        "SSL certificates via Certbot",
        "MySQL databases, Node.js, Docker",
        "Bash scripting",
      ] },
      { title: "Windows Server administration", points: [
        "Windows Server, IIS, MS SQL Server setup",
        "VMware vSphere virtualization (HA, replication, tuning)",
        "Data-center network on Cisco, WatchGuard",
        "Corporate telephony Oktell, Panasonic TDE100/200",
        "Active Directory, Exchange, DFS, WSUS, RDS; PowerShell",
        "Synology storage, Zabbix monitoring, backups",
        "Information security: WatchGuard NGFW, IPS, VPN, Anti-Bot",
      ] },
      { title: "Database design", points: [
        "Install on Windows/Linux, setup, backup, recovery",
        "Optimization and access-rights separation",
        "Conceptual, logical and physical design",
        "Normalization and optimization of relations and keys",
        "DBMS: MySQL, PostgreSQL, MS SQL Server, Firebird, SQLite",
      ] },
      { title: "Acquiring & payment integration", points: [
        "Acquiring PayU, Best2Pay, Alfa-Bank, Sberbank, Moneta, UCS, PayKeeper",
        "Payment services Cyberplat, A3, Moneta",
        "Mobile app integration with Apple Pay and Google Pay",
      ] },
      { title: "Business automation", points: [
        "MoySklad cloud inventory setup for your processes",
        "Two-way MoySklad ↔ online store integration",
        "Stock accounting, product matrix, variants and barcodes",
        "Catalog import from supplier price lists and Excel",
        "Auto-sync of prices, stock and order statuses",
      ] },
      { title: "Business-tool integrations", points: [
        "Online payments: cards, SBP, Yandex Pay with 54-FZ receipts",
        "CRM integration: amoCRM, Bitrix24 — leads into deals",
        "Telegram bot: instant order notifications to the team",
        "WhatsApp Business: auto-notifications and quick chat",
        "Domain email name@company.ru with SPF, DKIM, DMARC",
      ] },
      { title: "Servers & security", points: [
        "VPS/VDS setup: Nginx, Docker, Node.js, MySQL",
        "Site migration to a new server with zero downtime",
        "Let's Encrypt SSL certificates with auto-renewal",
        "Automated backups to independent cloud storage",
        "Protection from hacking, spam and server hardening",
      ] },
      { title: "SEO & analytics", points: [
        "Basic SEO: Title/H1–H6, robots, sitemap, Schema.org",
        "Yandex.Metrica and Google Analytics 4, session replay",
        "Goal and conversion tracking for ad campaigns",
        "SEO audit with an action map to reach the top",
      ] },
      { title: "Support & content", points: [
        "Ongoing maintenance of sites, servers and hosting",
        "Content filling and layout of materials",
        "Adding products and building new pages",
        "Urgent work and same-day recovery",
      ] },
      { title: "Design", points: [
        "Tools: Figma, Photoshop, CorelDraw, Adobe Illustrator, X-mind, Axure",
        "Logos and corporate identity",
        "Site/app scenarios with usability work",
        "Web interfaces for desktop and mobile, prototyping",
        "Responsive layouts, styleguides, UX/UI patterns",
        "Typography, photo retouch, overall style and concept",
      ] },
    ],
    servSeq: "01",
    servKicker: "Services",
    servTitle: "Full-cycle digital, turnkey",
    servLead: "From strategy and design to development, promotion and support — all in one team.",
    services: [
      { num: "01", title: "Websites & web apps", desc: "Sites of any complexity, e-commerce, utility billing portals, payment systems, CRM and admin panels (SPA and SSR).", tags: ["React", "Next.js", "Angular", "TypeScript"] },
      { num: "02", title: "Mobile development", desc: "Native and cross-platform iOS and Android apps published to the App Store, Google Play and AppGallery.", tags: ["Swift", "Kotlin", "Flutter", "React Native"] },
      { num: "03", title: "Backend & high-load systems", desc: "Client-server products and REST APIs on Java, Node.js and PHP with Swagger auto-documentation.", tags: ["Java / Spring", "Node.js", "PHP", "REST API"] },
      { num: "04", title: "Applied & desktop software", desc: "Apps for Windows, macOS and Linux, integration with Atol and Evotor point-of-sale hardware.", tags: ["C# / .NET", "C++ / Qt", "Electron", "POS"] },
      { num: "05", title: "Databases", desc: "Design, administration, backup and optimization of databases across every stage.", tags: ["PostgreSQL", "MySQL", "MS SQL", "SQLite"] },
      { num: "06", title: "Payment & acquiring integration", desc: "Wiring payment acceptance and payment services into websites and mobile apps.", tags: ["PayU", "Sberbank", "Apple Pay", "Google Pay"] },
      { num: "07", title: "DevOps & infrastructure", desc: "CI/CD, containerization, Linux and Windows Server administration, monitoring and information security.", tags: ["Docker", "Kubernetes", "Nginx", "CI/CD"] },
      { num: "08", title: "Design & UX/UI", desc: "Logos and identity, prototyping, responsive layouts, styleguides and usability work.", tags: ["Figma", "UX/UI", "Prototypes", "Identity"] },
    ],
    techSeq: "03",
    techKicker: "Tech",
    techTitle: "Our technology stack",
    techLead: "Proven tools for every stage — from frontend to infrastructure and payments.",
    techStack: [
      { title: "Frontend", items: ["HTML", "CSS", "Sass", "LESS", "React", "Next.js", "Angular", "Electron", "JavaScript (ES6/ES7)", "TypeScript", "Redux", "Ant Design", "Axios", "Styled Components", "jQuery", "Node.js", "npm / Yarn", "PM2", "Webpack", "Babel", "JEST", "BEM"] },
      { title: "Backend — Java", items: ["Java 11", "Kotlin", "Groovy", "Spring Boot", "Spring MVC", "Spring Security", "Java EE", "Spring JPA", "Hibernate ORM", "Lombok", "Apache Commons", "Guava", "JUnit", "JMeter", "Tomcat", "Liquibase", "Maven", "Gradle"] },
      { title: "Backend — JS / PHP", items: ["Node.js", "Next.js", "Express", "Sequelize ORM", "PHP", "Symfony", "Laravel", "WordPress", "Doctrine ORM", "Swagger UI"] },
      { title: "Mobile", items: ["Swift", "SwiftUI", "UIKit", "Core Data", "Texture", "Java / Kotlin", "Android SDK", "Retrofit2", "Dagger", "Room", "Flutter", "Dart", "BLoC", "React Native", "Apache Cordova", "Redux / MobX"] },
      { title: "Applied software", items: ["C#", "Java", "Pascal", "C++", "Swift", "Dart", ".NET Framework", "Qt", "Electron", "Flutter", "Atol / Evotor"] },
      { title: "Databases", items: ["MySQL", "PostgreSQL", "Microsoft SQL Server", "Firebird", "SQLite"] },
      { title: "DevOps & infrastructure", items: ["CI/CD", "Docker", "Kubernetes", "Git", "GitLab", "GitHub", "Bitbucket", "Jira", "Trello", "Confluence", "GitBook", "Nginx", "Certbot / SSL", "Bash"] },
      { title: "Windows Server", items: ["Windows Server", "VMware vSphere", "Cisco", "WatchGuard NGFW", "Oktell", "Panasonic TDE", "Active Directory", "Exchange", "DFS", "WSUS", "RDS", "PowerShell", "Synology", "Zabbix", "IIS", "MS SQL Server"] },
      { title: "Acquiring & payments", items: ["PayU", "Best2Pay", "Alfa-Bank", "Sberbank", "Moneta", "UCS", "PayKeeper", "Cyberplat", "A3", "Apple Pay", "Google Pay"] },
      { title: "Design", items: ["Figma", "Photoshop", "CorelDraw", "Adobe Illustrator", "X-mind", "Axure"] },
    ],
    caseSeq: "04",
    caseKicker: "Work",
    caseTitle: "Projects we are proud of",
    caseLead: "Numbers matter more than nice words. Here is what we deliver for clients.",
    cases: [
      { cat: "Turnkey website", title: "EcoTech07 — waste operator site in KBR", metric: "Launched · Next.js + VPS", ph: "ecotech07.eco07.ru", url: "https://ecotech07.eco07.ru/" },
      { cat: "Utility payments", title: "Utility (ЖКХ) payment website", metric: "Live version in 2.5 months", ph: "secure.mdr26.ru", url: "https://secure.mdr26.ru" },
      { cat: "Web dev", title: "Ecologistika corporate website", metric: "Shipped in 2 months", ph: "ecologistika.com", url: "https://ecologistika.com" },
      { cat: "Mobile", title: "Ecologistika mobile app", metric: "iOS & Android in 2 months", ph: "mobile app" },
      { cat: "Backend", title: "Turnkey server side", metric: "REST API in 1.5–2.5 months", ph: "highload backend" },
      { cat: "Web dev", title: "Landing page", metric: "Launched in 1 week", ph: "landing" },
      { cat: "Integrations", title: "Payment acquiring setup", metric: "PayU · Sberbank · Apple Pay", ph: "payments" },
    ],
    timeSeq: "05",
    timeKicker: "Timelines",
    timeTitle: "Average development timelines",
    timeLead: "Indicative timelines for typical tasks. Exact estimate after a brief.",
    timeColTask: "Task",
    timeColTime: "Timeline",
    timelines: [
      { task: "Landing page development", time: "1 week" },
      { task: "Server side for a website or mobile app", time: "1.5 – 2.5 months" },
      { task: "Utility (ЖКХ) payment website (secure.mdr26.ru)", time: "live version — 2.5 mo, refinements — 1 mo" },
      { task: "Website for Ecologistika (ecologistika.com)", time: "2 months" },
      { task: "Ecologistika mobile app", time: "2 months" },
    ],
    priceSeq: "06",
    priceKicker: "Pricing",
    priceTitle: "Transparent plans",
    priceLead: "Starter packages for businesses and individuals. Exact quote after a short brief.",
    plans: [
      { name: "Start", price: "from $1,200", tag: "Landing or social, turnkey", featured: false, cta: "Choose", features: ["Landing or one-pager", "Basic design", "Analytics setup", "Launch in 2–3 weeks"] },
      { name: "Business", price: "from $3,300", tag: "Website + promotion", featured: true, cta: "Discuss", features: ["Multi-page website", "Custom design", "SMM or ads — 1 month", "SEO optimization", "3 months of support"] },
      { name: "Turnkey", price: "custom", tag: "Full digital package", featured: false, cta: "Request a quote", features: ["Web + mobile development", "Brandbook and identity", "SMM + ads + content", "Chatbots and automation", "A dedicated team"] },
    ],
    priceNote: "All prices are indicative. The final cost is fixed after a short brief.",
    teamSeq: "07",
    teamKicker: "Team",
    teamTitle: "People behind the results",
    teamLead: "Designers, developers, marketers and producers — one team for your project.",
    team: [
      { name: "Anna Severova", role: "Creative Director", ph: "photo" },
      { name: "Dmitry Lozovoy", role: "Tech Lead", ph: "photo" },
      { name: "Marina Kul", role: "Head of SMM", ph: "photo" },
      { name: "Igor Venz", role: "Art Director", ph: "photo" },
      { name: "Oleg Tarasov", role: "Lead Developer", ph: "photo" },
      { name: "Katya Rim", role: "Project Manager", ph: "photo" },
    ],
    contactSeq: "06",
    contactKicker: "Contact",
    contactTitle: "Tell us about your project",
    contactLead:
      "We reply within a day, ask the right questions and propose a solution for your goal. Our main service area is Nalchik and all of Kabardino-Balkaria.",
    socials: ["Telegram", "WhatsApp", "VK", "YouTube"],
    fName: "Name",
    fContact: "Phone or e-mail",
    fService: "Service of interest",
    fMsg: "Message",
    serviceOptions: ["Website / app development", "SMM & social media", "Design & content", "SEO & ads", "Brandbook", "AI & automation", "Other"],
    fSubmit: "Send request",
    fPrivacy: "By submitting you agree to the ",
    fPrivacyLink: "privacy policy",
    success: "Thank you! We will get in touch with you shortly.",
    footTagline:
      "A full-cycle digital agency: websites, apps, social media and ads for any business.",
    footNav: "Navigation",
    footSocialTitle: "Social",
    footContactTitle: "Contacts",
    footCity: "Nalchik · Kabardino-Balkaria · remote",
    footRights: "All rights reserved.",
    footMade: "Made with love for digital",
    footLegal: "Legal",
    privacyLink: "Privacy Policy",
    privacyBack: "← Back to home",
    privacyTitle: "Privacy Policy",
    privacyUpdated: "Last updated: 2 July 2026",
    privacyIntro:
      "This Privacy Policy explains how PULSE agency (“we”, the “Operator”) collects, uses and protects the personal data of website users. By submitting data through the forms on this website, you confirm your consent to the terms of this Policy.",
    privacySections: [
      {
        heading: "1. General provisions",
        body: [
          "Personal data is processed in accordance with applicable data protection law, including Federal Law No. 152-FZ of 27 July 2006 “On Personal Data”.",
          "Using the website constitutes the user’s consent to this Policy and to the terms of processing of their personal data.",
        ],
      },
      {
        heading: "2. What data we collect",
        body: [
          "Data you provide voluntarily through contact forms: name, phone number or email address, message text and the selected service.",
          "Technical data collected automatically: IP address, device and browser type, referral source, as well as cookie data and web-analytics information.",
        ],
      },
      {
        heading: "3. Purposes of processing",
        body: [
          "Processing requests, responding to enquiries and preparing commercial proposals.",
          "Informing you about project status and providing the agreed services.",
          "Improving the website, analysing traffic and service quality.",
        ],
      },
      {
        heading: "4. Legal basis",
        body: [
          "The basis for processing is the user’s consent given when submitting a form, as well as contract performance and legal requirements.",
          "Consent may be withdrawn at any time by contacting us using the details below.",
        ],
      },
      {
        heading: "5. Data sharing",
        body: [
          "We do not sell or share personal data with third parties, except as required by law.",
          "Data may be processed by trusted contractors (hosting, analytics and mailing services) only to the extent necessary to provide services and under confidentiality terms.",
        ],
      },
      {
        heading: "6. Retention period",
        body: [
          "Personal data is stored no longer than required for the purposes of processing, or until the user withdraws consent.",
          "After the retention period expires, the data is deleted or anonymised.",
        ],
      },
      {
        heading: "7. Cookies and analytics",
        body: [
          "The website uses cookies and web-analytics systems for correct operation and service improvement.",
          "You can disable cookies in your browser settings, although this may limit some website features.",
        ],
      },
      {
        heading: "8. Your rights",
        body: [
          "You have the right to receive information about the processing of your data, request its correction, blocking or deletion, and withdraw your consent to processing.",
          "To exercise your rights, send a request to the email address below.",
        ],
      },
      {
        heading: "9. Data protection",
        body: [
          "We apply organisational and technical measures to protect personal data from unauthorised access, alteration, disclosure or destruction.",
        ],
      },
      {
        heading: "10. Changes to this policy",
        body: [
          "We may update this Policy from time to time. The current version is always available on this page with the date of the last update.",
        ],
      },
      {
        heading: "11. Contact",
        body: [
          "For any questions about the processing of personal data, you can contact us at: hello@puls.digital.",
        ],
      },
    ],
    consentTitle: "We care about your data",
    consentText:
      "By continuing to use the site, you confirm that you have read and agree to our ",
    consentAccept: "Accept and continue",
  },
};

/** Marquee logo names (rendered twice for a seamless loop). */
export const LOGOS = ["NOVA", "ATLAS", "KUB", "FORMA", "ORBIT", "VOLNA", "GRAN", "TERRA"];

/** Accent color swatches available in the UI. */
export const ACCENTS = ["#C6F932", "#FF5A36", "#8B5CFF", "#2E7BFF", "#FF3DA5"];

/** Parse the numeric part of a stat so it can count up. */
export function parseStat(s: Stat): ParsedStat {
  const m = String(s.v).match(/^([\d.,]+)(.*)$/);
  const count = m ? parseInt(m[1].replace(/[^\d]/g, ""), 10) || 0 : 0;
  const suffix = m ? m[2] : "";
  return { ...s, count, suffix };
}

/** Relative luminance — used to pick readable text on the accent color. */
export function luminance(hex: string): number {
  const h = (hex || "#C6F932").replace("#", "");
  if (h.length < 6) return 0.5;
  const v = (i: number) => parseInt(h.substr(i, 2), 16) / 255;
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * f(v(0)) + 0.7152 * f(v(2)) + 0.0722 * f(v(4));
}

export function onAccentColor(accent: string): string {
  return luminance(accent) > 0.56 ? "#0A0A0A" : "#FFFFFF";
}
