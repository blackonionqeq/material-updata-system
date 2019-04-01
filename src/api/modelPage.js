import request from '@/api/base'

export function getPrivateModels() {
  return request({
    url: '/private/model/myAllShoes',
    method: 'get',
  })
}

export function getModelsBySearch(keyword) {
  return request({
    url: '/private/model/searchShoes',
    method: 'post',
    params: {
      keyword
    }
  })
}

export function getModelsSeriesAndSeasons() {
  return request({
    url: '/private/model/mySeriesAndSeason',
    method: 'get',
  })
}