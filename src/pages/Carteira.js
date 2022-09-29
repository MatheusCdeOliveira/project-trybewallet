import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Carteira extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default connect()(Carteira);
