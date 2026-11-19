import { useState } from "react";
import SidebarItem from "./SidebarItem";
import playlists from "../data/mockData";

const menuItems = [
  { id: 1, label: "Início", iconClass: "⌂" },
  { id: 2, label: "Buscar", iconClass: "⌕" },
];

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const minhasPlaylists = playlists.filter((item) => item.type === "album");

  return (
    <aside className="hidden md:flex w-72 bg-black flex-col p-6 gap-6 border-r border-zinc-800">
      <div className="font-bold text-xl text-white">Fiecfy</div>

      <nav className="flex flex-col gap-4 text-zinc-400 font-medium">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            iconClass={item.iconClass}
          />
        ))}
      </nav>

      <div className="border-t border-zinc-800 pt-5">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-white font-bold hover:text-green-400 transition-colors"
        >
          <span>Minhas Playlists</span>
          <span>{isExpanded ? "▲" : "▼"}</span>
        </button>

        {isExpanded && (
          <div className="mt-4 flex flex-col gap-3">
            {minhasPlaylists.map((playlist) => (
              <a
                key={playlist.id}
                href={`#playlist-${playlist.id}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {playlist.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
