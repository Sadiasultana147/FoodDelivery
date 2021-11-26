import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, image, description } = props.service;


    const [services, setServices] = useState([]);




    useEffect(() => {
        fetch('https://fast-sea-86370.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (

        <Col style={{ color: "white" }} className="me-5 ms-5 mb-5 " >
            <Card className="card singlecard  box h-100 w-100" >
                <Card.Img variant="top" src={image} className=" mt-4 w-50  mx-auto d-block " />
                <Card.Body>
                    <div>
                        <Card.Title  >{name} </Card.Title>
                        <Card.Text className="h-100">{description}</Card.Text>
                    </div>


                    <div className="mt-5">
                        <Link className="link" to={`order/${_id}`}><button className="btn">
                            Order
                        </button>
                        </Link>
                        <Link className="link ms-5" to={`manageservice/${_id}`}><button className="btn btn1">
                            ManageService
                        </button>
                        </Link>
                    </div>





                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;