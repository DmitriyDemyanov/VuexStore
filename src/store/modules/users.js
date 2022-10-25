import Vue from "vue";

const usersStore = {
  namespaced: true,
  state: {
    list: {
      1: { name: 'Dima', age: 30 },
      2: { name: 'Ihor', age: 22 },
      3: { name: 'Hena', age: 33 }
    },
  },
  getters: {
    usersList: (state) => Object.values(state.list),
    names: (state) => Object.values(state.list).map(el => el.name),
  },
  mutations: {
    ADD_USER(state, user) {
      Vue.set(state.list, user.id, user);
    }
  },
  actions: {
    addNewUser({ commit }, user) {
      const newUser = { ...user, id: String(Math.random()) };
      commit('ADD_USER',newUser);
    }
  },
};

export default usersStore;
