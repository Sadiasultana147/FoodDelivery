import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../Hooks/useAuth'

const LogIn = () => {
    const { hanldeUserInfoRegister, error, setError, signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

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
                if (error.code === "auth/user-not-found") {
                    setError("Wrong Email")
                }
                else {
                    setError("Wrong Password")

                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }





    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                const user = res.user;
                hanldeUserInfoRegister(user.email, user.displayName, 'PUT');
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

            <div className="body overflow-hidden">

                <h1 className="pt-5">Please! LogIn </h1>
                <div className="d-flex justify-content-center  ">

                    <form className="d-flex flex-column  w-50 " onSubmit={handleLoginWithEmailAndPassword}>
                        <input className="p-2 mt-3" type="email" onBlur={handleGetEmail} placeholder="Email" />
                        <br />
                        <input className="p-2 mt-3" type="password" onBlur={handleGetPassword} placeholder="Password" />
                        <br />
                        <div><h5 className="pt-3" style={{ color: "red", }}>{error}</h5></div>
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