// const modelsInfo = require('@/../static/js/modelSquare')
// const materialsInfo = require('@/../static/js/materialDetail')
import {
  getInfoOfAModel,
} from '@/api/others'

const tipsMiddleware = {
  state: {
    // The info when wanna show tips which can be separate by severial types.
    showFlag: null,
    // The info which show model's param.
    modelInfo: null,
    tagsInfo: null,
    // The info which show material's param.
    materialInfo: null,
    materialImgUrl: null,
    // The info to let renderer run the function of save patterns.
    saveFlag: false,
  },
  mutations: {
    SET_SHOWFLAG: (state, newFlag) => {
      state.showFlag = newFlag
    },
    SET_MODELINFO: (state, modelInfo) => {
      // state.modelInfo = modelsInfo.models[modelID - 1]
      // console.log(state.modelInfo)
      state.modelInfo = modelInfo
    },
    SET_TAGSINFO: (state, tagsInfo) => {
      state.tagsInfo = tagsInfo
      console.log(state.tagsInfo)
    },
    SET_MATERIALINFO: (state, materialID) => {
      state.materialInfo = materialsInfo.selectMaterialInfo(materialID)
    },
    SET_MATERIALIMGURL: (state, imgUrl) => {
      state.materialImgUrl = imgUrl
    },
    SET_SAVEFLAG: (state) => {
      state.saveFlag = true
    },
    RESET_SAVEFLAG: (state) => {
      state.saveFlag = false
    },
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
    GetInfoOfAModel({ commit }, shoeID) {
      return new Promise((resolve, reject) => {
        getInfoOfAModel(shoeID).then(res => {
          const data = res.data
          console.log(data)
          if(data.code == 200) {
            resolve(data.value)
            commit('SET_MODELINFO', data.value)
            // commit('SET_TAGSINFO', data.value)
          }
          else
            reject(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    SetSaveFlag({ commit }) {
      commit('SET_SAVEFLAG')
    },
    ResetSaveFlag({ commit }) {
      commit('RESET_SAVEFLAG')
    },
  }
}

export default tipsMiddleware