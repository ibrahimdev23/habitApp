
// justify-center 
const Cell = ({props, className, onClick, isToday, isDate, isMenu, isNotCurrent}) => {
    className = `${className}   flex items-center border-b border-r 
     ${onClick ? 'hover:bg-gray-100 cursor-pointer ' : ''}
     ${isToday ? 'redx text-end  text-orange' : ''}
     ${isDate ? ' h-20 justify-left items-stretch redx' : ''}
     ${isMenu ? '  h-9 justify-center text-lg  font-bold'  : ''}
     ${isNotCurrent ? 'text-gray-600'  : ''}`

    return (
        
        <>
        <div onClick={isToday ? undefined : onClick} className={className}  >{props}</div>
        
        </>
    )
}


export default Cell