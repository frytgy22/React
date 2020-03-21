import React from 'react';
import './App.css';

// function App() {
//     return (
//         <div className="App">
//           <h1>Hello world!</h1>
//         </div>
//     );
// }


function App() {
    const divStyle = {
        'text-align': 'center'
    };
    return (
        <div style={divStyle}>
            <h1 style={{color: 'red', fontSize: '20px'}}>Hello world!</h1>
        </div>

        // React.createElement(
        //     'div',
        //     {
        //         className: 'App'
        //     },
        //     React.createElement('h1',
        //         null,
        //         'Hello')
        // )
    );
}

export default App;
