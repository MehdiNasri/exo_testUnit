"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compte_1 = require("./main/compte");
var client_1 = require("./main/client");
var compteRemunere_1 = require("./main/compteRemunere");
var compteSeuil_1 = require("./main/compteSeuil");
try {
    var cpt = new compte_1.Compte(148756);
    var marie = new client_1.Client(7878445, 'Dupont  897mok', 'Marie', 45);
    marie.ajouterCompte(cpt);
}
catch (e) {
    console.log(e);
}
try {
    var cptremu = new compteRemunere_1.CompteRemunere(7896544, 800, 0.1);
    var jean = new client_1.Client(4568977, 'Durant', 'Jean', 25);
    jean.ajouterCompte(cptremu);
    cptremu.ajouter(20);
    cptremu.verserInterets();
}
catch (e) {
    console.log(e);
}
try {
    var cptseuil = new compteSeuil_1.CompteSeuil(7878887, 50);
    var emilie = new client_1.Client(1212165, 'Montpellier', 'Emilie', 38);
    emilie.ajouterCompte(cptseuil);
    cptseuil.retirer(20);
}
catch (e) {
    console.log(e.toString());
}
