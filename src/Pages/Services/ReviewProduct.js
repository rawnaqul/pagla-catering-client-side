import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const ReviewProduct = ({ review }) => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    const { _id, reviewMessage, customer, service, name, serviceName } = review;

    // useEffect(() => {
    //     fetch(`http://localhost:5000/purchase?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [user?.email])

    return (
        <div className=''>
            <div className=''>
                <div className="card w-96 bg-primary text-primary-content bg-opacity-30">
                    <div className="card-body text-center">
                        <p className='text-center'>
                            This review is about
                            <h2 className="card-title text-center">{serviceName}</h2>
                        </p>
                        <h2>Customer Name: {customer}</h2>
                        <h2>Review: {reviewMessage}</h2>
                        <div className="card-actions justify-end">
                            {/* <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewProduct;

