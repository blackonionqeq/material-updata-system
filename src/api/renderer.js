import request from '@/api/base'

export function getModelsInfoFromBackEnd(id) {
  return request({
    url: `/private/model/shoeModelID=${id}`,
    method: 'get',
  })
}