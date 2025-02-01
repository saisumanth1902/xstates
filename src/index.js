import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return <h1>Hello, React!</h1>;
};

// Get the root element
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
