import {combineReducers} from 'redux'

import main from './main'
import details from './details'

const rootReducer = combineReducers({
  main,
  details
})

export default rootReducer