import request from '@/api/base'

// Some request relevant to materials.

export function getCollectedMaterials(shoeID) {
  return request({
    url: '/private/material/recommendMaterial',
    method: 'get',
    params: {
      shoeID
    }
  })
}

export function getPublicMaterials() {
  return request({
    url: '/private/material/publicMaterial',
    method: 'get',
  })
}

export function getPrivateMaterials() {
  return request({
    url: '/private/material/myMaterial',
    method: 'get',
  })
}

// Some request relevant to models.
export function getChangeableComponents(modelID) {
  console.log( modelID)
  return request({
    url: `/private/model/ChangeableProfile=${modelID}`,
    method: 'get',
    // params: {
    //   ChangeableProfile: modelID
    // }
  })
}

export function getPublicModels() {
  return request({
    url: '/private/model/publicShoes',
    method: 'get',
  })
}

export function getPrivateModels() {
  return request({
    url: '/private/model/myAllShoes',
    method: 'get',
  })
}

export function saveAModel(list) {
  return request({
    url: '/private/model/scheme',
    method: 'post',
    params: {
      componentID: list.componentID,
      materialID: list.materialID,
      tile: list.tile,
      color: list.color,
      shoeID: list.shoeID,
    }
  })
}