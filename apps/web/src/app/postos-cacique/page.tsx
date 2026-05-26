import { Bolt, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { stations } from "@/features/stations/stations.data";
import { StationsBrowser } from "@/features/stations/stations-browser";

const strengths = [
  { icon: ShieldCheck, text: "SEGURANÇA" },
  { icon: Sparkles, text: "COMBUSTÍVEL DE QUALIDADE" },
  { icon: Headphones, text: "ATENDIMENTO HUMANIZADO" },
  { icon: Bolt, text: "PRATICIDADE" }
];

export default function PostosCaciquePage() {
  return (
    <>
      <SiteHeader activeLabel="Posto Cacique" />
      <main>
        <section className="stations-hero">
          <div className="container">
            <p>POSTOS CACIQUE</p>
            <h1>
              COM VOCÊ EM TODOS OS
              <br />
              CAMINHOS
            </h1>
            <div className="stations-hero__copy">
              <p>
                Com mais de 60 filiais estrategicamente localizadas para melhor
                atender você.
              </p>
              <p>
                A Rede Cacique está presente nos principais corredores
                logísticos, urbanos e rodoviários, oferecendo muito mais do que
                abastecimento.
              </p>
              <p>
                Do motorista urbano ao caminhoneiro que cruza longas
                distâncias, entregamos:
              </p>
            </div>
            <div className="stations-hero__strengths">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <span key={item.text}>
                    <Icon aria-hidden="true" size={17} strokeWidth={2.5} />
                    {item.text}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
        <StationsBrowser stations={stations} />
      </main>
      <SiteFooter />
    </>
  );
}
