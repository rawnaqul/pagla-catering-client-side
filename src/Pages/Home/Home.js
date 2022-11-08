import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>

            <div className='my-10 container mx-auto'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
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
            </div>
        </div>
    );
};

export default Home;