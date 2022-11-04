"use strict";
exports.__esModule = true;
var _00_ClasePublicacion_1 = require("./00-ClasePublicacion");
var _00_ClaseCliente_1 = require("./00-ClaseCliente");
var Libreria = /** @class */ (function () {
    function Libreria(paramListadoPublicaciones, paramListadoClientes) {
        this.listadoDePublicaciones = paramListadoPublicaciones;
        this.listadoDeClientes = paramListadoClientes;
    }
    Libreria.prototype.ingresarPublicacionAlCatalogo = function (paramLibro) {
        this.listadoDePublicaciones.push(paramLibro);
        console.log("Publicacion ingresada al Catalogo: " + paramLibro.getNombre());
    };
    Libreria.prototype.borrarPublicacionDelCatalogo = function (paramLibro) {
        for (var i = 0; i < this.listadoDePublicaciones.length; i++) {
            if (paramLibro.getNombre() === this.listadoDePublicaciones[i].getNombre()) {
                this.listadoDePublicaciones.splice(i, 1);
                console.log("Publicacion eliminada del Catalogo: " + paramLibro.getNombre());
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
    Libreria.prototype.getPrecioPublicacionPorCliente = function (paramLibro, paramCliente) {
        return paramLibro.getPrecio() / (1 + (paramCliente.getDescuentoGeneral() / 100));
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
        switch (paramCliente.getEsClienteExigente()) {
            case false: //caso para cliente no exigente
                if (paramCliente.getListadoAutoresPreferidos().includes(paramLibro.getAutor()) === true) {
                    //verifica que en el listado de autores preferidos del cliente, se encuentre el autor de la publicacion analizada.
                    console.log("Al cliente ".concat(paramCliente.getNombre, " le gusta este libro"));
                }
                else {
                    console.log("Al cliente ".concat(paramCliente.getNombre, " NO le gusta este libro"));
                }
                break;
            case true: //caso para cliente exigente
                if (paramCliente.getListadoAutoresPreferidos().includes(paramLibro.getAutor()) === true && paramCliente.getListadoGenerosPreferidos().includes(paramLibro.getGeneroLiterario())) {
                    //verifica que en el listado de autores preferidos del cliente, se encuentre el autor de la publicacion analizada, y ADEMAS tambien el genero literario este entre sus preferencias.
                    console.log("Al cliente ".concat(paramCliente.getNombre, " le gusta este libro"));
                }
                else {
                    console.log("Al cliente ".concat(paramCliente.getNombre, " NO le gusta este libro"));
                }
                break;
        }
    };
    return Libreria;
}());
//------------------Creacion de Clientes--------------------
var FerFrias = new _00_ClaseCliente_1.Cliente("Fernando", "Frias", 28676721, "Maria Elena Walsh 5180", ["H. P. Lovecraft", "Nestor Quadri"], ["Novela de ciencia ficción", "Tecnico"], 0.15, false);
var LiliHerrera = new _00_ClaseCliente_1.Cliente("Liliana", "Herrera", 26560968, "Las Aljabas 402", ["GARCÍA MÁRQUEZ, GABRIEL", "Dain Heer"], ["Autoayuda"], 0.3, true);
//------------------Prueba Metodos de Cliente------------------------------------
console.log("------------------------------------------------------------------------------------");
console.log("Prueba Metodos de Cliente Fernando Frias");
console.log("Metodo Get Nombre :" + FerFrias.getNombre());
console.log("Metodo Get Apellido :" + FerFrias.getApellido());
console.log("Metodo Get DNI :" + FerFrias.getDNI());
console.log("Metodo Get Direccion :" + FerFrias.getDireccion());
console.log("Metodo Get Autores Preferidos: " + FerFrias.getListadoAutoresPreferidos());
console.log("Metodo Get Generos Preferidos: " + FerFrias.getListadoGenerosPreferidos());
console.log("Metodo Get Publicaciones Adquiridas :" + FerFrias.getPublicacionesAdquiridasDelCliente());
console.log("Metodo Get Descuento General :" + FerFrias.getDescuentoGeneral());
console.log("------------------------------------------------------------------------------------");
//------------------Creacion de Listado de Clientes--------------------
var listadoClientes = [FerFrias, LiliHerrera];
//------------------Creacion de Publicaciones--------------------
var LaHojarasca = new _00_ClasePublicacion_1.Libro("La hojarasca", "GARCÍA MÁRQUEZ, GABRIEL", 3500, 325, "En La hojarasca nació Macondo, ese poblachón cercano a la costa atlántica colombiana que ya se ha convertido en una de los grandes mitos de la literatura universal.", "Novela romántica");
var SaleElEspectro = new _00_ClasePublicacion_1.Libro("Sale el espectro", "ROTH, PHILIP", 5500, 205, "Sale el espectro, la novela donde Roth dice adiós a Nathan Zuckerman, su célebre protagonista y álter ego, es un estudio profundo de la obsesión, del olvido, de la resignación y del deseo imposible de satisfacer.", "Novela romántica");
var Dune = new _00_ClasePublicacion_1.Libro("Dune", "Herbert Frank", 4500, 784, "Arrakis: un planeta desértico donde el agua es el bien más preciado y, donde llorar a los muertos es el símbolo de máxima prodigalidad.Paul Atreides: un adolescente marcado por un destino singular, dotado de extraños poderes y, abocado a convertirse en dictador, mesías y mártir.Los Harkonnen: personificación de las intrigas que rodean el Imperio Galáctico, buscan obtener el control sobre Arrakis para disponer de la melange, preciosa especia y uno de los bienes más codiciados del universo. Los Fremen: seres libres que han convertido el inhóspito paraje de Dune en su hogar, y que se sienten orgullosos de su pasado y temerosos de su futuro..", "Novela de ciencia ficción");
var ElHorrorDeDunwich = new _00_ClasePublicacion_1.Libro("El horror de Dunwich", "H. P. Lovecraft", 7500, 544, "Wilbur Whateley, hijo precoz y monstruoso de una solitaria familia de Dunwich, conserva parte del atroz secreto del Necronomicón, el libro prohibido. El secreto no puede, no debe, ser revelado a los hombres: las fuerzas del mal perviven y pueden invocarse. Una vez desatadas, el mundo conocerá su apocalipsis.El horror de Dunwich es uno de los relatos más perturbadores de la literatura de terror.", "Novela de ciencia ficción");
var ElSenorDeLosAnillos = new _00_ClasePublicacion_1.Libro("El señor de los Anillos", "H. P. Lovecraft", 6500, 1044, " La novela narra el viaje del protagonista principal, Frodo Bolsón, hobbit de la Comarca, para destruir el Anillo Único y la consiguiente guerra que provocará el enemigo para recuperarlo, ya que es la principal fuente de poder de su creador, el Señor oscuro Sauron.", "Novela de ciencia ficción");
var SiendoTuCambiandoElMundo = new _00_ClasePublicacion_1.Libro("Siendo Tú, Cambiando el Mundo", "Dain Heer", 6500, 348, "Este es un libro muy diferente. Está escrito para los soñadores de este mundo - las personas que saben que algo diferente es posible - pero que nunca antes tuvieron las herramientas. ¿Y si te dijera que las herramientas existen? ¡Las posibilidades sobre las que siempre soñaste, son posibles! Este libro te proveerá de un conjunto de herramientas prácticas y dinámicas y procesos que te dan el poder para saber lo que es verdad para ti y lo que en verdad TÚ eres.", "Autoayuda");
//------------------Creacion de Listado de Libros Libreria--------------------
var listadoLibrosLibreria = [LaHojarasca, SaleElEspectro, Dune, ElHorrorDeDunwich, ElSenorDeLosAnillos, SiendoTuCambiandoElMundo];
//------------------Creacion de Libreria------------------------------------
var CodiceLibros = new Libreria(listadoLibrosLibreria, listadoClientes);
CodiceLibros.checkPublicacionAdquiridaPorCLiente(ElSenorDeLosAnillos, LiliHerrera);
console.log(CodiceLibros.getListadoDePublicacionesPorCliente(LiliHerrera));
console.log(CodiceLibros.getPrecioPublicacionPorCliente(Dune, LiliHerrera));
LiliHerrera.setPublicacionAlListadoCliente(Dune);
console.log(CodiceLibros.getListadoDePublicacionesPorCliente(LiliHerrera));
console.log(CodiceLibros.getPrecioPublicacionPorCliente(Dune, LiliHerrera));
