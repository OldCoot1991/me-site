import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Наши работы",
  description:
    "Примеры работ: лендинги, бизнес-сайты, интернет-магазины, интеграции МойСклад, CRM, оплаты, серверы и SEO.",
  alternates: {
    canonical: "/works"
  },
  openGraph: {
    title: "Наши работы | Цифровая мастерская",
    description:
      "Кейсы по сайтам, автоматизации, интеграциям и техническому сопровождению бизнеса.",
    url: "/works"
  }
};

const works = [
  {
    type: "Интернет-магазин",
    title: "Магазин с учетом остатков и заказов",
    description:
      "Собран каталог, корзина, оформление заказа и базовая логика синхронизации товаров.",
    stack: ["Next.js", "МойСклад", "Онлайн-оплата", "SEO"],
    result: "меньше ручной работы с заказами",
    metrics: ["каталог", "оплата", "остатки"]
  },
  {
    type: "Бизнес-сайт",
    title: "Сайт услуг с понятной структурой",
    description:
      "Продуманы страницы услуг, заявки, доверительные блоки, базовая SEO-разметка и аналитика.",
    stack: ["SEO", "Метрика", "Формы", "Контент"],
    result: "сайт готов к рекламе и поиску",
    metrics: ["услуги", "заявки", "аналитика"]
  },
  {
    type: "Автоматизация",
    title: "Связка CRM, заявок и уведомлений",
    description:
      "Заявки с сайта передаются в рабочую систему, а ключевые события уходят в Telegram.",
    stack: ["CRM", "Telegram", "API", "Уведомления"],
    result: "заявки не теряются между каналами",
    metrics: ["CRM", "бот", "статусы"]
  },
  {
    type: "Техническая база",
    title: "Перенос и настройка сервера",
    description:
      "Перенесен сайт, настроены окружение, SSL, резервные копии и базовая защита.",
    stack: ["VPS", "SSL", "Backups", "Security"],
    result: "стабильный запуск без простоя",
    metrics: ["сервер", "HTTPS", "бэкапы"]
  },
  {
    type: "Лендинг",
    title: "Страница под запуск услуги",
    description:
      "Собран первый экран, оффер, блоки преимуществ, прайс, форма заявки и мобильная версия.",
    stack: ["Дизайн", "Верстка", "Адаптив", "SEO"],
    result: "быстрый старт продаж",
    metrics: ["оффер", "форма", "мобайл"]
  },
  {
    type: "Поддержка",
    title: "Регулярное сопровождение сайта",
    description:
      "Вносятся изменения, контролируются формы, хостинг, сервер и работоспособность страниц.",
    stack: ["Контент", "Сервер", "Мониторинг", "Правки"],
    result: "проект остается в рабочем состоянии",
    metrics: ["правки", "контроль", "поддержка"]
  }
];

const process = [
  "Разбираю задачу и слабые места текущей системы.",
  "Предлагаю понятный объем работ без лишних модулей.",
  "Собираю сайт, интеграции и техническую основу.",
  "Проверяю адаптив, SEO, формы, скорость и запуск."
];

export default function WorksPage() {
  return (
    <main>
      <section className="worksHero">
        <nav className="nav" aria-label="Навигация по сайту">
          <Link className="brand" href="/" aria-label="На главную">
            <span className="brandMark">CM</span>
            <span>Цифровая мастерская</span>
          </Link>
          <div className="navLinks">
            <Link href="/">Главная</Link>
            <Link href="/#services">Услуги</Link>
            <Link href="/#support">Сопровождение</Link>
            <Link href="/#contact">Заявка</Link>
          </div>
        </nav>

        <div className="worksHeroInner">
          <p className="eyebrow">Посмотреть наши работы</p>
          <h1>Кейсы, где сайт становится рабочим инструментом бизнеса</h1>
          <p className="lead">
            Здесь собраны типовые направления проектов: сайты, магазины, интеграции,
            серверы и сопровождение. Каждый проект собирается под задачу, а не по
            шаблону ради красивой картинки.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/#contact">Обсудить похожий проект</Link>
            <Link className="button secondary" href="/#services">Посмотреть услуги</Link>
          </div>
        </div>
      </section>

      <section className="section worksSection">
        <div className="sectionHead">
          <p className="eyebrow">Портфолио</p>
          <h2>Примеры задач, которые можно закрыть под ключ</h2>
        </div>

        <div className="worksGrid">
          {works.map((work, index) => (
            <article className="workCard" key={work.title}>
              <div className="workPreview" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  {work.metrics.map((metric) => (
                    <i key={metric}>{metric}</i>
                  ))}
                </div>
              </div>
              <div className="workContent">
                <p className="workType">{work.type}</p>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="tags">
                  {work.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <strong>{work.result}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section worksProcess">
        <div className="sectionHead">
          <p className="eyebrow">Как идет работа</p>
          <h2>Минимум хаоса, максимум понятного движения</h2>
        </div>
        <div className="processGrid">
          {process.map((item, index) => (
            <article className="processCard" key={item}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section consultation worksCta">
        <div>
          <p className="eyebrow">Нужен похожий результат?</p>
          <h2>Опишите задачу, а я предложу понятный план</h2>
          <p>
            Можно начать с сайта, интеграции «МойСклад», CRM, оплаты, сервера,
            SEO-аудита или регулярного сопровождения.
          </p>
        </div>
        <Link className="button primary" href="/#contact">Оставить заявку</Link>
      </section>
    </main>
  );
}
