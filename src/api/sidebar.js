import request from '@/api/base'

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