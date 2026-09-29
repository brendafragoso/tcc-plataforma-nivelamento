import type { NextPage } from "next";
import React, { useEffect } from "react";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useBoundStore } from "~/hooks/useBoundStore";
import Link from "next/link";
import {
  LeaderboardBannerSvg,
  LockedLeaderboardSvg,
} from "~/components/Svgs";
import { useRouter } from "next/router";
import { Leaderboard as RankingTable } from "~/components/Leaderboard";

const LeaderboardExplanationSection = () => {
  return (
    <article className="relative hidden h-fit w-96 shrink-0 flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 xl:flex">
      <h2 className="font-bold uppercase text-gray-400">O que é o ranking?</h2>
      <p className="font-bold text-gray-700">
        Faça lições. Ganhe XP. Compita.
      </p>
      <p className="text-gray-400">
        Acumule XP nas lições de nivelamento e compare seu desempenho com
        outros estudantes da plataforma.
      </p>
    </article>
  );
};

const LeaderboardPage: NextPage = () => {
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  useEffect(() => {
    if (!loggedIn) {
      void router.push("/entrar");
    }
  }, [loggedIn, router]);

  const lessonsToUnlockLeaderboard = 3;
  const lessonsRemainingToUnlockLeaderboard =
    lessonsToUnlockLeaderboard - lessonsCompleted;
  const leaderboardIsUnlocked = lessonsCompleted >= lessonsToUnlockLeaderboard;

  const pluralizeLicao = (n: number): string => (n === 1 ? "lição" : "lições");

  return (
    <div>
      <LeftBar selectedTab="Ranking" />
      <div className="flex justify-center gap-3 pt-14 md:ml-24 md:p-6 md:pt-10 lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-xl flex-col items-center gap-5 pb-28 md:px-5">
          {!leaderboardIsUnlocked && (
            <>
              <LeaderboardBannerSvg />
              <h1 className="text-center text-2xl font-bold text-gray-700">
                Desbloqueie o Ranking!
              </h1>
              <p className="text-center text-lg text-gray-500">
                Complete mais {lessonsRemainingToUnlockLeaderboard}{" "}
                {pluralizeLicao(lessonsRemainingToUnlockLeaderboard)} para
                começar a competir.
              </p>
              <Link
                href="/licao?practice"
                className="w-fit rounded-2xl border-2 border-b-4 border-gray-200 px-16 py-2 text-center font-bold uppercase text-blue-400 transition hover:bg-gray-50 hover:brightness-90"
              >
                Iniciar uma lição
              </Link>
              <div className="h-5"></div>
              <LockedLeaderboardSvg />
            </>
          )}
          {leaderboardIsUnlocked && <RankingTable />}
        </div>
        {!leaderboardIsUnlocked && <LeaderboardExplanationSection />}
      </div>
      <BottomBar selectedTab="Ranking" />
    </div>
  );
};

export default LeaderboardPage;
