import React, { Component, useState } from 'react';
// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//     }
    
//     shouldComponentUpdate(nextProps, nextState){
//         console.log(this.state.count, nextState.count);
//         if(nextState.count >= 0 && nextState.count <= 10)
//             return true;
//         else
//             return false;
//     }
//     render() { 
//         return ( <div>
//             <button onClick={() => {this.setState({count: this.state.count + 1})}}>Increment</button>
//             <button onClick={() => {this.setState({count: this.state.count - 1})}}>Decrement</button>
//             <h1>{this.state.count}</h1>
//         </div> );
//     }
// }
const Counter = () => {
    const [count,updateCount] = useState(0);
    return ( <>
    <h1>{count}</h1>
    <button onClick={()=>updateCount(count+1)}>Increment</button>
    <button onClick={()=>updateCount(count-1)}>Decrement</button>
    </> );
}

 
export default Counter;