// import {React, useState, useEffect, useContext, createContext} from "react";

// const AuthContext = createContext();

// export function useAuth(){
//     return useContext(AuthContext)
// }

// // const authService = new AuthService()


// export function AuthProvider(props) {
//     const [authUser, setAuthUser] = useState(null)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
    
//     // const context = {
//     //   AuthService, 
//     //   namef: () => {

//     //   }
//     // }

//     // useEffect(()=> {
//     //   const subscribe = AuthService.subscribe((user)=> {
//     //     if(user){
//     //       setIsLoggedIn(true)
//     //       setAuthUser(user)
//     //     }else {
//     //       setIsLoggedIn(false)
//     //       setAuthUser(null)
//     //     }
//     //   })
//     //   return subscribe
//     // })

   

//     const value = {
//         authUser, 
//         setAuthUser,
//         isLoggedIn,
//         setIsLoggedIn
//     }



// return (
//     <AuthContext.Provider value={value}>
//         {props.children}
//     </AuthContext.Provider>
// )
// }


// // const AuthProvider = ({ children }) => {
// //     return <AuthContext.Provider>{children}</AuthContext.Provider>;
// //   };
// // export default AuthProvider;

// // export const useAuth = () => {
// //     return useContext(AuthContext);
// //   };


// import { createContext, useState } from "react";

// const AuthContext = ({children}) => {
//   const [user, getUser] = useState(() => ({
//     loggedIn: false,
//   }))
//   return <AuthContext.Provider value={user}>
//     {children}
//   </AuthContext.Provider>

  
// }

// export default AuthContext