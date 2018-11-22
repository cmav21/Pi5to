import * as types from './types'

import axios from 'axios'
import API from '../api'


export function addNotification(notification) {
  return {
    type: types.ADD_NOTIFICATION,
    payload: notification
  }
}
export function clearNotification(id) {
  return {
    type: types.CLEAR_NOTIFICATION,
    payload: id
  }
}
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

export function getResource(resourceID) {
  console.log("fetching");

  return dispatch => {
    axios.get(API + `/recursos/${resourceID}`)
    .catch(error => {
      console.log(error)
    })
    .then(res => {
      dispatch({
        type: types.FETCH_RESOURCE,
        payload: res.data
      })
    })  
  }
}

export function updateResource(resource){
    return {
        type: types.FETCH_RESOURCE,
        payload: resource.data
    }
}