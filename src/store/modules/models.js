import { getPrivateModels } from '@/api/modelPage'

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
    GetPrivateModels({ commit }) {
      return new Promise((resolve, reject) => {
        getPrivateModels().then(response => {
          const data = response.data
          console.log(data)
          if(data.code == 200) {
            resolve()
          }
          reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default model