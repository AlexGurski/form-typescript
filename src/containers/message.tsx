import React, { useRef, useState} from 'react';

export const Message = ()=>{
  const ref = useRef<HTMLTextAreaElement>(null)
  const [counter,setCounter] = useState<number>(300)


  const changeHandler = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setCounter(300 -  event.target.value.length)
}

const validation = () =>{
  if (ref.current!.value.length > 9 && ref.current!.value.length < 301){
    console.log('ok')
  }
    else{
      console.log('error')
    }
}
    return(
    <div className="message">
      <textarea       
      name="message" 
      onChange={changeHandler}
      ref={ref}
      placeholder="I'd like to send feedback about..." 
      ></textarea>
      <span>{counter}</span>
    </div>
    )
}