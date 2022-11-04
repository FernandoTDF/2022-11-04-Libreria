"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Libro = exports.Revista = exports.Publicacion = void 0;
var Publicacion = /** @class */ (function () {
    function Publicacion(paramNombre, paramAutor, paramPrecio) {
        this.nombre = paramNombre;
        this.autor = paramAutor;
        this.precio = paramPrecio;
    }
    Publicacion.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Publicacion.prototype.getNombre = function () {
        return this.nombre;
    };
    Publicacion.prototype.setAutor = function (paramAutor) {
        this.autor = paramAutor;
    };
    Publicacion.prototype.getAutor = function () {
        return this.autor;
    };
    Publicacion.prototype.setprecio = function (paramPrecio) {
        this.precio = paramPrecio;
    };
    Publicacion.prototype.getPrecio = function () {
        return this.precio;
    };
    return Publicacion;
}());
exports.Publicacion = Publicacion;
//--------------------------------------------------------------------------------------------------------
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(paramNombre, paramAutor, paramPrecio, paramUnNumero, paramAnio) {
        var _this = _super.call(this, paramNombre, paramAutor, paramPrecio) || this;
        _this.unNumero = paramUnNumero;
        _this.anio = paramAnio;
        return _this;
    }
    Revista.prototype.setUnNumero = function (paramUnNumero) {
        this.unNumero = paramUnNumero;
    };
    Revista.prototype.getUnNumero = function () {
        return this.unNumero;
    };
    Revista.prototype.setAnio = function (paramAnio) {
        this.anio = paramAnio;
    };
    Revista.prototype.getAnio = function () {
        return this.anio;
    };
    return Revista;
}(Publicacion));
exports.Revista = Revista;
//--------------------------------------------------------------------------------------------------------
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(paramNombre, paramAutor, paramPrecio, paramCantPaginas, paramResumen, paramaGeneroLiterario) {
        var _this = _super.call(this, paramNombre, paramAutor, paramPrecio) || this;
        _this.cantPaginas = paramCantPaginas;
        _this.resumen = paramResumen;
        _this.generoLiterario = paramaGeneroLiterario;
        return _this;
    }
    Libro.prototype.setCantidadPaginas = function (paramCantPaginas) {
        this.cantPaginas = paramCantPaginas;
    };
    Libro.prototype.getCantidadPaginas = function () {
        return this.cantPaginas;
    };
    Libro.prototype.setResumen = function (paramResumen) {
        this.resumen = paramResumen;
    };
    Libro.prototype.getResumen = function () {
        return this.resumen;
    };
    Libro.prototype.setGeneroLiterarion = function (paramGeneroLiterario) {
        this.generoLiterario = paramGeneroLiterario;
    };
    Libro.prototype.getGeneroLiterario = function () {
        return this.generoLiterario;
    };
    return Libro;
}(Publicacion));
exports.Libro = Libro;
