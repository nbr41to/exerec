type Template = {
  id: string;
  content: string;
  updated: string;
};

type Achievement = {
  id: string;
  userId: string;
  content: string;
  achievementRate: number; // 達成度0-4
  satisfactionLevel: number; // 満足度0-4
  date: string;
};

type UserSettings = {
  id: string;
  name: string;
  isConnectedOuraRing: boolean;
};
