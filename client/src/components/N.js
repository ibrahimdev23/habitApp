// return (
      
//     <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
//     <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
//       <div className="pl-4 flex items-center">
//           <img src="https://em-content.zobj.net/source/facebook/355/cross-mark-button_274e.png" width="50px" height={"50px"}></img>
//           <h2 className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-3xl">HabitApp</h2>
        
//       </div>

//       <div className="block lg:hidden pr-4">
//         <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none">
//           <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//           </svg>
//         </button>
//       </div>

//       <div className="text-white w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20" id="nav-content">
//         <ul className="list-reset lg:flex justify-end flex-1 items-center">
//           <li className="mr-3 text-white">
//             {user ? null : <Link to="/" className="text-white inline-block py-2 px-4 text-black font-bold no-underline" >Home</Link>}
//           </li>
//           <li >
//              <Link  to="/ranking" >Rankings</Link>
//           </li>
//           {/* <li className="mr-3">
//             <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Sign in</a>
//           </li> */}
//           {user ? <li><Link to="/profile" className=" text-white block py-2 px-1 text-white  rounded md:bg-transparent  md:p-0" >Profile</Link> </li> :
//     <li>
//     <Link to="/login" >Sign In</Link> 
//     <button className=" text-white mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">
//       <Link to='/signup'   > Create Account</Link> 
//        </button>
//     </li>}
        
//          {user ?  <li >
//              <Link  to="/logout"  onClick={logOut} className="text-white inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">Log out</Link>
//           </li> : null }
//         </ul>
       
//       </div>
//     </div>
//   </nav> 





onst [item, setItem] = useState('');
	const [toDoList, setToDoList] = useState([]);

	// const {list, setList} = useContext(ListContext)
	const [listObj, setListObj] = useState({})

	const removeItemList = (id) => {
		console.log(item.id)
		const tempArray = [...toDoList]
		tempArray.splice(id,1)
		setToDoList(tempArray)
		console.log(toDoList)
	}
	const [isCheckedmark, setChecked] = useState(false)

	let className = 'font-semibold'
className = `${className} 
	${isCheckedmark ? "taskItem" : "" } ` 


	const toggleClass = () => {
		setChecked(!isCheckedmark)
		console.log("isChecked")
		// listObj.isChecked = !listObj.isChecked
		// listObj.id = id
		let newList = []
		for(let i = 0; i < toDoList.length; i++){
			if(i === toDoList[i].id){
				toDoList[i].isChecked = !toDoList[i].isChecked
			}
		}
		//setListObj(listObj.isChecked = !listObj.isChecked)
		
	}

	


	useEffect(() => {
		console.log("Children changed");
		
	}, [toDoList]);


	
return (
    <>


    <div class="  ">
	<div class=" c flex-grow items-center justify-center text-gray-600 ">
	
		<div class="c max-w-full p-8 bg-white w-96">
			<div class="flex items-center mb-6">
				
				<h4 class="font-semibold ml-3 text-lg">{format(date, " LLLL dd yyyy")}</h4>
			</div>
		</div>
	</div>

			<ul>
        {/* {toDoList.map(item => (
          <ToDoItem key={item.id} id={item.id} props={item.item} removeItemList={removeItemList}
		 	toDoList={toDoList} toggleClass={toggleClass}
			 setListObj={setListObj} 
		  className={"flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"}
		  
		  />
			  
		
        ))} */}


		{toDoList.map((item, key) => {
			return (<li key={key}> 
			<div class="flex items-center group/item ">
				<input class="hidden" id="task_1" 
                
       
                />
				<label   >
					<span onClick={toggleClass}   className={className}  class="ml-4 text-2xl text-black">{item.item}</span>
				</label>	
				<button 
                class="flex items-center justify-center w-5 h-5 group/edit invisible hover:bg-slate-200 group-hover/item:visible"
				onClick={(id) => removeItemList(id) }
                >
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  				<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
				</svg>
					</button>
			</div>
			</li>)

		})}
      </ul>
		
			{/* <div class="flex items-center group/item ">
				<input class="hidden" type="checkbox" id="task_1" checked/>
				<label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100" for="task_1">
					<span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
					</span>
					<span class="ml-4 text-sm">Weed front garden.</span>
				</label>	
				<button class="flex items-center justify-center w-5 h-5 group/edit invisible hover:bg-slate-200 group-hover/item:visible">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  				<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
				</svg>
					</button>
			</div> */}
			
		
		
			{/* <input class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task"
			 value={toDoItem}
   			 onChange={(e) => setToDoItem(e.target.value)}
				
			 />
				 */}
				{/* <button onClick={() => {
        setToDoList([
          ...toDoList,
          { id: nextId++, toDoItem: toDoItem }
        ]);
      }} class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
	  
	  </button> */}
	  <input class="mt-5 flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task"
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <button
	   onClick={() => {
        setToDoList([
          ...toDoList,
          { id: nextId++, item: item, isChecked :false, isDeleted: false }
        ]);
		
		setItem("")
      }}
	  >
		<svg class="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
				</svg>
	  </button>
      
		</div>
		
	</div>
	
</div>
    </>
  );
