import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return <div><WalletForm /></div>;
  }
}

export default connect()(Wallet);
