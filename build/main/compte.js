"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
var Compte = /** @class */ (function () {
    function Compte(numero, solde) {
        if (solde === void 0) { solde = 0; }
        this._numero = 0;
        this._solde = 0;
        this.numero = numero;
        this.solde = solde;
    }
    Object.defineProperty(Compte.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            if (value < 0) {
                throw new RangeError('le numero de compte ne peut être négatif');
            }
            if (value.toString().length < 5 || value.toString().length > 10) {
                throw new RangeError('le numero de compte doit contenir entre 5 et 10 chiffres');
            }
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Compte.prototype, "solde", {
        get: function () {
            return this._solde;
        },
        set: function (value) {
            this._solde = value;
        },
        enumerable: false,
        configurable: true
    });
    Compte.prototype.ajouter = function (value) {
        if (value < 0) {
            throw new RangeError('la valeur ne peut être négative');
        }
        this._solde += value;
    };
    Compte.prototype.retirer = function (value) {
        if (value < 0) {
            throw new RangeError('la valeur ne peut être négative');
        }
        this._solde -= value;
    };
    Compte.prototype.toString = function () {
        return "\n    numero de compte : " + this.numero + "\n    solde du compte : " + this.solde + "\n    ";
    };
    return Compte;
}());
exports.Compte = Compte;
