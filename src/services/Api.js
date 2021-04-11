import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const publicURL = 'https://refactor.ekskul.co.id/api' 
const privateURL = 'https://refactor.ekskul.co.id/api/v1'

let buildingToken = []

AsyncStorage.getItem('credent')
.then((response)=>{
    (data) => axios.post(`${publicURL}/login`,data)
    buildingToken.push(`asuu`)
})

AsyncStorage.getItem('credent',(err,token)=>(
    buildingToken.push(token)
))

export default api = {
    // Auth
    postLogin: (data) => axios.post(`${publicURL}/login`,data),
    postRegister: (data) => axios.post(`${publicURL}/register`,data),
    postVerifyOtp : (data) => axios.post(`${publicURL}/verify`,data, { headers: {"Authorization" : `Bearer ${token}`} }),

    //Home
    getBaner: () => axios.get(`${privateURL}/setings`, { headers: {"Authorization" : `Bearer ${token}`} }),
}

