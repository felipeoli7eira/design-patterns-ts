# Builder

### Objetivo
Facilitar a construção de objetos complexos. Ele é útil quando um objeto possui muitos atributos opcionais ou quando sua criação envolve várias etapas.

- Evita construtores gigantes
- Permite a criação de objetos em várias etapas
- Facilita a criação de objetos complexos
- Código mais legível e flexível

### Pontos positivos e negativos:
- **Pontos positivos:**
- Separa criação de utilização
- O cliente não precisa criar objetvos diretamente
- O mesmo código pode construir objetos diferentes
- Ajuda na aplicação dos princípops SRP e OCP

- **Pontos negativos:**
- Pode ser difícil de implementar
- O código final pode se tornar muito completo
- Pode ser difícil de entender

### Como implementar o padrão Builder?

O Builder segue uma estrutura onde temos:

- **Produto (Product)**: O objeto complexo que será construído.
- **Builder (Interface Builder)**: Define os passos da construção.
- **Concretor (Concrete Builder)**: Implementa os passos específicos para criar o objeto.
- **Diretor (Director (Opcional))**: Define a ordem da construção.
