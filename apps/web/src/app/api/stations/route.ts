import { NextResponse } from "next/server";
import { stations } from "@/features/stations/stations.data";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state")?.trim().toUpperCase();
  const search = searchParams.get("search")?.trim();
  const service = searchParams.get("service")?.trim();

  const filteredStations = stations.filter((station) => {
    const matchesState = state ? station.state === state : true;
    const matchesService = service
      ? station.services.some((item) => normalize(item) === normalize(service))
      : true;
    const matchesSearch = search
      ? [station.name, station.city, station.address, ...station.services]
          .join(" ")
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .toLowerCase()
          .includes(normalize(search))
      : true;

    return matchesState && matchesService && matchesSearch;
  });

  return NextResponse.json({
    ok: true,
    stations: filteredStations
  });
}
