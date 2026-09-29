import dayjs from "dayjs";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import languages, { type Language } from "~/utils/languages";
import type { DateString } from "~/utils/dateString";
import { toDateString } from "~/utils/dateString";

const STORAGE_KEY = "nivelamento_state_v1";
const LOCAL_USERS_KEY = "nivelamento_users_v1";
export const XP_PER_LEVEL = 300;

const DEFAULT_LANGUAGE_INDEX = 6;

export type GoalXp = 1 | 10 | 20 | 30 | 50;

type XpByDate = Record<DateString, number>;

interface PersistedState {
  userName: string;
  username: string;
  joinedAt: string;
  isAuthenticated: boolean;
  currentXP: number;
  userLevel: number;
  completedLessons: number;
  xpByDate: XpByDate;
  activeDays: DateString[];
  streak: number;
  lingots: number;
  languageCode: string;
  goalXp: GoalXp;
  soundEffects: boolean;
  speakingExercises: boolean;
  listeningExercises: boolean;
}

const defaultPersisted: PersistedState = {
  userName: "",
  username: "",
  joinedAt: dayjs().toISOString(),
  isAuthenticated: false,
  currentXP: 0,
  userLevel: 1,
  completedLessons: 0,
  xpByDate: {},
  activeDays: [],
  streak: 0,
  lingots: 0,
  languageCode: languages[DEFAULT_LANGUAGE_INDEX]?.code ?? "es",
  goalXp: 10,
  soundEffects: true,
  speakingExercises: true,
  listeningExercises: true,
};

const calculateLevel = (xp: number): number =>
  Math.max(1, Math.floor(xp / XP_PER_LEVEL) + 1);

const getCurrentStreak = (activeDays: DateString[]): number => {
  const daysSet = new Set(activeDays);
  let streakCount = 0;
  let cursor = dayjs();
  while (daysSet.has(toDateString(cursor))) {
    streakCount += 1;
    cursor = cursor.add(-1, "day");
  }
  return streakCount;
};

export interface LocalUserSummary {
  username: string;
  userName: string;
  currentXP: number;
  userLevel: number;
  completedLessons: number;
  joinedAt: string;
}

type LocalUsersMap = Record<string, PersistedState>;

const normalizeUsername = (name: string): string =>
  name.trim().replace(/\s+/g, "-").toLowerCase();

const loadLocalUsers = (): LocalUsersMap => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(LOCAL_USERS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") {
      return parsed as LocalUsersMap;
    }
    return {};
  } catch {
    return {};
  }
};

const persistLocalUsers = (users: LocalUsersMap): void => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch {
  }
};

const toSummary = (snapshot: PersistedState): LocalUserSummary => ({
  username: snapshot.username,
  userName: snapshot.userName,
  currentXP: snapshot.currentXP,
  userLevel: snapshot.userLevel,
  completedLessons: snapshot.completedLessons,
  joinedAt: snapshot.joinedAt,
});

export interface GameContextValue {
  userName: string;
  currentXP: number;
  userLevel: number;
  completedLessons: number;
  isAuthenticated: boolean;
  name: string;
  username: string;
  joinedAt: dayjs.Dayjs;
  language: Language;
  lingots: number;
  streak: number;
  activeDays: Set<DateString>;
  xpByDate: XpByDate;
  goalXp: GoalXp;
  soundEffects: boolean;
  speakingExercises: boolean;
  listeningExercises: boolean;
  loggedIn: boolean;
  lessonsCompleted: number;
  localUsers: LocalUserSummary[];
  login: (name: string) => void;
  logout: () => void;
  completeLessonBlock: (earnedXp: number) => void;
  resetProgress: () => void;
  removeLocalUser: (username: string) => void;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  logIn: () => void;
  logOut: () => void;
  increaseXp: (by: number) => void;
  xpToday: () => number;
  xpThisWeek: () => number;
  addToday: () => void;
  isActiveDay: (day: dayjs.Dayjs) => boolean;
  increaseLingots: (by: number) => void;
  setLanguage: (language: Language) => void;
  increaseLessonsCompleted: (by?: number) => void;
  jumpToUnit: (unitNumber: number) => void;
  setGoalXp: (goal: GoalXp) => void;
  setSoundEffects: (on: boolean) => void;
  setSpeakingExercises: (on: boolean) => void;
  setListeningExercises: (on: boolean) => void;
}

