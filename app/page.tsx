export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100vh] flex justify-center items-center bg-[url('/rymden.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black/60"></div>

        <header className="relative z-10 max-w-3xl flex flex-col justify-center items-center px-4 text-center">
          <span className="text-5xl mb-6">🚀</span>

          <h1 className="font-extrabold text-6xl text-balance mb-6 leading-none">
            Welcome to <span className="text-cyan-400">The Universe</span>
          </h1>

          <p className="text-lg text-zinc-300 text-pretty mb-10 max-w-2xl">
            Explore distant galaxies, discover new planets, and begin your
            journey through the mysteries of space.
          </p>

          <div className="flex gap-4 justify-center">
            <a
              className="px-8 py-4 uppercase bg-cyan-400 text-zinc-950 font-bold rounded-xl hover:bg-cyan-400/80"
              href="/"
            >
              Explore Now
            </a>

            <a
              className="px-8 py-4 uppercase border border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10"
              href="/"
            >
              Learn More
            </a>
          </div>
        </header>
      </section>
    </main>
  );
}