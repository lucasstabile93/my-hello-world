import React, { useState } from 'react';
import Button from './Button';
 
 function Counter() {
   // Declaração de uma variável de state chamada'count' e uma função para atualizá-la 'setCount’
   const [count, setCount] = useState(0);
   // Função que incrementa o valor de 'count'
   const increment = () => {
   setCount(count + 1);
   };
 

return (
    <div>
        <p>Você clicou {count} vezes</p>
        {/* Botão que, ao ser clicado, chama a função
        'increment' */}
        <Button label={"Clique para incrementar"} onClick={increment} />
    </div>
    );
}
export default Counter;