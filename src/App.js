import { Rating } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [show,setShow] = useState(false)
  const [rate,setRate] = useState(4)
  const handleShow =()=> setShow(!show)
  
  return (
    <div>
      <h1>Workshop HOOKS</h1>
      <button onClick={handleShow}>Show Counter</button>
      {
        show &&   <Counter/>
      }
    
      <br/>
      <br/>
      <Rating value={rate} onChange={(e)=> setRate(e.target.value)}/>  
    
    </div>
  );
}

export default App;
