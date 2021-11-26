import React, { useEffect, useState } from 'react';
import { Card, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllOrder.css'

const AllOrder = (props) => {

    const [allorders, setAllorders] = useState([]);




    useEffect(() => {
        fetch('https://fast-sea-86370.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [allorders])

    //DELETE ORDER

    const handleDeleteOrders = id => {
        const proceed = window.confirm('Confirm Your delete activity');
        if (proceed) {
            const url = `https://fast-sea-86370.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = allorders.filter(order => order._id !== id);
                        setAllorders(remainingOrders);
                    }
                });



        }
        window.location.reload();
    }




    const { _id, serviceImage, userEmail, UserName, city, address, contact, serviceName } = props.allorder

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

                    <button className="btn" style={{ backgroundColor: "darkred" }} onClick={() => handleDeleteOrders(_id)}>DELETE</button>








                </Card.Body>
            </Card>
        </Col>


    );
};

export default AllOrder;