import { Compte } from './compte';

export class CompteRemunere extends Compte {
  private _taux = 0;

  public constructor(numero: number, solde: number, taux: number) {
    super(numero, solde);
    this.taux = taux;
  }
  get taux(): number {
    return this._taux;
  }

  set taux(value: number) {
    if (value < 0 || value > 20) {
      throw new RangeError('le taux doit être compris entre 0 et 20%');
    }
    this._taux = value;
  }

  public calculerInterets(): number {
    return this.taux * this.solde;
  }

  public verserInterets(): void {
    this.solde += this.calculerInterets();
  }

  public toString(): string {
    return `${super.toString()}taux d'intérêt: ${this.taux * 100}%
    `;
  }
}
