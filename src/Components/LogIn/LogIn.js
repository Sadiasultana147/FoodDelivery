import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../Hooks/useAuth'

const LogIn = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }




    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false)
            })
    }





    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div >

            <div className="body">

                <h1 className="pt-5">Please! LogIn </h1>
                <div className="d-flex justify-content-center  ">

                    <form className="d-flex flex-column  w-50 " onSubmit={handleLoginWithEmailAndPassword}>
                        <input className="p-2 mt-3" type="email" onBlur={handleGetEmail} placeholder="Email" />
                        <br />
                        <input className="p-2 mt-3" type="password" onBlur={handleGetPassword} placeholder="Password" />
                        <br />
                        <br />
                        <input className="p-2 mt-3 btn" type="submit" value="LOGIN" />

                    </form>
                </div>
                <div className="pt-5">
                    <button className="btn" onClick={handleGoogleLogin}>Google Sign In</button>
                    <p className="pt-3 pb-5"> New User ?<Link to="/register">Please register</Link ></p>
                </div>
            </div>

        </div>
    );
};

export default LogIn;