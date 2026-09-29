import { useGame, type GameContextValue } from "~/context/GameContext";

export const useBoundStore = <T,>(selector: (state: GameContextValue) => T): T => {
  const state = useGame();
  return selector(state);
};
