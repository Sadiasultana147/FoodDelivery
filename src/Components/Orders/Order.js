import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

import useAuth from '../../Hooks/useAuth';

const Order = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});

    const { user } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/myorder"


    const cityRef = useRef();
    const addressRef = useRef();
    const contactRef = useRef()

    useEffect(() => {

        fetch(`https://fast-sea-86370.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    const handleconfirm = (e) => {
        // console.log(data)

        const UserName = user.displayName;

        const userEmail = user.email;
        const city = cityRef.current.value;
        const address = addressRef.current.value;
        const contact = contactRef.current.value;
        const serviceName = service.name
        const serviceImage = service.image
        const serviceDetails = service.description

        const newOrder = { serviceName, serviceImage, serviceDetails, userEmail, UserName, city, address, contact };
        fetch('https://fast-sea-86370.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Confirm');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }






    return (
        <div>
            <h1>Details of : {service?.name}</h1>

            <img src={service.image} alt="" />
            <h5>{service.description}</h5>





            <div className=" d-flex justify-content-center mt-4 pt-5">
                <form onSubmit={handleconfirm} className="d-flex flex-column  w-50  ">

                    <input className="p-2" value={user.displayName} />



                    <input className="p-2 mt-3" value={user.email} />
                    <input className="p-2 mt-3" ref={cityRef} type="text" placeholder="City" required />
                    <input className="p-2 mt-3" ref={addressRef} type="text" placeholder="Address" required />
                    <input className="p-2 mt-3" ref={contactRef} type="number" placeholder="Contact No." required />

                    <button className="mb-5 mt-5 btn" type="submit">CONFIRM ORDER</button>
                </form>

            </div>

        </div>
    );
};

export default Order;