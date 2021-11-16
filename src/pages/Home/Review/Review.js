import React from 'react';
import "./Review.css"
import user1 from '../../../image/images.jpg'
import user2 from '../../../image/img_9460-hdr.jpg'
import user3 from '../../../image/mazda-mx-5-900x600-thumbnail.jpg'


const Review = () => {
    return (
        <div className='review-container'>
            <div className='review'>
                <img className="rounded-circle ms-3" src={user1} alt=""/>
                <h2>Watson</h2>
                <p> The purpose of a car review is to let the readers know what life would be like if they purchased that car</p>
            </div>
            <div className='review'>
                <img  className="rounded-circle ms-3" src={user2} alt=""/>
                <h2>John william</h2>
                <p> The purpose of a car review is to let the readers know what life would be like if they purchased that car</p>
            </div>
            <div className='review'>
                <img className="rounded-circle ms-3" src={user3} alt=""/>
                <h2>Alen Walker</h2>
                <p> The purpose of a car review is to let the readers know what life would be like if they purchased that car</p>
            </div>
        </div>
    );
};

export default Review;