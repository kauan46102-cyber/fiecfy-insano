function PlaylistCard({ title, coverUrl }) {
  return (
    <div>
      <img src={coverUrl} alt={title} className="w-full" />
      <h3>{title}</h3>
    </div>
  );
}

export default PlaylistCard;
