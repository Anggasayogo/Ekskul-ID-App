import * as Types from '../constant/actionTypes'

const initialState = {
    register : { data: null, fetching: false, error: null }
}

const registerReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.POST_REGISTER_REQUEST:
            return {
                register : { data: null, fetching: true, error: false }
            }
        case Types.POST_REGISTER_SUCCESS:
            return {
                register : { data: action.payload, fetching: true, error: false }
            }
        case Types.POST_REGISTER_FAILURE:
            return { 
                register : { data: null, fetching: true, error: action.error }
            } 
        default:
            return { ...state }
    }
}

export default registerReducer;