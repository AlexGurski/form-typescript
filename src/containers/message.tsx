import React, { useRef, useState, useEffect} from 'react';

export const Message:React.FC<{setMessageInSolve(message:object):void}> = props =>{
  const ref = useRef<HTMLTextAreaElement>(null)
  const [counter,setCounter] = useState<number>(300)
  const [style, setStyle] = useState<object>({opacity:0})
  const [text, setText] = useState<string>("")
  const [textError, setTextError] = useState<string>("input is empty")

  useEffect(()=>{
    props.setMessageInSolve({
        valid:textError==='true'?true:false,
        text:text
    })
  },[textError])

  const changeHandler = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length < 300){
      setText(event.target.value);
    }    
    validation()
    setCounter(300 -  event.target.value.length)
}

const blur = ()=>{
  if (textError!=="true")                    
      setStyle({opacity:1})         
}
const focus = () =>{
  setStyle({opacity:0})  
}

const validation = () =>{
  if (ref.current!.value.length > 9 && ref.current!.value.length < 301){
    setTextError('true')
  }
    else{
      setTextError('More than 10 characters are required')
    }
}

    return(
    <div className="message">
      <textarea  
      onFocus={focus}
      onBlur={blur}   
      name="message" 
      onChange={changeHandler}
      ref={ref}
      value={text}
      placeholder="I'd like to send feedback about..." 
      ></textarea>
      <span>{counter}</span>
      <span className="tooltip" style={style}>{textError}</span>
    </div>
    )
}