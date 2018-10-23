import * as types from './types'

export function resourcesFound(resources) {
  return {
    type: types.GET_RESOURCES_BY,
    payload: resources
  }
}

export function loginSuccess(user){
  return {
    type: types.LOGIN,
    payload: user 
  }
}