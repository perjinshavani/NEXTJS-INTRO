


export default async function FuturamaCharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://futuramaapi.com/api/characters/${id}`
  );

  if (!response.ok) {
    throw new Error("Kunde inte hämta karaktären");
  }

  const character = await response.json();

  return (
    <main style={{ paddingTop: "100px" }}>
      <img
        src={character.image}
        alt={character.name}
        width="300"
      />

      <h1>{character.name}</h1>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </main>
  );
}