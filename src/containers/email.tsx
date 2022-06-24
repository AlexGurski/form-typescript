import React, { useRef, useState } from 'react';

export const Email = ()=>{
  const [text, setText] = useState<string>("")
  const ref = useRef<HTMLInputElement>(null)

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value)
  } 
  
  const validation = () =>{
    const regular = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
    console.log(regular.test(text))
  }
 
    return(
    <div className="email">
        <input  
            onBlur={validation}
            onChange={changeHandler}
            value={text} 
            ref={ref}
            type="email" 
            placeholder="My e-mail is" 
            name="email" 
            id="email_input"/>
    </div>
    )
}