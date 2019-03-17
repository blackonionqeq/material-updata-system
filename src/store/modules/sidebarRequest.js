import { 
  getCollectedMaterials,
  getPublicMaterials,
  getPrivateMaterials
} from '@/api/sidebar'

const sidebarRequest = {
  state: {
    shoeID: null,
  },
  mutations: {
    SET_SHOEID: (state, newID) => {
      state.shoeID = newID
    },
  },
  actions: {
    GetCollectedMaterials({ commit }, newID) {
      return new Promise((resolve, reject) => {
        getCollectedMaterials(newID).then(response => {
          const data = response.data
          console.log(data)
          if(data.code == 200) {
            commit('SET_SHOEID', newID)
            resolve(data.value)
          }
          else
            reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetPublicMaterials() {
      console.log(1)
      return new Promise((resolve, reject) => {
        console.log(2)
        getPublicMaterials().then(response => {
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
    GetPrivateMaterials() {
      return new Promise((resolve, reject) => {
        getPrivateMaterials().then(response => {
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

export default sidebarRequest