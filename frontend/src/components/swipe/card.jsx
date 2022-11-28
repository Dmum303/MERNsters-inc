import React from "react";
import './card.css'

const Card = () => {
    return (
        <div className='card'>
            <img className='card-img' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2563d44140839.5808ae0373dcd.jpg" alt='batman' />
            <div className='card-body'>
                <div className='name-bar'>
                    <h3>Batman, 12</h3>
                </div>
            </div>
        </div>
        
        
    )
}

export default Card