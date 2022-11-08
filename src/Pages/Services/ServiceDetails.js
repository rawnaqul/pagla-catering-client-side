import React from 'react';
import { Link, useActionData, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, name, image, price, description } = useLoaderData();
    return (
        <div>
            this is a page about a service details
            <p>{name}</p>
            <Link to={`/checkout/${_id}`}><button className='btn btn-ghost'>Purchase</button></Link>
        </div>
    );
};

export default ServiceDetails;