"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(numero, nom, prenom, age) {
        this._nom = '';
        this._prenom = '';
        this._age = 0;
        this._numero = 0;
        this._tabCompte = [];
        this.age = age;
        this.numero = numero;
        this.nom = nom;
        this.prenom = prenom;
    }
    Object.defineProperty(Client.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = this.regex(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (value) {
            this._prenom = this.regex(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new RangeError("l'age ne peut être négatif");
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            if (value.toString().length < 5 || value.toString().length > 10) {
                throw RangeError('le numero client doit contenir entre 5 et 10 chiffres');
            }
            if (value < 0) {
                throw new RangeError('le numero client ne peut être négatif');
            }
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "tabCompte", {
        get: function () {
            return this._tabCompte;
        },
        set: function (value) {
            this._tabCompte = value;
        },
        enumerable: false,
        configurable: true
    });
    Client.prototype.regex = function (value) {
        var regex = value.match(/[a-zA-Z]+\D[a-zA-Z]*/gm);
        var result = '';
        if (regex != null) {
            regex.forEach(function (data) {
                result += data;
            });
        }
        return result;
    };
    Client.prototype.ajouterCompte = function (compte) {
        this._tabCompte.push(compte);
    };
    Client.prototype.toString = function () {
        return "le client " + this.prenom + " " + this.nom + " ag\u00E9 de " + this.age + " ans poss\u00E8de " + this.tabCompte.length + " comptes\n    ";
    };
    return Client;
}());
exports.Client = Client;
