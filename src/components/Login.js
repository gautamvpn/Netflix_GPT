import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVTAR, bg_URL } from '../utils/constant';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMesasge] = useState(null)
    const dispatch = useDispatch()

    //taking refrence of email directly, take directly value
    // const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleButtonClick = () => {
        //validate the form data
        const message = checkValidData(email.current.value, password.current.value)
        // console.log(message)
        setErrorMesasge(message);
        // console.log(name.current.value)
        // console.log(email.current.value)
        // console.log(password.current.value)
        if (message) return;  // error found

        // now means no error found
        //create a new user -> sign in/ sign up
        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(
                auth, email.current.value, password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        // photoURL: "https://avatars.githubusercontent.com/u/63564498?v=4"
                        photoURL:USER_AVTAR
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        })
                        )

                        console.log(user);
                    }).catch((error) => {
                        // An error occurred
                        setErrorMesasge(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMesasge(errorCode + " " + errorMessage)

                });
        }
        else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMesasge(errorCode + " " + errorMessage);
                });
        }
    }

    const toggleSignInForm = () => {
        //toggle features using negation. if sign in then make sign up and if sign up make it sign in 
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={bg_URL}
                    alt="background_image" />

            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (
                    <input ref={name} type='text' placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700' />
                )}

                <input
                    // this ref will help us getting reference of input box.
                    ref={email}
                    type='text' placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700' />

                <input

                    ref={password}
                    type='password' placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700' />

                {/* for error msg displaying */}
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already regustered Sign In now"}
                </p>
            </form>
        </div>
    )
}

export default Login