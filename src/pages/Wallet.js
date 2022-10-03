import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (<div>
      <WalletForm />
      <Table />
    </div>);
  }
}

export default connect()(Wallet);
