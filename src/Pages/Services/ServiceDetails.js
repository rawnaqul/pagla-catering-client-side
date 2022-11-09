import React from 'react';
import { Link, useActionData, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, name, image, price, description } = useLoaderData();
    return (
        <div className=''>
            <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto bg-lime-600 bg-opacity-10">
                <figure className='w-1/2'><img src={image} alt="Album" /></figure>
                <div className="card-body w-1/2 ">
                    <p className='text-4xl font-bold'>{name}</p>
                    <br />
                    <h2 className="card-title">New servcie <span className='text-orange-400'> {name} </span> is available!</h2>
                    <br />
                    <p className='text-justify'>{description}</p>
                    <br />
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary"><Link to={`/checkout/${_id}`}><button className=''>Purchase</button></Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;