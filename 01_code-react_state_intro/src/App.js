import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'



function App() {
  /*let cappucino =7  everytime you render the function, cappucino will be re-rendered to 7 (not the new number), we therefore need to take the varaibles outside of the function */
  return (
    <div className="App">
      <Counter />

    </div>
  );
}

export default App;
