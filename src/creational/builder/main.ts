import { MarmitaPadraoBuilder } from './objects';

export function main() {
  const marmitaPadrao = new MarmitaPadraoBuilder();
  marmitaPadrao.criarRefeicao().criarBebida().criarSobremesa();

  console.log(
    marmitaPadrao,
    marmitaPadrao.obterMarmita(),
    marmitaPadrao.obterPreco(),
  );
}
