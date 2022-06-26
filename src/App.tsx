import React, { useEffect, useState, useRef } from 'react';
import { Name } from './containers/name';
import { Email } from './containers/email';
import { Phone } from './containers/phone';
import { Message } from './containers/message';
import { Date } from './containers/date';


function App() {
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
    let rez = 0;
    Object.values(solve).forEach(e=>e.valid?rez=rez+1:null)
    if (rez===5){
      //ref.current!.classList.add("enable");
      //ref.current!.classList.remove("disable");
    } else{
      //ref.current!.classList.add("disable");
     // ref.current!.classList.remove("enable");
    }
  },[solve])

  async function send() {
    console.log('sdfsdf')
    const response = await fetch('/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(solve)
  });
    const responseText = await response.text();
    console.log(responseText);
}

  return (
    <div className="App">
      <div className="container">
        <h1>&bull; Keep in Touch &bull;</h1>
        <div className="underline"></div>
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
            value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
