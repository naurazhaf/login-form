import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return re.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        if (!email) {
            setEmailError('Email cannot be empty!');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Invalid email!');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password cannot be empty!');
            isValid = false;
        } else if (!validatePassword(password)) {
            setPasswordError('Password must be 8-16 characters, include uppercase, lowercase, a number, and a special character!');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            alert('Login successful!');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <div className="input-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input
                                type="text" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className={emailError ? 'input-error' : ''}
                            />
                        </div>
                        {emailError && <p className="error-text">{emailError}</p>}
                    </div>
                    <div className="form-group">
                        <div className="input-icon">
                            <FontAwesomeIcon icon={faLock} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className={passwordError ? 'input-error' : ''}
                            />
                        </div>
                        {passwordError && <p className="error-text">{passwordError}</p>}
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
