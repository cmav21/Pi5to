import * as types from './types'

export function resourcesFound(resources) {
  return {
    type: types.GET_RESOURCES_BY,
    payload: resources
  }
}