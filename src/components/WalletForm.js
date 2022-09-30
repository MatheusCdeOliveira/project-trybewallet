import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses, getAPI } from '../redux/actions/wallet';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAPI());
  }

  fetchAPI = async () => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    return response;
  };

  handleClick = async () => {
    const { expenses, dispatch } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const resposta = await this.fetchAPI();
    const obj1 = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: { ...resposta },
    };
    dispatch(addExpenses(obj1));
    this.setState({ value:
       '',
    description:
        '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação' });
  };

  handleWallet = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { wallet } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
              value={ value }
              onChange={ this.handleWallet }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description">
            Despesa:
            <input
              type="text"
              name="description"
              data-testid="description-input"
              onChange={ this.handleWallet }
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              onChange={ this.handleWallet }
              data-testid="currency-input"
              name="currency"
              value={ currency }
            >
              {wallet
                .map((coin) => <option key={ coin }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              data-testid="method-input"
              name="method"
              onChange={ this.handleWallet }
              value={ method }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            {' '}
            Categoria
            <select
              data-testid="tag-input"
              name="tag"
              onChange={ this.handleWallet }
              value={ tag }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  wallet: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  map: PropTypes.func,
  wallet: PropTypes.array,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
