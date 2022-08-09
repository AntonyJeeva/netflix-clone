import React, { useState } from 'react'
import '../Styles/SignInPage.css';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import  {auth}  from '../Firebase-config';


function SignInPage() {
   

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const register= async (e)=>{

      e.preventDefault();
      console.log('register clicked');

      try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log(user);
      }catch(error){
      console.log(error.message)}
   
       
    }
    const signIn = async (e)=> {
        
        e.preventDefault();
        console.log('signIn in clicked');

        try{
          const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
          console.log(user);
        }catch(error){
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
            
        </form> 
        
    </div>
  )
}

export default SignInPage

