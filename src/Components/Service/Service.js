import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = () => {

    const [remainingDoctor, setRemainingDoctor] = useState();
    //For Showing All Available Service
    useEffect(() => {
        fetch('http://localhost:5000/doctor')
            .then(res => res.json())
            .then(data => {
                setRemainingDoctor(data)
            })
    }, [])

    const handleDelete = (doctor) => {
        const agree = window.confirm(`Are you want to delete ${doctor.name}?`)

        if (agree) {
            fetch(`http://localhost:5000/doctor/${doctor._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        const remainingServiceNew = remainingDoctor.filter(usr => usr._id !== doctor._id);
                        setRemainingDoctor(remainingServiceNew)
                    }
                })
        }
        else {
            console.log("Canceled");
        }

    }
    return (
        <div className='mt-5 pb-5'>
            <h2 className='fw-bold App'>Our Doctor</h2>
            <div className='ms-5 row row-cols-3 container App'>
                {
                    remainingDoctor?.map(doctor => <div className='mx-4 my-3 col parentGrid border border-5'>
                        <img className='w-100 gridImg mt-2' src={doctor.img} alt="" />
                        <h5 className='fw-semibold mt-2'>{doctor.title}</h5>
                        <p className='fw-semibold pt-1'>
                            Rating : {doctor.rating} <span className='ms-1'>Out of 5</span>
                        </p>

                        <div className='d-flex justify-content-around'>
                            <Link to={`/update/${doctor._id}`}>
                                <button className='px-3 rounded-3 fw-semibold'>Edit</button>
                            </Link>
                            <button onClick={() => { handleDelete(doctor) }} className='px-3 rounded-3 fw-semibold'>Delete</button>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default Service;