import { Compte } from './compte';

export class Client {
  private _nom = '';
  private _prenom = '';
  private _age = 0;
  private _numero = 0;
  private _tabCompte: Array<Compte> = [];

  public constructor(numero: number, nom: string, prenom: string, age: number) {
    this.age = age;
    this.numero = numero;
    this.nom = nom;
    this.prenom = prenom;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = this.regex(value);
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = this.regex(value);
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new RangeError("l'age ne peut être négatif");
    }
    this._age = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    if (value.toString().length < 5 || value.toString().length > 10) {
      throw RangeError('le numero client doit contenir entre 5 et 10 chiffres');
    }
    if (value < 0) {
      throw new RangeError('le numero client ne peut être négatif');
    }
    this._numero = value;
  }

  get tabCompte(): Array<Compte> {
    return this._tabCompte;
  }

  set tabCompte(value: Array<Compte>) {
    this._tabCompte = value;
  }

  private regex(value: string): string {
    const regex = value.match(/[a-zA-Z]+\D[a-zA-Z]*/gm);
    let result = '';
    if (regex != null) {
      regex.forEach(data => {
        result += data;
      });
    }
    return result;
  }

  public ajouterCompte(compte: Compte): void {
    this._tabCompte.push(compte);
  }

  public toString(): string {
    return `le client ${this.prenom} ${this.nom} agé de ${this.age} ans possède ${this.tabCompte.length} comptes
    `;
  }
}
