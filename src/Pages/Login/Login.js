import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Pages/Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    const { providerLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleLoginSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLoginSubmit}>
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                {
                                    error && <div className='text-red-600'>
                                        <p>{error}</p>
                                    </div>
                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div>Or</div>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline"> <span className='mx-2'> </span> Login with Google</button>
                            </div>

                            <div className='mt-2'>
                                <p><small>Don't have an account? <Link className='text-cyan-700 font-medium' to="/signup"> Sign Up here</Link></small></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;