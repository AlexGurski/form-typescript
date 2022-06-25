import React, { useState,useRef } from 'react';

export const Phone = ()=>{
  const [state, setState] = useState<string>("+7")
  const [textError, setTextError] = useState<string>("input is empty")
  const ref = useRef<HTMLInputElement>(null)
  const [style, setStyle] = useState<object>({opacity:0})

  const blur = ()=>{
    if (textError!=="true")                    
        setStyle({opacity:1})         
}
const focus = () =>{
    setStyle({opacity:0})  
}

  const change = (event:React.ChangeEvent<HTMLInputElement>) =>{
    let val = event.target.value;
    val = val.replace(/[^0-9]/g, '');
    let num = `+7(${val.substring(1, 4)})${val.substring(4, 7)}-${val.substring(7, 9)}-${val.substring(9, val.length)}`;
    setState(num.substring(0,16))
    validation()
  }
  
  const validation = () =>{
    if(ref.current!.value.length<16){
      setTextError('Invalid phone number')
    } else{
      setTextError('true')
    }
  }
    return(
    <div className="telephone">
        <input 
          ref={ref}
          onFocus={focus}
          onBlur={blur}
          type="text" 
          placeholder="My number is" 
          name="telephone" 
          id="telephone_input"
          onChange={change}
          value={state}
        />
        <div className="tooltip" style={style}>{textError}</div>
      </div>
    )
}