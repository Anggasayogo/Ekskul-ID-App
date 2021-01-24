import { combineReducers } from "redux";

// login Reducer
import loginReducer from './loginReducer'

const reducer = combineReducers({
    loginReducer : loginReducer,
})

export default reducer