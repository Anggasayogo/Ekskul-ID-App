import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const publicURL = 'https://service.ekskul.co.id/api' 
const privateURL = 'https://service.ekskul.co.id/api/v1' 

const retRiveToken = async () => {
    try {
        const response = await AsyncStorage.getItem('credent')
        const headers = {
            headers: {"Authorization" : `Bearer ${response}`}
        }
        return headers
    } catch (error) {
        console.log(error)
    }
}

retRiveToken()
// Calling Api
export default api = {
    postLogin: (data) => axios.post(`${publicURL}/login`,data),
    getBaner: () => axios.get(`${privateURL}/setings`, ),
}