import React from 'react';
import banner from '../../Images/banner.jpg'


const Banner = () => {
    return (
        <div>


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "#800000", marginBottom: "40%", fontSize: '60px' }}>WELCOME TO FOOD EXPRESS</h5>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src='https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model-opt-scaled.jpg' class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "#800000", marginBottom: "30%", fontSize: '60px' }}>BRINGING GOOD FOOD INTO YOUR EVERYDAY</h5>

                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src="https://previews.123rf.com/images/kesu87/kesu871907/kesu87190700007/127038773-asian-food-background-with-various-ingredients-on-rustic-wooden-table-top-view-.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", marginBottom: "40%", fontSize: '60px' }}>Hungry to make a difference? There's always room at our table. Pull up a seat.</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;