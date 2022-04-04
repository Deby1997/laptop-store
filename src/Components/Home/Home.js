import React from 'react';
import Images from '../../Images/laptop.jpg';
import Images2 from '../../Images/photo2.png';
import Images3 from '../../Images/image1.jpg';
import Images4 from '../../Images/image3.jpg';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>This is home.</h1>
            {/* this is home header start */}
            <div className='home-header'>
                <div>
                    <h1>Best Laptop</h1>
                    <h1 className='year'>In This Year 2022</h1>
                    <p>If you like to write, browse, game, or work in different parts of your home or office, a good laptop in 2022 is a necessity. There are many to choose from, but you can narrow down your options by looking at laptops from the most established and respected brands first.</p>
                    <p>Here's a list of the best laptop brands in 2022 to get you started.</p>
                    <button className='btn'>Read More</button>
                </div>
                <div>
                    <img src={Images} alt="" />
                </div>
            </div>
            {/* home header end */}
            <h1>Customer Reviews</h1>
            <div className='customer-review'>
                <div className='customer-review-card'>
                    <img className='card-image' src={Images2} alt="" />
                    <h3>Alex Rudio</h3>
                    <p>The working process is very good.I just want to say it's very useful. </p>
                    <h5>Rating:4.5</h5>
                </div>
                <div className='customer-review-card'>
                    <img className='card-image' src={Images3} alt="" />
                    <h3>Tersia Dadario</h3>
                    <p>Amazing Laptop eveerrr!!!</p>
                    <h5>Rating:4</h5>
                </div>
                <div className='customer-review-card'>
                    <img className='card-image' src={Images4} alt="" />
                    <h3>Runchia Dom</h3>
                    <p>Not a negative review!But I think battery is not qualityful.</p>
                    <h5>Rating:2.5</h5>
                </div>
            </div>
            <button className='btn-rev'>See All Reviews</button>
            {/* end of customer review */}
        </div>
    );
};

export default Home;