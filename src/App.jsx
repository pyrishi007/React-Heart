import React from "react";
import ReactDOM from "react-dom/client";
import App from "./CounterApp/CounterApp";
import "./style.css"

const MainAppComponent = () => {
  return (
    <>
      <App/>
    </>
  );
};


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainAppComponent/>)