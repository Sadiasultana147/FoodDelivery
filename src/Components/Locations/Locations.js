import React from 'react';
import './Location.css'
const Locations = () => {
    return (
        <div className="overflow-hidden">
            <div class="mt-3 mb-5 ms-5 me-5">
                <h1>OUR SERVICE LOCATION </h1>


                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-5 ">
                    <div class="col ">
                        <div class="card  h-100">
                            <div>
                                <img src="https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Dhaka.jpg?width=720" class="lcimage w-100 p-5 " alt="" />

                                <h5 >DHAKA</h5>




                            </div>


                        </div>
                    </div>
                    <div class="col ">
                        <div class="card  h-100">
                            <div>
                                <img src="https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Chittagong.jpg?width=720" class="lcimage w-100 p-5 " alt="..." />
                                <h5>CHITTAGONG</h5>
                            </div>


                        </div>
                    </div>
                    <div class="col ">
                        <div class="card  h-100">
                            <div>
                                <img src="https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Sylhet.jpg?width=720" class=" lcimage w-100 p-5 " alt="..." />
                                <h5>SYLHET</h5>
                            </div>


                        </div>
                    </div>

                    <div class="col ">
                        <div class="card  h-100">
                            <div>
                                <img src="https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Cox's%20Bazaar.jpg?width=720" class="lcimage w-100 p-5 " alt="..." />
                                <h5>COX'S BAZAR</h5>
                            </div>


                        </div>
                    </div>

                    <div class="col ">
                        <div class="card  h-100">
                            <div>
                                <img src="https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Savar.jpg?width=720" class="lcimage w-100 p-5 " alt="..." />
                                <h5>SAVAR</h5>
                            </div>


                        </div>
                    </div>
                    <div class="col ">
                        <div class="card  h-100">
                            <div>
                                <img src="https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Rajshahi.jpg?width=720" class="lcimage w-100 p-5 " alt="..." />
                                <h5>RAJSHAHI</h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;