import React, { useRef, useState, useEffect } from 'react';

export const Email:React.FC<{setEmailInSolve(name:object):void}> = props =>{
  const [text, setText] = useState<string>("")
  const [textError, setTextError] = useState<string>("input is empty")
  const ref = useRef<HTMLInputElement>(null)
  const [style, setStyle] = useState<object>({opacity:0})

  useEffect(()=>{
    props.setEmailInSolve({
        valid:textError==='true'?true:false,
        text:text
    })
  },[textError])
  
  const blur = ()=>{
    if (textError!=="true")                    
        setStyle({opacity:1})         
}
const focus = () =>{
    setStyle({opacity:0})  
}

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value.replace(/[^A-Za-z0-9_.@]/ig,''));
    validation();
  } 
  
   const  validation = () =>{    
    const regular = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/g
    setTextError(regular.test(ref.current!.value.trimEnd())?'true':"Invalid Email")
  }
 
    return(
    <div className="email">
        <input  
            onFocus={focus}
            onBlur={blur}
            onChange={changeHandler}
            value={text} 
            ref={ref}
            type="email" 
            placeholder="My e-mail is" 
            name="email" 
            id="email_input"/>
      <div className="tooltip" style={style}>{textError}</div>
    </div>
    )
}