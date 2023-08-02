import styles from '../Styles/home.module.css';
const Navbar=()=>{
    return(
        <div className={styles.nav}>
            <div className={styles.leftNav}>
                <a href='#'>
                    <img src='https://play-lh.googleusercontent.com/71MxxoI3_OFOXWzXOvFaV9x4ByX2idWtcK9e6yecZdjZg2bBLR8vIEO5OZnz58kKpMYG' alt=''/>
                </a>
            </div>
            <div className={styles.rightNav}>
                <div className={styles.user}>
                    <a href='/'>
                        <img src='https://cdn-icons-png.flaticon.com/128/2922/2922510.png' alt='' className={styles.userDp}/>
                    </a>
                    <span>Harshit</span>
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <a href='/'>Log in</a>
                        </li>
                        <li>
                            <a href='/'>Log out</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;