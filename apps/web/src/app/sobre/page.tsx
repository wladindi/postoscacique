import { Award, Building2, MapPin, Users } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AssetSlot, Reveal } from "@/components/ui";

const milestones = [
  {
    year: "1970",
    title: "O começo",
    description:
      "A Rede Cacique nasce no Nordeste com o primeiro posto de combustíveis, dando o primeiro passo de uma jornada que dura quase 6 décadas."
  },
  {
    year: "1998",
    title: "Cacique Lubrificantes",
    description:
      "Inauguração da divisão de lubrificantes, atendendo o mercado automotivo e diesel com filiais no Piauí e Maranhão."
  },
  {
    year: "Hoje",
    title: "Rede consolidada",
    description:
      "Mais de 60 postos, 16 lojas Tem Conveniência, 26 unidades de autoatendimento e 2 distribuidoras em 4 estados."
  }
];

const numbers = [
  { value: "60+", label: "Postos na rede" },
  { value: "55+", label: "Anos de história" },
  { value: "4", label: "Estados atendidos" },
  { value: "16", label: "Lojas de conveniência" }
];

const values = [
  {
    icon: Award,
    title: "Qualidade",
    description:
      "Combustível testado e procedência garantida em cada carga que chega à rede."
  },
  {
    icon: Users,
    title: "Atendimento humano",
    description:
      "Equipes treinadas e parcerias duradouras com motoristas, frotistas e clientes locais."
  },
  {
    icon: Building2,
    title: "Estrutura completa",
    description:
      "Postos, conveniência, lubrificantes e soluções B2B em um único grupo."
  },
  {
    icon: MapPin,
    title: "Presença regional",
    description:
      "Estamos nas principais rotas do Norte e Nordeste, conectando caminhos da MATOPIBA ao litoral."
  }
];

const operations = [
  {
    name: "Posto Cacique",
    description: "Mais de 60 unidades estrategicamente distribuídas."
  },
  {
    name: "Cacique Lub",
    description: "Distribuidora oficial de lubrificantes e peças, desde 1998."
  },
  {
    name: "Tem Conveniência",
    description: "Lojas próprias, autoatendimento e Tem Beer espalhadas pela rede."
  },
  {
    name: "Cacique Frotas",
    description: "Soluções B2B de abastecimento, gestão e pagamento para empresas."
  },
  {
    name: "Cacique Fidelidade",
    description: "Programa de pontos com mais de 100 itens de desconto exclusivo."
  }
];

export default function SobrePage() {
  return (
    <>
      <SiteHeader activeLabel="Sobre" />
      <main>
        <section className="about-hero">
          <div className="about-hero__bg" aria-hidden="true" />
          <div className="about-hero__overlay" aria-hidden="true" />
          <div className="container about-hero__inner">
            <p className="about-hero__kicker">SOBRE A REDE CACIQUE</p>
            <h1 className="about-hero__title">
              Há quase 6 décadas
              <br />
              movendo o Nordeste
            </h1>
            <p className="about-hero__desc">
              Uma rede construída no chão da estrada, com gente daqui, atendendo
              quem vive em movimento. Da nossa primeira bomba em 1970 ao grupo
              integrado de hoje, mantemos o mesmo compromisso: combustível
              testado, atendimento humano e estrutura completa para cada
              jornada.
            </p>
          </div>
        </section>

        <section className="about-numbers">
          <div className="container">
            <div className="about-numbers__grid">
              {numbers.map((item, idx) => (
                <Reveal delay={idx * 90} key={item.label} variant="up">
                  <div className="about-number">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-story">
          <div className="container about-story__inner">
            <Reveal className="about-story__media" variant="left">
              <AssetSlot
                label="Foto histórica Rede Cacique"
                ratio="portrait"
              />
            </Reveal>
            <Reveal className="about-story__content" delay={120} variant="right">
              <p className="section-kicker">NOSSA HISTÓRIA</p>
              <h2 className="about-story__title">
                Uma história escrita
                <br />
                quilômetro a quilômetro
              </h2>
              <p className="about-story__lead">
                A trajetória da Rede Cacique se confunde com o desenvolvimento
                do transporte e do agronegócio no Norte e Nordeste. Crescemos
                junto com quem move o país.
              </p>
              <ol className="about-timeline">
                {milestones.map((item) => (
                  <li className="about-timeline__item" key={item.year}>
                    <div className="about-timeline__marker">{item.year}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="about-values">
          <div className="container">
            <p className="section-kicker about-values__kicker">
              O QUE NOS MOVE
            </p>
            <h2 className="about-values__title">
              Valores que sustentam
              <br />a rede
            </h2>
            <div className="about-values__grid">
              {values.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal delay={idx * 90} key={item.title} variant="up">
                    <article className="about-value">
                      <span className="about-value__icon">
                        <Icon
                          aria-hidden="true"
                          size={28}
                          strokeWidth={2.2}
                        />
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

        <section className="about-operations">
          <div className="container">
            <p className="section-kicker about-operations__kicker">
              ESTRUTURA INTEGRADA
            </p>
            <h2 className="about-operations__title">
              Tudo conectado em
              <br />
              uma única rede
            </h2>
            <div className="about-operations__grid">
              {operations.map((item, idx) => (
                <Reveal delay={idx * 70} key={item.name} variant="up">
                  <article className="about-operation">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="container">
            <h2 className="about-cta__title">
              Quer fazer parte
              <br />
              da Rede Cacique?
            </h2>
            <p className="about-cta__desc">
              Trabalhe conosco, seja um franqueado ou converse com a área
              comercial. Estamos sempre prontos para conectar quem move o
              Nordeste.
            </p>
            <div className="about-cta__actions">
              <a className="about-cta__btn about-cta__btn--primary" href="/contato">
                Fale com a gente
              </a>
              <a
                className="about-cta__btn about-cta__btn--ghost"
                href="/postos-cacique"
              >
                Conheça nossos postos
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
