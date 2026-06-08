import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails, serviceDetailsBySlug } from "../data";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetailsBySlug[slug];

  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: `${service.name}: ${service.intro} Стоимость ${service.price}.`,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: `${service.name} | Цифровая мастерская`,
      description: service.intro,
      url: `/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetailsBySlug[slug];

  if (!service) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    serviceType: service.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      description: service.price
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="serviceHero">
        <nav className="nav" aria-label="Навигация по сайту">
          <Link className="brand" href="/" aria-label="На главную">
            <span className="brandMark">CM</span>
            <span>Цифровая мастерская</span>
          </Link>
          <div className="navLinks">
            <Link href="/">Главная</Link>
            <Link href="/#services">Услуги</Link>
            <Link href="/works">Работы</Link>
            <Link href="/#contact">Заявка</Link>
          </div>
        </nav>

        <div className="serviceHeroInner">
          <p className="eyebrow">{service.category}</p>
          <h1>{service.headline}</h1>
          <p className="lead">{service.intro}</p>
          <div className="serviceHeroMeta">
            <span>Стоимость</span>
            <strong>{service.price}</strong>
          </div>
          <div className="heroActions">
            <Link className="button primary" href="/#contact">Обсудить задачу</Link>
            <Link className="button secondary" href="/#services">Все услуги</Link>
          </div>
        </div>
      </section>

      <section className="section serviceDetail">
        <aside className="serviceAside">
          <p className="eyebrow">Подходит для</p>
          <ul>
            {service.goodFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <div className="serviceContent">
          <section className="detailBlock">
            <p className="eyebrow">Что может входить</p>
            <h2>Ключевые блоки и элементы</h2>
            <div className="detailGrid">
              {service.keyBlocks.map((item) => (
                <article className="detailCard" key={item}>
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detailBlock">
            <p className="eyebrow">Какие работы проводятся</p>
            <h2>Что делается в рамках услуги</h2>
            <ol className="workList">
              {service.works.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="detailBlock">
            <p className="eyebrow">За что такая сумма</p>
            <h2>Цена складывается не только из видимой картинки</h2>
            <div className="reasonGrid">
              {service.priceReason.map((item) => (
                <article className="reasonCard" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="resultBlock">
            <p className="eyebrow">Итог</p>
            <h2>{service.result}</h2>
            <Link className="button primary" href="/#contact">Получить оценку</Link>
          </section>
        </div>
      </section>
    </main>
  );
}
