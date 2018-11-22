import * as types from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      let newState = Object.assign({}, state)
      newState[Date.now()] = action.payload
      return newState
    case types.CLEAR_NOTIFICATION:
      let modify = Object.assign({}, state)
      delete modify[action.payload]
      return modify
    default:
      return state
  }
}