const GameContext = createContext<GameContextValue | null>(null);

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, setState] = useState<PersistedState>(defaultPersisted);
  const [localUsersMap, setLocalUsersMap] = useState<LocalUsersMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setHydrated(true);
      return;
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<PersistedState>;
        setState({ ...defaultPersisted, ...parsed });
      }
      setLocalUsersMap(loadLocalUsers());
    } catch {
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
    }
    if (state.isAuthenticated && state.username) {
      setLocalUsersMap((prev) => {
        const next: LocalUsersMap = { ...prev, [state.username]: state };
        persistLocalUsers(next);
        return next;
      });
    }
  }, [state, hydrated]);

  const login = useCallback((name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const username = normalizeUsername(trimmed);

    setState((prev) => {
      const stored = loadLocalUsers();
      const existing = stored[username];

      if (
        prev.isAuthenticated &&
        prev.username &&
        prev.username !== username
      ) {
        const updated: LocalUsersMap = { ...stored, [prev.username]: prev };
        persistLocalUsers(updated);
        setLocalUsersMap(updated);
      }

      if (existing) {
        return { ...existing, isAuthenticated: true, userName: trimmed };
      }

      return {
        ...defaultPersisted,
        userName: trimmed,
        username,
        isAuthenticated: true,
        joinedAt: dayjs().toISOString(),
      };
    });

    if (typeof window !== "undefined") {
      window.localStorage.setItem("user_name", trimmed);
    }
  }, []);

  const logout = useCallback(() => {
    setState((prev) => {
      if (prev.isAuthenticated && prev.username) {
        const stored = loadLocalUsers();
        const updated: LocalUsersMap = { ...stored, [prev.username]: prev };
        persistLocalUsers(updated);
        setLocalUsersMap(updated);
      }
      return defaultPersisted;
    });
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem("user_name");
    }
  }, []);

  const removeLocalUser = useCallback((username: string) => {
    setLocalUsersMap((prev) => {
      if (!(username in prev)) return prev;
      const next: LocalUsersMap = { ...prev };
      delete next[username];
      persistLocalUsers(next);
      return next;
    });
  }, []);

  const completeLessonBlock = useCallback((earnedXp: number) => {
    setState((prev) => {
      const newXP = prev.currentXP + earnedXp;
      const newLevel = calculateLevel(newXP);
      const todayKey = toDateString(dayjs());
      const newXpByDate: XpByDate = {
        ...prev.xpByDate,
        [todayKey]: (prev.xpByDate[todayKey] ?? 0) + earnedXp,
      };
      const newActiveDays = Array.from(
        new Set([...prev.activeDays, todayKey]),
      );
      return {
        ...prev,
        currentXP: newXP,
        userLevel: newLevel,
        completedLessons: prev.completedLessons + 1,
        xpByDate: newXpByDate,
        activeDays: newActiveDays,
        streak: getCurrentStreak(newActiveDays),
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setState((prev) => ({
      ...defaultPersisted,
      userName: prev.userName,
      username: prev.username,
      isAuthenticated: prev.isAuthenticated,
      languageCode: prev.languageCode,
    }));
  }, []);

  const setName = useCallback(
    (name: string) => setState((p) => ({ ...p, userName: name })),
    [],
  );
  const setUsername = useCallback(
    (username: string) => setState((p) => ({ ...p, username })),
    [],
  );
  const logIn = useCallback(
    () => setState((p) => ({ ...p, isAuthenticated: true })),
    [],
  );
  const logOut = useCallback(
    () => setState((p) => ({ ...p, isAuthenticated: false })),
    [],
  );

  const increaseXp = useCallback((by: number) => {
    setState((prev) => {
      const newXP = prev.currentXP + by;
      const todayKey = toDateString(dayjs());
      return {
        ...prev,
        currentXP: newXP,
        userLevel: calculateLevel(newXP),
        xpByDate: {
          ...prev.xpByDate,
          [todayKey]: (prev.xpByDate[todayKey] ?? 0) + by,
        },
      };
    });
  }, []);

  const xpToday = useCallback((): number => {
    return state.xpByDate[toDateString(dayjs())] ?? 0;
  }, [state.xpByDate]);

  const xpThisWeek = useCallback((): number => {
    let total = 0;
    for (let i = 0; i <= dayjs().day(); i++) {
      total += state.xpByDate[toDateString(dayjs().add(-i, "day"))] ?? 0;
    }
    return total;
  }, [state.xpByDate]);

  const addToday = useCallback(() => {
    setState((prev) => {
      const todayKey = toDateString(dayjs());
      const newActiveDays = Array.from(
        new Set([...prev.activeDays, todayKey]),
      );
      return {
        ...prev,
        activeDays: newActiveDays,
        streak: getCurrentStreak(newActiveDays),
      };
    });
  }, []);

  const isActiveDay = useCallback(
    (day: dayjs.Dayjs): boolean => state.activeDays.includes(toDateString(day)),
    [state.activeDays],
  );

  const increaseLingots = useCallback((by: number) => {
    setState((p) => ({ ...p, lingots: p.lingots + by }));
  }, []);

  const setLanguage = useCallback((language: Language) => {
    setState((p) => ({ ...p, languageCode: language.code }));
  }, []);

  const increaseLessonsCompleted = useCallback((by = 1) => {
    setState((p) => ({ ...p, completedLessons: p.completedLessons + by }));
  }, []);

  const jumpToUnit = useCallback((unitNumber: number) => {
    setState((p) => {
      const lessonsPerTile = 4;
      const baseline = (unitNumber - 1) * 6 * lessonsPerTile;
      return {
        ...p,
        completedLessons: Math.max(p.completedLessons, baseline),
      };
    });
  }, []);

  const setGoalXp = useCallback(
    (goal: GoalXp) => setState((p) => ({ ...p, goalXp: goal })),
    [],
  );
  const setSoundEffects = useCallback(
    (on: boolean) => setState((p) => ({ ...p, soundEffects: on })),
    [],
  );
  const setSpeakingExercises = useCallback(
    (on: boolean) => setState((p) => ({ ...p, speakingExercises: on })),
    [],
  );
  const setListeningExercises = useCallback(
    (on: boolean) => setState((p) => ({ ...p, listeningExercises: on })),
    [],
  );

  const language: Language = useMemo(
    () =>
      languages.find((l) => l.code === state.languageCode) ??
      languages[DEFAULT_LANGUAGE_INDEX] ??
      languages[0],
    [state.languageCode],
  );
  const joinedAt = useMemo(() => dayjs(state.joinedAt), [state.joinedAt]);
  const activeDaysSet = useMemo(
    () => new Set(state.activeDays),
    [state.activeDays],
  );

  const localUsers = useMemo<LocalUserSummary[]>(
    () => Object.values(localUsersMap).map(toSummary),
    [localUsersMap],
  );

  const value: GameContextValue = {
    userName: state.userName,
    currentXP: state.currentXP,
    userLevel: state.userLevel,
    completedLessons: state.completedLessons,
    isAuthenticated: state.isAuthenticated,
    name: state.userName,
    username: state.username,
    joinedAt,
    language,
    lingots: state.lingots,
    streak: state.streak,
    activeDays: activeDaysSet,
    xpByDate: state.xpByDate,
    goalXp: state.goalXp,
    soundEffects: state.soundEffects,
    speakingExercises: state.speakingExercises,
    listeningExercises: state.listeningExercises,
    loggedIn: state.isAuthenticated,
    lessonsCompleted: state.completedLessons,
    localUsers,
    login,
    logout,
    completeLessonBlock,
    resetProgress,
    removeLocalUser,
    setName,
    setUsername,
    logIn,
    logOut,
    increaseXp,
    xpToday,
    xpThisWeek,
    addToday,
    isActiveDay,
    increaseLingots,
    setLanguage,
    increaseLessonsCompleted,
    jumpToUnit,
    setGoalXp,
    setSoundEffects,
    setSpeakingExercises,
    setListeningExercises,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = (): GameContextValue => {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame deve ser usado dentro de <GameProvider>.");
  }
  return ctx;
};

export const useGameContextRaw = useGame;
