import React from 'react'
import {auth} from '../../firebase'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

  return (
    <div className="sign-in-container">
        <form onSubmit={signIn}>
            <h1>Log In</h1>
            <input 
                type='email' 
                placeholder='enter email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
            <input 
                type='password' 
                placeholder='enter password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default Signin