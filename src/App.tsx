import React from 'react';
import { Name } from './containers/name';
import { Email } from './containers/email';
import './assets/style/form.css'
import { Phone } from './containers/phone';
import { Message } from './containers/message';
function App() {
  return (
    <div className="App">
      <div id="container">
        <h1>&bull; Keep in Touch &bull;</h1>
        <div className="underline">
        </div>
        <div className="icon_wrapper">   
        </div>
        <form action="#" method="post" id="contact_form" noValidate >
          <Name/>
          <Email/>
          <Phone/>
          <div className="date">
            <input type="date" name="date" id="date_input"/>
          </div>  
          <Message/>  
          <div className="submit">
            <input type="submit" value="Send" id="form_button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
