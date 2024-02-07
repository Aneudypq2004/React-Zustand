
import axios from "axios";


const rentApi = axios.create({
    baseURL: "http://localhost:3000/api"
});

rentApi.interceptors.request.use((config) => {

    const token = localStorage.getItem('auth-token');

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export { rentApi }