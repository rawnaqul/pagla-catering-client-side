import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {



    const services = useLoaderData();
    return (
        <div className=''>
            <div className='container mx-auto rounded'>
                <div className="hero min-h-screen rounded" style={{ backgroundImage: `url("https://i.postimg.cc/vZhZnchc/Catering-Service.png")` }}>
                    <div className="hero-overlay bg-opacity-50 rounded"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-6xl font-bold">Hello there!</h1>
                            <p className="mb-5">Unlike others, Pagla Catering Service is devoted to delivering super delicious food and fabulous service to spice up your event. Whatever you’re planning - a gorgeous wedding, a high-end corporate event, new year party, or anything - we will create an amazing food experience suited to your taste..</p>
                            <br />
                            <button className="btn btn-primary">Book Us Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md container mx-auto'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;