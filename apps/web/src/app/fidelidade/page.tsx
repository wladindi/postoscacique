import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/ui";

const steps = [
  {
    number: 1,
    title: "Abasteça em um Posto Cacique",
    subtitle: "Qualquer abastecimento conta"
  },
  {
    number: 2,
    title: "Acumule pontos automaticamente",
    subtitle: "Sem fazer nada além de abastecer"
  },
  {
    number: 3,
    title: "Resgate descontos e vantagens exclusivas",
    subtitle: "Escolha entre +100 ofertas imperdíveis"
  }
];

function GooglePlayIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="36"
      viewBox="0 0 24 24"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198 2.491 1.442c.69.398.69 1.395 0 1.793l-2.491 1.442-2.795-2.795 2.795-2.795zM5.864 2.658 16.802 8.99l-2.302 2.302L5.865 2.658z" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="41"
      viewBox="0 0 24 24"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export default function FidelidadePage() {
  return (
    <>
      <SiteHeader activeLabel="Fidelidade" />
      <main>
        <section className="fid-hero">
          <div className="fid-hero__bg" aria-hidden="true" />
          <div className="container fid-hero__inner">
            <Reveal className="fid-hero__content" variant="left">
              <p className="fid-hero__kicker">CACIQUE FIDELIDADE</p>
              <h1 className="fid-hero__title">
                Abasteça, pontue e transforme cada parada em{" "}
                <span>vantagem</span>
              </h1>
              <p className="fid-hero__desc">
                O Cacique Fidelidade é o programa de pontos da Rede Cacique que
                transforma o seu abastecimento em benefícios reais no dia a dia.
              </p>
              <div className="fid-hero__highlight">
                <p>
                  Aqui, cada litro abastecido vira pontos.
                  <br />
                  E cada ponto vira desconto, vantagem e economia para você.
                </p>
              </div>
              <a className="fid-hero__cta" href="#comece-agora">
                Baixe o app Cacique Fidelidade
                <ArrowRight aria-hidden="true" size={16} strokeWidth={2.5} />
              </a>
            </Reveal>
            <Reveal className="fid-hero__mockup" delay={120} variant="right">
              <Image
                alt="App Cacique Fidelidade"
                className="fid-hero__mockup-img"
                height={580}
                priority
                src="/assets/fidelidade/app-mockup.webp"
                width={780}
              />
            </Reveal>
          </div>
        </section>

        <section className="fid-why">
          <div className="container">
            <Reveal variant="up">
              <h2 className="fid-why__title">Por que fazer parte?</h2>
              <p className="fid-why__desc">
                Sua rotina começa a trabalhar a seu favor. Na Rede Cacique,
                você não abastece apenas você ganha. Com o Cacique Fidelidade,
                você acumula pontos e resgata descontos em produtos e
                benefícios nos Postos da Rede Cacique, lojas Tem Conveniência
                e serviços de parceiros.
              </p>
              <div className="fid-why__highlight">
                <p>
                  São mais de 100 itens com descontos exclusivos, pensados
                  para gerar economia de verdade.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="fid-how">
          <div className="container">
            <div className="fid-how__panel">
              <h2 className="fid-how__title">Como funciona?</h2>
              <div className="fid-how__steps">
                {steps.map((step, idx) => (
                  <Reveal delay={idx * 110} key={step.number} variant="up">
                    <article className="fid-step">
                      <span className="fid-step__badge">{step.number}</span>
                      <div className="fid-step__content">
                        <p className="fid-step__title">{step.title}</p>
                        <p className="fid-step__subtitle">{step.subtitle}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
              <span className="fid-how__divider" aria-hidden="true" />
              <p className="fid-how__footer">
                Sem cartão físico. Sem burocracia. Tudo na palma da sua mão.
              </p>
            </div>
          </div>
        </section>

        <section className="fid-diff">
          <div className="container">
            <h2 className="fid-diff__title">DIFERENCIAL CACIQUE</h2>
            <p className="fid-diff__subtitle">
              │ Fidelidade que gera retorno real │
            </p>
          </div>
          <div className="fid-diff__banner">
            <p>
              O programa foi pensado pra quem está na estrada e no dia a dia
            </p>
          </div>
          <div className="container">
            <Image
              alt="Motoristas, Caminhoneiros, Clientes Locais e Frotistas"
              className="fid-diff__icons"
              height={300}
              src="/assets/fidelidade/icons-audiences.png"
              width={1600}
            />
            <p className="fid-diff__footer">
              Aqui, fidelidade não é promessa. É benefício contínuo, prático e
              acessível em toda a rede.
            </p>
          </div>
        </section>

        <section className="fid-cta" id="comece-agora">
          <div className="container">
            <h2 className="fid-cta__title">COMECE AGORA</h2>
            <p className="fid-cta__desc">
              Comece agora. Baixe o app Cacique Fidelidade, cadastre-se
              gratuitamente e comece a pontuar já no próximo abastecimento.
            </p>
            <div className="fid-cta__stores">
              <a
                className="fid-store"
                href="https://play.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                <GooglePlayIcon />
                <span>
                  Disponível no
                  <br />
                  <strong>Google Play</strong>
                </span>
              </a>
              <a
                className="fid-store"
                href="https://www.apple.com/app-store/"
                rel="noreferrer"
                target="_blank"
              >
                <AppStoreIcon />
                <span>
                  Disponível na
                  <br />
                  <strong>App Store</strong>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
