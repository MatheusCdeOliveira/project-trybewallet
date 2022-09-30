import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Carteira from './pages/Carteira';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Carteira } />
        <Route path="/wallet" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
