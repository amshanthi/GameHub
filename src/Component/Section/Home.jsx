import React from "react";
import games from "../../assets/games";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B1120] px-6 py-8 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
          My Games
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="overflow-hidden rounded-2xl border border-[#263653] bg-[#151F35] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <div className="p-5 flex justify-center flex-col items-center">
                <h2 className="text-lg font-bold text-white pb-4 ">
                  {game.title}
                </h2>

                <div className="w-full aspect-square overflow-hidden rounded-xl  flex items-center justify-center">
                  {console.log(
                    `/public/images/${game.image}.replace(/ /g, "%20")`,
                  )}
                  <img
                    src={`/public/images/${game.image.replace(/ /g, "%20")}`}
                    alt={game.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                <a
                  target="_blank"
                  href={game.link}
                  className="mt-5 inline-block rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-[#0B1120] transition hover:bg-violet-400"
                >
                  Play Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
