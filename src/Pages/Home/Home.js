import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>

            <div className='my-10 container mx-auto'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure className='w-1/2'><img src="https://i.postimg.cc/vZhZnchc/Catering-Service.png" alt="Movie" /></figure>
                    <div className="card-body w-1/2">
                        <h2 className="card-title text-center font-bold text-4xl">New servcie is released!</h2>
                        <p>Unlike others, Pagla Catering Service is devoted to delivering super delicious food and fabulous service to spice up your event. Whatever you’re planning - a gorgeous wedding, a high-end corporate event, new year party, or anything - we will create an amazing food experience suited to your taste.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Call Us Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-lime-600 bg-opacity-30 grid grid-cols-3 gap-5 px-10 container mx-auto rounded p-5'>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                    ></Services>)
                }
                <br />
                <div className='text-xl text-orange-600'>
                    <Link to={'/allservices'}>See All Services</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;