import Hero from "@/components/hero";
import CharacterCard from "@/components/CharacterCard";
import data from "@/data/characters.json";

export default function Home() {
  console.log(data.characters);
  return (
 <main>
  <Hero />

  <section className="grid gap-6 bg-black p-8 sm:grid-cols-2 lg:grid-cols-3">
  {data.characters.map((character) => (
    <CharacterCard
      key={character.id}
      id={character.id}
      name={character.name}
      role={character.role}
      image={character.image}
      available={character.available}

      

  
    />
  ))}


 
</section>




  
</main>
  );
}