import { useState, useEffect, useMemo } from 'react'
import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"


import Profile from './components/Dashboard'
import Nav from "./components/Nav"
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { UserContext } from './Context/UserContext'


function App() {
  const [count, setCount] = useState(0)
  const [isloggedIn, setIsLoggedIn] = useState(false)

  const [users1, setUsers] = useState([])

  const fetchApi = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/users")
    const data = await res.json()
    setUsers(data.users)
   
  }




  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])




  return (
    < >
    <UserContext.Provider value={providerValue}>
     <Nav/>
     <div>
       <Routes>
       <Route path="/" element={isloggedIn ? <Profile/> : <Landing/>}/> 
      
        <Route path='/signup'  element={<SignUp  />}/>

       </Routes>


<Routes>
<Route path='/login'  element={<Login  />}/>

<Route path="/dashboard" element={user ? <Profile/> : <Login/>}/> 

</Routes>
     </div>
</UserContext.Provider>
    
    
    </>
  )
}

export default App
