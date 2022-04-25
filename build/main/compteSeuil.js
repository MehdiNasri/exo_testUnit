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
exports.CompteSeuil = void 0;
var compte_1 = require("./compte");
var CompteSeuil = /** @class */ (function (_super) {
    __extends(CompteSeuil, _super);
    function CompteSeuil(numero, seuil, solde) {
        var _this = _super.call(this, numero, solde) || this;
        _this._seuil = 0;
        _this.seuil = seuil;
        return _this;
    }
    Object.defineProperty(CompteSeuil.prototype, "seuil", {
        get: function () {
            return this._seuil;
        },
        set: function (value) {
            this._seuil = value;
        },
        enumerable: false,
        configurable: true
    });
    CompteSeuil.prototype.retirer = function (montant) {
        if (this.solde - montant < this.seuil) {
            throw new Error('le plafond est dépassé sur cette transaction');
        }
        this.solde -= montant;
    };
    CompteSeuil.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " seuil de retrait : " + this.seuil + " ";
    };
    return CompteSeuil;
}(compte_1.Compte));
exports.CompteSeuil = CompteSeuil;
