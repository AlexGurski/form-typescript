import React, { useState, useRef } from 'react';
import { Form } from './modules/form';
import { Poppup } from './modules/poppup';

function App() {
  const [status,setStatus]=useState<object>({})
    return (  
      <>  
      <div className="container">
        <h1>&bull; Seobility &bull;</h1>
        <div className="underline"></div>
        <Form toPoppup={(date:object)=>{setStatus(date)}}/>
        
      </div>
   <Poppup status={status}/>
   </>
  );
}

export default App;
