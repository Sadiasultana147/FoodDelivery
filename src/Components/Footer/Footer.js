import React from 'react';
import './Footer.css';
import image1 from '../../Images/footerImage3.png';
import image2 from '../../Images/footerImage1 .png';
import image3 from '../../Images/footerImage4.png'


const Footer = () => {



    return (
        <div >
            <footer class="text-center text-white " style={{ backgroundColor: "#caced1" }}>

                <div class="container ">

                    <section class="">
                        <div class="row">
                            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div  >
                                    <div
                                        class="bg-image hover-overlay m-0 p-0 ripple shadow-1-strong rounded"
                                        data-ripple-color="light"
                                    >
                                        <img
                                            src={image2} className="w-100 h-100" alt=""
                                        />

                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/6n4tVyB/pexels-beqa-tefnadze-803290.jpg?fbclid=IwAR1pasmbN9lqzhzTcdihU9utVEgJln9NcGBSh3-0NAV0UkgyheQ0Lx1zA2Y"
                                        class="w-100" alt=""
                                    />

                                    <div
                                        class="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                    ></div>

                                </div>
                            </div>
                            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/N7qBMqz/pexels-lumn-1410236.jpg?fbclid=IwAR2TraPigzGsIG_Vt5Eq4Wy1MKFbaA0eSbeA8k3X4ZZ9gp-3xIYW2dwyJNw"
                                        className="w-100" alt=""
                                    />

                                    <div
                                        class="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                    ></div>

                                </div>
                            </div>
                            <div className="col-lg-2 p-0 m-0 col-md-12 ">
                                <div
                                    class="bg-image hover-overlay m-0 p-0 ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src={image3} className="w-100 h-100" alt=""
                                    />

                                </div>
                            </div>

                        </div>
                    </section>

                </div>



                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <h1>FOOD EXPRESS</h1>
                </div>

            </footer>
        </div>
    );
};

export default Footer;