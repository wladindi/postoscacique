import {
  BadgePercent,
  ClipboardCheck,
  Headphones,
  MonitorCheck,
  ShieldCheck,
  Truck,
  WalletCards
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  BrandPromosCarousel,
  ButtonLink,
  Card,
  Reveal,
  Section
} from "@/components/ui";
import { FleetContactForm } from "@/features/contact/fleet-contact-form";

const fleetBenefits = [
  {
    icon: BadgePercent,
    text: "Reduza até 25% no custo de combustível da sua operação com condições exclusivas para frotas."
  },
  {
    icon: MonitorCheck,
    text: "Plataforma digital exclusiva para acompanhar consumo, notas fiscais e histórico de abastecimento em tempo real."
  },
  {
    icon: ClipboardCheck,
    text: "Processo de abastecimento descomplicado, sem burocracia, para que sua operação não pare."
  },
  {
    icon: Headphones,
    text: "Consultor exclusivo para sua empresa, com suporte humanizado e personalizado para cada operação."
  },
  {
    icon: Truck,
    text: "Integração com Rede Frota e Valeus soluções de pagamento e gestão para transportadoras e empresas com frota própria."
  },
  {
    icon: ShieldCheck,
    text: "Procedência garantida com testes de qualidade em cada carga. Segurança para o seu motor e para a sua operação."
  }
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <Image
            alt="Frentista Cacique no posto"
            className="home-hero__img"
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 200vw, (max-width: 980px) 150vw, 1920px"
            src="/assets/home/gallery-team.png"
          />
          <div className="home-hero__overlay" aria-hidden="true" />
          <div className="container home-hero__content">
            <p className="home-hero__badge">△ DESDE 1970 NO NORDESTE</p>
            <h1>
              Somos referência em abastecimento{" "}
              <span>com quase 6 décadas de excelência!</span>
            </h1>
            <div className="home-hero__actions">
              <ButtonLink href="/postos-cacique">NOSSOS POSTOS →</ButtonLink>
              <ButtonLink href="#frotas" variant="dark">
                SEJA UM FRANQUEADO →
              </ButtonLink>
            </div>
            <p className="home-hero__lead">
              Mais de 60 postos nas principais rotas do Nordeste, com
              combustível testado e estrutura completa para sua jornada.
            </p>
            <div
              aria-label="Números da Rede Cacique"
              className="home-hero__stats"
            >
              <strong>
                60+
                <span>Unidades</span>
              </strong>
              <strong>
                4
                <span>Estados</span>
              </strong>
              <strong>
                6+
                <span>Décadas de história</span>
              </strong>
            </div>
          </div>
        </section>

        <section className="brand-promos">
          <div className="container">
            <Reveal variant="up">
              <BrandPromosCarousel>
                <Link
                  aria-label="Tem Conveniência"
                  className="brand-promo brand-promo--tem"
                  href="/tem-conveniencia"
                >
                  <Image
                    alt="Lojas Tem Conveniência 24h"
                    className="brand-promo__bg"
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                    src="/assets/home/card-tem.png"
                  />
                </Link>

                <Link
                  aria-label="Cacique Fidelidade"
                  className="brand-promo brand-promo--fidelidade"
                  href="/fidelidade"
                >
                  <Image
                    alt="Cacique Fidelidade — pontos que te levam mais longe"
                    className="brand-promo__bg"
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                    src="/assets/home/card-fidelidade.png"
                  />
                </Link>

                <Link
                  aria-label="Cacique Lubrificantes"
                  className="brand-promo brand-promo--lub"
                  href="/cacique-lub"
                >
                  <Image
                    alt="Cacique Lub — o melhor desempenho para o seu motor"
                    className="brand-promo__bg"
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                    src="/assets/home/card-lub.png"
                  />
                </Link>
              </BrandPromosCarousel>
            </Reveal>
          </div>
        </section>

        <Section className="network-section" tone="white">
          <div className="network-section__brand network-section__brand--left">
            <span>Rede</span>
            CACIQUE
          </div>
          <div className="network-section__brand network-section__brand--right">
            <span>Rede</span>
            CACIQUE
          </div>
          <div className="network-section__grid">
            <Reveal variant="left">
              <div className="network-section__hero">
                <Image
                  alt="Foto aérea Posto Cacique"
                  height={397}
                  sizes="(max-width: 980px) 100vw, 600px"
                  src="/assets/home/posto-aereo.png"
                  width={600}
                />
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <article>
                <h2>REDE CACIQUE</h2>
                <p>
                  Há quase 6 décadas, impulsionando quem move o Nordeste com
                  qualidade, confiança e eficiência.
                </p>
                <p>
                  Com mais de 60 postos estrategicamente distribuídos, a Rede
                  Cacique conta com uma estrutura completa que inclui 16 lojas
                  de conveniência, 26 unidades de autoatendimento e 2
                  distribuidoras de lubrificantes e produtos automotivos,
                  garantindo capilaridade, agilidade e soluções integradas para
                  pessoas, empresas e frotas.
                </p>
                <p>
                  Presente nas principais rotas do Norte e Nordeste, atuamos
                  diretamente no suporte ao transporte e ao escoamento da
                  produção agrícola na MATOPIBA, conectando caminhos,
                  impulsionando negócios e garantindo resultados.
                </p>
              </article>
            </Reveal>
          </div>
        </Section>

        <section className="fleet-section" id="frotas">
          <div className="fleet-section__overlay">
            <div className="container">
              <Reveal variant="up">
                <div className="fleet-section__intro">
                  <p>CACIQUE FROTAS</p>
                  <h2>
                    Abastecimento deixa de ser custo e passa a ser estratégia.
                  </h2>
                  <p>
                    O setor comercial da Rede Cacique desenvolve soluções
                    estratégicas de abastecimento para empresas, frotistas e
                    transportadores que buscam eficiência, controle e
                    previsibilidade. No modelo B2B, nossa equipe trabalha lado
                    a lado com cada cliente para entender a realidade
                    operacional e construir condições comerciais personalizadas
                    que vão além do preço e geram resultado no dia a dia.
                  </p>
                  <p>
                    Mais do que negociar combustível, a Comercial Cacique
                    entrega gestão, segurança e inteligência aplicada ao
                    abastecimento
                  </p>
                </div>
              </Reveal>

              <div className="fleet-benefits">
                {fleetBenefits.map((benefit, idx) => {
                  const Icon = benefit.icon;

                  return (
                    <Reveal
                      delay={idx * 90}
                      key={benefit.text}
                      variant="up"
                    >
                      <Card className="fleet-benefits__card">
                        <Icon aria-hidden="true" size={34} strokeWidth={2.4} />
                        <p>{benefit.text}</p>
                      </Card>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <Section className="fleet-form-section" tone="white">
          <FleetContactForm />
        </Section>

        <Section className="business-section" tone="red">
          <div className="business-section__grid">
            <Card className="business-section__card">
              <p>REDE CACIQUE</p>
              <h2>ESTRUTURA QUE MOVE SEU NEGÓCIO</h2>
              <p>
                Mais de 55 anos abastecendo o Nordeste com combustível de
                qualidade, conveniência e soluções completas para quem precisa
                de um parceiro de verdade.
              </p>
            </Card>
            <div className="business-section__links">
              {[
                "Posto Cacique",
                "Cacique Lub",
                "Tem Conveniência",
                "Cacique Frotas",
                "Fidelidade"
              ].map((item) => (
                <a href="#" key={item}>
                  <WalletCards aria-hidden="true" size={14} />
                  {item}
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
