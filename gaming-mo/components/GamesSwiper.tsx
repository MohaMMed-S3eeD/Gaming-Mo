"use client";
import SwiperCards from "./SwiperCards";
import Image from "next/image";
import Link from "next/link";
import { Game } from "@/app/types";
import { Button } from "./ui/button";

const GamesSwiper = ({
  games,
  title,
  slidesPerView,
  big,
}: {
  games: Game[];
  title: string;
  slidesPerView?: number;
  big?: boolean;
}) => {
  // Add null check for games
  if (!games || games.length === 0) {
    return (
      <div className="mt-8">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">{title}</h1>
        <div className="mt-8 text-gray-400">No games available</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mt-8 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">{title}</h1>
      <SwiperCards
        className="mt-8"
        slidesPerView={slidesPerView || 4}
        items={games.map((game: Game) => ({
          card: big ? (
            <div
              key={game.id}
              className="flex flex-col md:flex-row items-center backdrop-blur-lg bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/20 border border-red-500/10"
            >
              <div className="flex-shrink-0 transform perspective-1000">
                <Link href={`/game/${game.id}`}>
                  <div className="relative w-44 h-44 md:w-64 md:h-64 overflow-hidden rounded-xl group">
                    <Image
                      src={game.background_image}
                      alt={game.name}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </Link>
                <Button
                  onClick={() =>console.log("clicked")}
                  className={`mt-4 w-full transition-all duration-300 ${
                   
                      
                      'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400'
                  }`}
                >
                  <span className="flex items-center gap-1 text-sm">
                    
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="truncate">Add to Wishlist</span>
                      </>
                   
                  </span>
                </Button>
              </div>
              <div className="flex flex-col md:ml-8 mt-6 md:mt-0 max-w-xl">
                <h1 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 hover:from-red-300 hover:to-purple-300 transition-all duration-300 text-center md:text-left">
                  {game.name}
                </h1>
                <p className="text-sm md:text-base text-gray-300 mt-4 line-clamp-3 overflow-hidden">
                  {game.description_raw}
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mt-4 self-start"></div>
              </div>
            </div>
          ) : (
            <div
              key={game.id}
              className="backdrop-blur-lg bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-2xl p-4 shadow-lg hover:scale-105 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/20 border border-red-500/10"
            >
              <Link href={`/game/${game.id}`}>
                <div className="relative w-full h-56 overflow-hidden rounded-lg group">
                  <Image
                    src={game.background_image}
                    alt={game.name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View details
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <h1 className="truncate mt-3 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 hover:from-red-300 hover:to-purple-300 transition-all duration-300 text-center">
                {game.name}
              </h1>
              <Button
                onClick={() => console.log("clicked")}
                className={`mt-4 w-full transition-all duration-300 ${
                  'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400'
                }`}
              >
                <span className="flex items-center gap-1 text-sm justify-center">
                 
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">Add to Wishlist</span>
                    </>
                
                </span>
              </Button>
            </div>
          ),
          src: game.background_image,
        }))} 
      />
    </div>
  );
};

export default GamesSwiper;
