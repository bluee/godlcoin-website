import React, {Fragment} from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/index";
import Frontpage from "./components/Frontpage/index";
import Tracker from "./components/Tracker/index";
import Tasks from "./components/Tasks/index";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
            <Route exact path="/tracker" component={Tracker} />
            <Route exact path="/tasks" component={Tasks} />
            <Fragment>
              <Header />
              <Route exact path="/" component={Frontpage} />
            </Fragment>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;