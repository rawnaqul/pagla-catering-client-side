import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { _id, name, image, price, description } = service;
    return (
        <div className='mx-auto'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p className='text-justify'>{description.substring(0, 100)}...</p>
                    <p className="text-blue-600 text-sm text-justify">Price: ${price}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Click to See Details!</button>
                    </div> */}
                </div>
            </div>
            <br />

        </div>
    );
};

export default Services;