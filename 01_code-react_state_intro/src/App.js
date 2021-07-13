import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Counter from './components/Counter'



function App() {
  /*let cappucino =7  everytime you render the function, cappucino will be re-rendered to 7 (not the new number), we therefore need to take the varaibles outside of the function */
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>You spent {count} euros</h2>
      <Counter ParentSetCount= {setCount} parentcount={count} counterName='tibidabo'/>
      <Counter ParentSetCount= {setCount} parentcount={count} counterName='ovella negra'/> {/* Every time you create a new component, a new state is created - this means the 'count' will increase on either independently */}
    </div>
  );
}

export default App;
