function CompactCard({ title, imgUrl }) {
  return (
    <div className="flex flex-row items-center gap-3 bg-zinc-800 rounded-lg p-3 hover:bg-zinc-700 transition-colors">
      <img
        src={imgUrl}
        alt={title}
        className="w-16 h-16 rounded object-cover"
      />
      <span className="font-semibold text-white">{title}</span>
    </div>
  );
}

export default CompactCard;
