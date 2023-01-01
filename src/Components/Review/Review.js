import React, { useEffect, useState } from 'react';
import './Review.css'
const Review = () => {
    const [docReview, setDocReview] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setDocReview(data)
            })
    }, [])




    return (
        <div className='container mt-5'>
            <h3 className='App mt-5 pt-2 fw-bold'>Review Of Our Doctor</h3>

            <div className='App w-75 mx-auto '>
                {
                    docReview?.map(upcomming => <div className='m-3 upcomingCard d-flex border border-1 rounded-3'>
                        <img className='imageCard m-2 rounded-3' src={upcomming.img} alt="" />
                        <div className='mx-auto my-auto'>
                            <h3 className='fw-semibold mt-2 h-25 my-auto'>Name : {upcomming.title}</h3>
                            <h4 className='fw-semibold mt-1'>Rating{upcomming.rating} <span className='ms-1'>Out of 5</span> </h4>
                        </div>
                    </div>)

                }
            </div>


        </div>
    );
};

export default Review;