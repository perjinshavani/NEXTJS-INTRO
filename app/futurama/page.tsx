
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
  <main className="bg-black min-h-screen pt-24 p-8">
    <h1 className="mb-8 text-center text-4xl font-bold text-white">
      Futurama
    </h1>

    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {characters.map((character) => (
        <article
          key={character.id}
          className="rounded-xl bg-zinc-900 p-4 text-white"
        >
          <img
            src={character.image}
            alt={character.name}
            className="h-64 w-full rounded-lg object-cover"
          />

          <h2 className="mt-4 text-2xl font-bold">{character.name}</h2>

          <p>{character.species}</p>

          <p>{character.status}</p>
        </article>
      ))}
    </section>
  </main>
);
}