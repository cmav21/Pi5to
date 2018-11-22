import { combineReducers } from "redux";
import UserReducer from './UserReducer'
import NotificationsReducer from './NotificationsReducer'

const rootReducer = combineReducers({
  users: UserReducer,
  notifications: NotificationsReducer
})

export default rootReducer
