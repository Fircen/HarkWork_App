import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const API_URL = 'http://127.0.0.1:5000/api/users/register';

const SignUp = () => {
    
    const nameRef = useRef();
    const emailRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    //const navigate = useNavigate();

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    const handleSignUp = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(JSON.stringify(response.data));
            setSuccess(true);
            setName('');
            setEmail('');
            setPassword('');
            setLoading(false);
        } catch (err) {
            console.log(err);
            if (err.response.status === 400) setErrMsg('Email already taken!');
            else setErrMsg('Error - could not register user!');
        }
    }

    // const handleCancel = () => {
    //     navigate("/");
    // };

    return (
            <>
            <br/>
            {success ? (
                <section>
                    <h1>Success! Thank You for registration!</h1>
                    <p>
                        <Link to="/">Go to home page</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <h1><strong>Sign Up</strong></h1>
                    <br/>
                    <form onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    ref={nameRef}
                                    value={name}
                                    required
                                    placeholder='Name'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <div>
                                <input
                                    type="text"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    ref={emailRef}
                                    value={email}
                                    required
                                    placeholder='Email'
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <p>
                                <input
                                    className='input'
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    placeholder='Password'
                                />
                            </p>
                        </div>
                        <br/>
                        
                        <button type='submit'>Sign Up</button>
                        {!loading 
                            ? null
                            : <span>Loading...</span>}
                        {<div><h2 style={errMsg ? {color: 'red', fontWeight: 'bold'} : {display: 'none'}}>{errMsg}</h2></div>}
                        <br/><br/>
                        {/* <a type='button' onClick={handleCancel}>Go back</a>
                        <br/><br/> */}
                    </form>
                    {/* <p>
                        Already registered?<br />
                        <span className="line">
                            <Link to="/users/login">Sign In</Link>
                        </span>
                    </p> */}
                    <br/>
                </section>
            )}
        </>
    );
};

export default SignUp;