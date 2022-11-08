import React, { useState } from 'react';

const AddUsers = () => {
    const [user, setUser] = useState({});

    const handleAddUser = e => {
        e.preventDefault();

        fetch('https://assign-11-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully')
                    e.target.reset();
                }
            })

        console.log(user);
    }

    const handleInputBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h1>Please Add your Information</h1>
            <form onSubmit={handleAddUser}>
                <input onChange={handleInputBlur} type="text" name='name' placeholder='Name' /><br />
                <input onChange={handleInputBlur} type="text" name='address' placeholder='Address' /><br />
                <input onChange={handleInputBlur} type="email" name='email' placeholder='Email' /><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUsers;
