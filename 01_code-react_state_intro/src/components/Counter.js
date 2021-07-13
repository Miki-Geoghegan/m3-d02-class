import { checkPropTypes } from 'prop-types';
import React, {useState} from 'react' /* to achieve State we need to access a utility function - import by name 
methods/ functions that start with 'use' are there to substitute class methods, they are called Hooks or utility functions
This 'useState' solves the problem of using state*/

/* These functions must be used inside a react function component (so need a capital etc. i.e. function Counter()) */


function Counter(props) {
    const count = props.parentCount;
    const setCount = props.parentSetCount;
    /* const [count, setCount] = useState(0); */ /* stateArray has two elements: stateArray[0] is the value we store, stateArray[1] is the function that we use to change the value 
    it can the be destructured to [count, setCount]
    userState takes one paramater, whatever goes inside is the value you get from stateArray[0] otherwise known as count when destructured, the first time that you run the function
    With react, it will only be executed one time and then change linked to our onClick callback functions*/
    
    /* in order to get the total of the two buttons, we need to add the useState to the parent element (see App.js), this is why const [count, setCount] above is starred out */
    return(
        <div>
            <h2>Counter {props.counterName}</h2>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Plus</button> {/* this is a callback function, first the event fires, then the entire function is re-rendered, meaning any let will be re-rendered and start from the original number, not the new number. This is why we need State */}
            <button onClick={()=>setCount(count-1)}>Minus</button> {/* if you use a const for [count, setCount] then we can't use ++ as ++ will modify the original variable, which you can't with const */}
        </div>

    )
}

export default Counter;