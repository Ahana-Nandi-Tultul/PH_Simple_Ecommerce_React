import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target();
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
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
        </div>
    );
};

export default Register;