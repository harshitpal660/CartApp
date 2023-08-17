import { useState } from "react";
import styles from "../Styles/settings.module.css"
import {useAuth} from "../hooks"
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';


const Settings = ()=>{
    const auth = useAuth();
    // console.log(auth.user)
    const user = auth.user;
    let nameU = null;
    let emailU = null;

    if(user!==null){
        emailU = user.email;
        nameU = user.name;
    }else{
        emailU = "";
        nameU = "";
    }
    const [editMode,setEditMode] = useState(false);
    const [email,setEmail] = useState(emailU);
    const [name,setName] = useState(nameU);
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [savingForm,setSavingForm] = useState(false);

    const handleEdit=()=>{
        setEditMode(!editMode);
    }

   
    const updateProfile= async()=>{
        setSavingForm(true)

        let error = false;
        if(!name || !password || !confirmPassword){
           toast.error("Please fill all the fields")
           error = true
        }

        if(password !== confirmPassword){
            toast.error("Password does not match with Confirm Password")
            error = true;
        }

        if(error){
            return setSavingForm(false);
        }

        const response = await auth.updateUser(auth.user._id,name,password,confirmPassword)
        if(response.success){
            toast.success("User updated successfully")
            setEditMode(false);
            setSavingForm(false);
            setPassword('');
            setConfirmPassword('');
            
        }else{
            toast.error(response.error)
        }
        setSavingForm(false)
    }
    if(!auth.user){
        return<Navigate to="/login" replace={true} />
    }
    return(
        <div className={styles.settings}>
            <div className={styles.imgContainer}>
            <img
              alt="user-pic"
              src="https://cdn-icons-png.flaticon.com/128/2922/2922510.png"
            />
            </div>
            <div className={styles.field}>
                <div className={styles.fieldLabel}>Email</div>
                {!editMode ?<div className={styles.fieldValue}>{auth.user? email:""}</div>:<input className={styles.fieldValue} type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>}
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}>Name</div>
                {!editMode ?<div className={styles.fieldValue}>{auth.user? name:""}</div>:<input className={styles.fieldValue} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>}
            </div>


            {editMode?<><div className={styles.field}>
                <div className={styles.fieldLabel}>Password</div>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className={styles.field}>
                <div className={styles.fieldLabel} >Confirm Password</div>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>           
            </div></>:""}

            <div className={styles.btnGrp}>
                {!editMode? <button className={`button ${styles.editBtn}`} onClick={handleEdit}>Edit Profile</button>:
                <div><button className={`button ${styles.editBtn}`}onClick={handleEdit}>Back</button>
                <button className={`button ${styles.editBtn}`} onClick={updateProfile} disabled={savingForm}>{savingForm ? 'Saving...':'Save'}</button></div>}
            </div>
        </div>
    )
}

export default Settings;