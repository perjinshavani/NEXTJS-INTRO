import Link from "next/link";

interface CharacterCardProps {
  id: number;
  name: string;
  role: string;
  image: string;
  available: boolean;
}

export default function CharacterCard({
  id,
  name,
  role,
  image,
  available,
}: CharacterCardProps) {
  return (
    <article className="rounded-xl bg-zinc-900 p-4 text-white">
      <img
        src={image}
        alt={name}
        className="h-48 w-full rounded-lg object-cover"
      />

      <h3 className="mt-4 text-2xl font-bold">{name}</h3>
  
      <p>{role}</p>

      {available ? (
        <p className="text-green-400">Available</p>
      ) : (
        <p className="text-red-400">Not available</p>
      )}

      <Link
        href={`/character/${id}`}
        className="mt-4 inline-block text-cyan-400 hover:underline"
      >
        Läs mer
      </Link>
    </article>
  );
}