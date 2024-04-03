import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
import { UserContext } from "../Context/UserContext";
import Calendar from "./Calendar/Calendar";
import { format } from "date-fns";
import ToDoList from "./ToDoList/ToDoList";
import Stats from "./Stats";

const Dashboard = () => {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [clickedDate, setClickedDate] = useState(new Date())

    const {user, setUser} = useContext(UserContext)

    const setTodayDate = () => {
        setCurrentDate(new Date())
        setClickedDate(new Date())
        
    }

    return (

        
    //    <div>
    //    <button >click</button>
    //     <h1>Hello {JSON.stringify(user,null,2)}</h1>
    //    </div>


    // <div class="boxes">
    // <div className="one">
    //     <Calendar/>
    // </div>
    // <div class="two">
    //     box 2
    // </div>
    // </div>
    <div className="mt-12 flex justify-evenly content-center flex-row items-start">
   
    <div className="one mt-8">
        {/* <p>Selected Date: {format(clickedDate, "dd LLLL yyyy")}</p> */}
       
        {/* <button onClick={setTodayDate}>Today</button> */}
    
        <Calendar value={currentDate} onChange={setCurrentDate} onClick={setClickedDate}/>
</div>
        <div className="two todolist rounded-lg shadow-lg">
        {/* <p>Current Date: {format(currentDate, "dd LLLL yyyy")}</p> */}
        {/* <p>{format(currentDate, " LLLL dd yyyy")}</p> */}
        <ToDoList date={currentDate} />
        </div>
    </div>
    )


    
}

export default Dashboard