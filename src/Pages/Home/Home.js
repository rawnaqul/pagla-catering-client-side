import React from 'react';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            THIS IS HOME
            <div className='my-10'>this is meaningful banner, slider or relevent section</div>
            <div className='bg-lime-400'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;