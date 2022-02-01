import { atom } from 'recoil';

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
