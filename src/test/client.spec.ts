import { Client } from '../main/client';
import { Compte } from '../main/compte';

let client: Client;
let compte1: Compte;
let compte2: Compte;

beforeEach(() => {
  compte1 = new Compte(123456, 1500);
  compte2 = new Compte(679812, 1000);
  client = new Client(123456, 'Jo', 'Joseph', 25);
  client.tabCompte.push(compte1);
  client.tabCompte.push(compte2);
});

// test sur les getter et setter.
describe('getter setter de la classe', () => {
  it('Verfication du fonctionnement des getters setter du numero', () => {
    client.numero = 123698;
    expect(client.numero).toEqual(123698);
  });
  it('Verification de la regex sur le numero < 5 chiffres', () => {
    expect(() => {
      client.numero = 123;
    }).toThrow(RangeError);
  });
  it('Verification de la regex sur le numero > 10 chiffres', () => {
    expect(() => {
      client.numero = 12345987456698745;
    }).toThrow(RangeError);
  });
  it('Verification de la regex sur le numero inferieur a 0', () => {
    expect(() => {
      client.numero = -1;
    }).toThrow(RangeError);
  });
  it('Verfication du fonctionnement des getters setter du nom', () => {
    client.nom = 'Sadek';
    expect(client.nom).toEqual('Sadek');
  });
  it('Verfication du fonctionnement des getters setter du prenom', () => {
    client.prenom = 'Roger';
    expect(client.prenom).toEqual('Roger');
  });
  it('Verfication du fonctionnement de la regex sur nom et prenom', () => {
    client.prenom = '145';
    client.nom = '896';
    expect(client.prenom).toEqual('');
    expect(client.nom).toEqual('');
  });
  it("Verfication du fonctionnement des getters setter de l'age", () => {
    client.age = 24;
    expect(client.age).toEqual(24);
  });
  it("Verfication du fonctionnement des getters setter de l'age quand l'age est inférieur a 0", () => {
    expect(() => {
      client.age = -1;
    }).toThrow();
  });
  it('Verfication du fonctionnement des getters setter des comptes', () => {
      let arrayCompte : Array<Compte>;
      let compte3 : Compte = new Compte(456789,1000,);
      let compte4 : Compte = new Compte(456779,2000,);
      arrayCompte = [compte3,compte4];
      client.tabCompte = arrayCompte;
    expect(client.tabCompte).toEqual([
      { _numero: 456789, _solde: 1000 },
      { _numero: 456779, _solde: 2000 },
    ]);
  });
});

//test sur les méthode de la classe
describe('Methodes de la classe', () => {
  it('Methode ajout de compte ', () => {
    let compte3: Compte = new Compte(458678, 250);
    client.ajouterCompte(compte3);
    expect(client.tabCompte.length).toEqual(3);
  });
  it("Methode toString affichage ", () => {
    expect(client.toString()).toContain("le client Joseph Jo agé de 25 ans possède 2 comptes")
  })
});
