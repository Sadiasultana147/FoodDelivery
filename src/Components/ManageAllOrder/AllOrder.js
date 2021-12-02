import React, { useEffect, useState } from 'react';
import { Card, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllOrder.css'

const AllOrder = (props) => {

    const { _id, status, serviceImage, userEmail, UserName, city, address, contact, serviceName } = props.allorder
    const { handleDeleteOrders } = props;
    const { handleConfirm } = props;

    return (

        <Col className="me-5 ms-5 mb-5" >
            <Card className="card   box h-100 w-100" >
                <Card.Img variant="top" src={serviceImage} className=" mt-4 rounded mx-auto d-block " />
                <Card.Body>
                    <Card.Title >OrderedService : {serviceName} </Card.Title>
                    <hr />
                    <Card.Text><h4>UserName :{UserName}</h4></Card.Text>
                    <hr />
                    <Card.Text><h6>UserEmail : {userEmail}</h6></Card.Text>
                    <hr />
                    <Card.Text><h6>User's City: {city}</h6></Card.Text>
                    <hr />
                    <Card.Text><h6>User's Address :{address}</h6></Card.Text>
                    <hr />
                    <Card.Text><h6>User's ContacNo : {contact}</h6></Card.Text>
                    <Card.Text><h6> {status}</h6></Card.Text>

                    <div className="pb-5">
                        <div>
                            {
                                status === "pending" &&
                                < button onClick={() => handleConfirm(_id)} className="btn" style={{ backgroundColor: "indigo", color: "white" }} >Confirm</button>




                            }
                        </div>
                        <br />
                        <div  ><button onClick={() => handleDeleteOrders(_id)} className="btn" style={{ backgroundColor: "darkred", color: "white" }}>  <i style={{ color: "white" }} class="fa fa-trash"></i>
                            <span className="ps-1" style={{ color: "white" }}>DELETE</span></button></div>
                    </div>








                </Card.Body>
            </Card>
        </Col>


    );
};

export default AllOrder;