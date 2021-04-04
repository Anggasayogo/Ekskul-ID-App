import api from '../../services/Api'
import * as Types from '../constant/actionTypes'

export const getBanerRequest = ()=> ({
    type : Types.GET_BANER_REQUEST
})

export const getBanerSuccess = (detail)=> ({
    type : Types.GET_BANER_SUCCESS,
    payload : detail 
})

export const getBanerFailure = (error)=> ({
    type : Types.GET_BANER_FAILURE,
    error : error
})

export const getBanerActions = (data)=>{
    return async (dispatch) => {
        dispatch(getBanerRequest())
        api.getBaner(data)
        .then((response)=> {
            dispatch(getBanerSuccess(response?.data))
        })
        .catch((error) =>{ 
            dispatch(getBanerFailure(error))
        })
    }
}
