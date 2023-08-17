// import { useState } from "react";
import styles from "../Styles/settings.module.css"
import {useAuth} from "../hooks"
// import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const UserProfile = ()=>{
    const auth = useAuth();
    // if(!auth.user){
    //     return<Navigate to="/login" replace={true} />
    // }
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
                <div className={styles.fieldValue}>{auth.user? auth.user.email:""}</div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}>Name</div>
                <div className={styles.fieldValue}>{auth.user? auth.user.name:""}</div>
            </div>

            <div className={styles.btnGrp}>
                <button className={`button ${styles.ediBtn}`}>Add friend</button>
                <button className={`button ${styles.ediBtn}`}>Remove friend</button>
            </div>

        </div>
    )
}

export default UserProfile;