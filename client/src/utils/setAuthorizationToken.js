import axios from 'axios';

//This function is used to sotre or delete token to local storage
export default function setAuthorizationtoken(token){
    if (token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}