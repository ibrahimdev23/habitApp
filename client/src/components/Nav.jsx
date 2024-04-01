import React from "react";
import {Link} from 'react-router-dom'
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

import Login from "./Login";
const Navbar = () => {

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [loginView, setLoginView] = useState(false)
    const [signUpView, setSignUpView] = useState(false)

    const [logginForm, setLogginForm] = useState("logIn")
    const [signUpFormView, setSignUpFormView] = useState("signUp")

    const {user, setUser} = useContext(UserContext)


    const logOut = async () => {
        setUser(null)
       const res = await fetch(`http://127.0.0.1:8000/logout`)
       //const data = await res.text()
    
    }

  

    return (
      
      <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
            <img src="https://em-content.zobj.net/source/facebook/355/cross-mark-button_274e.png" width="50px" height={"50px"}></img>
            <h2 className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-3xl">HabitApp</h2>
          
        </div>

        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div className="text-white w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3 text-white">
              {user ? null : <Link to="/" className="text-white inline-block py-2 px-4 text-black font-bold no-underline" >Home</Link>}
            </li>
            <li >
               <Link  to="/ranking" className="text-white inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">Rankings</Link>
            </li>
            {/* <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Sign in</a>
            </li> */}
            {user ? <li><Link to="/profile" className=" text-white block py-2 px-1 text-white  rounded md:bg-transparent  md:p-0" >Profile</Link> </li> :
      <li>
      <Link to="/login" >Sign In</Link> 
      <button className=" text-white mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
        <Link to='/signup'   > Create Account</Link> 
         </button>
      </li>}
          
           {user ?  <li >
               <Link  to="/logout"  onClick={logOut} className="text-white inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">Log out</Link>
            </li> : null }
          </ul>
         
        </div>
      </div>
    </nav> 
      

      // {loginView ? <Login toggle={toggleLoginForm} value={logginForm} setLoggedIn={isLoggedIn} /> : null}
      // {signUpView ? <Login toggle={toggleSignUpForm} value={signUpFormView}  setLoggedIn={isLoggedIn}/> : null}
      //    {isLoggedIn ? "" : <button id="navAction" className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
      //   <Link to='/'  onClick={toggleSignUpForm} setLoggedIn={isLoggedIn} > Create Account</Link> 
      //   </button>} 
//         <div classNameName="navBar">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
//     <Link to="/">
//             <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <p classNameName="text-4xl">🔗</p>
//              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Habit App  </span>
//   </a>
  
// </Link>

// <div>

        
       
       
    
//       <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
//   <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      
    //   {isLoggedIn ? <li><Link to="/profile" className="block py-2 px-1 text-white  rounded md:bg-transparent  md:p-0" >Profile</Link> </li> :
    // <>
    // <li>  <Link to='/'  onClick={toggleSignUpForm} > Create Account</Link> </li>
    //   <li><Link to="/profile" onClick={toggleLoginForm} >Sign In</Link> </li>
    //   </>}
      // {loginView ? <Login toggle={toggleLoginForm} value={logginForm}  /> : null}
      // {signUpView ? <Login toggle={toggleSignUpForm} value={signUpFormView} /> : null}
    
//       <li>
//       <Link  to="/ranking" className="block py-2 px-1 text-white  rounded md:bg-transparent  md:p-0">Rankings</Link>
//       </li>
//       <li>
//       <Link to="/" className="block py-2 px-1 text-white  rounded md:bg-transparent  md:p-0" >Home</Link>

//       </li>
      
   
//     </ul>
//   </div>
        
//             </div>
           
           
    
//         </div>
    
    )

    
}


{/* <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
          <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <svg className="h-6 w-6 inline-block fill-current text-yellow-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"></path>
            </svg>
            Bolt App
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
          <button id="navAction" className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
            Action
          </button>
        </div>
      </div>
    </nav> */}

export default Navbar