import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import AllOrder from '../ManageAllOrder/AllOrder';

const ManageAllorders = () => {
    const [allorders, setAllorders] = useState([]);
    const { user } = useAuth();



    useEffect(() => {
        fetch('https://fast-sea-86370.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])


    const handleDeleteOrders = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://fast-sea-86370.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            const remainingOrders = allorders.filter(order => order._id !== id);
                            setAllorders(remainingOrders);
                        }
                    });




            }

        });
    }




    //Handle status

    const handleConfirm = (id) => {
        console.log(id);
        // const newStatus = { status: 'confirmed' };
        // console.log(newStatus);
        const proceed = window.confirm('are you sure to confirm?');
        if (proceed) {
            const url = `https://fast-sea-86370.herokuapp.com/updateStatus/${id}`;
            fetch(url, {
                method: 'put'

            })
                .then(res => res.json())
                .then(data => {
                    console.log('first console', data)
                    if (data.modifiedCount > 0) {
                        alert('Order Confirmed Successfully')

                        fetch('https://fast-sea-86370.herokuapp.com/orders')
                            .then(res => res.json())
                            .then(data => setAllorders(data))
                    }
                })
        }
    }


    return (
        <div className="body overflow-hidden">
            <h1>Total Orders : {allorders.length}</h1>

            {
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">

                    {
                        allorders.map(allorder => <AllOrder

                            key={allorder._id}
                            allorder={allorder}
                            handleDeleteOrders={handleDeleteOrders}

                            handleConfirm={handleConfirm}


                        >



                        </AllOrder>)
                    }


                </div>

            }
        </div>
    );
};

export default ManageAllorders;