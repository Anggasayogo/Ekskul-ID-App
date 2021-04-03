import api from '../../services/Api'
import * as Types from '../constant/actionTypes'
import * as NavigationService from '../../services/NavigationService'
import AsyncStorage from '@react-native-community/async-storage'

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
            AsyncStorage.setItem('credential',response?.data)
            AsyncStorage.setItem('id_user',response?.data?.data?.id_user)
            NavigationService.navigate('MainApp')
        })
        .catch((error) =>{ 
            dispatch(postLoginFailure(error))
            NavigationService.goBack()
        })
    }
}
