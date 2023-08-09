import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);
        setError('');
        setSuccess('');

        if(confirm !== password){
            setError('Confirm Password is wrong!');
            return
        }
        if(password.length < 8){
            setError('Please provide 8 characters as password');
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Succes! You have created an account.');
            form.reset();
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className="form-container">
            <h2>Sign up</h2>
            <form onSubmit={handleRegister} className='form'>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name="email"></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name="password"></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type='password' name="confirm"></input>
                </div>
                <div className='form-control'>
                    <input className='btn-submit' type="submit" value="Sign up" />
                </div>
            </form>
            <p><small>Already have an accout? <Link to="/login">Login</Link></small></p>
            <button className='btn-google'>Continue with Google</button>
            <p><small>{error}</small></p>
            <p><small>{success}</small></p>
        </div>
    );
};

export default Register;