import * as types from '../actions/types'


export default function ( state = {}, action ) {
  switch (action.type) {
    case types.GET_RESOURCES_BY:
      return Object.assign({}, state, {
        resourcesFound : action.payload
      });
    case types.LOGIN:
      return Object.assign({}, state, {
        userLogged : action.payload
      });
    case types.FETCH_RESOURCE:
      return Object.assign({}, state, {
        resource: action.payload
      });
    default:
      return state
  }
}