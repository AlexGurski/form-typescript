import React, { useEffect, useState } from 'react';

export const Date:React.FC<{setDateInSolve(date:object):void, clear:boolean}> = props =>{

  const [state,setState]=useState<string>("")

  useEffect(()=>{
    setState("")
  },[props.clear])

 const change = (event:React.ChangeEvent<HTMLInputElement>) => {
  props.setDateInSolve({
    text:event.target.value,
          valid:'true'
    })
    setState(event.target.value);
 }
    return(
    <div className="date">
      <input 
      onChange={change}
      placeholder="date of birth"
      type="date" 
      name="date" 
      id="date_input"
      value={state}/>
    </div>  
    )
}