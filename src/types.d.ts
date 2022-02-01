type Template = {
  id: string;
  content: string;
  updated: string;
};

type Post = {
  id: string;
  content: string;
  achievementRate: number; // 達成度0-4
  satisfactionLevel: number; // 満足度0-4
  date: string;
};

type UserSettings = {
  name: string;
  isConnectedOuraRing: string;
};
