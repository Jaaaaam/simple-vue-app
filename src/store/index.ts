import { defineStore } from 'pinia';

interface Post {
  title: string;
  body: string;
}

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    post: {
        title: '',
        body: '',
    } as Post,
  }),
  actions: {
    setPost(newPost: Post) {
      this.post = newPost;
      console.log(this.post, 'CHECK NEW POST')
    },
  },
});