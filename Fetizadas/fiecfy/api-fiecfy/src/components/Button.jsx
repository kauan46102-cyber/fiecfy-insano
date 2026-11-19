function Button({ children }) {
  return (
    <button className="bg-green-500 hover:bg-green-400 hover:scale-105 transition-transform text-white py-3 px-6 rounded-full font-bold">
      {children}
    </button>
  );
}

export default Button;
