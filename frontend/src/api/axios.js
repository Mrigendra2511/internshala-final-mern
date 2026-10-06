import axios from 'axios';

const API = axios.create({
    baseURL: 'https://internshala-final-mern.onrender.com/api/v1', 
    withCredentials: true 
});

export default API;