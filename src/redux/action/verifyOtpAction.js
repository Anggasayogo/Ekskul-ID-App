import api from '../../services/Api'
import * as Types from '../constant/actionTypes'
import * as NavigationService from '../../services/NavigationService'
import { ErrorAlert, SuccessHandler } from '../../Helper/AlertHanlder'

export const postVerifyRequest = ()=> ({
    type : Types.POST_VERIFY_OTP_REQUEST
})

export const postVerifySuccess = (detail)=> ({
    type : Types.POST_VERIFY_OTP_SUCCESS,
    payload : detail 
})

export const postVerifyFailure = (error)=> ({
    type : Types.POST_VERIFY_OTP_FAILURE,
    error : error
})

export const verifyOtpActions =  (data)=>{
    return async (dispatch) => {
        dispatch(postVerifyRequest())
        api.postVerifyOtp(data)
        .then((response)=> {
            dispatch(postVerifySuccess(response?.data))
            NavigationService.replace('MainApp')
        })
        .catch((error) =>{ 
            dispatch(postVerifyFailure(error))
            ErrorAlert("Upss.. Your otp hass expired!")
        })
    }
}
