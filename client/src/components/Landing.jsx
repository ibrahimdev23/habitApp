import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Login from "./Login";

  
const Landing = () => {
  const [signUpForm, setSignUpForm] = useState(false) 
    return (
    
        <div>
             
       
              

       
     <div class=" h-screen w-screen bg-gradient-to-tr from-blue-400 via-gray-200 to-red-300  py-10">

      <div class="text-center px-3 lg:px-0">

        <h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight ">
          Build good habits and break bad ones!
        </h1>
        
        <p class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
        
 A <a className="seinfeld" href="https://jamesclear.com/stop-procrastinating-seinfeld-strategy" target="_blank" > Seinfeld method </a> based app to help you track habits, build routines and change your life.
        </p>
      
      </div>
      
      <div className="landing">
      <img src="../../imgs/cal4.png" width={"600x"} className="landingimg"></img>
      
       
       
      </div>
   

    </div>

       
      
       </div>
    )

    
}

export default Landing