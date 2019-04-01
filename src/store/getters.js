const getters = {
  selectedModelID: state => state.renderer.selectedModelID,
  selectedModel: state => state.renderer.selectedModel,
  materialList: state => state.renderer.materialList,
  targetComponent: state => state.renderer.targetComponent,
  targetFurID: state => state.renderer.targetFurID,
  flag: state => state.renderer.flag,
  historyOperation: state => state.renderer.historyOperation,
  historyPointer: state => state.renderer.historyPointer,
  componentInfo: state => state.renderer.componentInfo,
  materialInfo2: state => state.renderer.materialInfo2,
  colorsAndTiles: state => state.renderer.colorsAndTiles,

  targetOperation: state => state.renderer.targetOperation,
  closeGUIFlag: state => state.renderer.closeGUIFlag,
  showFlag: state => state.tipsMiddleware.showFlag,
  modelInfo: state => state.tipsMiddleware.modelInfo,
  materialInfo: state => state.tipsMiddleware.materialInfo,
  materialImgUrl: state => state.tipsMiddleware.materialImgUrl,
  tagsInfo: state => state.tipsMiddleware.tagsInfo,
  saveFlag: state => state.tipsMiddleware.saveFlag,

  currentModelList: state => state.sidebarRequest.currentModelList,
  tmpObject: state => state.sidebarRequest.tmpObject,
  
  goBackFlag: state => state.globalFlag.goBackFlag,

  token: state => state.user.token,
  username: state => state.user.name,
  hasShown: state => state.user.hasShown
}
export default getters