import axios from 'axios'

const publicURL = 'http://service.ekskul.co.id/api' 
const baseURL = 'http://service.ekskul.co.id/api/v1' 

const retRiveToken = async ()=>{
    const response = await AsyncStorage.getItem('api_token')
    return response
}

const headers = {
    headers: {"Authorization" : `Bearer ${retRiveToken}`}
}

export default api = {
    postLogin: (data) => axios.post(`${publicURL}/login`,data)
}