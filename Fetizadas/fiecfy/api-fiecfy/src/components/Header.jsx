import UserAvatar from "./UserAvatar";

function Header({ searchTerm, setSearchTerm, onOpenLogin }) {
  function limparBusca() {
    setSearchTerm("");
  }

  return (
    <header className="bg-zinc-900 flex items-center justify-between gap-4 px-6 py-4">
      <div>
        <h1 className="text-xl font-bold">Spotify</h1>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="O que você quer ouvir?"
          className="bg-zinc-800 text-white rounded-full px-4 py-2"
        />

        <button
          type="button"
          onClick={limparBusca}
          className="w-10 h-10 rounded-full bg-zinc-700"
        >
          X
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={onOpenLogin}>Entrar</button>
        <UserAvatar imgUrl="https://ui-avatars.com/api/?name=User" />
      </div>
    </header>
  );
}

export default Header;
