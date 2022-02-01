import { atom } from 'recoil';

export const newPostContentState = atom<Omit<Post, 'id' | 'date'>>({
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
