import { Compte } from "../main/compte";

let compte : Compte;

beforeEach(() => {
    compte = new Compte(123456,1000);
})

describe("Verification du fonctionnement des getters setters de la classe", () => {
    it('Verfication du fonctionnement des getters setter du numero', () => {
        compte.numero = 123698;
        expect(compte.numero).toEqual(123698);
      });
      it('Verification de la regex sur le numero', () => {
        expect(() => {
          compte.numero = 123;
        }).toThrow(RangeError);
        expect(() => {
            compte.numero = -1;
          }).toThrow(RangeError);
      });
      it('Verfication du fonctionnement des getters setter du solde', () => {
        compte.solde = 500;
        expect(compte.solde).toEqual(500);
      });
})

describe("Methode de la classe",() => {
    it("Methode d'ajout de solde",() => {
        compte.ajouter(100)
        expect(compte.solde).toEqual(1100);
        //test du control si la valeur est inférieur a 0
        expect(() => {
            compte.ajouter(-1)
        }).toThrow(RangeError);
    })
    it("Methode de soustraction de solde",() => {
        compte.retirer(100)
        expect(compte.solde).toEqual(900);
        //test du control si la valeur est inférieur a 0
        expect(() => {
            compte.retirer(-1)
        }).toThrow(RangeError);
    })
    it("Methode d'affichage toString", () => {
        expect(compte.toString()).toContain("\n    numero de compte : 123456\n    solde du compte : 1000\n")
    })
})