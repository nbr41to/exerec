import { atom } from 'recoil';
import { _achievements, _templates, _user_settings } from 'src/__mocks__/data';

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
  default: _user_settings,
});

/* Template */
export const templatesState = atom<Template[]>({
  key: 'templatesState',
  default: _templates,
});

/* Achievements */
export const achievementsState = atom<Achievement[]>({
  key: 'achievementsState',
  default: _achievements,
});
export const achievementsHistoriesState = atom<Achievement[]>({
  key: 'achievementsHistoriesState',
  default: _achievements,
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

/* 全画面共通Modalの状態l */
export const commonModalState = atom<{ cautionLogin: boolean }>({
  key: 'commonModalState',
  default: {
    cautionLogin: false,
  },
});
