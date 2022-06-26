import React, { useEffect, useState, useRef } from 'react';
import { Form } from './modules/form';

function App() {
    return (
    <div className="App">
      <div className="container">
        <h1>&bull; Keep in Touch &bull;</h1>
        <div className="underline"></div>
        <Form/>
      </div>
    </div>
  );
}

export default App;
