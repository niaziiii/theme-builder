"use client"
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating() {
    const [rating, setRating] = useState(0); // Initial rating state

    // Function to handle click on a star
    const handleStarClick = (index) => {
        setRating(index + 1); // Set rating to the index of the star clicked plus 1
    };

    // Function to render stars based on current rating
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(
                    <AiFillStar key={i} className='text-2xl cursor-pointer' onClick={() => handleStarClick(i)} />
                );
            } else {
                stars.push(
                    <AiOutlineStar key={i} className='text-2xl cursor-pointer' onClick={() => handleStarClick(i)} />
                );
            }
        }
        return stars;
    };

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl'>Quality</h1>
            <div className="flex">
                {renderStars()}
            </div>
        </div>
    );
}
