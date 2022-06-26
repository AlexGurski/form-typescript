import React, { useState, useRef } from 'react';
import { Form } from './modules/form';
import { Poppup } from './modules/poppup';

function App() {
  const [status,setStatus]=useState<object>({})
    return (
    <div className="App">
      <div className="container">
        <h1>&bull; Keep in Touch &bull;</h1>
        <div className="underline"></div>
        <Form toPoppup={(date:object)=>{setStatus(date)}}/>
        <Poppup status={status}/>
      </div>
    </div>
  );
}

export default App;
