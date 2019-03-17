import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginByUsername, } from '@/api/login'

const user = {
  state: {
    name: '',
    token: getToken()
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },
  actions: {
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          if(data.code == 200) {
            commit('SET_TOKEN', data.value)
            setToken(response.data.value)
            resolve()
          }
          else 
            reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user