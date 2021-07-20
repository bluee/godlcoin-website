import React, {Fragment} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/index";
import Frontpage from "./components/Frontpage/index";
import Tracker from "./components/Tracker/index";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/tracker" component={Tracker} />
          <Fragment>
            <Header />
            <Route exact path="/" component={Frontpage} />
          </Fragment>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;