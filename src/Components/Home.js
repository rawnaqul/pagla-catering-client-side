import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        const agree = window.confirm(`Are you confirm to delete the user: ${user.name}`);

        if (agree) {
            fetch(`https://assign-11-server.vercel.app/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User Deleted');
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }
                });
        }
    }

    return (
        <div>

            <div>
                <button><Link to="/users/add">Add User</Link></button>
                <br /> <br />
            </div>
            <h1>Total User: {displayUsers.length}</h1> <br />
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        Name:{user.name} <br />
                        Address: {user.address} <br />
                        Email: {user.email} <br />
                        <button onClick={() => handleDelete(user)}>Delete</button>
                        <button><Link to={`/update/${user._id}`}>Update</Link></button>
                        <br /><br />
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;
