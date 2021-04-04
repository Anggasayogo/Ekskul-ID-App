import * as Types from '../constant/actionTypes'

const initialState = {
    baner : { data: null, fetching: false, error: null }
}

const getBanerReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.GET_BANER_REQUEST:
            return {
                baner : { data: null, fetching: true, error: false }
            }
        case Types.GET_BANER_SUCCESS:
            return {
                baner : { data: action.payload, fetching: true, error: false }
            }
        case Types.GET_BANER_FAILURE:
            return { 
                baner : { data: null, fetching: true, error: action.error }
            } 
        default:
            return { ...state }
    }
}

export default { getBanerReducer };