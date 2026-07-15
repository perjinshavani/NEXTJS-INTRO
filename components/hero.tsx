import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

function Button({ link, children }: ButtonProps) {
  return (
    <Link
      href={link}
      className="bg-gray-200 border border-gray-400 px-4 py-2 rounded"
    >
      {children}
    </Link>
  );
}

export default function Hero() {
  return (
    <main>
      <section className="relative min-h-[100vh] flex justify-center items-center pt-20">
        <Image
          src="/rymden.jpg"
          alt="Space"
          fill
          className="object-cover"
          priority
        />

       

        <header className="relative z-10 max-w-3xl flex flex-col justify-center items-center px-4 text-center">

          
          

    <h1>
          
            Welcome to The Universe
          </h1>

       <p>
            Explore distant galaxies, discover new planets, and begin your
            journey through the mysteries of space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Button link="/explore">Explore Now</Button>
            <Button link="/futurama">Learn More</Button>
          </div>
        </header>
      </section>
    </main>
  );
}
