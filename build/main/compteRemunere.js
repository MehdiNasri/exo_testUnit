"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompteRemunere = void 0;
var compte_1 = require("./compte");
var CompteRemunere = /** @class */ (function (_super) {
    __extends(CompteRemunere, _super);
    function CompteRemunere(numero, solde, taux) {
        var _this = _super.call(this, numero, solde) || this;
        _this._taux = 0;
        _this.taux = taux;
        return _this;
    }
    Object.defineProperty(CompteRemunere.prototype, "taux", {
        get: function () {
            return this._taux;
        },
        set: function (value) {
            if (value < 0 || value > 20) {
                throw new RangeError('le taux doit être compris entre 0 et 20%');
            }
            this._taux = value;
        },
        enumerable: false,
        configurable: true
    });
    CompteRemunere.prototype.calculerInterets = function () {
        return this.taux * this.solde;
    };
    CompteRemunere.prototype.verserInterets = function () {
        this.solde += this.calculerInterets();
    };
    CompteRemunere.prototype.toString = function () {
        return _super.prototype.toString.call(this) + "taux d'int\u00E9r\u00EAt: " + this.taux * 100 + "%\n    ";
    };
    return CompteRemunere;
}(compte_1.Compte));
exports.CompteRemunere = CompteRemunere;
