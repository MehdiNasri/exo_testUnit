export class Compte {
  private _numero = 0;
  private _solde = 0;

  public constructor(numero: number, solde = 0) {
    this.numero = numero;
    this.solde = solde;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    if (value < 0) {
      throw new RangeError('le numero de compte ne peut être négatif');
    }
    if (value.toString().length < 5 || value.toString().length > 10) {
      throw new RangeError(
        'le numero de compte doit contenir entre 5 et 10 chiffres',
      );
    }
    this._numero = value;
  }

  get solde(): number {
    return this._solde;
  }

  set solde(value: number) {
    this._solde = value;
  }

  public ajouter(value: number): void {
    if (value < 0) {
      throw new RangeError('la valeur ne peut être négative');
    }
    this._solde += value;
  }

  public retirer(value: number): void {
    if (value < 0) {
      throw new RangeError('la valeur ne peut être négative');
    }
    this._solde -= value;
  }

  public toString(): string {
    return `
    numero de compte : ${this.numero}
    solde du compte : ${this.solde}
    `;
  }
}
