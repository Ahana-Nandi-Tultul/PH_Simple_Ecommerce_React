import React, { useContext } from 'react';
import logo from '../../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const handleSignout =() => {
       logout()
       .then(() => {})
       .catch(error => console.log(error.message))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shops</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? <>
                        <span><small>{user.email || ''}</small></span>
                        <button onClick={handleSignout}>Sign out</button>
                    </> :
                    <Link to="/login">Login</Link>
                }
               
            </div>
        </nav>
    );
};

export default Header;