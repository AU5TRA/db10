import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showMessage, setShowMessage] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password }
            const response = await fetch("http://localhost:3001/users/login", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)

            });
            const json = await response.json()
            console.log(json.message);
            setShowMessage(json.message);

            if (json.success) {
                setModalOpen(true);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    // const loginStatus = () => {
    //     //alert(showMessage);

    // };
    const closeMessage = () => {
        setShowMessage(false);
        //window.location = "/";

    };

    const registerUser = () => {
        try {
            navigate('/users');
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="signup-message">Don't have an account? <button type="button" className="btn btn-secondary" onClick={registerUser}>Sign Up</button></p>
            </form>
        </div>
        {showMessage && (
            <div className="modal" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login Status</h5>
                            <button type="button" className="close" onClick={closeMessage}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{showMessage}</p>
                            <button type="button" className="btn btn-primary" onClick={closeMessage}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </Fragment>
}

export default Login
