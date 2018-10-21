import { combineReducers } from "redux";
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
  users: UserReducer
})

export default rootReducer
