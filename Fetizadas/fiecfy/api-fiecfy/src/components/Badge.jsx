function Badge({ count }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 bg-green-500 text-white text-sm font-bold rounded-full">
      {count}
    </span>
  );
}

export default Badge;
