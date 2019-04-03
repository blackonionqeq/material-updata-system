import request from '@/api/base'

export function getInfoOfAModel(shoeID) {
  return request({
    url: '/private/model/getShoeInfor',
    method: 'get',
    params: {
      shoeID
    }
  })
}

export function updataTagOfModel(shoeID, tag) {
  return request({
    url: '/private/model/addTag',
    method: 'post',
    params: {
      shoeID,
      tag
    }
  })
}

export function addTagOnMaterial(materialID, tag) {
  return request({
    url: '/private/material/addMaterialTag',
    method: 'post',
    params: {
      materialID,
      tag
    }
  })
}
