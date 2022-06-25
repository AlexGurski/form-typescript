import React, { useRef, useState } from 'react';

export const Date:React.FC<{setDateInSolve(date:object):void}> = props =>{
 const change = (event:React.ChangeEvent<HTMLInputElement>) => {
  props.setDateInSolve({
    text:event.target.value,
          valid:'true'
    })
 }
    return(
    <div className="date">
      <input 

      onChange={change}
      type="date" 
      name="date" 
      id="date_input"/>
    </div>  
    )
}