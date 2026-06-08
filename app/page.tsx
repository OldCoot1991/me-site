import Link from "next/link";
import { serviceGroups } from "./services/data";

const supportPlans = [
  {
    name: "Ведение лендинга",
    price: "5 000 ₽ / месяц",
    text: "Определенное количество изменений, контроль работы сайта и хостинга."
  },
  {
    name: "Ведение бизнес-сайта",
    price: "от 20 000 ₽ / месяц",
    text: "Контроль сервера, backend-части, техническое сопровождение и внесение изменений."
  },
  {
    name: "Ведение интернет-магазина",
    price: "40 000 ₽ / месяц",
    text: "Страницы, сервер, неполадки, техническая поддержка и регулярные задачи."
  }
];

const proofItems = [
  "Проектирую сайт как бизнес-инструмент, а не набор красивых блоков.",
  "Довожу задачу до запуска: домен, сервер, SEO, аналитика, интеграции.",
  "Объясняю простым языком, где нужен код, а где достаточно настройки.",
  "Собираю решения, которые можно поддерживать и развивать после релиза."
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Цифровая мастерская",
  description:
    "Разработка сайтов, интернет-магазинов, интеграции МойСклад, CRM, оплаты, серверы, SEO и сопровождение.",
  areaServed: "RU",
  serviceType: [
    "Разработка сайтов",
    "Интернет-магазины",
    "Настройка МойСклад",
    "Интеграция CRM",
    "Техническое сопровождение сайтов",
    "SEO-настройка"
  ],
  offers: serviceGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Offer",
      name: item.name,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "RUB",
        description: item.price
      },
      category: group.title
    }))
  )
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero" id="top">
        <nav className="nav" aria-label="Главная навигация">
          <a className="brand" href="#top" aria-label="На главную">
            <span className="brandMark">CM</span>
            <span>Цифровая мастерская</span>
          </a>
          <div className="navLinks">
            <a href="#services">Услуги</a>
            <Link href="/works">Работы</Link>
            <a href="#automation">Автоматизация</a>
            <a href="#support">Сопровождение</a>
            <a href="#contact">Заявка</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroContent">
            <p className="eyebrow">Сайты, интеграции и техническая опора для бизнеса</p>
            <h1>Разрабатываю сайты и собираю цифровые процессы под ключ</h1>
            <p className="lead">
              Лендинги, бизнес-сайты, интернет-магазины, «МойСклад», CRM, оплаты,
              серверы, SEO и поддержка. Работаю как мастер: вижу систему целиком,
              чиню слабые места и довожу до результата.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#contact">Обсудить проект</a>
              <Link className="button secondary" href="/works">Посмотреть работы</Link>
              <a className="button secondary" href="#services">Смотреть цены</a>
            </div>
            <div className="heroStats" aria-label="Ключевые направления">
              <span><strong>7</strong> направлений услуг</span>
              <span><strong>24/7</strong> техническая база</span>
              <span><strong>SEO</strong> с первого экрана</span>
            </div>
          </div>

          <div className="workbench" aria-label="Визуальный пример рабочего процесса">
            <div className="signalRail" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="workbenchTop">
              <span />
              <span />
              <span />
            </div>
            <div className="workbenchBody">
              <div className="pipeline">
                <div>
                  <small>Заявка</small>
                  <strong>Сайт</strong>
                </div>
                <div>
                  <small>Каталог</small>
                  <strong>МойСклад</strong>
                </div>
                <div>
                  <small>Сделка</small>
                  <strong>CRM</strong>
                </div>
                <div>
                  <small>Рост</small>
                  <strong>SEO</strong>
                </div>
              </div>
              <div className="terminal">
                <p>deploy: production ready</p>
                <p>ssl: active</p>
                <p>analytics: goals configured</p>
                <p>orders: synced with stock</p>
              </div>
              <div className="meter">
                <span>Стабильность проекта</span>
                <strong>98%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="sectionHead">
          <p className="eyebrow">Почему это выглядит экспертно</p>
          <h2>Клиент покупает не страницу, а спокойную работающую систему</h2>
        </div>
        <div className="proofGrid">
          {proofItems.map((item) => (
            <article className="proofCard" key={item}>
              <span className="check" aria-hidden="true">✓</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="sectionHead">
          <p className="eyebrow">Прайс-лист на услуги</p>
          <h2>Разработка, интеграции, серверы, SEO и поддержка</h2>
        </div>
        <div className="serviceStack">
          {serviceGroups.map((group) => (
            <section
              className="serviceGroup"
              key={group.title}
              id={group.title === "Автоматизация бизнеса" ? "automation" : undefined}
            >
              <div className="groupHead">
                <h3>{group.title}</h3>
                <p>{group.accent}</p>
              </div>
              <div className="cards">
                {group.items.map((item) => (
                  <Link className="priceCard" href={`/services/${item.slug}`} key={item.name}>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.text}</p>
                    </div>
                    <strong>{item.price}</strong>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section support" id="support">
        <div className="sectionHead">
          <p className="eyebrow">Сопровождение сайтов</p>
          <h2>После запуска проект остается под присмотром</h2>
        </div>
        <div className="supportGrid">
          {supportPlans.map((plan) => (
            <article className="supportCard" key={plan.name}>
              <h3>{plan.name}</h3>
              <p>{plan.text}</p>
              <strong>{plan.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section consultation">
        <div>
          <p className="eyebrow">Консультации и аудит</p>
          <h2>Можно начать с диагностики</h2>
          <p>
            Техническая консультация стоит от 3 000 ₽ / час. Аудит сайта и рекомендации
            по развитию - от 10 000 ₽. Дополнительные задачи обсуждаются индивидуально:
            цена зависит от объема, сложности и сроков.
          </p>
        </div>
        <a className="button primary" href="#contact">Получить оценку</a>
      </section>

      <section className="section contact" id="contact">
        <div className="contactText">
          <p className="eyebrow">Заявка на проект</p>
          <h2>Расскажите, что нужно собрать, настроить или привести в порядок</h2>
          <p>
            Напишите задачу, текущую ситуацию и желаемый срок. Я помогу выбрать
            правильный объем работ: от лендинга до полноценной автоматизации продаж.
          </p>
        </div>
        <form className="contactForm">
          <label>
            Имя
            <input name="name" placeholder="Как к вам обращаться" />
          </label>
          <label>
            Контакт
            <input name="contact" placeholder="Telegram, WhatsApp или email" />
          </label>
          <label>
            Что нужно сделать
            <textarea
              name="message"
              placeholder="Например: интернет-магазин с интеграцией МойСклад и оплатой"
              rows={5}
            />
          </label>
          <button className="button primary" type="submit">Отправить заявку</button>
        </form>
      </section>
    </main>
  );
}
