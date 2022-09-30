import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, wallet: { expenses } } = this.props;
    return (
      <div>
        <p data-testid="email-field">{user}</p>
        <div>
          <p data-testid="total-field">
            {
              expenses.reduce((acc, curr) => {
                const coin = curr.currency;
                const cambio = curr.exchangeRates[coin].ask;
                const value = Number(cambio * curr.value);
                const result = acc + value;
                return Number(result.toFixed(2));
              }, 0)
            }

          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  wallet: state.wallet,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({
    })),
  }).isRequired,
};

// expenses: PropTypes.arrayOf(shape({
//
// })),

export default connect(mapStateToProps)(Header);
