import request from '@/api/base'

export function loginByUsername(username, password) {
  let account = username
  return request({
    url: '/user/login',
    method: 'post',
    params: {
      account,
      password
    }
  })
}
