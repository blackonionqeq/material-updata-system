import Cookies from 'js-cookie'
import { stat } from 'fs';
import {
  getModelsInfoFromBackEnd,
} from '@/api/renderer'

const renderer = {
  state: {
    // selectedModelID: Cookies.get('selectedModelPointer') || 0,
    flag: 0,
    // The info when wanna change a model
    selectedModelID: 0,
    selectedModel: null,
    // materialList: null,
    // The info when wanna change a fur
    targetComponent: null,
    targetFurID: null,
    // A Stack record the history operation
    // The operation has three types, include color, tile and furInfo.
    // The operations of color and tile is in renderer.vue,
    // The furInfo's is in siderbar's materialSelector.vue.
    historyOperation: [],
    historyPointer: -1,
    tmpOperation: null,
    targetOperation: null,
    closeGUIFlag: 0,

    // change a changeable component
    componentInfo: null,
    // change a material
    materialInfo2: null,
    // colors and tiles info
    colorsAndTiles: [],
  },
  mutations: {
    SET_FLAG: (state) => {
      state.flag += 1
    },
    SELECT_A_MODEL: (state, pointer) => {
      state.selectedModelID = pointer
    },
    GET_MODEL_INFO: (state, modelInfo) => {
      // state.selectedModel = modelMap.getModelInfo(pointer)
      state.selectedModel = modelInfo
    },
    // GET_MATERIAL_INFO: state => {
    //   // state.materialList = materialList.materials
    // },
    RESET_HISTORY_OPERATION: (state) => {
      state.historyOperation = []
      state.historyPointer = -1
      state.tmpOperation = null
      state.targetOperation = null
    },
    FILL_TARGET_MATERIAL_INFO: (state, {componentName, furID}) => {
      state.targetComponent = componentName
      state.targetFurID = furID
    },
    PUSH_AN_OPERATION: (state, operation) => {

      if(state.historyPointer +1 == state.historyOperation.length) {
        state.historyOperation.push(operation)
        state.historyPointer++
      }
      else {
        let tmp = state.historyOperation.slice(0,state.historyPointer +1)
        tmp.push(operation)
        state.historyPointer++
        state.historyOperation = null
        state.historyOperation = tmp
      }
      // console.log(state.historyOperation)
      // console.log('pointer is ', state.historyPointer)
    },
    UNDO_OPERATION: (state) => {
      if(state.historyPointer +1 == state.historyOperation.length)
        state.historyPointer--
      state.targetOperation = state.historyOperation[state.historyPointer--]
      state.closeGUIFlag = 1
      // console.log(state.historyOperation[state.historyPointer+1])
      console.log(state.historyOperation)
    },
    REDO_OPERATION: (state) => {
      if(state.historyPointer == -1)
        state.historyPointer++
      state.targetOperation = state.historyOperation[++state.historyPointer]
      // console.log(state.historyOperation[state.historyPointer-1]))
      console.log(state.historyOperation)

    },
    GET_TMP_OPERATION: (state, tmpOp) => {
      state.tmpOperation = tmpOp
      // console.log(state.tmpOperation)
    },
    PUSH_TMP_OPERATION: (state) => {
      if(state.tmpOperation == null)
        return
      state.historyOperation.push(state.tmpOperation)
      state.tmpOperation = null
    },
    PUSH_TMP_OPERATION_WHEN_CHANGE_OBJACT: (state, object) => {
      console.log(`object is ${object}`)
      if(state.tmpOperation != null && state.tmpOperation.componentName != object) {
        state.historyOperation.push(state.tmpOperation)
        state.closeGUIFlag = 1
      }
      return
    },
    RESET_CLOSEGUIFLAG: (state) => {
      state.closeGUIFlag = 0
    },
    DEEP_COMPARE: (state, itemB) => {
      let itemA = state.historyOperation[state.historyPointer]
      let keys = Object.keys(itemA)
      for(let i = 0; i < keys.length; i++) {
        if(!itemB[keys[i]] || itemA[keys[i]] !== itemB[keys[i]])
          break
      }
      if(i <= keys.length) {
        return false
      }else {
        return true
      }
    },
    GET_COMPONENTINFO: (state, componentInfo) => {
      state.componentInfo = componentInfo
    },
    GET_MATERIALINFO: (state, materialInfo) => {
      state.materialInfo2 = materialInfo
    },
    SET_COLORSANDTILES: (state, list) => {
      state.colorsAndTiles = list
    },
  },
  actions: {
    async getModelInfo({ commit }, pointer) {
      commit('GET_MODEL_INFO', pointer)
      commit('GET_MATERIAL_INFO')
      commit('SELECT_A_MODEL', pointer)
    },
    fillOutTargetMaterial({ commit }, info) {
      commit('FILL_TARGET_MATERIAL_INFO', info)
    },
    pushOperation({ commit }, ope) {
      // if(commit('DEEP_COMPARE', ope))
      commit('PUSH_AN_OPERATION', ope)
    },
    redo_or_undo_operation({ commit }, flag) {
      if(flag === 1)
        commit('UNDO_OPERATION')
      else if(flag === 2)
        commit('REDO_OPERATION')
    },
    overwrite_tmp_operation({ commit }, op) {
      commit('GET_TMP_OPERATION', op)
    },
    push_tmp_operation_and_undo({ commit }) {
      commit('PUSH_TMP_OPERATION')
      commit('UNDO_OPERATION')
    },
    judge_if_push_tmp_operation({ commit }, componentName) {
      commit('PUSH_TMP_OPERATION_WHEN_CHANGE_OBJACT', componentName)
    },
    reset_close_flag({ commit }) {
      commit('RESET_CLOSEGUIFLAG')
    },
    reset_historyOperation({ commit }) {
      commit('RESET_HISTORY_OPERATION')
    },

    // Get model's info from back-end.
    GetModelsInfoFromBackEnd({ commit }, id) {
      return new Promise((resolve, reject) => {
        getModelsInfoFromBackEnd(id).then(response => {
          const data = response.data
          console.log(data)
          if(data.code == 200) {
            resolve(data.value)
            commit('GET_MODEL_INFO', data.value)
            commit('SELECT_A_MODEL', id)
          }
          else
            reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // Get target component to change.
    GetComponentsInfo({ commit }, components) {
      commit('GET_COMPONENTINFO', components)
    },

    // Get target material to change.
    GetMaterialInfo({ commit }, material) {
      commit('GET_MATERIALINFO', material)
    },
    GetColorsAndTiles({ commit }, list) {
      commit('SET_COLORSANDTILES', list)
    },
  }
}

export default renderer