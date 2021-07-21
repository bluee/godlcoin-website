import React from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/index";
import Frontpage from "./components/Frontpage/index";
import Tracker from "./components/Tracker/index";


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/tracker" component={Tracker} />
            <Route path="/">
              <Header />
              <Frontpage />
            </Route>
          </Switch>      
      </Router>
    </div>
  );
}

export default App;