import React, { useState } from 'react';

export const Phone = ()=>{
  const [state, setState] = useState<string>("+7")

  const change = (event:React.ChangeEvent<HTMLInputElement>) =>{
    let val = event.target.value;
    val = val.replace(/[^0-9]/g, '');
    console.log(val);
    let num = `+7(${val.substring(1, 4)})${val.substring(4, 7)}-${val.substring(7, 9)}-${val.substring(9, val.length)}`;
    num = num.trim();
    console.log(num)
    setState(num.substring(0,16))
  }
    return(
    <div className="telephone">
        <input 
          type="text" 
          placeholder="My number is" 
          name="telephone" 
          id="telephone_input"
          onChange={change}
          value={state}
        />
      </div>
    )
}