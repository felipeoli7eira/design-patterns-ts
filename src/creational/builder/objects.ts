import { IBuilderRefeicao, IRefeicao } from './interfaces';

export abstract class Refeicao implements IRefeicao {
  constructor(private preco: number) {}

  public obterPreco(): number {
    return this.preco;
  }
}

export class Arroz extends Refeicao {}

export class Feijao extends Refeicao {}

export class PeitoDeFrango extends Refeicao {}

export class Salada extends Refeicao {}

export class Sorvete extends Refeicao {}

export class Acai extends Refeicao {}

export class SucoDeLaranjaNatural500ML extends Refeicao {}

export class Marmita implements IRefeicao {
  private readonly itens: IRefeicao[] = [];

  public obterPreco(): number {
    return this.itens.reduce(
      (acumulador: number, item: IRefeicao): number =>
        (acumulador += item.obterPreco()),
      0,
    );
  }

  public adicionar(...items: IRefeicao[]): void {
    items.forEach((i: IRefeicao) => this.itens.push(i));
  }
}

export class MarmitaPadraoBuilder implements IBuilderRefeicao {
  private marmita: Marmita = new Marmita();

  public criarRefeicao(): this {
    const arroz = new Arroz(5);
    const jeijao = new Feijao(7);
    const peitoDeFrango = new PeitoDeFrango(9);

    this.marmita.adicionar(arroz, jeijao, peitoDeFrango);

    return this;
  }

  public criarBebida(): this {
    const suco = new SucoDeLaranjaNatural500ML(6);

    this.marmita.adicionar(suco);

    return this;
  }

  public criarSobremesa(): this {
    const sorvete = new Sorvete(11);

    this.marmita.adicionar(sorvete);

    return this;
  }

  public obterMarmita(): Marmita {
    return this.marmita;
  }

  public resetar(): this {
    this.marmita = new Marmita();

    return this;
  }

  public obterPreco(): number {
    return this.marmita.obterPreco();
  }
}
