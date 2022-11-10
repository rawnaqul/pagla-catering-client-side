import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddService from '../Services/AddService';
import ServiceCard from '../Services/ServiceCard';
import Services from '../Services/Services';

const Home = () => {
    const services = useLoaderData();


    const [revServ, setRevServ] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/servicesadd")
            .then(res => res.json())
            .then(data => {
                const revServData = data.slice(0).reverse().slice(0, 2);
                setRevServ(revServData)
            })
    }, [])



    return (
        <div>

            <div className='my-10 container mx-auto'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure className='w-1/2'><img src="https://i.postimg.cc/vZhZnchc/Catering-Service.png" alt="Movie" /></figure>
                    <div className="card-body w-1/2">
                        <h2 className="card-title text-center font-bold text-5xl">New Catering Service in the City!</h2>
                        <br />
                        <p className='text-justify'>Unlike others, Pagla Catering Service is devoted to delivering super delicious food and fabulous service to spice up your event. Whatever you’re planning - a gorgeous wedding, a high-end corporate event, new year party, or anything - we will create an amazing food experience suited to your taste.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Call Us Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='bg-lime-600 bg-opacity-30 px-10 container mx-auto rounded p-5'>
                <h2 className='text-5xl font-bold text-slate-500'>Our Regular Services</h2>
            </div>
            <br />
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
            <br />
            <div className='bg-lime-600 bg-opacity-30 px-10 container mx-auto rounded p-5'>
                <h2 className='text-5xl font-bold text-slate-500'><span className='text-orange-500'>Or</span> Customize Your Own Services</h2>
            </div>
            <div className='bg-lime-600 bg-opacity-30 px-10 container mx-auto rounded p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md container mx-auto'>
                    {

                        revServ.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                    <div>
                        <AddService></AddService>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;