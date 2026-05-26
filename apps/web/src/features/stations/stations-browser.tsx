"use client";

import { Fuel, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Station } from "@/features/stations/stations.data";

const stateFilters = ["Todos", "PI", "MA", "PA", "PE"];

const serviceFilters = [
  "Todos",
  "Conveniência",
  "Troca de óleo",
  "Restaurante",
  "24 horas"
];

type StationsBrowserProps = {
  stations: Station[];
};

export function StationsBrowser({ stations }: StationsBrowserProps) {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("Todos");
  const [service, setService] = useState("Todos");

  const filteredStations = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return stations.filter((station) => {
      const matchesState = state === "Todos" ? true : station.state === state;
      const matchesService =
        service === "Todos" ? true : station.services.includes(service);
      const matchesSearch = normalizedSearch
        ? [station.name, station.city, station.state, station.address]
            .join(" ")
            .toLowerCase()
            .includes(normalizedSearch)
        : true;

      return matchesState && matchesService && matchesSearch;
    });
  }, [search, service, state, stations]);

  return (
    <section className="stations-directory">
      <div className="container">
        <div className="stations-directory__heading">
          <h2>Encontre um posto perto de você</h2>
          <label className="stations-search">
            <Search aria-hidden="true" size={15} />
            <input
              aria-label="Buscar por bairro, cidade, rua ou serviço"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por bairro, cidade, rua ou serviço..."
              type="search"
              value={search}
            />
          </label>
        </div>

        <FilterGroup
          active={state}
          items={stateFilters}
          label="Estados"
          onSelect={setState}
        />
        <FilterGroup
          active={service}
          items={serviceFilters}
          label="Serviços"
          onSelect={setService}
        />

        <p className="stations-directory__count">
          Mostrando {filteredStations.length} de {stations.length} postos
        </p>

        <div className="stations-grid">
          {filteredStations.map((station) => (
            <article className="station-card" key={station.id}>
              <div className="station-card__tags">
                {station.services.slice(0, 3).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <p className="station-card__meta">
                <strong>{station.name}</strong>
                {station.city} - {station.state}
              </p>
              <h3>{station.address}</h3>
              <p className="station-card__city">
                <MapPin aria-hidden="true" size={13} />
                {station.city}
              </p>
              <a
                className="station-card__map"
                href={station.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                Ver no mapa
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterGroup({
  active,
  items,
  label,
  onSelect
}: {
  active: string;
  items: string[];
  label: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div aria-label={label} className="station-filters">
      {items.map((item) => (
        <button
          className={item === active ? "is-active" : undefined}
          key={item}
          onClick={() => onSelect(item)}
          type="button"
        >
          {item === "Todos" ? (
            <>
              <Fuel aria-hidden="true" size={12} />
              Todos
            </>
          ) : (
            item
          )}
        </button>
      ))}
    </div>
  );
}
