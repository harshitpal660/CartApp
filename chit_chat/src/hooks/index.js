import { useState,useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
// import * as jwt from "jwt-decode";
import jwt_decode from 'jwt-decode';
import { login as userLogin,signup as userSignup } from "../API";
import { 
    setItemLocalStorage,
    LOCALSTORAGE_TOKEN_KEY, 
    removeItemFromLocalStorage, 
    getItemFromLocalStorage,
} from "../Utils";

export const useAuth = ()=>{
    return useContext(AuthContext)
}
export const useProvideAuth = ()=>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);  
    useEffect(()=>{
        const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

        if(userToken){
            const user = jwt_decode(userToken)
            setUser(user);
        }
        setLoading(false);
    },[])

    const login = async(email,password) => {
        const response = await userLogin(email,password);
        console.log(response)
        if(response.success){
            setUser(response.data.user);
            setItemLocalStorage(
                LOCALSTORAGE_TOKEN_KEY,
                response.data.token ? response.data.token:null
                );
            return{
                success: true
            } 
        }else{
            return{
                success: false,
                message: response.message
            }
        }
    };

    const signup = async(name,email,password,confirmPassword) =>{
        const response = await userSignup(name,email,password,confirmPassword);
        // console.log(response)
        if(response.success){
            return{
                success:true
            };
        }else{
            return{
                success:false,
                message:response.message
            }
        }
    }
    const logout = () =>{
        setUser(null)
        removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    };


   
    return {
        user,
        loading,
        login,
        logout,
        signup
    }
}