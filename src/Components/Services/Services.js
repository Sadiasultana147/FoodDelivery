import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fast-sea-86370.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="mt-5 ">
            <h1 className="mb-5">OUR SERVICES FOR YOU</h1>

            {

                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 pt-5 ">


                    {
                        services.map(service => <Service key={service._id} service={service}

                        >

                        </Service>)
                    }
                </div>







            }
        </div>
    );
};

export default Services;