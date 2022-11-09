import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, name, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlacePurchase = event => {
        event.preventDefault();
        const form = event.target;
        const userName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const purchase = {
            service: _id,
            serviceName: name,
            price,
            customer: userName,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 11 characters or longer')
        // }
        // else{

        // }

        fetch('https://assign-11-server.vercel.app/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('You have Purchased successfully')
                    form.reset();

                }
            })
            .catch(error => console.error(error));


    }


    return (
        <div className='container mx-auto bg-lime-100 bg-opacity-40 p-5 rounded'>
            <form onSubmit={handlePlacePurchase}>
                <h2 className="text-4xl">You are about to purchase: <span className='font-extrabold'>{name}</span></h2>
                <br />
                <h4 className="text-xl">Price: <span className='text-orange-500 text-2xl'>${price}</span></h4>
                <br />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <br />
                <textarea name="message" className="textarea textarea-bordered h-24 w-full " placeholder="Your Message" required></textarea>
                <br />
                <input className='btn my-5' type="submit" value="Place Your Order" />
                <br />
            </form>
            <br />
        </div>
    );
};

export default CheckOut;