import PlaylistCard from "./PlaylistCard";

function PlaylistGrid({ playlists }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {playlists.map((album) => (
        <PlaylistCard
          key={album.id}
          title={album.title}
          coverUrl={album.url}
        />
      ))}
    </div>
  );
}

export default PlaylistGrid;
