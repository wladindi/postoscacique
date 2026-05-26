export type Station = {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  services: string[];
  mapUrl: string;
};

type StationInput = Omit<Station, "mapUrl">;

const stationInputs: StationInput[] = [
  {
    id: "posto-1",
    name: "Posto 1",
    city: "Teresina",
    state: "PI",
    address: "Av. Miguel Rosa",
    services: ["Combustível", "Conveniência", "Troca de óleo"]
  },
  {
    id: "posto-2",
    name: "Posto 2",
    city: "Teresina",
    state: "PI",
    address: "Av. Presidente Kennedy, 7344",
    services: ["Combustível", "Conveniência", "Lavagem"]
  },
  {
    id: "posto-3",
    name: "Posto 3",
    city: "Teresina",
    state: "PI",
    address: "Av. Miguel Rosa, 5769",
    services: ["Combustível", "Conveniência"]
  },
  {
    id: "posto-4",
    name: "Posto 4",
    city: "Teresina",
    state: "PI",
    address: "Av. Miguel Rosa, 6855",
    services: ["Combustível", "Conveniência", "Troca de óleo"]
  },
  {
    id: "posto-5",
    name: "Posto 5",
    city: "Teresina",
    state: "PI",
    address: "Av. Miguel Rosa, 5775",
    services: ["Combustível", "Conveniência", "Calibragem"]
  },
  {
    id: "posto-6",
    name: "Posto 6",
    city: "Teresina",
    state: "PI",
    address: "Rua Rui Barbosa, 1662",
    services: ["Combustível", "Conveniência"]
  },
  {
    id: "posto-7",
    name: "Posto 7",
    city: "Teresina",
    state: "PI",
    address: "Av. Duque de Caxias, 2458",
    services: ["Combustível", "Conveniência", "Restaurante"]
  },
  {
    id: "posto-8",
    name: "Posto 8",
    city: "Teresina",
    state: "PI",
    address: "Av. Universitária, 1403",
    services: ["Combustível", "Conveniência", "24 horas"]
  },
  {
    id: "posto-9",
    name: "Posto 9",
    city: "Teresina",
    state: "PI",
    address: "Rua Coelho Rodrigues, 1820",
    services: ["Combustível", "Conveniência", "Farmácia"]
  },
  {
    id: "posto-10",
    name: "Posto 10",
    city: "Teresina",
    state: "PI",
    address: "Rua Anísio de Abreu, 484",
    services: ["Combustível", "Conveniência"]
  },
  {
    id: "posto-11",
    name: "Posto 11",
    city: "Timon",
    state: "MA",
    address: "Av. Piauí, 1000",
    services: ["Combustível", "Conveniência", "Troca de óleo"]
  },
  {
    id: "posto-12",
    name: "Posto 12",
    city: "Timon",
    state: "MA",
    address: "Rodovia BR 316, KM 9",
    services: ["Combustível", "Conveniência", "Restaurante"]
  },
  {
    id: "posto-13",
    name: "Posto 13",
    city: "Caxias",
    state: "MA",
    address: "Rod. BR 316, 2421",
    services: ["Combustível", "Conveniência", "Lavagem"]
  },
  {
    id: "posto-14",
    name: "Posto 14",
    city: "Imperatriz",
    state: "MA",
    address: "Av. Bernardo Sayão, 2271",
    services: ["Combustível", "Conveniência", "24 horas"]
  },
  {
    id: "posto-15",
    name: "Posto 15",
    city: "Balsas",
    state: "MA",
    address: "Av. Governador Luiz Rocha",
    services: ["Combustível", "Conveniência", "Restaurante"]
  },
  {
    id: "posto-16",
    name: "Posto 16",
    city: "Parnaíba",
    state: "PI",
    address: "Av. São Sebastião, 1022",
    services: ["Combustível", "Conveniência"]
  },
  {
    id: "posto-17",
    name: "Posto 17",
    city: "Floriano",
    state: "PI",
    address: "Av. Bucar Neto, 1027",
    services: ["Combustível", "Conveniência", "Lava jato"]
  },
  {
    id: "posto-18",
    name: "Posto 18",
    city: "Uruçuí",
    state: "PI",
    address: "Av. José Cavalcante, 100",
    services: ["Combustível", "Conveniência", "Agro"]
  },
  {
    id: "posto-19",
    name: "Posto 19",
    city: "São Luís",
    state: "MA",
    address: "Av. Jerônimo de Albuquerque",
    services: ["Combustível", "Conveniência", "Farmácia"]
  },
  {
    id: "posto-20",
    name: "Posto 20",
    city: "Marabá",
    state: "PA",
    address: "Rod. Transamazônica, KM 12",
    services: ["Combustível", "Conveniência", "24 horas"]
  },
  {
    id: "posto-21",
    name: "Posto 21",
    city: "Belém",
    state: "PA",
    address: "Av. Almirante Barroso, 4100",
    services: ["Combustível", "Conveniência"]
  },
  {
    id: "posto-22",
    name: "Posto 22",
    city: "Petrolina",
    state: "PE",
    address: "Av. Sete de Setembro, 2220",
    services: ["Combustível", "Conveniência", "Restaurante"]
  },
  {
    id: "posto-23",
    name: "Posto 23",
    city: "Recife",
    state: "PE",
    address: "Av. Caxangá, 1800",
    services: ["Combustível", "Conveniência", "Troca de óleo"]
  },
  {
    id: "posto-24",
    name: "Posto 24",
    city: "Teresina",
    state: "PI",
    address: "Av. Frei Serafim, 2641",
    services: ["Combustível", "Conveniência", "Restaurante"]
  }
];

function createGoogleMapsUrl(station: StationInput) {
  const query = [
    "Rede Cacique",
    station.name,
    station.address,
    `${station.city} - ${station.state}`,
    "Brasil"
  ].join(", ");

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

export const stations: Station[] = stationInputs.map((station) => ({
  ...station,
  mapUrl: createGoogleMapsUrl(station)
}));
