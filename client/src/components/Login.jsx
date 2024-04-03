import { useContext, useEffect, useState } from "react"
import {Link, Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { UserContext } from "../Context/UserContext";
// import {useAuth} from "../Context/AuthContext"



function Login(props,) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logInError, setLogInError] = useState(false)

    
    // const {authUser, 
    //     setAuthUser,
    //     isLoggedIn,
    //     setIsLoggedIn
    // } = useAuth()

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        
    }

   
       
    const {user, setUser} = useContext(UserContext)

    const loginUser =  async (e) => {
        e.preventDefault();
        const account = {
            username, password
        }
        const res = await fetch(`http://127.0.0.1:8000/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
              },
              body: JSON.stringify(account),
            });
       
         const data = await res.json()
         let size = Object.keys(data).length;
         if(size < 1){
            setLogInError(true)
            
         }else {
            setLogInError(false)
            setUser(data)
         
        
     
         }
         console.log(user)
      
    }

    

   

// function Component() {
//   let navigate = useNavigate();
//   // Somewhere in your code, e.g. inside a handler:
//   navigate("/posts"); 
// }


   
   

return (
    <>
  
  {user ? <Navigate to="/dashboard"/> : null }
  <div class="flex flex-col items-center justify-center w-screen mt-40 text-gray-700o">

    <form onSubmit={loginUser} class="flex flex-col bg-white rounded shadow-lg p-12 mt-12z" action="">
    <h2 class="font-bold text-2xl mb-10 text-center">Welcome back </h2>

    <label class="font-semibold text-xs" for="usernameField">Username</label>
    <input 
    class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" 
    type="text"
    name="username"
    onChange={(e) => setUsername(e.target.value)}
    />
    <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
    <input 
    class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
    type="password"
    name="password"
    onChange={(e) => setPassword(e.target.value)}

    />

       
  {logInError ? <p  class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Error!</span> Username or password not valid</p> 
  : null }
        <div class="mt-6">
            <button  type={"submit"} class="flex items-center justify-center h-12 px-6 w-64 bg-red-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Log in</button>
        </div>
        </form>
            {/* {user ?  navigator("/profile") : null} */}
    </div>



   


       {/* register new user form  */}
       {/* {signUpForm ? <div class=" fixed bg-opacity-75 transition-opacity " >
            <div class=" fixed overflow-y-auto g-white shadow-md rounded-lg" >
            <div class="form_header">
            

            <h1 class="text-2xl font-bold text-center mb-4 ">Join Habit Tracker</h1> 

            <p onClick={props.toggle}  class="text-2xl">X</p>
           
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

               <div class="signin-text">

            
                <form  onSubmit={handleLogin}>
                
                <label  >
                        Email address:
                        <input 
                        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required type="text" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label >
                         Username:
                        <input class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} />
                    </label>
                    {usernameError && <span>This username is taken</span>}
                    <label  >
                        Password:
                        <input class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button  type="submit" onClick={registerUser}>SIGN UP</button>
                  
                 
                </form>
                </div>
            </div>
             login in form  */}
         {/* <div class="popup fixed bg-opacity-75 transition-opacity " >
            <div class="popup-inner fixed overflow-y-auto " >
              <div class="form_header">

            <h1 class="text-3xl">Sign In</h1> 
            <p onClick={props.toggle} class="text-2xl">X</p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
               <div class="signin-text">

           
                <form  onSubmit={handleLogin}>
               
                    <label >
                        Username:
                        <input 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label >
                        Password:
                        <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit" onClick={validateRegisteratin}>Sign In</button>
                 
                </form>
                <p class="signIn-footer">Dont have an account? <button  onClick={changeFormView}>Sign Up</button></p>
                </div>
            </div>
        </div>
        */}
       
       </>
    )
}

export default Login