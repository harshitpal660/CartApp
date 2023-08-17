import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>

      <div>
          <div>
            <Link to="/">
            <span>Harshit</span>
            </Link>
            
          </div>
        <div>
          <ul>

                <li>
                <Link to="/logout">Log out</Link>
                </li>
                <li>
                  <Link to="/login">Log in</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
