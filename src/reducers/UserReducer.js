import * as types from '../actions/types'


export default function ( state = {}, action ) {
  switch (action.type) {
    case types.GET_RESOURCES_BY:
      return Object.assign({}, state, {
        resourcesFound : action.payload
      })  
    default:
      return state
  }
}