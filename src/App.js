import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
