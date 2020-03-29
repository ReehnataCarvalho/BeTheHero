import React, {useState} from 'react';
import Header from './Header';

/**
 * Tudo o que deve estar dentro do Header para esse codigo funcionar.
 * 
 * //children é tudo que esta dentro da tag 
    export default function Header({children}) {
        return(
            <header>
                <h1>{children}</h1>
            </header>
        );
    }
 */

function App() {
  /**
   * Conceito de Estado com (useState):
   * Toda vez que meu componente precisar armazenar uma informação dentro dele 
   * Nao criamos uma variavel comum, criamos sempre um ESTADO lembrando que 
   * (Estado é praticamente somente uma variavel) , porém toda vez que ele for alterado
   * o componente vai remontar, renderizar novamente exibindo as novas informações em
   * tela(refletindo as alterações dentro da interface).
   */

   /**
    * Destructor Array:
    * podemos tbm desestruturar um array da mesma maneira que fazemos com um obj,
    * sendo que devemos seguir a ordem dos valores e propriedades.
    * o exemplo abaixo temos como primeiro valor do array o calor de 0 que estamos passando
    * dentro de (useState(0)<-) o segundo valor é o valor ja incrementado pois é uma função
    * contadora e assim usei essas informações para dar os nomes das variaveis.
    */ 
   
   const [counter, setCounter] = useState(0);
       /**
        * metodo useState retorna sempre um array com 2 posições
        * [0] -> 1ª é o vaor realmente da variavel(ex: counter = 0)
        * [1] -> 2ª é uma função de atualização desse valor counter pois é um contador
        * ex: abaixo dentro da função increment
        * 
        */


   // função basica que todo botao precisa para funcionar
   function increment(){
      setCounter(counter + 1)
   }

  return (
    /**
     * Sempre precisamos ter algo em volta de dois ou mais elementos juntos
     * nunca podemos deixa-los sozinhos pois dará erro, por isso da (div)
     */
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>incrementar</button>
    </div>
  );
}

export default App;
