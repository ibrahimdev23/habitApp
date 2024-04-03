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
			const response = res.json()
			
    
    }

  

    return (
     

<div class="flex flex-col w-screen overflow-auto text-gray-700">
	<div class="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
  <img src="https://em-content.zobj.net/source/facebook/355/cross-mark-button_274e.png" width="50px" height={"50px"}></img>
  <h2 className="text-black no-underline hover:no-underline font-bold text-2xl">HabitApp</h2>
		<div class="ml-10">
			<a class="mx-2 text-sm font-semibold text-indigo-700" href="#"> {user ? <Link to="/dashboard" >Dashboard</Link>: <Link to="/" >Home</Link>}</a>
			{/* <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">  <Link  to="/ranking" >Rankings</Link></a> */}
			{/* <a class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">Activity</a> */}
		</div >

	

    <buton class="flex items-center justify-center ml-auto ">
			{user ? <button onClick={logOut}> <logOut /> Log out
      </button>
      
       :
      <a className="mx-2 text-sm font-semibold text-indigo-700"><Link to='/signup'   > Create Account</Link></a>  }
		</buton>
      		
    <buton class="flex items-center justify-center ">
			{user ? null :
      <a className="mx-2 text-sm font-semibold text-indigo-700"><Link to="/login" >Sign In</Link> </a>  }
		</buton>

	</div>



</div>

  
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