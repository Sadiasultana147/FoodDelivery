import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [allorders, setAllorders] = useState([]);
    const { user } = useAuth();



    useEffect(() => {
        fetch('https://fast-sea-86370.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])

    const myOrder = allorders.filter(order => (order.userEmail == user.email))
    //DELETE ORDER

    const handleDeleteOrders = id => {
        const proceed = window.confirm('Confirm your delete activity');
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

    }
    return (
        <div className="body overflow-hidden ">
            <div>
                <img className="w-100 h-2" src="https://pathao.com/wp-content/uploads/2018/12/04-Food-2-1.png" alt="" />
            </div>
            <h1 className="pt-5" >My Total Orders :{myOrder.length}</h1>




            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">
                {
                    myOrder.map(order => <div>

                        <div className="box m-5 h-100 ">
                            <img className="w-75 mt-2" src={order.serviceImage} alt="" />
                            <hr style={{ border: "2px solid blue" }} />
                            <h4> {order.serviceName}</h4>
                            <hr style={{ border: "2px solid blue" }} />
                            <h6>{order.serviceDetails}</h6>

                            <hr style={{ border: "2px solid blue" }} />

                            <h6>{order.status}</h6>

                            < button style={{ backgroundColor: "darkred" }} className="mb-4 btn " onClick={() => handleDeleteOrders(order._id)}> DELETE</button >
                        </div>

                    </div >)
                }
            </div>



        </div>
    );
};

export default MyOrders;
// //.then(data => {
//     const myOrder = data.filter(order => (order.userEmail == user.email))

//     setAllorders(myOrder)
// })//