import React, { useState, useRef } from 'react';
import { Form } from './modules/form';
import { Poppup } from './modules/poppup';

function App() {
  const [status,setStatus]=useState<object>({})
  const [preload,setPreload]=useState<boolean>(false)
    return (  
      <>  
      <div className="container">
      <div className='preloader' style={preload?{display:"block"}:{display:"none"}}></div>  
        <h1>&bull; Seobility &bull;</h1>
        <div className="underline"></div>
        <Form toPoppup={(date:object)=>{setStatus(date)}} toPreloader={(bool:boolean)=>{setPreload(bool)}}/>
      </div>
   <Poppup status={status}/>
   </>
  );
}

export default App;
