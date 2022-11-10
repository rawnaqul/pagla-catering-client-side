import React, { useState } from 'react';

const AddService = () => {

    const [service, setService] = useState({})

    const handleAddService = e => {
        e.preventDefault();

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully')
                    e.target.reset();
                }
            })

        console.log(service);
    }

    const handleInputBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
    }


    return (
        <div className='container mx-auto bg-lime-600 bg-opacity-30 px-10 rounded p-5'>
            <form onSubmit={handleAddService}>
                <h2 className="text-4xl font-semibold my-3 text-slate-600">You Can Customize a Service According To Your Need!</h2>
                <br />
                <input onChange={handleInputBlur} name="image" type="text" placeholder="Please Place your image url" className="input input-ghost w-full bg-opacity-50 input-bordered my-3" />
                <br />
                <input onChange={handleInputBlur} name="name" type="text" placeholder="Please add your service name" className="input input-ghost w-full bg-opacity-50 input-bordered my-3" />
                <br />
                <textarea onChange={handleInputBlur} name="description" className="textarea textarea-bordered h-24 w-full my-3 bg-opacity-50" placeholder="Please type your service description" required></textarea>
                <br />
                <input onChange={handleInputBlur} name="price" type="number" placeholder="Please place your price" className="input input-ghost w-full bg-opacity-50 input-bordered my-3" required />
                <br />
                <input className='btn btn-ghost my-3' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default AddService;