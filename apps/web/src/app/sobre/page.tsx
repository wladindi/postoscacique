import {
  BadgeCheck,
  CreditCard,
  Droplet,
  Fuel,
  Handshake,
  Layers,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Truck,
  Wrench
} from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/ui";

const solutions = [
  {
    icon: Fuel,
    title: "Postos de Combustível",
    description:
      "60 filiais garantindo abastecimento com qualidade testada antes da venda e presença estratégica nas principais rotas do Piauí, Maranhão e Pernambuco."
  },
  {
    icon: ShoppingBag,
    title: "Conveniência",
    description:
      "Lojas completas para tornar cada parada mais prática, rápida e eficiente."
  },
  {
    icon: Truck,
    title: "Soluções para Frotas",
    description:
      "Mais controle, eficiência e gestão inteligente para empresas e operações B2B."
  },
  {
    icon: Droplet,
    title: "Abastecimento em Escala (TRR)",
    description:
      "Soluções confiáveis para grandes operações, com foco no agronegócio e logística."
  },
  {
    icon: Wrench,
    title: "Cacique Lubrificantes",
    description:
      "Linha completa para desempenho e proteção de veículos e equipamentos industriais."
  },
  {
    icon: BadgeCheck,
    title: "Cacique Fidelidade",
    description:
      "Benefícios reais que transformam cada abastecimento em vantagem."
  },
  {
    icon: CreditCard,
    title: "Rota Pay",
    description:
      "Banco digital que facilita recebimento de troco de carta frete, pagamentos e dá mais controle financeiro."
  }
];

const states = [
  "Piauí",
  "Maranhão",
  "Pernambuco",
  "Bahia",
  "Tocantins",
  "Pará"
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Qualidade rigorosa",
    description: "Em todos os produtos, do combustível ao lubrificante."
  },
  {
    icon: Handshake,
    title: "Confiança construída",
    description: "Ao longo de décadas, com clientes, parceiros e equipes."
  },
  {
    icon: MapPin,
    title: "Presença regional",
    description: "Nas principais rotas do Norte e Nordeste do país."
  },
  {
    icon: Layers,
    title: "Soluções completas",
    description: "Para pessoas, empresas e operações de qualquer porte."
  },
  {
    icon: Target,
    title: "Compromisso com resultado",
    description: "Foco em eficiência operacional e crescimento sustentável."
  }
];

export default function SobrePage() {
  return (
    <>
      <SiteHeader activeLabel="Sobre nós" />
      <main>
        <section className="about-hero">
          <div className="about-hero__bg" aria-hidden="true" />
          <div className="about-hero__overlay" aria-hidden="true" />
          <div className="container about-hero__inner">
            <p className="about-hero__kicker">REDE CACIQUE</p>
            <h1 className="about-hero__title">
              Quase 60 anos movendo
              <br />
              pessoas, empresas e o
              <br />
              <span>desenvolvimento</span> do Brasil
            </h1>
            <p className="about-hero__desc">
              Um ecossistema completo que integra abastecimento, conveniência,
              distribuição e soluções para pessoas e empresas, com qualidade,
              confiança e presença nas principais rotas do Norte e Nordeste do
              Brasil.
            </p>
            <a className="about-hero__cta" href="#solucoes">
              Conheça nossas soluções
            </a>
          </div>
        </section>

        <section className="about-who">
          <div className="container">
            <Reveal variant="up">
              <p className="section-kicker about-who__kicker">QUEM SOMOS</p>
              <h2 className="about-who__title">
                Muito além de
                <br />
                postos de combustível
              </h2>
              <div className="about-who__copy">
                <p>
                  Há quase seis décadas, a Rede Cacique constrói uma trajetória
                  sólida baseada em confiança, qualidade e compromisso com quem
                  está em movimento.
                </p>
                <p>
                  Evoluímos para nos tornar um grupo completo, que conecta
                  diferentes soluções para facilitar a jornada de pessoas e
                  empresas — da estrada à gestão.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="about-solutions" id="solucoes">
          <div className="container">
            <Reveal variant="up">
              <p className="section-kicker about-solutions__kicker">
                NOSSAS SOLUÇÕES
              </p>
              <h2 className="about-solutions__title">
                Um ecossistema completo para
                <br />
                quem precisa ir além do básico
              </h2>
            </Reveal>
            <div className="about-solutions__grid">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal delay={idx * 70} key={item.title} variant="up">
                    <article className="about-solution">
                      <span className="about-solution__icon">
                        <Icon aria-hidden="true" size={26} strokeWidth={2.2} />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <Reveal variant="up">
              <p className="about-solutions__footer">
                Tudo o que você precisa, em um só lugar.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="about-presence">
          <div className="container">
            <Reveal variant="up">
              <p className="section-kicker about-presence__kicker">
                PRESENÇA REGIONAL
              </p>
              <h2 className="about-presence__title">
                Onde o Brasil
                <br />
                se movimenta
              </h2>
              <p className="about-presence__desc">
                A Rede Cacique está presente em pontos estratégicos que
                impulsionam o transporte, o comércio e o desenvolvimento
                regional.
              </p>
            </Reveal>
            <div className="about-presence__panel">
              <Reveal className="about-presence__stat" variant="left">
                <Sparkles aria-hidden="true" size={24} strokeWidth={2.4} />
                <strong>6 estados</strong>
                <span>atendidos</span>
              </Reveal>
              <Reveal className="about-presence__list" delay={120} variant="right">
                {states.map((state) => (
                  <span className="about-presence__chip" key={state}>
                    <MapPin aria-hidden="true" size={14} strokeWidth={2.4} />
                    {state}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="about-differential">
          <div className="container">
            <Reveal variant="up">
              <p className="section-kicker about-differential__kicker">
                NOSSO DIFERENCIAL
              </p>
              <h2 className="about-differential__title">
                O que nos move
                <br />
                há quase 60 anos
              </h2>
            </Reveal>
            <div className="about-differential__grid">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal delay={idx * 80} key={item.title} variant="up">
                    <article className="about-pillar">
                      <span className="about-pillar__icon">
                        <Icon aria-hidden="true" size={26} strokeWidth={2.2} />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-closing">
          <div className="container">
            <Reveal variant="up">
              <p className="about-closing__lead">
                Seguimos avançando com o mesmo propósito que nos trouxe até aqui:
              </p>
              <h2 className="about-closing__title">
                Conectar caminhos,
                <br />
                gerar valor e crescer junto com
                <br />
                <span>quem move o Brasil.</span>
              </h2>
              <div className="about-closing__actions">
                <a className="about-closing__btn about-closing__btn--primary" href="/contato">
                  Fale com a gente
                </a>
                <a className="about-closing__btn about-closing__btn--ghost" href="/postos-cacique">
                  Conheça nossos postos
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
