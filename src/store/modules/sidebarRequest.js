import { 
  // Materials
  getCollectedMaterials,
  getPublicMaterials,
  getPrivateMaterials,
  // Changeable component
  getChangeableComponents,
  // Models
  getPublicModels,
  getPrivateModels,
} from '@/api/sidebar'
import { stat } from 'fs';

const sidebarRequest = {
  state: {
    shoeID: null,
    currentModelList: [],
    tmpObject: {},
  },
  mutations: {
    SET_SHOEID: (state, newID) => {
      state.shoeID = newID
    },
    SET_CURRENTMODELLIST: (state, list) => {
      // console.log('current is ')
      // console.log(state.currentModelList)
      state.currentModelList = list
    },
    SET_TMPOBJECT: (state, obj) => {
      state.currentModelList.forEach(eachComponent => {
        if(eachComponent.componentName === obj.componentName) {
          obj.componentID = eachComponent.componentID
          eachComponent.materialID = obj.materialID
          eachComponent.materialNumber = obj.materialNumber
          eachComponent.materialImg = obj.materialImg
        }
      })
      state.tmpObject = obj
    }
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

    GetChangeableComponents({},newID) {
      console.log(newID)
      return new Promise((resolve, reject) => {
        console.log(newID)
        getChangeableComponents(newID).then(response => {
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
    GetPublicModels() {
      return new Promise((resolve, reject) => {
        getPublicModels().then(response => {
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
    GetPrivateModels() {
      return new Promise((resolve, reject) => {
        getPrivateModels().then(response => {
          const data = response.data
          console.log(response)
          resolve(data.value)
          // if(data.code == 200) {
          //   resolve(response.data)
          // }
          // else
          //   reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    SetCurrentModelList({ commit }, list) {
      // console.log('list is')
      // console.log(list)
      commit('SET_CURRENTMODELLIST', list)
    },
    SetTmpObject({ commit }, obj) {
      commit('SET_TMPOBJECT', obj)
    },
  }
}

export default sidebarRequest