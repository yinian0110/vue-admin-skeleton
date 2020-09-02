import { SET_TITLE_MUTATION } from './mutations';
import title from './title';


export default {
  state: {
    title: title.get(),
  },
  getters: {},
  mutations: {
    [SET_TITLE_MUTATION](state, payload) {
      state.title = payload.title;
      title.set(state.title);
    },
  },
};
