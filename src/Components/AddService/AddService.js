import React, { useState } from 'react';

const AddService = () => {

    const [doctorData, setDoctorData] = useState({})

    const handleSubmit = (event) => {
        event.target.reset();

        fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doctorData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Your Data inserted")
                }
            })


    }
    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newDoctor = { ...doctorData };
        newDoctor[field] = value;
        setDoctorData(newDoctor);
    }



    return (
        <div className='mt-3 ms-5'>
            <h3 className='fw-bold mt-4'> Add New Doctor</h3>
            <form onSubmit={handleSubmit} className='my-3'>
                <input onChange={handleChange} type="text" name='title' placeholder=' Doctors Name' required />
                <br />
                <br />
                <input onChange={handleChange} type="text" name='img' placeholder='Image url' required />
                <br />
                <br />
                <input onChange={handleChange} type="number" name='rating' placeholder='Rating' required />
                <br />
                <br />
                <button className='btn btn-primary' type='submit'>Add Doctor</button>

            </form>
        </div>
    );
};

export default AddService;