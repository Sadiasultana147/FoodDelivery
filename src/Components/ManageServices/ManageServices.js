import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import ManageService from '../ManageService/ManageService';
import './ManageServices.css'

const ManageServices = () => {




    const [services, setService] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://fast-sea-86370.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleClick = () => {
        history.push('/manageservices')
    }

    //DELETE ORDER

    const handleDelete = id => {
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
                const url = `https://fast-sea-86370.herokuapp.com/services/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            const remainingServices = services.filter(service => service._id !== id);
                            setService(remainingServices);
                        }
                    });



            }
        });


    }
    return (
        <div className=" body overflow-hidden">
            {

                <div className="me-4 mt-2 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4  ">


                    {
                        services.map(service => <ManageService key={service._id} service={service}

                            handleDelete={handleDelete}

                        >

                        </ManageService>)
                    }
                </div>







            }

        </div>
    );
};

export default ManageServices;