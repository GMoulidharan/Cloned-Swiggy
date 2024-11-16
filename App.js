import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag react"),
        React.createElement("h2",{},"I'm an h2 tag")]),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag")])]
);
//JSX
// const heading = React.createElement("h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World! from react");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);