const globalFlag = {
  state: {
    goBackFlag: 0,
  },
  mutations: {
    SET_GOBACKFLAG: (state, newVal) => {
      state.goBackFlag = newVal
    },
  },
  actions: {
    beforeGoBack({ commit }) {
      commit('SET_GOBACKFLAG', 1)
    },
    resetGoBackFlag({ commit }) {
      commit('SET_GOBACKFLAG', 0)
    }
  }
}

export default globalFlag