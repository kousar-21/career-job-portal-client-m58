import Lottie from 'lottie-react';
import React, { use } from 'react';
import RegisterLottie from '../../Lottie-Json/register.json'
import { AuthContext } from '../../contexts/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {

    const {createUsers} = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form  = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //create user with email and password
        createUsers(email, password)
        .then(result => {
            const users = result.user;
            console.log(users)
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={RegisterLottie} className='size-60'></Lottie>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                            <SocialLogin></SocialLogin>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;