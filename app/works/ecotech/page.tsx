import Link from "next/link";
import Image from "next/image";
import HeaderControls from "../../components/HeaderControls";

export const metadata = {
  title: "Кейс: EcoTech07 — Официальный сайт регоператора ТКО в КБР | Цифровая мастерская",
  description:
    "Разработка информационного корпоративного сайта для МУП «Экотехпром» — регионального оператора по обращению с ТКО в Кабардино-Балкарской Республике.",
};

const deliverables = [
  {
    icon: "✍️",
    title: "Копирайтинг и контент",
    price: "6 000 ₽",
    items: [
      "Подготовка таблиц тарифов для физ. и юр. лиц",
      "Структурирование нормативных документов",
      "Тексты SEO-заголовков и мета-описаний",
    ],
  },
  {
    icon: "💻",
    title: "Вёрстка и разработка",
    price: "12 000 ₽",
    items: [
      "Разработка на Next.js / React (SSR)",
      "Семантическая HTML-разметка",
      "CSS-анимации и интерактивные элементы",
      "Полная адаптивность (mobile-first)",
    ],
  },
  {
    icon: "🖥️",
    title: "VPS-сервер и инфраструктура",
    price: "8 000 ₽",
    items: [
      "Настройка Ubuntu Server на VPS/VDS",
      "Конфигурация веб-сервера Nginx",
      "SSL-сертификат Let's Encrypt + автообновление",
      "Настройка DNS-записей домена",
      "Базовая защита от DDoS и ботов",
    ],
  },
];

const timelineSteps = [
  { day: "День 1–2", title: "Брифинг и прототип", desc: "Изучение задачи, структура сайта, согласование блоков" },
  { day: "День 3–4", title: "Дизайн и тексты", desc: "Создание макетов в Figma, написание всего контента" },
  { day: "День 5–7", title: "Вёрстка", desc: "Разработка на Next.js, адаптивность, анимации" },
  { day: "День 8", title: "Сервер и деплой", desc: "VPS, Nginx, SSL, DNS, корпоративная почта" },
  { day: "День 9", title: "Сдача и запуск", desc: "Финальная проверка, исправление замечаний, запуск" },
];

const works = [
  { icon: "📁", label: "Документы", sub: "скачивание PDF" },
  { icon: "📊", label: "Тарифы физ. лиц", sub: "по зонам КБР" },
  { icon: "🏢", label: "Тарифы организаций", sub: "юридические лица" },
  { icon: "🏦", label: "Реквизиты", sub: "ИНН, КПП, ОГРН, банк" },
  { icon: "📞", label: "Контакты", sub: "договорной отдел" },
  { icon: "✉️", label: "Обратная связь", sub: "форма заявки" },
];

