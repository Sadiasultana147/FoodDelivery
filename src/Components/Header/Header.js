import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src="https://as2.ftcdn.net/v2/jpg/02/25/44/19/500_F_225441936_uPpKIUGClT8u9PeQk2vJz9QI1Vp3UIxE.jpg" height="50" alt="CoolBrand" />
                    <span className="ms-3">
                        <strong>
                            <em style={{ color: "#d70f64" }}>FOOD EXPRESS</em>
                        </strong>
                    </span>
                </NavLink>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">


                    {
                        (user?.email) ?


                            <div className="navbar-nav ms-5 ps-5">
                                <NavLink to="/home" className="nav-item nav-link active " style={{ color: "#d70f64", fontSize: "20px" }}>Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link active " style={{ color: "#d70f64", fontSize: "20px" }}>About</NavLink>


                                <NavLink to="/dashboard" className="nav-item nav-link" style={{ color: "#d70f64", fontSize: "20px" }}>Dashboard</NavLink>





                            </div>

                            :

                            <div className="navbar-nav ms-5 ps-5">
                                <NavLink to="/home" className="nav-item nav-link active " style={{ color: "#d70f64", fontSize: "20px" }}>Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link active " style={{ color: "#d70f64", fontSize: "20px" }}>About</NavLink>



                                <NavLink to="/partner" className="nav-item nav-link" style={{ color: "#d70f64", fontSize: "20px" }}>Partner</NavLink>




                            </div>
                    }


                    {
                        (user?.email) ?

                            <div className="navbar-nav ms-auto">

                                <NavLink to="/" onClick={logOut} className="nav-item nav-link" style={{ color: "#d70f64", fontSize: "20px" }}>LogOut
                                    <span className="ms-4" style={{ fontSize: "20px" }}> {user?.displayName}
                                        {
                                            (user?.photoURL) ?

                                                <img className="rounded-circle ms-4" src={user?.photoURL} alt="" />
                                                :
                                                <img className="rounded-circle w-25 ms-4" src="https://image.shutterstock.com/image-vector/avatar-man-icon-profile-placeholder-260nw-1229859850.jpg" alt="" />



                                        }
                                    </span>
                                </NavLink>

                            </div>


                            :
                            <div className="navbar-nav ms-auto">
                                <NavLink to="/register" className="nav-item nav-link" style={{ color: "#d70f64", fontSize: "30px" }}>Register</NavLink>


                                <NavLink to="/login" className="nav-item nav-link" style={{ color: "#d70f64", fontSize: "30px" }}>Login</NavLink>


                            </div>



                    }




                </div>
            </div>
        </nav>
    );
};

export default Header;