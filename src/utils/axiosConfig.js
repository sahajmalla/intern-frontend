import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://still-wildwood-92280.herokuapp.com/api'
});

axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;


export default axiosConfig;