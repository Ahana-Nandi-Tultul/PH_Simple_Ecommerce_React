import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name="email"></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name="password"></input>
                </div>
                <div className='form-control'>
                    <input className='btn-submit' type="submit" value="Login" />
                </div>
            </form>
            <p><small>New to Ema-John? <Link to="/register">Create an accout</Link></small></p>
            <button className='btn-google'>Continue with Google</button>
        </div>
    );
};

export default Login;