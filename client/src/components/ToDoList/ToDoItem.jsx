import { useState, useContext } from "react"
import {ListContext} from "../../Context/ListContext"

import ToDoList from "./ToDoList"

const ToDoItem = ({task, deleteTask, toggleCheckedMark}) => {



	const handleChange = () => {
		toggleCheckedMark(task.id)
	}
	

	return (
		<div className="flex items-center group/item ">
			<input
			className="ml-5"
			type="checkbox"
			checked={task.toggleCheckedMark}
			onChange={handleChange}
			/>
				

			<span className="font-semibold ml-4 text-2xl text-black">{task.text}</span>
			<button
			className="flex items-center justify-center w-5 h-5 group/edit invisible hover:bg-slate-200 group-hover/item:visible"
			 onClick={() => deleteTask(task.id)}>

			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  				<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
				</svg>
			</button>
		</div>

	)		
   



}

export default ToDoItem




// const [isChecked, setChecked] = useState(false)
	
// className = `${className} 
// ${isChecked ? "taskItem" : "" } `   


// const toggleClass = () => {
// 	setChecked(!isChecked)
// 	console.log("isChecked")
// 	// listObj.isChecked = !listObj.isChecked
// 	// listObj.id = id
// 	let newList = []
// 	for(let i = 0; i < toDoList.length; i++){
// 		if(i === id){
// 			newList.push(toDoList[i].isChecked = !toDoList[i].isChecked)
// 		}
// 	}
// 	//setListObj(listObj.isChecked = !listObj.isChecked)
	
// }



// return (
// <>
// 		<div class="flex items-center group/item ">
// 			<input class="hidden" id="task_1" 
			
   
// 			/>
// 			<label  className={className}>
// 				<span   onClick={toggleClass}  class="ml-4 text-2xl text-black">{props}</span>
// 			</label>	
// 			<button 
// 			class="flex items-center justify-center w-5 h-5 group/edit invisible hover:bg-slate-200 group-hover/item:visible"
// 			onClick={removeItemList}
// 			>
// 			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
// 			  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
// 			</svg>
// 				</button>
// 		</div>



