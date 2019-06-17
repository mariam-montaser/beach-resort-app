import React, { Component } from 'react';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import SingleRoom from './components/pages/SingleRoom';
import Error from './components/pages/Error';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import "./App1.css"
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    )
  }
}

export default App;

