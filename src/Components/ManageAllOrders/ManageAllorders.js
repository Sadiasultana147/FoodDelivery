import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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



    return (
        <div className="body">
            <h1>Total Orders : {allorders.length}</h1>

            {
                <Row xs={5} md={4} className="g-4">

                    {
                        allorders.map(allorder => <AllOrder

                            key={allorder._id}
                            allorder={allorder}


                        >



                        </AllOrder>)
                    }


                </Row>

            }
        </div>
    );
};

export default ManageAllorders;