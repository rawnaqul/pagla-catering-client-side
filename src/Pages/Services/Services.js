import React from 'react';

const Services = ({ service }) => {
    const { _id, name, image, price, description } = service;
    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p className="text-blue-600 text-sm">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Click to See Details!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;