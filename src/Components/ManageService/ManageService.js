import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './ManageService.css'

const ManageService = () => {

    const { _id } = useParams();


    const [services, setService] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://fast-sea-86370.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleClick = () => {
        history.push('/manageservices')
    }

    //DELETE ORDER

    const handleDeleteService = id => {
        const proceed = window.confirm('Delete Confirm');
        if (proceed) {
            const url = `https://fast-sea-86370.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingServices = setService.filter(service => service._id !== id);
                        setService(remainingServices);
                    }
                });



        }
        //window.location.reload();
    }
    return (
        <div className=" body">

            <div className="manage w-25 ms-5 me-5   ">
                <div className="pt-5 pb-5">
                    <img className="w-50 " src={services.image} alt="" />
                    <h2>{services.name}</h2>
                    <h5>{services.description}</h5>

                </div>
                <button onClick={() => handleDeleteService(_id)}>DELETE</button>

            </div>
        </div>
    );
};

export default ManageService;