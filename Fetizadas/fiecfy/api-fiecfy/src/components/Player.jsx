import { useState } from "react";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [curtido, setCurtido] = useState(false);

  return (
    <footer className="h-24 bg-zinc-950 border-t border-zinc-800 px-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 w-1/3">
        <div className="w-12 h-12 bg-zinc-800 rounded"></div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">Nome da Música</span>
          <span className="text-xs text-zinc-400">Nome do Artista</span>
        </div>
        <button
          onClick={() => setCurtido(!curtido)}
          className={`ml-2 px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
            curtido ? "bg-green-500 text-black" : "bg-transparent text-white border border-zinc-700"
          }`}
        >
          {curtido ? "Curtiu" : "Curtir"}
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <div className="flex items-center gap-5">
          <button className="text-zinc-400 hover:text-white text-lg">⏮</button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            <i className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
          </button>
          <button className="text-zinc-400 hover:text-white text-lg">⏭</button>
        </div>
        <div className="w-full max-w-md h-1 bg-zinc-700 rounded-full">
          <div className="w-1/3 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="w-1/3 flex justify-end items-center gap-2">
        <span className="text-zinc-500 text-xs">🔊</span>
        <input
          type="range"
          className="w-24 h-1 bg-zinc-600 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </footer>
  );
}

export default Player;
