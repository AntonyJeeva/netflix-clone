import React, { useState } from 'react'
import '../Styles/LoginScreen.css'
import SignInPage from './SignInPage'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)

  return (
    <div className='login-screen'>
        <div className="login-screen-contents">
            <img className='login-screen-logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='netflix-logo' ></img>

           
            <div className="login-screen-gradient" />
            <div className="login-screen-body">
            {signIn ? 
            (<SignInPage />) : (
                <>
                     <button onClick={ () => setSignIn(true)}  className='login-screen-signin-btn'> Sign In </button>
                    <h1>Unlimited Movies, TV shows and more. </h1>
                    <h3>Watch anywhere, Cancel anytime.</h3>

                        <div className="login-input">
                        <form>
                    <input className='login-input-email' type='email' placeholder='Email Address' />
                    <button onClick = { ()=> setSignIn(true) } className="getstarted-btn">Get Started > </button>
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