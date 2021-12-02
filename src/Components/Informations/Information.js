import React from 'react';
import './Information.css'

const Information = () => {
    return (
        <div className="ms-5 me-5 overflow-hidden">
            <h1>WHY CHOOSE US?</h1>
            {/* OUR WORK */}
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-5 ">
                <div class="col ">
                    <img class=" w-100" src="https://pathao.com/wp-content/uploads/2018/12/ic_Food_Feature_1.png" alt="" />
                    <h4>Fastest
                        Delivery
                    </h4>
                    <p>Get your food delivered in less than an hour! That’s as fast as it can get.</p>

                </div>

                <div class="col ">
                    <img class=" w-100" src="https://pathao.com/wp-content/uploads/2018/12/ic_Food_Feature_2.png" alt="" />
                    <h4>
                        So Much to
                        Choose From
                    </h4>
                    <p>Find your favourite among the thousands of restaurants in our app.</p>
                </div>
                <div class="col ">
                    <img class=" w-100" src=" https://pathao.com/wp-content/uploads/2018/12/ic_Food_Feature_3.png" alt="" />

                    <h4>
                        Best Offers
                        In Town!
                    </h4>
                    <p>Get the best offers and combos at the best price only at  Food Express!</p>
                </div>

            </div>

            {/* OUR WORK END */}

            {/* STEP */}

            <div>
                <div class="d-flex justify-content-center pt-5 ">
                    <div >
                        <img src="https://pathao.com/wp-content/themes/webpathao/assets/images/icon-food.jpg" alt="" />

                        <h6>Get food with</h6>
                        <h1>FOOD EXPRESS</h1>
                    </div>

                </div>

                <div className="mb-4">


                    <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-5 d-flex justify-content-center align-items-center  ">
                        <div class="col">
                            <h1>01</h1>
                            <h1>Download the App</h1>
                            <p>Download the Pathao App and order your food online to get the fastest delivery.</p>
                        </div>
                        <div class="col">
                            <img className="w-100" src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=1576&amp;height=1253|https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=1576&amp;height=1253" alt="" />
                        </div>
                    </div>
                </div>

                <div class="mb-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 pt-5 d-flex justify-content-center align-items-center  ">
                    <div class="col me-5">
                        <img className="w-100" src="https://pathao.com/wp-content/uploads/2018/12/Select-and-set-your-food.jpg" alt="" />
                    </div>
                    <div class="col ms-5">
                        <h1>02</h1>
                        <h1>Select and set your food</h1>
                        <p>Select the food you want from thousands of restaurants.</p>
                    </div>

                </div>

                <div >


                    <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-5 d-flex justify-content-center align-items-center  ">
                        <div class="col me-5">
                            <h1>03</h1>
                            <h1>Confirm your order and wait</h1>
                            <p>Just confirm your order and enjoy our fastest delivery. Fresh and delicious food will be delivered to your doorstep.</p>
                        </div>
                        <div class="col ms-5">
                            <img className="w-100" src="https://pathao.com/wp-content/uploads/2018/12/pathao-food-delivery.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;