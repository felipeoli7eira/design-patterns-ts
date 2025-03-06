export interface IRefeicao {
  obterPreco(): number;
}

export interface IBuilderRefeicao {
  criarRefeicao(): this;
  criarBebida(): this;
  criarSobremesa(): this;
}
