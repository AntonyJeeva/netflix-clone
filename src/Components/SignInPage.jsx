import React, { useState } from 'react'
import '../Styles/SignInPage.css';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


import  {auth}  from '../Firebase-config';
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

function SignInPage() {
   

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
/* 
    function mapAuthCodeToMessage(authCode) {
      switch (authCode) {
        case "auth/invalid-password":
          return "Password provided is not corrected";
    
        case "auth/invalid-email":
          return "Email provided is invalid";
    
        // Many more authCode mapping here...
    
        default:
          return "";
      }
    } */


    const register= async (e)=>{

      e.preventDefault();
      console.log('register clicked');

      try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        toast.success('Signed up successfully')
        console.log(user);
      }catch(error){
        toast.warn('Please check your email and password')
        /* alert(toast.error) */;
      console.log(error.message)}
   
       
    }
    const signIn = async (e)=> {
        
        e.preventDefault();
        console.log('signIn in clicked');

        try{
          const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
          toast.success('Signed In successfully')
          console.log(user);
        }catch(error){
          
          toast.warn('Incorrect email or password')
          /* alert(error.message); */
        console.log(error.message)}
    }

  return (
    <div className='signIn' >
        <h1>Sign In</h1>
        <form>
            <input onChange={(event)=> {setRegisterEmail(event.target.value)}} /* ref={emailRef} */ type= 'email' placeholder="Email Address" ></input>
            <input onChange={(event)=> {setRegisterPassword(event.target.value)}}  /* ref={passwordRef} */ type= 'password' placeholder="Password" ></input>
            <button type='submit' onClick={signIn} > Sign In </button>
            <h4><span className='newtonetflix'>New to Netflix? {"\u00a0\u00a0"}   </span>  
            <span className='register'  onClick = {register}> Sign Up Now </span> </h4>

            <ToastContainer autoClose={2000} />
            
        </form> 
        
    </div>
  )
}

export default SignInPage

