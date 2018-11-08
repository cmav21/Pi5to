import * as types from './types'

import axios from 'axios'
import API from '../api'


export function resourceAdded(added) {
  return {
    type: types.RESOURCE_ADDED,
    payload: added
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