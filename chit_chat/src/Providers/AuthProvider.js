import { createContext } from "react";
import { useProvideAuth } from "../hooks";

const initializeState = {
    user: null,
    login: ()=>{},
    logout: ()=>{},
    signup: () => {},
    loading:true,
    updateUser: ()=>{},
}
export const AuthContext = createContext(initializeState);
export const AuthProvider = ({children}) =>{
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}