import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <div className="body">
                    <img className="w-100" src="https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-italian-blue-scaled.jpg" alt="" />
                    <h5 style={{ color: "gray" }} className="ms-5 me-5">
                        For us, it's not just about bringing you good food from your favourite restaurants. It's about making a connection, which is why we sit down with the chefs, dreaming up menus that will arrive fresh and full of flavour. Try us!

                    </h5>
                </div>
                <div className="ms-3 me-3 mt-3" style={{ backgroundColor: "#d70f64", color: "white" }}>
                    <h2>Our Mission</h2>
                    <h6>"Bringing good food into your everyday. That's our mission.</h6>
                    <h6>That means we don't just deliver--we bring it, always going the extra mile to make your experience memorable.</h6>
                    <h6 className="pb-4">And it means this is delicious food you can enjoy everyday: from vibrant salads for healthy office lunches, to indulgent family-sized pizzas, to fresh sushi for a romantic night in. Whatever you crave, we can help."</h6>
                </div>
            </div>

            <div>
                <h1 className="pt-5">HOW IT WORKS</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-3 ">
                    <div className="col">
                        <img src="https://foodora.com/wp-content/uploads/2017/01/icon_order.svg" alt="" />
                        <h5>Order</h5>
                    </div>
                    <div className="col">
                        <img src="https://foodora.com/wp-content/uploads/2017/01/icon_lean.svg" alt="" />
                        <h5>Relax</h5>
                    </div>
                    <div className="col">
                        <img src="https://foodora.com/wp-content/uploads/2017/01/icon_enjoy.svg" alt="" />
                        <h5>Enjoy</h5>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;