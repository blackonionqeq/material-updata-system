import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const HasShownKey = 'Has-Shown'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getHasShown() {
  return Cookies.get(HasShownKey)
}

export function setHasShown() {
  return Cookies.set(HasShownKey, true)
}