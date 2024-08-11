import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 

export const postLog=  (login)=>{
    try{
        const response =  axios.post(apiRoutes.login.aut,login);
        return response;

    }catch(error){
        throw error;
    }

}