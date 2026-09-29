import { useEffect, useRef, useState } from "react";
import { useGame } from "~/context/GameContext";

interface Badge {
  title: string;
  emoji: string;
  description: string;
}

const badgeByLevel: Record<number, Badge> = {
  2: {
    title: "Iniciante Dedicado",
    emoji: "🥉",
    description: "Você deu o primeiro passo na sua jornada de nivelamento!",
  },
  3: {
    title: "Estudante Persistente",
    emoji: "🥈",
    description: "Sua dedicação está valendo a pena. Continue assim!",
  },
  4: {
    title: "Mestre do Nivelamento",
    emoji: "🥇",
    description: "Você já domina os fundamentos do Ensino Médio!",
  },
  5: {
    title: "Lenda Acadêmica",
    emoji: "🏆",
    description: "Conquista máxima desbloqueada. Você está pronto para o Ensino Superior!",
  },
};

const fallbackBadge = (level: number): Badge => ({
  title: `Nível ${level}`,
  emoji: "✨",
  description: "Você continua evoluindo. Parabéns!",
});

export const AchievementModal: React.FC = () => {
  const { userLevel } = useGame();

  const previousLevel = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [badge, setBadge] = useState<Badge | null>(null);

  useEffect(() => {
    if (previousLevel.current === null) {
      previousLevel.current = userLevel;
      return;
    }

    if (userLevel > previousLevel.current) {
      const unlocked = badgeByLevel[userLevel] ?? fallbackBadge(userLevel);
      setBadge(unlocked);
      setVisible(true);
    }
    previousLevel.current = userLevel;
  }, [userLevel]);

  if (!visible || !badge) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="achievement-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={() => setVisible(false)}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 text-6xl" aria-hidden="true">
          {badge.emoji}
        </div>
        <h2
          id="achievement-title"
          className="mb-2 text-2xl font-bold text-yellow-500"
        >
          Parabéns! Nova conquista!
        </h2>
        <p className="mb-1 text-gray-700">
          Você atingiu o <strong>Nível {userLevel}</strong>.
        </p>
        <p className="mb-2 text-gray-700">
          Medalha desbloqueada: <strong>{badge.title}</strong>
        </p>
        <p className="mb-6 text-sm text-gray-500">{badge.description}</p>
        <button
          onClick={() => setVisible(false)}
          className="w-full rounded-xl border-b-4 border-green-700 bg-green-600 py-3 font-bold uppercase text-white transition hover:brightness-110"
          autoFocus
        >
          Continuar
        </button>
      </div>
    </div>
  );
};
