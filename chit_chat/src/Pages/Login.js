import styles from "../Styles/login.module.css"
import toast from 'react-hot-toast';
import { useState } from "react";
import { useAuth } from "../hooks";
import { useNavigate,Navigate } from 'react-router-dom';
// import { login } from "../API";
const Login = ()=>{

    const [email,setEmail] = useState('');
    const [loggingin,setLoggingin] = useState(false);
    const [password,setPassword] = useState('');
    const history = useNavigate();
    const auth = useAuth();
    console.log(auth);
    const handleSubmit = async(e)=>{
        e.preventDefault(); // we dont want page reload
        setLoggingin(true);
        
        if(!email || !password){
            setLoggingin(false)
            return toast.error("Please enter both email and password")
            // console.log("inside")
            // toast.success("Successfully Logged in")
        }

        const response = await auth.login(email,password);
        console.log(response)
        if(response.success){
            history('/');
            toast.success("Successfully logged in")
        }else{
            toast.error(response.message)
        }
        setLoggingin(false);
    }
    if(auth.user){
        return<Navigate to="/" replace={true} />
    }
    return <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Log In</span>
        <div className={styles.field}>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                // required 
                onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className={styles.field}>
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                // required 
                onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <div className={styles.field}>
            <button disabled={loggingin}>
                {loggingin ? 'logging in...':'Log In'}
            </button>
        </div>
        

    </form>
    
}

export default Login;