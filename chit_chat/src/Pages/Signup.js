import styles from "../Styles/login.module.css"
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { useAuth } from "../hooks";
import { useNavigate } from 'react-router-dom';

const Signup = ()=>{
    const [email,setEmail] = useState('');
    const [signingup,setSigningup] = useState(false);
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const [name,setName] = useState('');

    const auth = useAuth();
    const history = useNavigate();

    // console.log(history);
    const handleSubmit = async(e)=>{
        e.preventDefault(); // we dont want page reload
        setSigningup(true);
        
        let error = false
        if(!name || !confirmPassword || !email || !password){
            // setSigningup(false)
            error = true;
            toast.error("Please fill all the fields")
        }
        if(password !== confirmPassword){
            toast.error("Make sure password and confirm password matches")
            error = true;
        }

        if(error){
            setSigningup(false);
        }
        const response = await auth.signup(name,email,password,confirmPassword);
        console.log(response)
        if(response.success){
            history('/login');
            setSigningup(false);
            return toast.success("Successfully logged in")
        }else{
            toast.error(response.message)
        }
        setSigningup(false);
    }
    return <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Register</span>
        <div className={styles.field}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                // required 
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
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
            <input 
                type="password" 
                placeholder="confirm password" 
                value={confirmPassword} 
                // required 
                onChange={(e)=>setConfirmPassword(e.target.value)}
            />
        </div>
        <div className={styles.field}>
            <button disabled={signingup}>
                {signingup ? 'Registering...':'Register'}
            </button>
        </div>
        

    </form>
    
}

export default Signup;