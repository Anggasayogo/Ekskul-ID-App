import * as Types from '../constant/actionTypes'

const initialState = {
    data: [],
    loading: false,
    error: null
}

const loginReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.POST_LOGIN_REQUEST:
            return {
                data : null,
                loading : true,
                error: null
            }
        case Types.POST_LOGIN_SUCCESS:
            return {
                data : action.payload,
                loading: false,
                error: null,
            }
        case Types.POST_LOGIN_FAILURE:
            return {
                data : null,
                loading : false,
                error : action.error 
            } 
        default:
            return { ...state }
    }
}

export default loginReducer;