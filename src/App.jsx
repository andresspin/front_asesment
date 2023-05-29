import React from "react";
import { CustomRouter } from "./router";
import { Context, initialContext } from "./context";
import "./App.css";


function App() {
  return (
    <Context.Provider value={initialContext}>
      <div className="App">
        <CustomRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
