const modelsInfo = require('@/../static/js/modelSquare')
const materialsInfo = require('@/../static/js/materialDetail')

const tipsMiddleware = {
  state: {
    // The info when wanna show tips which can be separate by severial types.
    showFlag: null,
    // The info which show model's param.
    modelInfo: null,
    // The info which show material's param.
    materialInfo: null,
    materialImgUrl: null,
  },
  mutations: {
    SET_SHOWFLAG: (state, newFlag) => {
      state.showFlag = newFlag
    },
    SET_MODELINFO: (state, modelID) => {
      state.modelInfo = modelsInfo.models[modelID - 1]
      console.log(state.modelInfo)
    },
    SET_MATERIALINFO: (state, materialID) => {
      state.materialInfo = materialsInfo.selectMaterialInfo(materialID)
    },
    SET_MATERIALIMGURL: (state, imgUrl) => {
      state.materialImgUrl = imgUrl
    }
  },
  actions: {
    setShowFlag({ commit }, newFlag) {
      commit('SET_SHOWFLAG', newFlag)
    },
    resetShowFlag({ commit }) {
      commit('SET_SHOWFLAG', 0)
    },
    setModelInfo({ commit }, newID) {
      commit('SET_MODELINFO', newID)
    },
    setMaterialInfo({ commit }, newInfo) {
      console.log(newInfo)
      commit('SET_MATERIALINFO', newInfo.furID)
      commit('SET_MATERIALIMGURL', newInfo.furImg)
    },
  }
}

export default tipsMiddleware