
interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export default async function FuturamaPage({
  searchParams,
}: {
  searchParams: Promise<{
    limit?: string;
  }>;
}) {

  const { limit } = await searchParams;

  const limitNumber = Number(limit) || 12;

  const response = await fetch(
  `https://futuramaapi.com/api/characters?page=1&size=${limitNumber}`
);



  if (!response.ok) {
    throw new Error("Kunde inte hämta karaktärerna");
  }
const data = await response.json();
console.log(data);
const characters: Character[] = data.items;

 return (
  <main style={{ paddingTop: "100px" }}>
    <h1>Futurama</h1>

{characters.map((character) => (
  <div key={character.id}>
    <img
      src={character.image}
      alt={character.name}
      width="200"
    />

    <h2>{character.name}</h2>

    <p>{character.species}</p>

    <p>{character.status}</p>
  </div>
))}

  </main>
);
}