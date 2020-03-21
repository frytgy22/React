import React from "react";

// const Car = () => (
//     <div>This is a car component
//         <strong> test</strong>
//     </div>
// );
//
// export default Car;

export default () => (
    <div>
        <p>This is a car component</p>
        <p><strong>{1 + 1}</strong></p>
        <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
    </div>
)