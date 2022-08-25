import React, { useState } from 'react'
import '../Styles/LoginScreen.css'
import SignInPage from './SignInPage'
import { ToastContainer, toast } from "react-toastify";

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

    const infopopup = () =>{
        toast.info('You can either create an account or sign in using the test account.  Email: test@gmail.com  Password: test123',
        {
          toastId: 'info2',
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: false,
        }
        )
      }
      infopopup();

  return (
    <div className='login-screen'>
        <div className="login-screen-contents">
            <img className='login-screen-logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='netflix-logo' ></img>

           
            <div className="login-screen-gradient" />
            <div className="login-screen-body">
            {signIn ? 
            
            (<SignInPage />
            
            ) : (
                <>
                     <button onClick={ () => setSignIn(true)}  className='login-screen-signin-btn'> Sign In </button>
                    <h1>Unlimited Movies, TV shows and more. </h1>
                    <h3>Watch anywhere, Cancel anytime.</h3>

                        <div className="login-input">
                        <form>
                    <input className='login-input-email' type='email' placeholder='Email Address' />
                    <button onClick = { ()=> setSignIn(true) } className="getstarted-btn" 
                       
                      >Get Started > </button>
                </form>
                </div>
            </>
            ) 
            }
           
           </div>
            
            
                
           
        

        </div>


    </div>
  )
}

export default LoginScreen