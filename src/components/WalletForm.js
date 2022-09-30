import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAPI } from '../redux/actions/wallet';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAPI());
  }

  render() {
    const { wallet } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="text"
              name="valor"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="despesa">
            Despesa:
            <input type="text" name="despesa" data-testid="description-input" />
          </label>
          <label htmlFor="cambio">
            Moeda
            <select data-testid="currency-input" name="cambio">
              {wallet
                .map((coin) => <option key={ coin }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select data-testid="method-input" name="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            {' '}
            Categoria
            <select data-testid="tag-input" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  wallet: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  map: PropTypes.func,
  wallet: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
