import React, { useState } from 'react';

function Mensagem() {
  // Define o estado para armazenar o valor digitado
  const [texto, setTexto] = useState('');

  // Função para atualizar o estado com o valor do input
  const exibirMensagem = (event) => {
    event.preventDefault(); 
    const valorTexto = document.getElementById('texto').value;
    setTexto(valorTexto);  // Atualiza o estado com o valor do input
  };

  return (
    <div>
      {/* Campo de texto para o usuário digitar a mensagem */}
      <form onSubmit={exibirMensagem}>      
        <input
            id="texto"
            type="text"
            placeholder="Digite a mensagem a ser Exibida:"
        />
        {/* Botão que chama a função ao ser clicado */}
        <button id="btn-texto" type="submit" onClick={exibirMensagem}>
            Exibir Mensagem
        </button>
      </form>
      {/* Exibe a mensagem armazenada no estado */}
      <h2 id="exibir-texto">{texto}</h2>
    </div>
  );
}

export default Mensagem;
