import React, { useEffect, useState, useRef } from 'react';
import { Name } from '../containers/name';
import { Email } from '../containers/email';
import { Phone } from '../containers/phone';
import { Message } from '../containers/message';
import { Date } from '../containers/date';

export const Form = () => {

  const ref = useRef<HTMLInputElement>(null)
  const [solve, setSolve] = useState<object>({
    name:{
      valid:false,
      text:""
    },
    email:{
      valid:false,
      text:""
    },
    phone:{
      valid:false,
      text:""
    },
    date:{
      valid:false,
      text:""
    },
    message:{
      valid:false,
      text:""
    }
  })

  useEffect(()=>{
    if (lastValidation(solve)){
          ref.current!.classList.add("enable");
          ref.current!.classList.remove("disable");
    } else{
          ref.current!.classList.add("disable");
          ref.current!.classList.remove("enable");
    }
    },[solve])

  const lastValidation = (obj:object) =>{
    let rez = 0;
    Object.values(obj).forEach(e=>e.valid?rez=rez+1:null)
    return rez===5?true:false
  }

  const JSONtoSend = (obj:object) =>{
    return lastValidation(obj)?JSON.stringify({...obj,status:true}):JSON.stringify({status:false})
    }
    
  async function send() {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSONtoSend(solve)
  });
    const responseText = await response.text();
    const responseOBJ = JSON.parse(responseText)

   if (response.status===200){
    if (responseOBJ.status){
        console.log(`it's OK, your JSON is ${responseOBJ.text}`);
    } else{
        console.log(`${responseOBJ.status} status,  ${responseOBJ.text}`)
    }
}
    else{
        console.log(`${responseOBJ.status}status, ${responseText}`)
    } 
    
}
  return (
        <form action="/" method="post"   id="contact_form" noValidate >
          <Name setNameInSolve={(name:object)=>{setSolve({...solve, name})}}/>
          <Email setEmailInSolve={(email:object)=>{setSolve({...solve, email})}}/>
          <Phone setPhoneInSolve={(phone:object)=>{setSolve({...solve, phone})}}/>
          <Date setDateInSolve={(date:object)=>{setSolve({...solve, date})}}/>
          <Message setMessageInSolve={(message:object)=>{setSolve({...solve, message})}}/>  
          <div className="submit">
            <input 
            ref={ref}
            className='form_button' 
            onClick={send}
            defaultValue="Send" />
          </div>
        </form>
)
}

