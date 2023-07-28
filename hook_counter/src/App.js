import React, { useState } from 'react'


function App() {
  const [value,setValue] = useState(0);
  
  function handleOperation(operation){
    if(operation==='reset'){
      setValue(0);
    }else if(operation==='plus'){
      setValue(value+1);
    }else{
      setValue(value-1)
    }
  }

  return (
    <div className="App">
      <h1>Count Value is:{value}</h1>
      <button onClick={()=>handleOperation('reset')}>Reset</button>
      <button onClick={()=>handleOperation('plus')}>Plus</button>
      <button onClick={()=>handleOperation('minus')}>Minus</button>
    </div>
  );
}

export default App;