export default function EcoTechCasePage() {
  return (
    <main className="casePage">

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="caseHero">
        {/* Декоративный эко-фон */}
        <div className="caseHeroBg" aria-hidden="true">
          <div className="caseHeroBgGlow caseHeroBgGlow1" />
          <div className="caseHeroBgGlow caseHeroBgGlow2" />
          <div className="caseHeroBgGrid" />
        </div>

        <nav className="nav" aria-label="Навигация по сайту">
          <Link className="brand" href="/" aria-label="На главную">
            <span className="brandMark">CM</span>
            <span>Цифровая мастерская</span>
          </Link>
          <div className="navLinks">
            <Link href="/">Главная</Link>
            <Link href="/works">Работы</Link>
            <Link href="/#services">Услуги</Link>
            <Link href="/#contact">Заявка</Link>
          </div>
          <HeaderControls />
        </nav>

        <div className="caseHeroInner">
          <Link href="/works" className="caseBackLink">
            ← Назад к работам
          </Link>

          <div className="caseHeroMeta">
            <span className="caseHeroTag">05</span>
            <span className="caseHeroTag">Кейс</span>
            <span className="caseHeroTag">Корпоративный лендинг</span>
          </div>

          <h1 className="caseHeroTitle">
            EcoTech07 —<br />
            <span className="caseHeroAccent">Официальный сайт</span><br />
            регоператора ТКО в КБР
          </h1>

          <p className="caseHeroLead">
            Разработка надёжного и информативного веб-сайта для МУП «Экотехпром» —
            регионального оператора по обращению с твёрдыми коммунальными отходами
            во всей Кабардино-Балкарской Республике.
          </p>

          <div className="caseHeroActions">
            <a
              className="caseHeroCta"
              href="https://ecotech07.eco07.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть живой сайт ↗
            </a>
            <Link className="caseHeroCtaSecondary" href="/#contact">
              Обсудить ваш проект
            </Link>
          </div>

          {/* Stats row */}
          <div className="caseHeroStats">
            <div className="caseHeroStat">
              <span className="caseHeroStatNum">40K</span>
              <span className="caseHeroStatLabel">Стоимость проекта, ₽</span>
            </div>
            <div className="caseHeroStatDivider" />
            <div className="caseHeroStat">
              <span className="caseHeroStatNum">9</span>
              <span className="caseHeroStatLabel">Рабочих дней</span>
            </div>
            <div className="caseHeroStatDivider" />
            <div className="caseHeroStat">
              <span className="caseHeroStatNum">100</span>
              <span className="caseHeroStatLabel">PageSpeed Score</span>
            </div>
            <div className="caseHeroStatDivider" />
            <div className="caseHeroStat">
              <span className="caseHeroStatNum caseHeroStatGreen">✓</span>
              <span className="caseHeroStatLabel">Проект запущен</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── META CARDS ──────────────────────────────────────────── */}
      <section className="caseMetaSection">
        <div className="caseMetaGrid">
          <div className="metaItem">
            <span className="metaIcon">🏢</span>
            <div>
              <h4>Клиент</h4>
              <p className="metaValue">МУП «Экотехпром»</p>
              <p className="metaHint">Регоператор ТКО, КБР</p>
            </div>
          </div>
          <div className="metaItem">
            <span className="metaIcon">📄</span>
            <div>
              <h4>Тип проекта</h4>
              <p className="metaValue">Корпоративный лендинг</p>
              <p className="metaHint">Информационный · одностраничный</p>
            </div>
          </div>
          <div className="metaItem metaItemPrice">
            <span className="metaIcon">💰</span>
            <div>
              <h4>Итоговая стоимость</h4>
              <p className="metaPriceValue">40 000 ₽</p>
              <p className="metaHint">вёрстка · сервер · SEO · почта</p>
            </div>
          </div>
          <div className="metaItem">
            <span className="metaIcon">⏱</span>
            <div>
              <h4>Срок выполнения</h4>
              <p className="metaValue">9 рабочих дней</p>
              <p className="metaHint">от брифинга до запуска</p>
            </div>
          </div>
          <div className="metaItem metaItemStatus">
            <span className="metaIcon">🚀</span>
            <div>
              <h4>Статус</h4>
              <p className="metaStatusBadge">✓ Проект запущен</p>
              <a
                href="https://ecotech07.eco07.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="metaStatusLink"
              >
                ecotech07.eco07.ru ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TASK + SIDEBAR ──────────────────────────────────────── */}
      <section className="section caseContentSection">
        <div className="caseGrid">
          <div className="caseText">
            <div className="caseSectionLabel">Задача</div>
            <h2 className="caseSectionTitle">Поставленная задача</h2>
            <p>
              В 2026 году МУП «Экотехпром» стал официальным региональным оператором КБР
              по обращению с ТКО. Перед началом работы компании требовался официальный
              веб-сайт — первоисточник для жителей, предприятий и государственных структур.
            </p>
            <p>
              Сайт должен был выполнять строгие практические функции: публиковать утверждённые
              тарифы для физических и юридических лиц по зонам республики, предоставлять
              нормативные документы для скачивания, содержать банковские реквизиты и
              контакты договорного отдела для оформления договоров.
            </p>

            <div className="caseSectionLabel" style={{ marginTop: 40 }}>Реализация</div>
            <h2 className="caseSectionTitle">Что было сделано</h2>
            <ul className="caseList">
              <li>
                <strong>Дизайн в экологичной палитре:</strong> Корпоративная цветовая схема
                в зелёных тонах, транслирующих тему чистоты и экологии. Строгая типографика
                и четкий визуальный порядок для официального контента.
              </li>
              <li>
                <strong>Блок документов:</strong> Раздел с кнопками для скачивания нормативных
                документов — договоры, приказы, регламенты — доступные одним кликом.
              </li>
              <li>
                <strong>Интерактивная таблица тарифов:</strong> Чёткая и читаемая таблица
                официальных тарифов на вывоз ТКО — отдельно для физических лиц и для
                организаций, с разбивкой по зонам и периодам.
              </li>
              <li>
                <strong>Реквизиты и контакты:</strong> Все банковские реквизиты, ИНН, КПП,
                ОГРН и контакты структурированы и легко копируются.
              </li>
              <li>
                <strong>VPS + Nginx + SSL:</strong> Сайт развернут на VPS под управлением
                Ubuntu Server с SSL Let's Encrypt и настроенными DNS-записями.
              </li>
              <li>
                <strong>Адаптивность для районов:</strong> Полная мобильная адаптация —
                жители КБР могут найти нужный тариф с любого смартфона.
              </li>
            </ul>
          </div>

          <div className="caseSidebar">
            {/* Tech stack */}
            <div className="sidebarCard">
              <h4>Стек технологий</h4>
              <div className="tags">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Figma</span>
                <span>Ubuntu VPS</span>
                <span>Nginx</span>
                <span>SSL Let's Encrypt</span>
                <span>Яндекс 360</span>
                <span>SPF/DKIM/DMARC</span>
              </div>
            </div>

            {/* Blocks */}
            <div className="caseBlocksCard">
              <h4>Блоки сайта</h4>
              <div className="caseBlocksGrid">
                {works.map((w) => (
                  <div key={w.label} className="caseBlock">
                    <span className="caseBlockIcon">{w.icon}</span>
                    <span className="caseBlockLabel">{w.label}</span>
                    <span className="caseBlockSub">{w.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="sidebarCard highlight">
              <h4>Итог</h4>
              <p>
                Сайт запущен в срок и успешно функционирует. МУП «Экотехпром» получил
                полностью рабочую цифровую инфраструктуру — от домена и сервера до
                корпоративной почты и SEO — «под ключ» за 9 дней.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUDGET ──────────────────────────────────────────────── */}
      <section className="caseBudgetSection">
        <div className="caseBudgetBg" aria-hidden="true">
          <div className="caseBudgetBgDot" />
        </div>
        <div className="caseBudgetInner">
          <div className="caseBudgetHeader">
            <div>
              <p className="eyebrow">Детальная смета</p>
              <h2>Что входит в стоимость</h2>
            </div>
            <div className="caseBudgetTotal">
              <span className="caseBudgetTotalLabel">Итого</span>
              <span className="caseBudgetTotalSum">40 000 ₽</span>
              <span className="caseBudgetTotalSub">вёрстка · сервер · контент · 9 дней</span>
            </div>
          </div>

          <div className="budgetGrid">
            {deliverables.map((d) => (
              <div key={d.title} className="budgetCard">
                <div className="budgetCardHead">
                  <span className="budgetIcon">{d.icon}</span>
                  <div>
                    <h4 className="budgetTitle">{d.title}</h4>
                    <span className="budgetPrice">{d.price}</span>
                  </div>
                </div>
                <ul className="budgetList">
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ────────────────────────────────────────────── */}
      <section className="section caseTimelineSection">
        <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
          <div className="sectionHead">
            <p className="eyebrow">Хронология работ</p>
            <h2>9 дней от брифа до запуска</h2>
          </div>
          <div className="stepperTrack">
            {timelineSteps.map((step, i) => (
              <div key={i} className="stepperItem">
                <div className="stepperBody">
                  <span className="stepperNum">0{i + 1}</span>
                  <span className="stepperDay">{step.day}</span>
                  <h4 className="stepperTitle">{step.title}</h4>
                  <p className="stepperDesc">{step.desc}</p>
                </div>
                {i < timelineSteps.length - 1 && (
                  <div className="stepperArrow" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── SCREENSHOTS ─────────────────────────────────────────── */}
      <section className="caseScreenshotsSection">
        <div className="caseGalleryInner">

          {/* Header */}
          <div className="caseGalleryHeader">
            <div>
              <p className="eyebrow">Интерфейс проекта</p>
              <h2>Скриншоты разработанного сайта</h2>
              <p className="caseGallerySubtitle">
                Строгий, информативный дизайн с акцентом на практичность —<br />
                тарифы, реквизиты и документы с первого экрана.
              </p>
            </div>
            <a
              href="https://ecotech07.eco07.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="caseHeroCta"
              style={{ flexShrink: 0, alignSelf: "flex-end" }}
            >
              Открыть живой сайт ↗
            </a>
          </div>

          {/* Full-width grid of screenshots */}
          <div className="caseGallerySections">

            {/* Hero — full width, clickable */}
            <div className="caseGalleryShot caseGalleryShotFull">
              <div className="caseGalleryShotLabel">
                <span>🏠</span> Главная страница — баннер
                <span className="caseGalleryShotHint">кликните для просмотра</span>
              </div>
              <a
                href="/works/eco_s1_hero.png"
                target="_blank"
                rel="noopener noreferrer"
                className="caseGalleryShotFrame caseGalleryShotLink"
              >
                <Image
                  src="/works/eco_s1_hero.png"
                  alt="Главная страница EcoTech07"
                  width={1280}
                  height={800}
                  className="caseGalleryShotImg"
                  priority
                />
                <div className="caseGalleryShotOverlay">🔍 Открыть</div>
              </a>
            </div>

            {/* 3 section shots */}
            <div className="caseGalleryRow">

              <div className="caseGalleryShot">
                <div className="caseGalleryShotLabel">
                  <span>📁</span> Документы
                  <span className="caseGalleryShotHint">кликните</span>
                </div>
                <a
                  href="/works/eco_s2_docs.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caseGalleryShotFrame caseGalleryShotLink"
                >
                  <Image
                    src="/works/eco_s2_docs.png"
                    alt="Раздел документов EcoTech07"
                    width={1280}
                    height={800}
                    className="caseGalleryShotImg"
                  />
                  <div className="caseGalleryShotOverlay">🔍 Открыть</div>
                </a>
              </div>

              <div className="caseGalleryShot">
                <div className="caseGalleryShotLabel">
                  <span>📊</span> Тарифы ТКО
                  <span className="caseGalleryShotHint">кликните</span>
                </div>
                <a
                  href="/works/eco_s3_tariffs.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caseGalleryShotFrame caseGalleryShotLink"
                >
                  <Image
                    src="/works/eco_s3_tariffs.png"
                    alt="Тарифы ТКО EcoTech07"
                    width={1280}
                    height={800}
                    className="caseGalleryShotImg"
                  />
                  <div className="caseGalleryShotOverlay">🔍 Открыть</div>
                </a>
              </div>

              <div className="caseGalleryShot">
                <div className="caseGalleryShotLabel">
                  <span>🏦</span> Реквизиты
                  <span className="caseGalleryShotHint">кликните</span>
                </div>
                <a
                  href="/works/eco_s4_contacts.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caseGalleryShotFrame caseGalleryShotLink"
                >
                  <Image
                    src="/works/eco_s4_contacts.png"
                    alt="Реквизиты EcoTech07"
                    width={1280}
                    height={800}
                    className="caseGalleryShotImg"
                  />
                  <div className="caseGalleryShotOverlay">🔍 Открыть</div>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>



      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="caseFinalCta">
        <div className="caseFinalCtaBg" aria-hidden="true">
          <div className="caseFinalCtaGlow" />
        </div>
        <div className="caseFinalCtaInner">
          <p className="eyebrow">Понравился подход?</p>
          <h2>Запустим качественный сайт под ваш бизнес</h2>
          <p>
            Разработаем структуру, напишем тексты, настроим сервер, SSL,
            доменную почту и аналитику — «под ключ», в срок, с гарантией.
          </p>
          <div className="caseFinalCtaActions">
            <Link className="caseHeroCta" href="/#contact">
              Начать сотрудничество
            </Link>
            <Link className="caseHeroCtaSecondary" href="/works">
              Смотреть другие работы
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
