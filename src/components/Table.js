import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <section>
        <th>
          <h3>
            Descrição
          </h3>
        </th>
        <th>
          <h3>
            Tag
          </h3>
        </th>
        <th>
          <h3>
            Método de pagamento
          </h3>
        </th>
        <th>
          <h3>
            Valor
          </h3>
        </th>
        <th>
          <h3>
            Moeda
          </h3>
        </th>
        <th>
          <h3>
            Câmbio utilizado
          </h3>
        </th>
        <th>
          <h3>
            Valor convertido
          </h3>
        </th>
        <th>
          <h3>
            Moeda de conversão
          </h3>
        </th>
        <th>
          <h3>
            Editar/Excluir
          </h3>
        </th>
      </section>
    );
  }
}

export default Table;
