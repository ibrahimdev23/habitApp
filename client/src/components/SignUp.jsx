import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const registerUser = async () => {

        
            const user = {
                username, email, password
            }
            const res = await fetch(`http://127.0.0.1:8000/register`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify(user),
                });
            
    
            const data = await res.json()
            console.log(data)
                
        }
    

    return (
        <>



    <div class="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
        <h2 class="text-2xl font-semibold mb-4">Join HabitApp </h2>

        <form >
        <div class="mt-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email address: </label>
                <input 
                type="email" 
                name="email" 
                class="mt-1 p-2 w-full border rounded-md" 
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                />
                {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p>
                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username already taken!</p> */}

            </div>

            <div class="mt-4">
                <label for="usernmae" class="block text-sm font-medium text-gray-700">Pick a username: </label>
                <input type="username"  name="username" class="mt-1 p-2 w-full border rounded-md" 
                autoComplete="on"
                     onChange={(e) => setUsername(e.target.value)}
                />
            </div>
           
            <div class="mt-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password: </label>
                <input type="password" name="password" class="mt-1 p-2 w-full border rounded-md"
                autoComplete="on"
                     onChange={(e) => setPassword(e.target.value)}
                />
            </div>
         
            <div class="mt-6">
                <button onClick={registerUser} class="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign up</button>
            </div>
        </form>
    </div>
        </>
    )
}

export default SignUp