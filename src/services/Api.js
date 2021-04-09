import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const publicURL = 'https://service.ekskul.co.id/api' 
const privateURL = 'https://service.ekskul.co.id/api/v1' 

const newArr = []

const retRiveToken = () => {
    AsyncStorage.getItem('credent')
        .then((res)=>{
            const headers = {
                headers: {"Authorization" : `Bearer ${res}`}
            }
            newArr.push(headers)
        }).catch((err)=> console.tron.log(err))
}
retRiveToken()

// console.tron.log("MMK",newArr)
// Calling Api
export default api = {
    postLogin: (data) => axios.post(`${publicURL}/login`,data),
    getBaner: () => axios.get(`${privateURL}/setings`, ),
}