import api from '../../services/Api'
import * as Types from '../constant/actionTypes'
import * as NavigationService from '../../services/NavigationService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ErrorAlert, SuccessHandler } from '../../Helper/AlertHanlder'

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

export const loginActions =  (data)=>{
    return async (dispatch) => {
        dispatch(postLoginRequest())
        api.postLogin(data)
        .then((response)=> {
            dispatch(postLoginSuccess(response?.data))
            AsyncStorage.setItem('credent',response.data.data.token)
            NavigationService.replace('MainApp')
        })
        .catch((error) =>{ 
            dispatch(postLoginFailure(error))
            ErrorAlert("Upss.. Email atau Password Salah!")
        })
    }
}
