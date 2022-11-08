import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {



    const services = useLoaderData();
    return (
        <div className='grid lg:grid-cols-2 rounded-md container mx-auto'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;