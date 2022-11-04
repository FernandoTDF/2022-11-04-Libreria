import { Publicacion } from "./00-ClasePublicacion";
import { Libro } from "./00-ClasePublicacion";
import { Revista } from "./00-ClasePublicacion";
import { Cliente } from "./00-ClaseCliente";

export class Libreria {
  private listadoDePublicaciones: Publicacion[];
  private listadoDeClientes: Cliente[];

  public constructor(paramListadoPublicaciones: Publicacion[], paramListadoClientes: Cliente[]) {
    this.listadoDePublicaciones = paramListadoPublicaciones;
    this.listadoDeClientes = paramListadoClientes;
  }

  //-------------- Referentes al Stock del Catalogo de la Libreria------------
  public mostrarPublicacionesDelCatalogo() {
    console.log(`A continuacion se muestran las Publicaciones en Stock:`)
    console.log(this.listadoDePublicaciones);
  }

  public ingresarPublicacionAlCatalogo(paramPublicacion: Publicacion): void {
    this.listadoDePublicaciones.push(paramPublicacion);
    console.log("Publicacion ingresada al Catalogo: " + paramPublicacion.getNombre());
  }

  public borrarPublicacionDelCatalogo(paramPublicacion: Publicacion): void {
    for (let i: number = 0; i < this.listadoDePublicaciones.length; i++) {
      if (paramPublicacion.getNombre() === this.listadoDePublicaciones[i].getNombre()) {
        this.listadoDePublicaciones.splice(i, 1);
        console.log("Publicacion eliminada del Catalogo: " + paramPublicacion.getNombre());
      } else {
        console.log("No se ha encontrado la Publicacion ");
      }
    }
  }


  //-------------- Referentes a Clientes de la Libreria------------

  public cargarClienteAlListado(paramCliente: Cliente) {
    this.listadoDeClientes.push(paramCliente);
    console.log("Cliente ingresado al listado de Clientes: " + paramCliente.getNombre() + " " + paramCliente.getApellido());
  }

  public borrarClienteDelListado(paramCliente: Cliente): void {
    for (let i: number = 0; i < this.listadoDeClientes.length; i++) {
      if (paramCliente.getNombre() === this.listadoDeClientes[i].getNombre()) {
        this.listadoDeClientes.splice(i, 1);
        console.log("Cliente eliminado del listado: " + paramCliente.getNombre());
      } else {
        console.log("No se ha encontrado el Cliente en el listado ");
      }
    }
  }

  public getListadoDePublicacionesPorCliente(paramCliente: Cliente) { //muestra todas las publicaciones adquiridas por cliente
    return paramCliente.getPublicacionesAdquiridasDelCliente();
  }

  public venderPublicacionAlCliente(paramPublicacion: Publicacion, paramCliente: Cliente) {
    paramCliente.setPublicacionAlListadoCliente(paramPublicacion);
    console.log(`Se ha vendido la publicacion ${paramPublicacion.getNombre()} del cliente ${paramCliente.getNombre()} y se ha agregado a su listado personal`)
  }

  public getPrecioPublicacionPorCliente(paramLibro: Publicacion, paramCliente: Cliente) {//muestra el precio de venta de una publicacion segun cada cliente
    //control de error
    
    if (paramCliente.getDescuentoGeneral() === 0 || paramCliente.getDescuentoGeneral() === undefined || paramCliente.getDescuentoGeneral() === null)
      throw new Error("este valor debe ser mayor a cero")

    console.log(`El precio de la publicacion ${paramLibro.getNombre()}es ${paramLibro.getPrecio()}. Para el cliente ${paramCliente.getNombre()}, el precio final es: ` + paramLibro.getPrecio() / (1 + (paramCliente.getDescuentoGeneral() / 100)) + "por tener un descuento del % " + paramCliente.getDescuentoGeneral())
  }

  public checkPublicacionAdquiridaPorCLiente(paramLibro: Publicacion, paramCliente: Cliente): boolean {//chequea si una publicacion esta en poder de un cliente
    let arregloPublicacionesCliente = paramCliente.getPublicacionesAdquiridasDelCliente();

    let publicacionEncontrada: boolean = false;
    let i: number = 0;

    while (i < arregloPublicacionesCliente.length && publicacionEncontrada === false) {

      if (paramLibro.getNombre() === arregloPublicacionesCliente[i].getNombre()) {
        publicacionEncontrada = true;
      } else {
        i++;
      }
    }

    if (publicacionEncontrada === true) {
      console.log(`La Publicacion ${paramLibro.getNombre()} esta entre las compras del Cliente ${paramCliente.getNombre()}`)
      return true;
    } else {
      console.log(`La Publicacion ${paramLibro.getNombre()} NO se encuentra entre las compras del Cliente ${paramCliente.getNombre()}`)
      return false;
    }
  }

  public gustaAlClienteLibro(paramLibro: Libro, paramCliente: Cliente) {//expresa si a un cliente le gusta o no una publicacion segun si es Exigente o no

    let libroAgradoDelCliente: boolean = false;

    switch (paramCliente.getEsClienteExigente()) {
      case false: //caso para cliente no exigente

        for (let i: number = 0; i < paramCliente.getDelListadoAutoresPreferidos().length; i++) {
          if (paramCliente.getDelListadoAutoresPreferidos()[i] === paramLibro.getAutor()) {
            libroAgradoDelCliente = true;
          }
        }
        break;

      case true: //caso para cliente exigente

        for (let i: number = 0; i < paramCliente.getDelListadoAutoresPreferidos().length; i++) {
          if ((paramCliente.getDelListadoAutoresPreferidos()[i] === paramLibro.getAutor()) && (paramCliente.getDelListadoGenerosPreferidos()[i] === paramLibro.getGeneroLiterario())) {
            libroAgradoDelCliente = true;
          }
        }
        break;
    }

    if (libroAgradoDelCliente === true) {
      console.log(`Al cliente ${paramCliente.getNombre()} le gusta el libro ${paramLibro.getNombre()}`)
    } else {
      console.log(`Al cliente ${paramCliente.getNombre()} NO le gusta el libro ${paramLibro.getNombre()}`)
    }
  }
}