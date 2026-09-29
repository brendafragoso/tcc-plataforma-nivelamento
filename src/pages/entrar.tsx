import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGame } from "~/context/GameContext";

const Login: NextPage = () => {
  const router = useRouter();
  const { login, isAuthenticated } = useGame();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      void router.replace("/aprender");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Informe um nome com ao menos 2 caracteres.");
      return;
    }
    setError(null);
    login(trimmed);
    void router.push("/aprender");
  };

  return (
    <>
      <Head>
        <title>Entrar – Plataforma de Nivelamento</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#235390] p-4 text-white">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-gray-800 shadow-xl">
          <h1 className="mb-2 text-center text-2xl font-bold">
            Plataforma de Nivelamento Acadêmico
          </h1>
          <p className="mb-6 text-center text-sm text-gray-500">
            Identifique-se para iniciar suas revisões do Ensino Médio.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="userName" className="text-sm font-bold text-gray-700">
              Seu nome
            </label>
            <input
              id="userName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex.: Maria Silva"
              className="rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-base focus:border-blue-400 focus:outline-none"
              autoFocus
              autoComplete="off"
            />

            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="rounded-xl border-b-4 border-green-700 bg-green-600 py-3 font-bold uppercase text-white transition hover:brightness-110"
            >
              Entrar
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-400">
            Seu progresso fica salvo localmente no navegador.
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
