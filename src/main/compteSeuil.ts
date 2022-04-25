import { Compte } from './compte';

export class CompteSeuil extends Compte {
  private _seuil = 0;

  public constructor(numero: number, seuil: number, solde?: number) {
    super(numero, solde);
    this.seuil = seuil;
  }
  get seuil(): number {
    return this._seuil;
  }

  set seuil(value: number) {
    this._seuil = value;
  }

  public retirer(montant: number): void {
    if (this.solde - montant < this.seuil) {
      throw new Error('le plafond est dépassé sur cette transaction');
    }
    this.solde -= montant;
  }

  public toString(): string {
    return `${super.toString()} seuil de retrait : ${this.seuil} `;
  }
}
