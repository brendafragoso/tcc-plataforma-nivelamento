import type { NextPage } from "next";
import Link from "next/link";

const ForgotPassword: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="flex h-[70px] w-full justify-center bg-blue-400 font-bold text-white">
        <div className="flex max-w-5xl grow items-center justify-between px-5">
          <Link className="text-2xl" href="/">
            Nivelamento Acadêmico
          </Link>
          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/entrar"
              className="rounded-2xl border-b-4 border-blue-300 bg-white px-4 py-2 uppercase text-blue-800 transition hover:brightness-110"
            >
              Entrar
            </Link>
          </div>
        </div>
      </header>
      <div className="flex w-full grow flex-col items-center gap-5 px-5 pt-5 sm:w-96 sm:pt-52">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Recuperação de acesso
        </h1>
        <p className="text-center text-gray-600">
          A plataforma usa identificação simplificada por nome. Não
          há senha a recuperar — basta voltar à tela de entrada e
          informar seu nome novamente.
        </p>
        <Link
          href="/entrar"
          className="w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 text-center font-bold uppercase text-white transition hover:brightness-110"
        >
          Ir para a tela de entrada
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
