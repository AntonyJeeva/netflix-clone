import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar'
import MoviesPage from './Components/MoviesPage';
import LoginScreen from './Components/LoginScreen';
import { auth } from './Firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';


import {  toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

function App() {

  const notify= ()=>{
    toast.info('Incase if you are seeing dead link/images, please refresh your browser a few times', 
    {
      toastId: 'info1',
      position: toast.POSITION.TOP_CENTER,
      autoClose: false
      
    },
   
    
  )

    /* toast.warn('ggwp') */
   }
 

    const user = useSelector(selectUser);
    
    const dispatch = useDispatch();

  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);

        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })  )


      }
      else {
          dispatch(logout)
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="app">
       
       <BrowserRouter>
       {!user ? <LoginScreen /> :
                 
            <Routes>
            <Route path = '/' element = {<HomeScreen /> } render = {notify()}  > </Route>
            
          </Routes>
          
       }
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
