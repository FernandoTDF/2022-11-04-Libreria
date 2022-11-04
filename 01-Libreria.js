"use strict";
exports.__esModule = true;
exports.Libreria = void 0;
var Libreria = /** @class */ (function () {
    function Libreria(paramListadoPublicaciones, paramListadoClientes) {
        this.listadoDePublicaciones = paramListadoPublicaciones;
        this.listadoDeClientes = paramListadoClientes;
    }
    Libreria.prototype.mostrarPublicacionesDelCatalogo = function () {
        console.log("A continuacion se muestran las Publicaciones en Stock:");
        console.log(this.listadoDePublicaciones);
    };
    Libreria.prototype.ingresarPublicacionAlCatalogo = function (paramPublicacion) {
        this.listadoDePublicaciones.push(paramPublicacion);
        console.log("Publicacion ingresada al Catalogo: " + paramPublicacion.getNombre());
    };
    Libreria.prototype.borrarPublicacionDelCatalogo = function (paramPublicacion) {
        for (var i = 0; i < this.listadoDePublicaciones.length; i++) {
            if (paramPublicacion.getNombre() === this.listadoDePublicaciones[i].getNombre()) {
                this.listadoDePublicaciones.splice(i, 1);
                console.log("Publicacion eliminada del Catalogo: " + paramPublicacion.getNombre());
            }
            else {
                console.log("No se ha encontrado la Publicacion ");
            }
        }
    };
    Libreria.prototype.cargarClienteAlListado = function (paramCliente) {
        this.listadoDeClientes.push(paramCliente);
        console.log("Cliente ingresado al listado de Clientes: " + paramCliente.getNombre() + " " + paramCliente.getApellido());
    };
    Libreria.prototype.borrarClienteDelListado = function (paramCliente) {
        for (var i = 0; i < this.listadoDeClientes.length; i++) {
            if (paramCliente.getNombre() === this.listadoDeClientes[i].getNombre()) {
                this.listadoDeClientes.splice(i, 1);
                console.log("Cliente eliminado del listado: " + paramCliente.getNombre());
            }
            else {
                console.log("No se ha encontrado el Cliente en el listado ");
            }
        }
    };
    Libreria.prototype.getListadoDePublicacionesPorCliente = function (paramCliente) {
        return paramCliente.getPublicacionesAdquiridasDelCliente();
    };
    Libreria.prototype.venderPublicacionAlCliente = function (paramPublicacion, paramCliente) {
        paramCliente.setPublicacionAlListadoCliente(paramPublicacion);
        console.log("Se ha vendido la publicacion ".concat(paramPublicacion.getNombre(), " del cliente ").concat(paramCliente.getNombre(), " y se ha agregado a su listado personal"));
    };
    Libreria.prototype.getPrecioPublicacionPorCliente = function (paramLibro, paramCliente) {
        console.log("El precio de la publicacion ".concat(paramLibro.getNombre(), "es ").concat(paramLibro.getPrecio(), ". Para el cliente ").concat(paramCliente.getNombre(), ", el precio final es: ") + paramLibro.getPrecio() / (1 + (paramCliente.getDescuentoGeneral() / 100)) + "por tener un descuento del % " + paramCliente.getDescuentoGeneral());
    };
    Libreria.prototype.checkPublicacionAdquiridaPorCLiente = function (paramLibro, paramCliente) {
        var arregloPublicacionesCliente = paramCliente.getPublicacionesAdquiridasDelCliente();
        var publicacionEncontrada = false;
        var i = 0;
        while (i < arregloPublicacionesCliente.length && publicacionEncontrada === false) {
            if (paramLibro.getNombre() === arregloPublicacionesCliente[i].getNombre()) {
                publicacionEncontrada = true;
            }
            else {
                i++;
            }
        }
        if (publicacionEncontrada === true) {
            console.log("La Publicacion ".concat(paramLibro.getNombre(), " esta entre las compras del Cliente ").concat(paramCliente.getNombre()));
            return true;
        }
        else {
            console.log("La Publicacion ".concat(paramLibro.getNombre(), " NO se encuentra entre las compras del Cliente ").concat(paramCliente.getNombre()));
            return false;
        }
    };
    Libreria.prototype.gustaAlClienteLibro = function (paramLibro, paramCliente) {
        var libroAgradoDelCliente = false;
        switch (paramCliente.getEsClienteExigente()) {
            case false: //caso para cliente no exigente
                for (var i = 0; i < paramCliente.getDelListadoAutoresPreferidos().length; i++) {
                    if (paramCliente.getDelListadoAutoresPreferidos()[i] === paramLibro.getAutor()) {
                        libroAgradoDelCliente = true;
                    }
                }
                break;
            case true: //caso para cliente exigente
                for (var i = 0; i < paramCliente.getDelListadoAutoresPreferidos().length; i++) {
                    if ((paramCliente.getDelListadoAutoresPreferidos()[i] === paramLibro.getAutor()) && (paramCliente.getDelListadoGenerosPreferidos()[i] === paramLibro.getGeneroLiterario())) {
                        libroAgradoDelCliente = true;
                    }
                }
                break;
        }
        if (libroAgradoDelCliente === true) {
            console.log("Al cliente ".concat(paramCliente.getNombre(), " le gusta el libro ").concat(paramLibro.getNombre()));
        }
        else {
            console.log("Al cliente ".concat(paramCliente.getNombre(), " NO le gusta el libro ").concat(paramLibro.getNombre()));
        }
    };
    return Libreria;
}());
exports.Libreria = Libreria;
