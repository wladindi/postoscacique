import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Carousel, Reveal, type CarouselItem } from "@/components/ui";

const galleryItems: CarouselItem[] = [
  { src: "/assets/tem-conveniencia/gallery-beer.webp", alt: "Tem Beer" },
  {
    src: "/assets/tem-conveniencia/gallery-auto.webp",
    alt: "Tem Conveniência Autoatendimento"
  },
  { src: "/assets/tem-conveniencia/gallery-yellow.webp", alt: "Tem Conveniência" },
  {
    src: "/assets/tem-conveniencia/gallery-premium.webp",
    alt: "Tem Conveniência Premium"
  }
];

type TemVariant = "yellow" | "blue" | "red" | "brown";

type TemCard = {
  variant: TemVariant;
  logoSub: string;
  title: string;
  body: string[];
};

const cards: TemCard[] = [
  {
    variant: "yellow",
    logoSub: "CONVENIÊNCIA",
    title: "Tudo o que você precisa, em um só lugar",
    body: [
      "A versão mais completa da Tem Conveniência reúne variedade, agilidade e praticidade.",
      "Bebidas geladas, snacks, alimentação rápida e itens essenciais para o dia a dia.",
      "Perfeita para quem quer resolver tudo em uma única parada com conforto e rapidez."
    ]
  },
  {
    variant: "blue",
    logoSub: "CONVENIÊNCIA\nAUTOATENDIMENTO",
    title: "Entrou, escolheu, pagou, seguiu. Simples assim.",
    body: [
      "Pensada para quem valoriza agilidade, a Tem Autoatendimento permite uma experiência rápida e sem complicação.",
      "Você entra, escolhe, paga e segue viagem com total autonomia.",
      "Ideal para paradas rápidas, sem perder tempo."
    ]
  },
  {
    variant: "red",
    logoSub: "BEER",
    title: "Seu ponto de pausa para relaxar",
    body: [
      "A Tem Beer traz um ambiente mais descontraído, perfeito para quem quer fazer uma pausa de verdade.",
      "Bebidas geladas, petiscos e um espaço pensado para relaxar, encontrar amigos e aproveitar o momento."
    ]
  },
  {
    variant: "brown",
    logoSub: "CONVENIÊNCIA",
    title: "Uma experiência acima do comum",
    body: [
      "A versão premium une conveniência com experiência.",
      "Cafés especiais, produtos selecionados e um ambiente acolhedor que transforma sua parada em um momento de qualidade.",
      "Ideal para quem valoriza conforto, sofisticação e uma experiência diferenciada."
    ]
  }
];

function TemLogo({
  variant,
  sub,
  size = "md"
}: {
  variant: TemVariant;
  sub: string;
  size?: "md" | "lg";
}) {
  return (
    <div className={`tem-logo tem-logo--${variant} tem-logo--${size}`}>
      <div className="tem-logo__pixels" aria-hidden="true">
        <span className="tem-logo__pixel tem-logo__pixel--blue" />
        <span className="tem-logo__pixel tem-logo__pixel--yellow" />
        <span className="tem-logo__pixel tem-logo__pixel--green" />
        <span className="tem-logo__pixel tem-logo__pixel--red" />
      </div>
      <span className="tem-logo__text">tem</span>
      <span className="tem-logo__sub">
        {sub.split("\n").map((line, index) => (
          <span key={line + index}>{line}</span>
        ))}
      </span>
    </div>
  );
}

export default function TemConvenienciaPage() {
  return (
    <>
      <SiteHeader activeLabel="Tem Conveniência" />
      <main>
        <section className="tem-hero">
          <div className="tem-hero__bg" aria-hidden="true" />
          <div className="tem-hero__overlay" aria-hidden="true" />
          <div className="container tem-hero__inner">
            <div className="tem-hero__content">
              <p className="tem-hero__kicker">TEM CONVENIÊNCIA</p>
              <h1 className="tem-hero__title">
                Tudo o que você precisa,
                <br />
                em um só lugar
              </h1>
              <p className="tem-hero__desc">
                A versão mais completa da Tem Conveniência reúne variedade,
                <br />
                agilidade e praticidade.
                <br />
                Bebidas geladas, snacks, alimentação rápida e itens essenciais
                <br />
                para o dia a dia.
              </p>
              <p className="tem-hero__desc">
                Perfeita para quem quer resolver tudo em uma única parada com
                conforto e rapidez.
              </p>
            </div>
            <div className="tem-hero__art">
              <Image
                alt="Tem Conveniência"
                className="tem-hero__logo"
                height={474}
                priority
                src="/assets/tem-conveniencia/logo-tem-blob.png"
                width={500}
              />
            </div>
          </div>
        </section>

        <section className="tem-cards">
          <div className="container">
            <div className="tem-cards__grid">
              {cards.map((card, idx) => (
                <Reveal delay={idx * 110} key={card.variant} variant="up">
                  <article className={`tem-card tem-card--${card.variant}`}>
                    <div className="tem-card__logo">
                      <TemLogo variant={card.variant} sub={card.logoSub} />
                    </div>
                    <h2 className="tem-card__title">{card.title}</h2>
                    <div className="tem-card__body">
                      {card.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="tem-gallery">
          <div className="container">
            <Reveal variant="up">
              <div className="tem-gallery__carousel">
                <Carousel
                  ariaLabel="Galeria Tem Conveniência"
                  items={galleryItems}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
