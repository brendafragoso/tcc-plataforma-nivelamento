import type { NextPage } from "next";
import Link from "next/link";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";

const bgSnow = _bgSnow as StaticImageData;

interface SubjectArea {
  title: string;
  description: string;
  emoji: string;
}

const subjectAreas: ReadonlyArray<SubjectArea> = [
  {
    title: "Matemática Básica",
    description: "Operações, frações, porcentagem e proporções",
    emoji: "📊",
  },
  {
    title: "Álgebra",
    description: "Equações, funções e expressões algébricas",
    emoji: "📐",
  },
  {
    title: "Interpretação de Texto",
    description: "Coesão, coerência, figuras de linguagem e gêneros textuais",
    emoji: "📖",
  },
];

const Register: NextPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#235390] px-10 font-bold text-white">
        <Link className="text-2xl" href="/">
          Nivelamento Acadêmico
        </Link>
        <Link
          href="/entrar"
          className="rounded-2xl border-2 border-b-4 border-blue-300 bg-white px-4 py-2 text-sm uppercase text-blue-800 transition hover:brightness-110"
        >
          Entrar
        </Link>
      </header>
      <div className="container flex grow flex-col items-center justify-center gap-12 px-4 py-24">
        <h1 className="mt-12 text-center text-3xl font-extrabold tracking-tight text-white">
          Escolha sua área de revisão
        </h1>
        <section className="mx-auto grid w-full max-w-4xl grow grid-cols-1 gap-4 sm:grid-cols-3">
          {subjectAreas.map((area) => (
            <Link
              key={area.title}
              href="/entrar"
              className="flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-400 px-5 py-8 text-center font-bold hover:bg-gray-300 hover:bg-opacity-20"
            >
              <span className="text-5xl" aria-hidden="true">
                {area.emoji}
              </span>
              <span className="text-xl">{area.title}</span>
              <span className="text-sm font-normal text-gray-200">
                {area.description}
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Register;
