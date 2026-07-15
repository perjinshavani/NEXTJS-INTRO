import data from "@/data/characters.json";
import { notFound } from "next/navigation";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return {
    title: id,
  };
}



export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const idNr = Number(id);

  const planet = data.characters.find(
    (planet) => planet.id === idNr
  );

  if (!planet) {
    notFound();
  }

  return (
    <main style={{ paddingTop: "100px" }}>
      <h1>{planet.name}</h1>
      <p>{planet.role}</p>
      <img src={planet.image} alt={planet.name} />
    </main>
  );
}


