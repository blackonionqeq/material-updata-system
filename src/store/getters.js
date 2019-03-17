const getters = {
  selectedModelID: state => state.renderer.selectedModelID,
  selectedModel: state => state.renderer.selectedModel,
  materialList: state => state.renderer.materialList,
  targetComponent: state => state.renderer.targetComponent,
  targetFurID: state => state.renderer.targetFurID,
  flag: state => state.renderer.flag,
  historyOperation: state => state.renderer.historyOperation,
  historyPointer: state => state.renderer.historyPointer,

  targetOperation: state => state.renderer.targetOperation,
  closeGUIFlag: state => state.renderer.closeGUIFlag,
  showFlag: state => state.tipsMiddleware.showFlag,
  modelInfo: state => state.tipsMiddleware.modelInfo,
  materialInfo: state => state.tipsMiddleware.materialInfo,
  materialImgUrl: state => state.tipsMiddleware.materialImgUrl,
  
  goBackFlag: state => state.globalFlag.goBackFlag,

  token: state => state.user.token,
}
export default getters