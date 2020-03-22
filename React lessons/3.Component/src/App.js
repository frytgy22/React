import React from 'react';
import './App.css';
import Car from './Car/Car'
import Hello from "./Hello/Hello";

function App() {
    const divStyle = {
        'text-align': 'center'
    };
    return (
        <div style={divStyle}>
            <Hello/>
            <Car name={'Ford'} year={2020}>
                <span> color</span>
            </Car>
            <Car name={'Audi'} year={2019}>
                <p style={{color: 'white'}}>TEST</p>
            </Car>
            <Car name={'BMW'} year={2015}/>
        </div>
    );
}

export default App;
