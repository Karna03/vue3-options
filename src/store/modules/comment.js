export default {
  namespaced: true,
  state: () => ({
    id: 1,
    content: "",
    items: [
      {
        id: 1,
        content: "hihihi",
        likes: 2,
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        date: new Date(Date.now()).toLocaleString(),
      },
    ],
    item: {
      id: 0,
      content: "",
      likes: 2,
      avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
      date: new Date(Date.now()).toLocaleString(),
    },
  }),
  mutations: {
    setComment(state) {
      state.items.push({
        id: state.id++,
        content: state.content,
        likes: 2,
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        date: new Date(Date.now()).toLocaleString(),
      });
    },
    removeItem(state, tweet) {
      state.items = state.items.filter((t) => t !== tweet);
      localStorage.setItem("item-list", JSON.stringify(state.items));
    },
    parseItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    addTweet({ state, commit }) {
      commit("setComment", state);

      localStorage.setItem("item-list", JSON.stringify(state.items));
    },
  },
  getters: {
    allComments: (state) => state,
  },
};
