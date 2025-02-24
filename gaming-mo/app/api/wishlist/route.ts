import { NextResponse } from 'next/server';

// In-memory storage (replace with your database in production)
let wishlistGames: string[] = [];

export async function GET() {
  return NextResponse.json({ games: wishlistGames });
}

export async function POST(request: Request) {
  const { gameId } = await request.json();
  if (!wishlistGames.includes(gameId)) {
    wishlistGames.push(gameId);
  }
  return NextResponse.json({ games: wishlistGames });
}

export async function DELETE(request: Request) {
  const { gameId } = await request.json();
  wishlistGames = wishlistGames.filter(id => id !== gameId);
  return NextResponse.json({ games: wishlistGames });
}
