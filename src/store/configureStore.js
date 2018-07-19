import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const client = axios.create({
  baseURL: 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com',
  responseType: 'json'
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, axiosMiddleware(client))
  )
}

export default configureStore