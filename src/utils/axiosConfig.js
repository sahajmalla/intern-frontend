import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://localhost:8000/api'
});

axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;


export default axiosConfig;