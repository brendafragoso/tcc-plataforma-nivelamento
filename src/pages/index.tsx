import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GlobeSvg } from "~/components/Svgs";
import { useGame } from "~/context/GameContext";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useGame();

  useEffect(() => {
    if (isAuthenticated) {
      void router.replace("/aprender");
    }
  }, [isAuthenticated, router]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <GlobeSvg className="h-fit w-7/12 md:w-[360px]" />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            Plataforma de Nivelamento Acadêmico
          </p>
          <p className="mb-6 max-w-[600px] text-center text-lg md:mb-12">
            Revisões de Ensino Médio para recém-ingressantes do
            Ensino Superior. Estude, ganhe XP e suba de nível.
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/entrar"
              className="w-full rounded-2xl border-b-4 border-green-700 bg-green-600 px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500 md:min-w-[320px]"
            >
              Começar agora
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
