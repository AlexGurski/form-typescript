import React, { useState } from 'react';
import { Name } from './containers/name';
import { Email } from './containers/email';
import { Phone } from './containers/phone';
import { Message } from './containers/message';


function App() {

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
console.log(solve)
  return (
    <div className="App">
      <div className="container">
        <h1>&bull; Keep in Touch &bull;</h1>
        <div className="underline"></div>
        <form action="#" method="post" id="contact_form" noValidate >
          <Name setNameInSolve={(name:object)=>{setSolve({...solve, name})}}/>
          <Email setEmailInSolve={(email:object)=>{setSolve({...solve, email})}}/>
          <Phone setPhoneInSolve={(phone:object)=>{setSolve({...solve, phone})}}/>
          <div className="date">
            <input type="date" name="date" id="date_input"/>
          </div>  
          <Message setMessageInSolve={(message:object)=>{setSolve({...solve, message})}}/>  
          <div className="submit">
            <input type="submit" value="Send" id="form_button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
