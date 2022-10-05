import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';
import Carteira from '../../pages/Carteira';

describe('Testes da aplicação TrybeWallet', () => {
  it('Verifica se os inputs da página de Login são renderizados e funcionam corretamente.', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = 'test@test.com';
    const inputSenha = '1234567';

    const email = screen.getByLabelText(/email/i);
    const senha = screen.getByLabelText('Senha');
    const btn = screen.getByRole('button', {
      name: /entrar/i,
    });
    const inputValidation = screen.getByText(/insira um e-mail válido e uma senha maior que 6 caracteres/i);

    expect(history.location.pathname).toBe('/');
    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
    expect(inputValidation).toBeInTheDocument();

    userEvent.type(email, inputEmail);
    userEvent.type(senha, inputSenha);

    expect(btn).toBeEnabled();
    expect(inputValidation).not.toBeInTheDocument();

    userEvent.click(btn);
    expect(history.location.pathname).toBe('/carteira');
  });

  it('Verifica se a página carteira renderiza corretamente', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = 'test@test.com';
    const inputSenha = '1234567';
    const email = screen.getByLabelText(/email/i);
    const senha = screen.getByLabelText('Senha');
    const btn = screen.getByRole('button', {
      name: /entrar/i,
    });
    userEvent.type(email, inputEmail);
    userEvent.type(senha, inputSenha);
    userEvent.click(btn);

    const user = screen.getByText(/test@test\.com/i);
    const coin = screen.getByText(/brl/i);

    expect(user).toBeInTheDocument();
    expect(coin).toBeInTheDocument();
  });

  it('Verifica a página Carteira e a função de adicionar despesas', async () => {
    renderWithRouterAndRedux(<Carteira />);
    const value = await screen.findByTestId('total-field');

    const inputs = screen.getAllByRole('textbox');
    const inputValue = screen.getByTestId('value-input');
    const btnAdd = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(inputs.length).toBe(2);
    expect(btnAdd).toBeInTheDocument();

    userEvent.type(inputValue, 5);
    userEvent.click(btnAdd);

    const btnDelete = await screen.findByRole('button', { name: /excluir/i });

    expect(value).toBeInTheDocument();
    expect(btnDelete).toBeInTheDocument();
    userEvent.click(btnDelete);

    expect(btnDelete).not.toBeInTheDocument();
  });
});
