import api from '../../services/Api'
import * as Types from '../constant/actionTypes'
import * as NavigationService from '../../services/NavigationService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ErrorAlert, SuccessHandler } from '../../Helper/AlertHanlder'

export const postRegisterRequest = ()=> ({
    type : Types.POST_REGISTER_REQUEST
})

export const postRegisterSuccess = (detail)=> ({
    type : Types.POST_REGISTER_SUCCESS,
    payload : detail 
})

export const postRegisterFailure = (error)=> ({
    type : Types.POST_REGISTER_FAILURE,
    error : error
})

export const registerActions =  (data)=>{
    return async (dispatch) => {
        dispatch(postRegisterRequest())
        api.postRegister(data)
        .then((response)=> {
            dispatch(postRegisterSuccess(response?.data))
            AsyncStorage.setItem('credent',response.data?.data?.token)
            NavigationService.replace('OtpScreen')
        })
        .catch((error) =>{ 
            dispatch(postRegisterFailure(error))
            ErrorAlert("Upss.. Email atau Password Salah!")
        })
    }
}
