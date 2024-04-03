import { useState, useEffect, useMemo } from 'react'
import {Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

//import Navbar from 'client/src/components/Navbar.js'
//import Profile from 'client/src/components/Profile.js'

import Ranking from './components/Ranking'
import Profile from './components/Dashboard'
import Home from './components/Home'
import Nav from "./components/Nav"
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from "./components/Logout"
// import { AuthProvider } from './Context/AuthContext'
import { UserContext } from './Context/UserContext'
import {ListContext} from './Context/ListContext'
function App() {
  const [count, setCount] = useState(0)
  const [isloggedIn, setIsLoggedIn] = useState(false)

  const [users1, setUsers] = useState([])

  const fetchApi = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/users")
    const data = await res.json()
    setUsers(data.users)
    console.log(users1)
  }

  // useEffect(()=> {
  //   fetchApi()
  // }, [])



  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])




  return (
    < >
    <UserContext.Provider value={providerValue}>
    <ListContext.Provider>
     <Nav/>
     <div>
       <Routes>
       <Route path="/" element={isloggedIn ? <Home/> : <Landing/>}/> 
      

{/* <AuthProvider>
        <Route path='/login'  element={<Login  onStateChange={setLog} />}/>
        <Route path='/signup'  element={<SignUp  />}/>
</AuthProvider> */}

        <Route path='/signup'  element={<SignUp  />}/>

        {/* <Route path="/ranking" element={<Ranking/>}/> */}
        <Route path="/logout" element={<Logout/>}/>
       </Routes>


<Routes>
<Route path='/login'  element={<Login  />}/>

<Route path="/dashboard" element={user ? <Profile/> : <Login/>}/> 

</Routes>
{/* <Route path='/signup'  element={<SignUp  />}/> */}
     </div>
     </ListContext.Provider>
</UserContext.Provider>
    
    
    </>
  )
}

export default App
