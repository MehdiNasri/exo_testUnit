
import { CompteRemunere } from "../main/compteRemunere";


let compteRemunere : CompteRemunere;

beforeEach(()=>{
    compteRemunere = new CompteRemunere(123456,1000,0.1);
})

describe("Verification du fonctionnement des getters setters de la classe", () => {
    it('Verfication du fonctionnement des getters setter du taux', () => {
        compteRemunere.taux = 15;
        expect(compteRemunere.taux).toEqual(15);
      });
      it('Verfication de la regex du taux', () => {
        
        expect(() => {
            compteRemunere.taux = 50;
        }).toThrow(RangeError);
      });
      
})

describe("Methodes de le classe" , () => {
    it('Methode calculerInteret',() => {
        expect(compteRemunere.calculerInterets()).toEqual(100)
    })
    it('Methode verserInterets',() => {
        compteRemunere.verserInterets()
        expect(compteRemunere.solde).toEqual(1100)
    })
    it('Methode toString',() => {
        expect(compteRemunere.toString()).toContain("\n    numero de compte : 123456\n    solde du compte : 1000\n    taux d'intérêt: 10%")
    })
})