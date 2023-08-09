import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');
        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Succes! You have logged in successfully.')
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message);
        })
    }
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className='form'>
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
            <p><small>{error}</small></p>
            <p><small>{success}</small></p>
        </div>
    );
};

export default Login;