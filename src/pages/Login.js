import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clickLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    emailValidation: true,
  };

  handleInput = ({ target }) => {
    const { email, password } = this.state;
    const { name, value } = target;
    const MIN_PASSWORD = 5;
    this.setState({ [name]: value });
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && password.length >= MIN_PASSWORD) {
      this.setState({ emailValidation: false });
    } else {
      this.setState({ emailValidation: true });
    }
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(clickLogin(email));
    history.push('/carteira');
  };

  render() {
    const { email, emailValidation } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ this.handleInput }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              id="password"
              onChange={ this.handleInput }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            disabled={ emailValidation }
            onClick={ this.handleClick }
          >
            Entrar

          </button>
          {emailValidation
           && <p>Insira um e-mail válido e uma senha maior que 6 caracteres</p>}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({}),
  push: PropTypes.func,
}.isRequired;

export default connect()(Login);
