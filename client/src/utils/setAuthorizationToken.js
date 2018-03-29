import axios from 'axios';

export default function setAuthorizationtoken(token){
    if (token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}