import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: 'http://test.4dshoetech.com/sdtc_show',
  // timeout: 6666,
})

service.interceptors.request.use(
  config => {
    if(store.getters.token) {
      config.headers['token'] = getToken()
    }
    console.log(config)
    return config
  },
  error => {
    console.log('Request error.')
    console.log(error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response,
  error => {
    console.log('Response error.')
    console.log(error)
    return Promise.reject(error)
  }
)



export default service