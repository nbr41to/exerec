import { atom } from 'recoil';

/* Login User */
export const loginUserState = atom<LoginUser>({
  key: 'loginUser',
  default: {
    id: null, // null: not logged in
    isLoading: false,
  },
});

/* User Settings */
export const userSettingsState = atom<UserSettings>({
  key: 'userSettingsState',
  default: {
    id: '',
    name: '',
    ouraPersonalAccessToken: null,
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
export const achievementsHistoriesState = atom<Achievement[]>({
  key: 'achievementsHistoriesState',
  default: [],
});

/* Formの状態 */
export const newPostContentState = atom<Omit<Achievement, 'id' | 'date'>>({
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

/* Oura Activities */
export const ouraActivitiesState = atom<null | any[]>({
  key: 'ouraActivitiesState',
  default: null,
});
