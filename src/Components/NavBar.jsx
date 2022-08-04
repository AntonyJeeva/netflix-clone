import React, { useEffect, useState } from 'react'
import '../Styles/NavBar.css'




function NavBar() {

  const[show, setShow] = useState(false);

  const transistionNavBar = () =>{
    if(window.scrollY>100){
      setShow(true);
    }else{
      setShow(false);
    }
  }

  useEffect( () => {
    window.addEventListener('scroll' , transistionNavBar);
    return () => {window.removeEventListener('scroll' , transistionNavBar) }
  }, [] )

 

  return (
    <div className= {`navbar ${show && `nav_black`}`}>
      <div className="nav_contents">
        <img className='nav_logo' src='https://cdn.discordapp.com/attachments/560666490832027656/1002226762798866502/580b57fcd9996e24bc43c529_1.png'
        alt='netflix_logo' ></img>
        
        
        <img className='nav_avatar_pic' src='https://archive.org/download/profiles_202104/penguin.png'
        alt='profile_avatar'></img>

        

        </div>
        
    </div>
  )
}

export default NavBar