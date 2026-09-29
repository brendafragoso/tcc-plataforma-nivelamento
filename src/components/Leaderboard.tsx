import { useMemo } from "react";
import { useGame } from "~/context/GameContext";

interface StudentEntry {
  nome: string;
  xp: number;
  userLevel?: number;
  source: "local" | "current";
  isCurrentUser?: boolean;
  username?: string;
}

const placeColor = (place: number): string => {
  if (place === 1) return "bg-yellow-400 text-white";
  if (place === 2) return "bg-gray-400 text-white";
  if (place === 3) return "bg-orange-400 text-white";
  return "bg-gray-200 text-gray-700";
};

export const Leaderboard: React.FC = () => {
  const { userName, currentXP, userLevel, username, localUsers } = useGame();

  const rankedStudents = useMemo<StudentEntry[]>(() => {
    const localEntries: StudentEntry[] = localUsers
      .filter((u) => u.username !== username)
      .map((u) => ({
        nome: u.userName || "Estudante",
        xp: u.currentXP,
        userLevel: u.userLevel,
        source: "local",
        username: u.username,
      }));

    const currentEntry: StudentEntry | null = userName
      ? {
          nome: userName,
          xp: currentXP,
          userLevel,
          source: "current",
          isCurrentUser: true,
          username,
        }
      : null;

    const merged: StudentEntry[] = [
      ...localEntries,
      ...(currentEntry ? [currentEntry] : []),
    ];

    return [...merged].sort((a, b) => b.xp - a.xp);
  }, [userName, currentXP, userLevel, username, localUsers]);

  return (
    <section className="w-full max-w-xl rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-1 text-center text-2xl font-bold text-gray-800">
        Ranking de Nivelamento
      </h2>
      <p className="mb-4 text-center text-xs text-gray-500">
        Estudantes deste navegador, ordenados por XP.
      </p>
      {rankedStudents.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center text-sm text-gray-500">
          Nenhum estudante registrado ainda neste navegador. Faça login e
          conclua uma lição para aparecer aqui.
        </div>
      ) : (
        <ol className="flex flex-col gap-2">
          {rankedStudents.map((student, idx) => {
            const place = idx + 1;
            return (
              <li
                key={`${student.source}-${student.username ?? student.nome}-${idx}`}
                className={[
                  "flex items-center justify-between rounded-xl border-2 px-4 py-3 transition",
                  student.isCurrentUser
                    ? "border-green-500 bg-green-50 font-bold"
                    : "border-gray-100 bg-gray-50",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                      placeColor(place),
                    ].join(" ")}
                    aria-label={`Posição ${place}`}
                  >
                    {place}
                  </span>
                  <span className="flex flex-col text-gray-800">
                    <span className="flex items-center gap-2">
                      {student.nome}
                      {student.isCurrentUser && (
                        <span className="text-xs uppercase text-green-700">
                          (você)
                        </span>
                      )}
                    </span>
                    {student.userLevel !== undefined && (
                      <span className="text-xs font-normal text-gray-500">
                        Nível {student.userLevel}
                      </span>
                    )}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-600">
                  {student.xp} XP
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
};
