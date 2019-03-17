import Vue from 'vue'
import Vuex from 'vuex'

import renderer from './modules/renderer'
import tipsMiddleware from './modules/tipsMiddleware'
import globalFlag from './modules/globalFlag'
import user from './modules/user'
import modelPage from './modules/models'
import sidebarRequest from './modules/sidebarRequest'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    renderer,
    tipsMiddleware,
    globalFlag,
    user,
    modelPage,
    sidebarRequest,
  },
  getters
})

export default store