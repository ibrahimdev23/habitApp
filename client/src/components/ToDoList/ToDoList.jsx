import React, { useState , useReducer, useContext, useEffect} from "react";
import { format, set } from "date-fns";
import ToDoItem from "./ToDoItem";
import ListContext from "../../Context/ListContext";
import UserContext from "../../Context/UserContext";

let nextId = 0

const ToDoList = ({date}) => {
    const {user, setUser} = useContext(UserContext)

	const [currentDate, setCurrentDate] = useState(Date.now())

	const [tasks, setTasks] = useState([
		{}
])

	const [text, setText] = useState('')

	const addTask = (text) => {
		
		const newTask = {
			id:nextId++,
			date: Date.now(),
			text, 
			completed: false
		}
		setTasks([...tasks, newTask ])
		setText("")
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const addToUserData = () => {
		let count = 1
	

		for(let i = 1; i < tasks.length; i++){
			if(tasks[i].completed){
				count++
			}
		}
		let data 
		if(tasks.length > 1 && count === tasks.length){
			let currentDay = JSON.stringify(format(currentDate, "LLLLLL dd yyyy"))
			 postStreakData(currentDay)
			
		}
		
	}


	
	useEffect(() => {
		addToUserData()
	}, [tasks])

	// let currentD = JSON.stringify(format(currentDate, "LLLLLL dd yyyy"))
	// const dates = [{date: currentD, completed:true}]
	// console.log(dates[0])
	
	const  postStreakData = async (day) => {
		
		const userId = user["id"]
		let data = {"date":day, userId}
		// user["streaks"].push(day)
	
		const res = await fetch(`http://127.0.0.1:8000//update_user/1`, {
			
			method: "POST", 
			headers: {
				"Content-Type": "application/json",
				'Accept': 'application/json',
				
			  },
			  body: JSON.stringify(data),
			});

			const response = res.json()
			
	}



	const toggleCheckedMark = (id) => {
		
		setTasks(tasks.map(task => {
			if(task.id === id){
				
				return {...task, completed: !task.completed}
				
			} else{
				
				return task 
			}
		}))
	}

	return (
		<div class=" c flex-grow items-center justify-center text-gray-600 ">
	
		<div class="c max-w-full p-8 bg-white w-96">
			<div class="flex items-center mb-6">
				
				<h4 class="font-semibold ml-3 text-lg">{format(date, " LLLL dd yyyy")}</h4>
			</div>
		</div>
	
		<ul className="" >
		
			{tasks.map(task => (
				<li>
				<div className="flex items-center group/item" >
				<ToDoItem
				key={task.id}
				task={task}
				deleteTask={deleteTask}
				toggleCheckedMark={toggleCheckedMark} 
				
				/>
				</div>
				</li>
			))}
			
		
		</ul>
		
		<div>
		<input 
		className="border ml-5 mt-12 mr-5"
		placeholder="Add new task"
			value={text}
			onChange={e => setText(e.target.value)}>
			
			</input>
			<button
			
			onClick={() => addTask(text)}
			>Add Task
			
			</button>
			</div>
		</div>
	)


}

export default ToDoList;