import * as Types from '../constant/actionTypes'

const initialState = {
    otp : { data: null, fetching: false, error: null }
}

const verifyOtpReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.POST_VERIFY_OTP_REQUEST:
            return {
                otp : { data: null, fetching: true, error: false }
            }
        case Types.POST_VERIFY_OTP_SUCCESS:
            return {
                otp : { data: action.payload, fetching: true, error: false }
            }
        case Types.POST_VERIFY_OTP_FAILURE:
            return { 
                otp : { data: null, fetching: true, error: action.error }
            } 
        default:
            return { ...state }
    }
}

export default verifyOtpReducer;