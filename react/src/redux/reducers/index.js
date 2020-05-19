import { combineReducers } from 'redux'
import { collapse } from './setting'
import { tagList } from './tag'
const reducers = combineReducers({
  collapse, tagList
})

export default reducers
