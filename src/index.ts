import { Compte } from './main/compte';
import { Client } from './main/client';
import { CompteRemunere } from './main/compteRemunere';
import { CompteSeuil } from './main/compteSeuil';

try {
  const cpt = new Compte(148756);
  const marie = new Client(7878445, 'Dupont  897mok', 'Marie', 45);
  marie.ajouterCompte(cpt);
} catch (e) {
  console.log(e.toString());
}


try {
  const cptremu = new CompteRemunere(7896544, 800, 0.1);
  const jean = new Client(4568977, 'Durant', 'Jean', 25);
  jean.ajouterCompte(cptremu);
  cptremu.ajouter(20);
  cptremu.verserInterets();
} catch (e) {
  console.log(e.toString());
}


try {
  const cptseuil = new CompteSeuil(7878887, 50);
  const emilie = new Client(1212165, 'Montpellier', 'Emilie', 38);
  emilie.ajouterCompte(cptseuil);
  cptseuil.retirer(20);
} catch (e) {
  console.log(e.toString());
}
