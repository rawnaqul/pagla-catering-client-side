import React from 'react';
import { Link } from 'react-router-dom';
import defImage from '../../fork-and-knife-large-white.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { _id, name, image, price, description } = service;

    return (
        <div className='mx-auto'>
            <div key={_id} className="card w-96 glass rounded-md m-3 bg-lime-600 bg-opacity-10 drop-shadow">
                <figure className='text-slate-600'>
                    <PhotoProvider>
                        <PhotoView src={image ? image : defImage}>
                            <img className='text-slate-500' src={image ? image : defImage} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm pr-0 text-left'>{description.substring(0, 100)}...</p>
                    <p className='text-red-500 text-left'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/servicedetails/${_id}`} key={_id}><button className="btn btn-primary">See More Detailes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;