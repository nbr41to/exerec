import { atom } from 'recoil';

/* User Settings */
export const userSettingsState = atom<UserSettings>({
  key: 'userSettingsState',
  default: {
    id: '',
    name: '',
    isConnectedOuraRing: false,
  },
});

/* Template */
export const templatesState = atom<Template[]>({
  key: 'templatesState',
  default: [],
});

/* Achievements */
export const achievementsState = atom<Achievement[]>({
  key: 'achievementsState',
  default: [],
});

/* Formの状態 */
export const newPostContentState = atom<
  Omit<Achievement, 'id' | 'userId' | 'date'>
>({
  key: 'newPostContentState',
  default: {
    content: '',
    achievementRate: 0,
    satisfactionLevel: 0,
  },
});

export const templateFormContentState = atom<Template>({
  key: 'templateFormContentState',
  default: {
    id: '',
    content: '',
    updated: '',
  },
});
