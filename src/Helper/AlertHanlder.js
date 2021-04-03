import { Platform, ToastAndroid } from 'react-native'
import ToastIOS from 'react-native-simple-toast'
import {showMessage} from 'react-native-flash-message';

const ErrorHandler = (payload) => {
  switch (payload.problem) {
    case 'CLIENT_ERROR':
      return showMessage({
        message: 'Sorry something went wrong.',
        type: 'danger'
      })
    case 'SERVER_ERROR':
      return showMessage({
        message: 'Internal server error.',
        type: 'danger'
      })
    case 'TIMEOUT_ERROR':
      return showMessage({
        message: 'Request timeout.',
        type: 'danger'
      })
    case 'CONNECTION_ERROR':
      return showMessage({
        message: 'Server not available.',
        type: 'danger'
      })
    case 'NETWORK_ERROR':
      return showMessage({
        message: 'Network not available.',
        type: 'danger'
      })
    case 'CANCEL_ERROR':
      return showMessage({
        message: 'Request has been canceled.',
        type: 'danger'
      })
    // default:
    //   if (Platform.OS === 'android') return ToastAndroid.show('Sorry something error', ToastAndroid.SHORT)
    //   console.tron.warn(payload)
    //   return console.tron.warn('Sorry something error')
  }
}

const ErrorAlert = msg => {
  showMessage({
    message: msg,
    type: 'danger'
  })
}

const SuccessHandler = msg => {
  showMessage({
    message: msg,
    type: 'success'
  })
}

const Toast = (msg, duration) => {
  return Platform.OS === 'ios' ?
    ToastIOS.show(msg, ToastIOS[duration]) :
    ToastAndroid.show(msg, ToastAndroid[duration])
}

export {
  Toast,
  ErrorHandler,
  ErrorAlert,
  SuccessHandler
}
