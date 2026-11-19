import { useEffect, useState } from "react";
import PlaylistGrid from "./components/PlaylistGrid";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Player from "./components/Player";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loginAberto, setLoginAberto] = useState(false);

  useEffect(() => {
    async function carregarPlaylists() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/albums/1/photos_invalida"
        );

        if (!res.ok) {
          throw new Error("Rota não encontrada");
        }

        const dadosJSON = await res.json();

        console.log(dadosJSON);
        setPlaylists(dadosJSON.slice(0, 10));
      } catch (erro) {
        console.error("Falha detectada:", erro);
        setErro("Não foi possível conectar ao servidor.");
      } finally {
        setIsLoading(false);
      }
    }

    carregarPlaylists();
  }, []);

  const playlistsFiltradas = playlists.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onOpenLogin={() => setLoginAberto(true)}
      />

      <main className="flex-1 bg-zinc-900 overflow-y-auto p-6">
        {isLoading ? (
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-spinner fa-spin text-green-500 text-2xl"></i>
            <span>Buscando músicas no servidor</span>
          </div>
        ) : erro ? (
          <div className="p-6 text-red-500">
            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
            {erro}
          </div>
        ) : (
          <PlaylistGrid playlists={playlistsFiltradas} />
        )}
      </main>

      <Player />

      {loginAberto && (
        <LoginForm onClose={() => setLoginAberto(false)} />
      )}
    </div>
  );
}

export default App;
