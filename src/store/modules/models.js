import { 
  getPrivateModels,
  getModelsBySearch,
  getModelsSeriesAndSeasons,
} from '@/api/modelPage'
import {
  updataTagOfModel,
} from '@/api/others'

const model = {
  state: {
    models: []
  },
  mutations: {
    SET_MODELS: (state, models) => {
      state.models = models
    },
  },
  actions: {
    GetPrivateModels2ModelPage({ commit }) {
      return new Promise((resolve, reject) => {
        getPrivateModels().then(response => {
          const data = response.data
          console.log(data)
          if(data.code == 200) {
            resolve(data.value)
          }
          else
            reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetModelsBySearch({},keyword) {
      console.log(keyword)
      return new Promise((resolve, reject) => {
        getModelsBySearch(keyword).then(response => {
          const data = response.data
          console.log(data)
          if(data.code == 200) {
            resolve(data.value)
          }
          else
            reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetModelsSeriesAndSeasons({}) {
      return new Promise((resolve, reject) => {
        getModelsSeriesAndSeasons().then(res => {
          const data = res.data
          console.log(data)
          if(data.code == 200) {
            resolve(data.value)
          }
          else
            reject(data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    UpdataTagOfModel({}, {shoeID, tag}) {
      return new Promise((resolve, reject) => {
        updataTagOfModel(shoeID, tag).then(response => {
          const data = response.data
          console.log(data)
          if(data.code == 200) {
            resolve(data.value)
          }
          else
            reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default model