"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(paramNombre, paramApellido, paramDNI, paramDireccion, paramAutoresPreferidos, paramGenerosPreferidos, paramDescuentoGeneral, paramEsClienteExigente) {
        this.listadoAutoresPreferidos = [];
        this.listadoGenerosPreferidos = [];
        //-----------Parametros extra para cumplir consigna----------------
        this.listadoPublicacionesAdquiridas = [];
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDNI;
        this.direccion = paramDireccion;
        this.listadoAutoresPreferidos = paramAutoresPreferidos;
        this.listadoGenerosPreferidos = paramGenerosPreferidos;
        this.descuentoGeneral = paramDescuentoGeneral;
        this.esClienteExigente = paramEsClienteExigente;
    }
    Cliente.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.setApellido = function (paramApellido) {
        this.apellido = paramApellido;
    };
    Cliente.prototype.getApellido = function () {
        return this.apellido;
    };
    Cliente.prototype.setDNI = function (paramDNI) {
        this.dni = paramDNI;
    };
    Cliente.prototype.getDNI = function () {
        return this.dni;
    };
    Cliente.prototype.setDireccion = function (paramDireccion) {
        this.direccion = paramDireccion;
    };
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.setAlListadoAutoresPreferidos = function (paramAutorPreferido) {
        this.listadoAutoresPreferidos.push(paramAutorPreferido);
    };
    Cliente.prototype.getDelListadoAutoresPreferidos = function () {
        return this.listadoAutoresPreferidos;
    };
    Cliente.prototype.setAlListadoGenerosPreferidos = function (paramGeneroPreferido) {
        this.listadoGenerosPreferidos.push(paramGeneroPreferido);
    };
    Cliente.prototype.getDelListadoGenerosPreferidos = function () {
        return this.listadoGenerosPreferidos;
    };
    Cliente.prototype.setDescuentoGeneral = function (paramDescuentoGeneral) {
        this.descuentoGeneral = paramDescuentoGeneral;
    };
    Cliente.prototype.getDescuentoGeneral = function () {
        return this.descuentoGeneral;
    };
    Cliente.prototype.setPublicacionAlListadoCliente = function (paramPublicacion) {
        this.listadoPublicacionesAdquiridas.push(paramPublicacion);
    };
    Cliente.prototype.borrarPublicacionDelListadoCliente = function (paramPublicacion) {
        for (var i = 0; i < this.listadoPublicacionesAdquiridas.length; i++) {
            if (paramPublicacion.getNombre() === this.listadoPublicacionesAdquiridas[i].getNombre()) {
                this.listadoPublicacionesAdquiridas.splice(i, 1);
                console.log("Publicacion desechada " + paramPublicacion.getNombre());
            }
            else {
                console.log("No se ha encontrado la publicacion ");
            }
        }
    };
    Cliente.prototype.getPublicacionesAdquiridasDelCliente = function () {
        return this.listadoPublicacionesAdquiridas;
    };
    Cliente.prototype.setEsClienteExigente = function (paramClienteExigente) {
        this.esClienteExigente = paramClienteExigente;
    };
    Cliente.prototype.getEsClienteExigente = function () {
        return this.esClienteExigente;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
