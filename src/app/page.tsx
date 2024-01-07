"use client"

import NowPlaying from "@/components/NowPlaying";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Spotify Profile</h1>
      <NowPlaying />
    </main>
  );
}
