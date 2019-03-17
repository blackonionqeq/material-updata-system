import request from '@/api/base'

export function getPrivateModels() {
  return request({
    url: '/private/model/myAllShoes',
    method: 'get',
  })
}