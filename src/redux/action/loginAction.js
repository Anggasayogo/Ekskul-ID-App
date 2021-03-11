import api from '../../services/Api'
import * as Types from '../constant/actionTypes'
import * as NavigationService from '../../services/NavigationService'

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
            NavigationService.navigate('MainApp')
        })
        .catch((error) =>{ 
            dispatch(postLoginFailure(error))
        })
    }
}
