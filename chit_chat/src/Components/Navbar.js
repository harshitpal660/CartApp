import styles from '../Styles/home.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';
const Navbar = () => {
  const auth = useAuth();
  return (
    <div className={styles.nav}>
      <div className={styles.leftNav}>
        <Link to="/">
          <img
            src="https://play-lh.googleusercontent.com/71MxxoI3_OFOXWzXOvFaV9x4ByX2idWtcK9e6yecZdjZg2bBLR8vIEO5OZnz58kKpMYG"
            alt=""
          />
        </Link>
      </div>
      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <Link to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2922/2922510.png"
                alt=""
                className={styles.userDp}
              />
            </Link>
            <span>{auth.user.name}</span>
          </div>
        )}
        <div className={styles.navLinks}>
          <ul>
            {auth.user ? (
              <>
                <li onClick={auth.logout} style={{cursor:'pointer'}}>
                  Log out
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log in</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
