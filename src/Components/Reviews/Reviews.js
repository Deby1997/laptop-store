import React from 'react';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/images2.jpg';
import image3 from '../../Images//image3.jpg';
import image4 from '../../Images/photo2.png';
import image5 from '../../Images/photo3.png';
import image6 from '../../Images/circle-profile-pic.jpg';
import './Reviews.css';

const Reviews = () => {
    return (
        <div>
            <h1>Customer Reviews</h1>
            <div className='customer-review'>
                <div className='customer-review-card'>
                    <img className='card-image' src={image1} alt="" />
                    <h3>Alexandra Flame</h3>
                    <p>Quaite good. </p>
                    <h5>Rating:3.5</h5>
                </div>
                <div className='customer-review-card'>
                    <img className='card-image' src={image2} alt="" />
                    <h3>Tersia Dadario</h3>
                    <p>Amazing Laptop eveerrr!!!</p>
                    <h5>Rating:4</h5>
                </div>
                <div className='customer-review-card'>
                    <img className='card-image' src={image3} alt="" />
                    <h3>Runchia Dom</h3>
                    <p>Not bad.</p>
                    <h5>Rating:3</h5>
                </div>
                <div className='customer-review-card'>
                    <img className='card-image' src={image4} alt="" />
                    <h3>Alex Rudio</h3>
                    <p>Qualityful laptop.</p>
                    <h5>Rating:4</h5>
                </div>
                <div className='customer-review-card'>
                    <img className='card-image' src={image5} alt="" />
                    <h3>Megan Stallion</h3>
                    <p>I don't like this one.</p>
                    <h5>Rating:2</h5>
                </div>
                <div className='customer-review-card'>
                    <img className='card-image' src={image6} alt="" />
                    <h3>Dua Lipa</h3>
                    <p>Wanna bye another one!</p>
                    <h5>Rating:5</h5>
                </div>
            </div>
        </div>
    );
};

export default Reviews;