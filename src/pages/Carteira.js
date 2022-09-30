import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Wallet from './Wallet';

class Carteira extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Wallet />
      </div>
    );
  }
}

export default connect()(Carteira);
