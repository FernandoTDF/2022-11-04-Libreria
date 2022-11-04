"use strict";
exports.__esModule = true;
var _00_ClasePublicacion_1 = require("./00-ClasePublicacion");
var _00_ClasePublicacion_2 = require("./00-ClasePublicacion");
var _00_ClaseCliente_1 = require("./00-ClaseCliente");
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
//------------------Creacion de Clientes--------------------
var FerFrias = new _00_ClaseCliente_1.Cliente("Fernando", "Frias", 28676721, "Maria Elena Walsh 5180", ["H. P. Lovecraft", "Nestor Quadri"], ["Novela de ciencia ficción", "Tecnico"], 15, false);
var LiliHerrera = new _00_ClaseCliente_1.Cliente("Liliana", "Herrera", 26560968, "Las Aljabas 402", ["GARCÍA MÁRQUEZ, GABRIEL", "Dain Heer"], ["Autoayuda"], 30, true);
//------------------Prueba Metodos de Cliente------------------------------------
console.log("------------------------------------------------------------------------------------");
console.log("-Prueba Metodos de Cliente Fernando Frias");
console.log(">Metodo Get Nombre :" + FerFrias.getNombre());
console.log(">Metodo Get Apellido :" + FerFrias.getApellido());
console.log(">Metodo Get DNI :" + FerFrias.getDNI());
console.log(">Metodo Get Direccion :" + FerFrias.getDireccion());
console.log(">Metodo Get Autores Preferidos: " + FerFrias.getDelListadoAutoresPreferidos());
console.log(">Metodo Get Generos Preferidos: " + FerFrias.getDelListadoGenerosPreferidos());
console.log(">Metodo Get Publicaciones Adquiridas :" + FerFrias.getPublicacionesAdquiridasDelCliente());
console.log(">Metodo Get Descuento General :" + FerFrias.getDescuentoGeneral());
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
//------------------Prueba Metodos de Libreria------------------------------------
console.log("------------------------------------------------------------------------------------");
console.log("-Prueba Metodos de Libreria");
console.log("---------->Metodo cargar publicacion al listado - se crea una nueva publicacion -revista Lupin- y se agrega con: 'ingresarPublicacionAlCatalogo' ");
var Lupin = new _00_ClasePublicacion_2.Revista("Lupin", "Héctor Mario Sídoli", 500, 45, 1969);
CodiceLibros.ingresarPublicacionAlCatalogo(Lupin);
console.log("---------->Metodo para mostrar los las publicaciones por cliente de FerFrias: 'getListadoDePublicacionesPorCliente' (arroja array vacio) ");
console.log(CodiceLibros.getListadoDePublicacionesPorCliente(FerFrias));
console.log("---------->Metodo vender publicacion Lupin y Dune a FerFrias: 'venderPublicacionAlCliente' ");
CodiceLibros.venderPublicacionAlCliente(Lupin, FerFrias);
CodiceLibros.venderPublicacionAlCliente(Dune, FerFrias);
console.log("---------->Metodo para mostrar los las publicaciones por cliente de FerFrias: 'getListadoDePublicacionesPorCliente' (ahora deberia arrojar elementos) ");
console.log(CodiceLibros.getListadoDePublicacionesPorCliente(FerFrias));
console.log("---------->Metodo para mostrar el precio de una publicacion con y sin descuento, y considerando el cliente: LiliHerrera y libro Dune 'getPrecioPublicacionPorCliente' ");
CodiceLibros.getPrecioPublicacionPorCliente(Dune, LiliHerrera);
console.log("---------->Metodo para chequear si el cliente posee un libro adquirido: LiliHerrera y libro El señor de los anillos & FerFrias con revista Lupin 'checkPublicacionAdquiridaPorCLiente' ");
CodiceLibros.checkPublicacionAdquiridaPorCLiente(ElSenorDeLosAnillos, LiliHerrera);
CodiceLibros.checkPublicacionAdquiridaPorCLiente(Lupin, FerFrias);
var InstalacionesDeAireAcondicionadoYcalefacción = new _00_ClasePublicacion_1.Libro("Instalaciones de Aire Acondicionado y Calefacción", "Nestor Quadri", 5200, 384, "En esta nueva edición hemos efectuado una renovación general, para ajusfarlo en forma didáctica a los nuevos sistemas, equipamientos y técnicas de montaje desarrolladas durante estos últimos años, con el mismo propósito inicial, para que siga constituyendo como hasta ahora el libro de texto básico de consulta por parte de profesionales, técnicos o estudiantes y sea además, el portal de entrada para aquellos que quieran iniciarse en esta apasionante especialidad.Se efectúa una descripción global de las instalaciones, con ejemplos de aplicación simples y claros. Se tratan un sinnúmero de temas, entre los que se pueden mencionar los equipos de aire acondicionado individuales, roof-top y compactos, separados, split o multisplit, (VRV). Sistemas de volumen variable. (VAV). Unidades enfriadoras de agua y fan-coil. Instalaciones de calefacción de agua caliente por radiadores o pisos radiantes o aire caliente, así como de ventilación mecánica.Por otra parte, del mismo autor y como complemento", "Tecnico");
console.log("---------->Se agrega una nueva publicacion al stock de la libreria: Libro Tecnico  'Instalaciones de Aire Acondicionado y Calefacción' 'ingresarPublicacionAlCatalogo' ");
CodiceLibros.ingresarPublicacionAlCatalogo(InstalacionesDeAireAcondicionadoYcalefacción);
console.log("---------->Se muestra el Catalogo completo de la Libreria 'mostrarPublicacionesDelCatalogo' ");
CodiceLibros.mostrarPublicacionesDelCatalogo();
console.log("---------->El Metodo muestra si a un cliente le gusta un determinado Libro: ferFrias con el Libro 'Instalaciones de Aire Acondicionado y Calefacción' 'gustaAlClienteLibro' ");
CodiceLibros.gustaAlClienteLibro(InstalacionesDeAireAcondicionadoYcalefacción, FerFrias);
