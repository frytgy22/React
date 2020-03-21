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
            <Car/>
            <Car/>
        </div>
    );
}

export default App;
