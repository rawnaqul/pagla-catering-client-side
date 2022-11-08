import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = e => {
        e.preventDefault();
        // console.log(user);
        fetch(`https://assign-11-server.vercel.app/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User Updated');
                }
                console.log(data);
            })
    }

    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h1>Please Update Informations: {storedUser.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='Name' /><br />
                <input onChange={handleInputChange} defaultValue={storedUser.address} type="text" name='address' placeholder='Address' /><br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" name='email' placeholder='Email' /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UpdateUser;
