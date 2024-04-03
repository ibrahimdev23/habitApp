import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Login from "./Login";

   // <h1 className="text-5xl text-center">New Patterns</h1>
   //  <h3 className="text-xl">Take back control of your life with New Patterns</h3>
   //   <h3 className="text-3xl text-center">🔗</h3> 
   //     <img src="../../imgs/atomic.png"></img>
   // <img className="floating" src="https://framerusercontent.com/images/Pn7vfzLLQ2Ylyc0MS2jmR64xKlc.png" alt=""/>
const Landing = () => {
  const [signUpForm, setSignUpForm] = useState(false) 
    return (
    
        <div>
             
       
              
        
     {/* <section class="mb-32 text-center ">
       <div class="flex justify-center">
         <div class="max-w-[800px]">
       
         <img src="../../imgs/twice.png"></img>
           <h2 class="mb-12 text-4xl font-bold tracking-tight md:text-4xl xl:text-6xl">
           Never Miss Twice <br />
             <span class="text-primary dark:text-primary-400"></span>
           </h2>
           
           <p class="text-lg text-neutral-500 dark:text-neutral-500">
           A single app to help you track habits, build routines and change your life.
           </p>
           <h3 className="text-3xl text-center">🔗🔗🔗</h3> 
           
         </div>
        
       </div>
     
     </section> */}
     {/* from-blue-200 via-indigo-200 to-pink-200 */}
     <div class=" h-screen w-screen bg-gradient-to-tr from-blue-400 via-gray-200 to-red-300  py-10">

      <div class="text-center px-3 lg:px-0">
      {/* <img className="h-screen flex items-center justify-center f"  src="../../imgs/link_1f517.png" alt=""/> */}

        <h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight ">
          Build good habits and break bad ones!
        </h1>
        
        <p class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
        
 A <a className="seinfeld" href="https://jamesclear.com/stop-procrastinating-seinfeld-strategy" target="_blank" > Seinfeld method </a> based app to help you track habits, build routines and change your life.
        </p>
        {/* <button class="red mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48">
          Sign Up
        </button>
        <a href="#" class="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-red-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8">About</a> */}
        {/* <button class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48">
          Sign Up
        </button>
         */}
        {/* <a href="#" class="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8">View Additional Action</a> */}
      
      </div>
      
      <div className="landing">
      <img src="../../imgs/cal4.png" width={"600x"} className="landingimg"></img>
      
       
       
      </div>
   

    </div>

       
      
       </div>
    )

    
}

export default Landing