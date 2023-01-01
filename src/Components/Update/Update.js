import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const selectedService = useLoaderData();



    const [user, setUser] = useState(selectedService)

    const handleUpdateService = (event) => {
        event.preventDefault();
        console.log(user);

        fetch(`http://localhost:5000/doctor/${selectedService._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }


    return (
        <div className='App container'>
            <h3 className='fw-bold mt-4'> Update Your Existing Services</h3>
            <form onSubmit={handleUpdateService} className='my-3'>
                <input onChange={handleInputChange} type="text" name='title' placeholder='Service Title' />

                <br />
                <br />
                <input onChange={handleInputChange} type="text" name='imageLink' placeholder='Image Link' />

                <br />
                <br />
                <input onChange={handleInputChange} type="number" name='price' placeholder='Price' />
                <br />
                <br />


                <button type='submit'>Update Service</button>

            </form>
        </div>
    );
};

export default Update;