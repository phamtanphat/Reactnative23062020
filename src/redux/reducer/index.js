import wordReducer from "./wordReducer"
import filterModeFormReducer from "./filterModeFormReducer"
import shouldShowFormReducer from "./shouldShowFormReducer"
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    words : wordReducer,
    shouldShowForm : shouldShowFormReducer,
    filterMode : filterModeFormReducer
})
export default rootReducer