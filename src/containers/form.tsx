import React, { useEffect, useState, useRef } from 'react';
import { Name } from './name';
import { Email } from './email';
import { Phone } from './phone';
import { Message } from './message';
import { Date } from './date';
import { lastValidation, JSONtoSend } from '../modules/validation';
export const Form:React.FC<{toPoppup(date:object):void, toPreloader(preload:boolean):void}> = props =>{

  const refButton = useRef<HTMLInputElement>(null)
  const refForm = useRef<HTMLFormElement>(null)
  const [clear, setClear] = useState<boolean>(false)
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
        refButton.current!.classList.add("enable");
        refButton.current!.classList.remove("disable");
    } else{
        refButton.current!.classList.add("disable");
        refButton.current!.classList.remove("enable");
    }
    },[solve])
    
  async function send() {
    props.toPreloader(true)
    try{   
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
            props.toPoppup({
                status:true,
                text:responseOBJ.text
            })
            setClear(!clear)
           // console.log(`it's OK, your JSON is ${responseOBJ.text}`);
        } else{
            props.toPoppup({
                status:false,
                text:responseOBJ.text
            })
            //console.log(`${responseOBJ.status} status,  ${responseOBJ.text}`)
        }  
    }
    else{
      props.toPoppup({
        status:false,
        text:responseOBJ.text
    })
        //console.log(`${responseOBJ.status}status, ${responseText}`)
    }
}  catch (error) {
    console.log ('server not found')
    props.toPoppup({
        status:false, 
        text:'server not found'
    })
}
props.toPreloader(false)
}
  return (
        <form action="/" method="post" ref={refForm} id="contact_form" noValidate >          
          <Name setNameInSolve={(name:object)=>{setSolve({...solve, name})}} clear={clear}/>
          <Email setEmailInSolve={(email:object)=>{setSolve({...solve, email})}} clear={clear}/>
          <Phone setPhoneInSolve={(phone:object)=>{setSolve({...solve, phone})}} clear={clear}/>
          <Date setDateInSolve={(date:object)=>{setSolve({...solve, date})}} clear={clear}/>
          <Message setMessageInSolve={(message:object)=>{setSolve({...solve, message})}} clear={clear}/>         
            <input 
                ref={refButton}
                className='form_button' 
                onClick={send}
                defaultValue="Send"/>         
        </form>
)
}

