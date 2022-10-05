import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../redux/actions/wallet';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch } = this.props;
    dispatch(removeExpenses(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .map((data) => (
              <tr key={ data.id }>
                <td>{data.description}</td>
                <td>{data.tag}</td>
                <td>{data.method}</td>
                <td>{Number(data.value).toFixed(2)}</td>
                <td>{data.exchangeRates[data.currency].name}</td>
                <td>{Number(data.exchangeRates[data.currency].ask).toFixed(2)}</td>
                <td>{(data.value * data.exchangeRates[data.currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleClick(data.id) }
                  >
                    Excluir
                  </button>

                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
