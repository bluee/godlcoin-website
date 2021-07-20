import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/index";
import Frontpage from "./components/Frontpage/index";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Frontpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;