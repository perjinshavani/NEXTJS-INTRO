import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  link: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

function Button({
  link,
  children,
  variant = "primary",
}: ButtonProps) {
  const buttonStyle =
    variant === "primary"
      ? "bg-cyan-500 hover:bg-cyan-600 text-white"
      : "border border-white text-white hover:bg-white hover:text-black";

  return (
    <Link
      href={link}
      className={`${buttonStyle} px-8 py-3 rounded-full font-semibold transition duration-300`}
    >
      {children}
    </Link>
  );
}

export default function Hero() {
  return (
    <main>
      <section className="relative min-h-screen flex justify-center items-center pt-20 overflow-hidden">
        <Image
          src="/rymden.jpg"
          alt="Space"
          fill
          className="object-cover"
          priority
        />

        {/* Mörkt lager ovanpå bilden */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text och knappar */}
        <header className="relative z-10 max-w-4xl flex flex-col justify-center items-center px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Explore the unknown
          </p>

          <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Welcome to The Universe
          </h1>

          <p className="max-w-2xl mb-8 text-lg sm:text-xl text-gray-200 leading-relaxed">
            Explore distant galaxies, discover new planets, and begin your
            journey through the mysteries of space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button link="/explore">Explore Now</Button>

            <Button link="/futurama" variant="secondary">
              Learn More
            </Button>
          </div>
        </header>
      </section>
    </main>
  );
}