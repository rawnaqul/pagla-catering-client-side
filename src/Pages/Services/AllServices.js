import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {



    const services = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md container mx-auto'>
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