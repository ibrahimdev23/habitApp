import {nextDay, subMonths, sub, add, differenceInCalendarDays, differenceInDays, compareAsc, endOfMinute, endOfMonth, formatDistance, startOfMonth, subDays, format, setDate, lastDayOfMonth } from "date-fns";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";
import Cell from "./Cell";
import { useEffect, useState } from "react";

const daysWeek = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


// 31 -7 = 24 

const Calendar = ({value, onChange, onClick}) => {

  const {user, setUser} = useContext(UserContext)

    //date fns libary 
const startingDate = startOfMonth(value)

const endingDate = endOfMonth(value)
const numberOfDaysMonth = differenceInDays(endingDate, startingDate)+1


const prefix = startingDate.getDay()

const suffix = 6 - endingDate.getDay()

const endingDateLastMonth = endOfMonth(sub(value, {months: 1}))

const startingDateLastMonth = startOfMonth(sub(value, {months: 1}))
const numberOfDaysLastMonth = differenceInDays(endingDateLastMonth, startingDateLastMonth)+1
const prefixStart = numberOfDaysLastMonth - prefix


const [showx, setx] = useState(false)

const [streaks, setStreaks] = useState([])

const handleNewDate = (index) => {
    const newDate = setDate(value, index)
    onClick(newDate)
   
}

  


const perviousMonth = () => {
    onChange(sub(value, {months: 1}))
}
const perviousYear = () => {
    onChange(sub(value, {years: 1}))
}
const nextMonth = () => {
    onChange(add(value, {months: 1}))
}
const nextYear = () => {
    onChange(add(value, {years: 1}))
}


const  getStreaks = async () => {
		
  const userId = user["id"]

  let data = {userId}
  // user["streaks"].push(day)

  const res = await fetch(`http://127.0.0.1:8000//streaks`, {
    
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      
      },
      body: JSON.stringify(data),
    });

    const response = await res.json()
    
    let tempStreaks = []
    let newStreaks = []
    for(let i = 0; i < response.length; i++){
      let resData = response[i].date
      if(resData !== null && resData !== undefined && tempStreaks.includes(resData) == false) {
        let streak = resData.replace(/[^a-zA-Z0-9 ]/g, "")
        let dateToMark = new Date(streak)
        tempStreaks.push(dateToMark)

      }

    }

 
    // let tempStreak = []
    // for(let i = 0; i < tempStreaks.length;i++){
    //   let dateToMark = new Date(tempStreaks[i])
    //   tempStreak.push(dateToMark)
   

    // }
    
    setStreaks(tempStreaks)
    console.log(streaks)
}
useEffect(() => {
  getStreaks()
},[])
// mx-10 py-1 px-0 
  return (
    <div className="w-[650px] border-t border-l bg-white rounded-lg shadow ">
      <div className=" grid grid-cols-7 items-center jusify-center text-center ">
        <Cell props={"<<"} onClick={perviousYear} isMenu={true}></Cell>
        {/* <div>{"<<"}</div> */}
        <Cell props={"<"} onClick={perviousMonth} isMenu={true}> </Cell>
        <Cell className={"col-span-3"}
         props={format(value, "LLLLLL yyyy")} isMenu={true} ></Cell>

        <Cell props={">"} onClick={nextMonth} isMenu={true}></Cell>
        <Cell props={">>"} onClick={nextYear} isMenu={true}></Cell>
        {daysWeek.map((day, index) => {
          return (
            <Cell
              className={"text-sm font-bold uppercase"}
              key={index}
              props={day}
              isMenu={true}
            ></Cell>
          );
        })}

        {/* {Array.from(numberOfDaysMonth).map((day, index) => {
            const date = index + 1
            return <Cell props={date} key={index}></Cell>
        })} */}
{/*       
        {Array.from({length: prefix}).map((_,index)=> {
            let day = prefixStart + 2
            return (<Cell key={index} props={day}/>)
        })} */}

        {Array.from({ length: prefix }).map((_, index) => {
        //prefixStart = prefixStart +1
        //console.log(prefixStart)
        const date = prefixStart + index + 1
       
       
        return (
          <Cell
            key={index}
            props={date}
            isNotCurrent={true}
            isDate={true}
          >
        
          </Cell>
        );
      })}
        {Array.from({ length: numberOfDaysMonth }).map((_, index) => {
        const date = index + 1;
        const isToday = date === value.getDate()
        let mark = false;
        let mark2 = false;
     
      let pos  = []
        const ca = new Date("March 1 2024")
        const c = new Date("March 15 2024")
        
        //console.log(array)
        for(let i = 0; i < streaks.length;i++){
          if(streaks[i].getMonth() === value.getMonth()){
            //console.log(array[i].getDate())
              pos.push(streaks[i].getDate())
        
          }
        }
        //console.log(pos)
        //console.log(pos)
       {/* if(ca.getMonth() == value.getMonth()){
        mark = ca.getDate() === date
       }
 
       if(c.getMonth() == value.getMonth()){
        mark2 = c.getDate() === date
       } */}


         
       
        
       {/* const yes =  date === new Date(2024, 2,15).getDate() */}
       //getDate(new Date(2014, 2))
         
          
       
        return (
          <Cell
            key={date}
            props={date}
            onClick={() => handleNewDate(date)}
            isToday={isToday}
            isDate={true}
            pos={pos}
            mark={mark}
            mark2={mark2}
            

          >
        
          </Cell>
        );
      })}

      {Array.from({length: suffix}).map((_,index)=> {
       const date =  index + 1
       
        
            return <Cell key={index} 
            isNotCurrent={true}
            isDate={true}
            props={date}/>
        })}

        {/* <Cell props={"1"}></Cell>
        <Cell props={"2"}></Cell>
        <Cell props={"3"}></Cell>
        <Cell props={"4"}></Cell>
        <Cell props={"5"}></Cell>
        <Cell props={"6"}></Cell>
        <Cell props={"7"}></Cell>
        <Cell props={"8"}></Cell>
        <Cell props={"9"}></Cell>
        <Cell props={"10"}></Cell>
        <Cell props={"11"}></Cell>
        <Cell props={"12"}></Cell>
        <Cell props={"13"}></Cell>
        <Cell props={"14"}></Cell>
        <Cell props={"15"}></Cell>
        <Cell props={"16"}></Cell>
        <Cell props={"17"}></Cell>
        <Cell props={"18"}></Cell>
        <Cell props={"19"}></Cell>
        <Cell props={"20"}></Cell>
        <Cell props={"21"}></Cell>
        <Cell props={"22"}></Cell>
        <Cell props={"23"}></Cell>
        <Cell props={"24"}></Cell>
        <Cell props={"25"}></Cell>
        <Cell props={"26"}></Cell>
        <Cell props={"27"}></Cell>
        <Cell props={"28"}></Cell>
        <Cell props={"29"}></Cell>
        <Cell props={"30"}></Cell>
        <Cell props={"31"}></Cell> */}
      </div>
    </div>
  );
};

export default Calendar;
