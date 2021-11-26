import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Register = () => {


    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleGetName = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }



    const handleRegistration = (e) => {
        e.preventDefault();
        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true)
                updateName(name)
                setUser(res.user)
                history.push(url)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
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
        <div>

            <div className="body">

                <h1 className="pt-5">Please Register</h1>
                <div className=" d-flex justify-content-center mt-4 pt-5">
                    <form className="d-flex flex-column  w-50  " onSubmit={handleRegistration}>
                        <input className="p-2" onBlur={handleGetName} placeholder="name" />


                        <input className="p-2 mt-3" type="email" onBlur={handleGetEmail} placeholder="email" />
                        <input className="p-2 mt-3" type="password" onBlur={handleGetPassword} placeholder="password" />
                        <input className="p-2 mt-3 " type="submit" value="REGISTER" />
                    </form>
                </div>
                <div className="pt-5">
                    <button onClick={handleGoogleLogin}>Google Sign In</button>
                    <p> Already Signed Up ?<Link to="/login">Please Login</Link ></p>
                </div>
            </div>
        </div>
    );
};

export default Register;