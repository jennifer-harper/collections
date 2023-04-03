import { combineReducers } from 'redux'
import theReducer from './collectionsReducer'


//something comes from Collections Component
export default combineReducers({
  something: theReducer
})
