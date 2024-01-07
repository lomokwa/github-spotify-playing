"use client"

import { useEffect, useState } from "react"

type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  url: string;
  title: string;
}

export default function NowPlaying() {
  const [song, setSong] = useState<NowPlayingSong>();

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/spotify");
      const data = await response.json();
      setSong(data);
    }

    getData();
  }
  , []);

  return (
    <div>
      <div>
        {song?.url 
          ? <a href={song.url} target="_blank" rel="noreferrer noopener">{song.title}</a>
          : <p>No song currently playing</p>
        }

        {song?.artist &&
        <>
          <span> - </span>
          <p>{song.artist}</p>
        </>
        }
      </div>
    </div>
  )
}