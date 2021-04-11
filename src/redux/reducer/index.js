import { combineReducers } from "redux";

// login Reducer
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import verifyOtpReducer from './verifyOtpReducer'

const reducer = combineReducers({
    loginReducer : loginReducer,
    registerReducer : registerReducer,
    verifyOtpReducer : verifyOtpReducer,
})

export default reducer