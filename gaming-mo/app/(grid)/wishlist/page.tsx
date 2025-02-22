"use client";

import { getGamesByIds } from "@/app/api/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";

interface Game {
  data: {
    id: string;
    name: string;
    background_image: string;
  }
}

const Page = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const fetchWishlistGames = useCallback(async () => {
    if (typeof window === 'undefined') return;
    
    setIsLoading(true);
    try {
      const storedWishlist = window.localStorage.getItem("gamesWishlist");
      const wishlistIds = storedWishlist ? JSON.parse(storedWishlist) : [];
      
      if (wishlistIds.length === 0) {
        setGames([]);
        return;
      }

      const data = await getGamesByIds(wishlistIds);
      setGames(data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      setGames([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    fetchWishlistGames();
  }, [fetchWishlistGames]);

  const handleDel = (gameId: string) => {
    if (typeof window === 'undefined') return;

    try {
      const storedWishlist = window.localStorage.getItem("gamesWishlist");
      const currentWishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
      const newWishlist = currentWishlist.filter((id: string) => id !== gameId);
      
      window.localStorage.setItem("gamesWishlist", JSON.stringify(newWishlist));
      setGames(prevGames => prevGames.filter(game => game?.data?.id !== gameId));
    } catch (error) {
      console.error("Error removing game:", error);
    }
  };

  if (!isClient) return null;
  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-opacity-50"></div>
    </div>
  );

  return (
    <div className="p-4 min-h-screen bg-transparent">
      <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-500 to-red-400 animate-gradient">
        Your Wishlist Collection
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.length > 0 ? (
          games.map((game) => (
            <div
              key={game?.data?.id}
              className="group backdrop-blur-sm bg-white/5 rounded-xl p-3 shadow-xl hover:scale-102 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-red-500/20 border border-white/10"
            >
              <Link href={`/game/${game?.data?.id}`}>
                <div className="relative w-full h-44 overflow-hidden rounded-lg">
                  <Image
                    src={game?.data?.background_image || "/placeholder.jpg"}
                    alt={game?.data?.name || "Game image"}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full rounded-lg transform transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm text-gray-100 font-medium">
                        View details
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <h1 className="truncate mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-red-400 group-hover:from-red-300 group-hover:to-purple-300 transition-all duration-500 text-center">
                {game?.data?.name || "Untitled Game"}
              </h1>
              <button
                onClick={() => handleDel(game?.data?.id)}
                className="w-full mt-2 py-1.5 px-3 text-white text-sm font-semibold bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-xl text-gray-400 font-medium">
              Your wishlist is empty. Start adding some games!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
