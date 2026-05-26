import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/ui";

export default function CaciqueLubPage() {
  return (
    <>
      <SiteHeader activeLabel="Cacique Lub" />
      <main>
        <section className="lub-hero">
          <div className="lub-hero__bg" aria-hidden="true" />
          <div className="lub-hero__overlay" aria-hidden="true" />
          <div className="container lub-hero__inner">
            <Reveal className="lub-hero__content" variant="left">
              <p className="lub-hero__kicker">CACIQUE LUB</p>
              <h1 className="lub-hero__title">
                Tudo o que você precisa, em um só lugar
              </h1>
              <p className="lub-hero__desc">
                Cacique Lubrificantes é distribuidora oficial da Rede Cacique e
                atua desde 1998, especializada em lubrificantes, aditivos,
                fluidos automotivos, peças e soluções para o mercado automotivo
                e diesel. Com logística eficiente, portfólio assertivo e forte
                presença no ponto de venda. Temos 2 filiais estratégicas, com
                atuação no Piauí e Maranhão.
              </p>
            </Reveal>
            <Reveal className="lub-hero__logo" delay={140} variant="right">
              <span className="lub-hero__logo-brand">CACIQUE</span>
              <span className="lub-hero__logo-sub">LUBRIFICANTES</span>
            </Reveal>
          </div>
        </section>

        <section className="lub-b2b">
          <div className="lub-b2b__bg" aria-hidden="true" />
          <div className="container">
            <Reveal variant="up">
              <h2 className="lub-b2b__title">
                Atendemos clientes B2B de diferentes perfis, incluindo:
              </h2>
            </Reveal>
            <Reveal delay={120} variant="zoom">
              <Image
                alt="Postos de combustíveis, Autopeças e motopeças, Frotistas e Empresas de Transporte, Agronegócio e Operações Diesel"
                className="lub-b2b__composite"
                height={420}
                src="/assets/cacique-lub/cards-composite.webp"
                width={1450}
              />
            </Reveal>
            <Reveal className="lub-b2b__actions" delay={220} variant="up">
              <a className="lub-b2b__cta" href="/contato">
                Entrar em contato agora
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
