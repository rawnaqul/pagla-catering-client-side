import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

import ReviewProduct from './ReviewProduct';


const ServiceDetails = () => {
    const { name, description, _id, image, price } = useLoaderData();

    // modal-function
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    const handlePostReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const reviewMessage = form.reviewMessage.value;

        const review = {
            service: _id,
            serviceName: name,
            customer: userName,
            email,
            reviewMessage
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('You have Purchased successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <div>
                <div className='bg-lime-600 bg-opacity-30 px-10 container mx-auto rounded p-5'>
                    <h2 className='text-5xl font-bold text-slate-500'>"{name}" Service Details</h2>
                </div>
                <div className="card w-4/5 glass mx-auto mt-5">
                    <figure className='w-full pt-5 rounded'><img src={image} alt="car!" className='rounded' /></figure>
                    <div className="card-body">
                        <br />
                        <h2 className='text-xl text-slate-400'>Service Name: <span className='text-3xl text-orange-600 font-bold'>{name}</span></h2>
                        <br />
                        <p className='w-3/5 mx-auto text-xl text-justify text-slate-400'>Service Details: <span className='text-black'>{description}</span></p>
                        <p className='text-slate-400'>Price: $<span className='text-red-400 text-2xl'>{price}</span> (per)</p>
                        <br />
                        <div className='w-1/2 mx-auto'>
                            <Link className="card-actions" to={`/checkout/${_id}`}>
                                <button className="btn btn-primary w-full">Check Out</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review start */}
            <div>
                <div className='mt-10'>
                    <div className='bg-lime-600 bg-opacity-30 px-10 container mx-auto rounded p-5'>
                        <h2 className='text-5xl font-bold text-slate-500'> Reviews Of "{name}" Service</h2>
                    </div>
                </div>
                <br />
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md container mx-auto m-5 p-10'>

                    {
                        reviews.length !== 0 ? reviews.map(review => <ReviewProduct
                            key={review._id}
                            review={review}
                        // handleDelete={handleDelete}
                        // handleStatusUpdate={handleStatusUpdate}
                        ></ReviewProduct>)
                            : <p className='text-2xl text-orange-600 outline rounded p-10 text-center'>"Ooopsss.... No Reviews Found for this service!"</p>
                    }

                </div>

                <div className='mt-5'>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="btn btn-info my-5">Post Your Review</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <form onSubmit={handlePostReview}>
                                    <h2 className="text-2xl font-bold mb-3">Service Name: {name}</h2>

                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />

                                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                    </div>
                                    <textarea name="reviewMessage" className="my-4 textarea textarea-bordered h-24 w-full" placeholder="Write your review" required></textarea>
                                    <div className="rating block">
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                    </div>
                                    <br />
                                    <input className='btn' type="submit" value="Submit Review" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ServiceDetails;