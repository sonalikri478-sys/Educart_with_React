import React from "react";
import "./Hero.scss";

function Hero(){
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="tag">

                    India's Educational Marketplace

                </span>

                <h1>
                    Learn Without
                    <span>Limits</span>
                </h1>

                <p>
                    Books, Notes, Stationary, Study Tables, Educational Toys and everything a student need-all in one place.
               </p>

               <div className="hero-buttons">
                <button className="shop-btn">
                    Shop Now
                </button>

                <button className="explore-btn">
                    ExploreCategories
                </button>


               </div>


                    <div className="hero-stats">

                        <div>
                            <h2>10k+</h2>
                            <p>Products</p>
                        </div>

                        <div>
                            <h2>10k+</h2>
                            <p>Happy Students</p>
                        </div>

                        <div>
                            <h2>500+</h2>
                            <p>Trusted Sellers</p>
                        </div>
                    </div>
                
            </div>

            <div className="hero-image">
                <img src="https://image.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Books" />

            </div>


        </section>
    );
}

export default Hero;