import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

import { GameProvider } from "~/context/GameContext";
import { AchievementModal } from "~/components/AchievementModal";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <GameProvider>
      <Head>
        <title>Plataforma de Nivelamento Acadêmico</title>
        <meta
          name="description"
          content="Plataforma Web de Nivelamento Acadêmico para recém-ingressantes do Ensino Superior."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <Component {...pageProps} />
      {/* Modal global de conquista — monitora userLevel em qualquer rota. */}
      <AchievementModal />
    </GameProvider>
  );
};

export default MyApp;
