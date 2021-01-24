import api from '../../services/Api'
import * as Types from '../constant/actionTypes'

export const postLoginRequest = ()=> ({
    type : Types.POST_LOGIN_REQUEST
})

export const postLoginSuccess = (detail)=> ({
    type : Types.POST_LOGIN_SUCCESS,
    payload : detail 
})

export const postLoginFailure = (error)=> ({
    type : Types.POST_LOGIN_FAILURE,
    error : error
})

export const loginActions = (data)=>{
    return async (dispatch) => {
        dispatch(postLoginRequest())
        api.postLogin(data)
        .then((response)=> {
            dispatch(postLoginSuccess(response?.data))
            console.log("Success Login",response?.data) 
        })
        .catch((error) =>{ 
            dispatch(postLoginFailure(error))
            console.log("Ggagl login",error) 
        })
    }
}
