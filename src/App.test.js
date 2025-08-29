import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Mensagem from './Mensagem';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aprenda React/i);
  expect(linkElement).toBeInTheDocument();
});

test('deve exibir a mensagem digitada após o clique no botão', () => {
  render(<Mensagem />);

  // Verifica se o input e o botão estão sendo renderizados
  const inputElement = screen.getByPlaceholderText(/Digite a mensagem a ser Exibida:/i);
  const buttonElement = screen.getByText(/Exibir Mensagem/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  // Simula o preenchimento do input
  fireEvent.change(inputElement, { target: { value: 'Olá, mundo!' } });

  // Simula o clique no botão
  fireEvent.click(buttonElement);

  // Verifica se a mensagem foi exibida
  const textoExibido = screen.getByText(/Olá, mundo!/i);
  expect(textoExibido).toBeInTheDocument();
});
