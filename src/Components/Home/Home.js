import React from 'react';
import Banner from '../Bannaer/Banner';
import Information from '../Informations/Information';
import Locations from '../Locations/Locations';
import Services from '../Services/Services';
import useAuth from '../../Hooks/useAuth'
import './Home.css'
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger"></Spinner>
    }
    return (
        <div className="bg">

            <section>
                <Banner></Banner>
            </section>
            <section>
                <Services></Services>
            </section>

            <section>
                <Locations></Locations>
            </section>

            <section>
                <Information></Information>
            </section>
        </div>
    );
};

export default Home;