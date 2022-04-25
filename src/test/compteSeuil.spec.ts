import { CompteSeuil } from "../main/compteSeuil";
let compteSeuil :CompteSeuil;

beforeEach(()=> {
    compteSeuil = new CompteSeuil(123456,400,1000);
})
describe("Verification du fonctionnement des getters setters de la classe", () => {
    it('Verfication du fonctionnement des getters setter du seuil', () => {
        compteSeuil.seuil = 200;
        expect(compteSeuil.seuil).toEqual(200);
      });
         
});
describe("Verification des methodes de la classe", () => {
    it('methode retirer ', () => {
        compteSeuil.retirer(200);
        expect(compteSeuil.solde).toEqual(800);
        //test de la regex sur le seuil
    
        expect(() => {
            compteSeuil.retirer(600);
        }).toThrow(Error);
      });
      it('Methode toString',() => {
        expect(compteSeuil.toString()).toContain("\n    numero de compte : 123456\n    solde du compte : 1000\n     seuil de retrait : 400")
    })
})