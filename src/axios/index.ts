import axios from 'axios'

const ax = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

ax.interceptors.request.use(function(config){
    const token =  localStorage.getItem('token');
    if(token){
        config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default ax;