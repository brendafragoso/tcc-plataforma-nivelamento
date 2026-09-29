import { useMemo } from "react";
import { useGame } from "~/context/GameContext";

interface RankedUser {
  username: string;
  name: string;
  xp: number;
  isCurrentUser: boolean;
}

export const useLeaderboardUsers = (): RankedUser[] => {
  const { userName, currentXP, username, localUsers } = useGame();

  return useMemo<RankedUser[]>(() => {
    const others: RankedUser[] = localUsers
      .filter((u) => u.username !== username)
      .map((u) => ({
        username: u.username,
        name: u.userName || "Estudante",
        xp: u.currentXP,
        isCurrentUser: false,
      }));

    const current: RankedUser | null = userName
      ? {
          username,
          name: userName,
          xp: currentXP,
          isCurrentUser: true,
        }
      : null;

    const merged: RankedUser[] = [
      ...others,
      ...(current ? [current] : []),
    ];

    return merged.sort((a, b) => b.xp - a.xp);
  }, [userName, currentXP, username, localUsers]);
};

export const useLeaderboardRank = (): number | null => {
  const leaderboardUsers = useLeaderboardUsers();
  const index = leaderboardUsers.findIndex((user) => user.isCurrentUser);
  return index === -1 ? null : index + 1;
};
