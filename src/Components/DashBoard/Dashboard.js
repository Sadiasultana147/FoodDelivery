import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AddService from '../AddService/AddService';
import ManageAllorders from '../ManageAllOrders/ManageAllorders';
import ManageServices from '../ManageServices/ManageServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import MyOrders from '../MyOrder/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../ReView/Review'
import DashBoardContainer from '../DashboardContainer/DashBoardContainer';

import './DashBoard.css'

const Dashboard = () => {
    const { logOut, user, isAdmin, setIsAdmin } = useAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [control, setControl] = useState('dashboardcontainer');
    useEffect(() => {
        fetch(`https://fast-sea-86370.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data[0]?.role === "admin") {
                    setIsAdmin('admin');
                } else {
                    setIsAdmin('user');
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [user?.email]);


    return (
        <div className="overflow-hidden">



            <div >
                <div class="row ">
                    <div style={{ backgroundColor: "#F8C8DC" }} class=" col-md-3 col-xl-2 px-sm-2 px-0 ">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3  pt-2 text-white ">
                            <h3 style={{ color: "white" }}>DASHBOARD</h3>

                            {
                                isAdmin === "admin" && (
                                    <div>
                                        <li
                                            onClick={() => setControl("add")}
                                            className=" li "
                                        >
                                            Add Services
                                        </li>
                                        <li
                                            onClick={() => setControl("makeadmin")}
                                            className="li p-2"
                                        >
                                            MakeAdmin
                                        </li>
                                        <li
                                            onClick={() => setControl("allorder")}
                                            className="li p-2"
                                        >
                                            Manage All Orders
                                        </li>
                                        <li
                                            onClick={() => setControl("manageservice")}
                                            className="li p-2"
                                        >
                                            Manage Services
                                        </li>
                                        <NavLink style={{ color: "white" }} to="/" onClick={logOut} className="nav-item nav-link li" >
                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                            <span className="ps-1">LogOut</span>

                                        </NavLink>


                                    </div>
                                )}
                            {
                                isAdmin === "user" &&
                                <div>
                                    <li
                                        onClick={() => setControl("myorder")}
                                        className=" li "
                                    >
                                        My Orders
                                    </li>
                                    <li
                                        onClick={() => setControl("pay")}
                                        className="li p-2"
                                    >
                                        Pay
                                    </li>
                                    <li
                                        onClick={() => setControl("review")}
                                        className="li p-2"
                                    >
                                        Review
                                    </li>
                                    <NavLink style={{ color: "white" }} to="/" onClick={logOut} className="nav-item nav-link li" >
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        <span className="ps-1">LogOut</span>

                                    </NavLink>

                                </div>
                            }

                        </div>

                    </div>
                    <div class="col ">
                        {
                            isAdmin === "admin" && (


                                <div >
                                    {control === "dashboardcontainer" &&
                                        <DashBoardContainer></DashBoardContainer>}
                                    {control === "add" && <AddService></AddService>}
                                    {control === "allorder" && <ManageAllorders></ManageAllorders>}
                                    {control === "makeadmin" && <MakeAdmin></MakeAdmin>}


                                    {control === "manageservice" && <ManageServices></ManageServices>}


                                </div>

                            )}

                        {
                            isAdmin === "user" && (
                                <div>
                                    {control === "dashboardcontainer" &&
                                        <DashBoardContainer></DashBoardContainer>}
                                    {control === "myorder" && <MyOrders></MyOrders>}
                                    {control === "pay" && <Pay></Pay>}
                                    {control === "review" && <Review></Review>}

                                </div>
                            )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;