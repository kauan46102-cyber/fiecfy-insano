import { useState } from "react";

function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("E-mail:", email);
    console.log("Senha:", senha);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 rounded-lg">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block mb-3 px-3 py-2 text-black"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="block mb-3 px-3 py-2 text-black"
        />

        <button type="submit" className="mr-3">
          Entrar
        </button>

        <button type="button" onClick={onClose}>
          Fechar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
