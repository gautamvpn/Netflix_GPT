import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        //toggle features using negation. if sign in then make sign up and if sign up make it sign in 
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="background_image" />

        </div>
        <form className='absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
           <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
            
            {!isSignInForm && (
            <input type='text' placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-700'/>
            )}

            <input type='text' placeholder='Email Address'
             className='p-4 my-4 w-full bg-gray-700'/>

            <input type='password' placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-700'/>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
            {isSignInForm ? "Sign In" : "Sign Up" }
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already regustered Sign In now" }
            </p>
        </form>
    </div>
  )
}

export default Login