import { Publicacion } from "./00-ClasePublicacion"

export class Cliente {
  private nombre: string;
  private apellido: string;
  private dni: number;
  private direccion: string;
  private listadoAutoresPreferidos: string[] = [];
  private listadoGenerosPreferidos: string[] = [];
  //-----------Parametros extra para cumplir consigna----------------
  private listadoPublicacionesAdquiridas: Publicacion[] = [];
  private descuentoGeneral: number;
  private esClienteExigente: boolean;


  public constructor(paramNombre: string, paramApellido: string, paramDNI: number, paramDireccion: string, paramAutoresPreferidos: string[], paramGenerosPreferidos: string[], paramDescuentoGeneral: number, paramEsClienteExigente:boolean) {

    this.nombre = paramNombre
    this.apellido = paramApellido
    this.dni = paramDNI
    this.direccion = paramDireccion
    this.listadoAutoresPreferidos = paramAutoresPreferidos
    this.listadoGenerosPreferidos = paramGenerosPreferidos
    this.descuentoGeneral = paramDescuentoGeneral
    this.esClienteExigente = paramEsClienteExigente
  }

  public setNombre(paramNombre: string) {
    this.nombre = paramNombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setApellido(paramApellido: string) {
    this.apellido = paramApellido;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setDNI(paramDNI: number) {
    this.dni = paramDNI;
  }

  public getDNI(): number {
    return this.dni;
  }

  public setDireccion(paramDireccion: string) {
    this.direccion = paramDireccion;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public setListadoAutoresPreferidos(paramAutorPreferido: string) {
    this.listadoAutoresPreferidos.push(paramAutorPreferido);
  }

  public getListadoAutoresPreferidos(): string[] {
    return this.listadoAutoresPreferidos;
  }

  public setListadoGenerosPreferidos(paramGeneroPreferido: string) {
    this.listadoGenerosPreferidos.push(paramGeneroPreferido);
  }

  public getListadoGenerosPreferidos(): string[] {
    return this.listadoGenerosPreferidos;
  }

  public setDescuentoGeneral(paramDescuentoGeneral: number) {
    this.descuentoGeneral = paramDescuentoGeneral;
  }

  public getDescuentoGeneral(): number {
    return this.descuentoGeneral;
  }


  public setPublicacionAlListadoCliente(paramPublicacion: Publicacion) {
    this.listadoPublicacionesAdquiridas.push(paramPublicacion);
  }

  public borrarPublicacionDelListadoCliente(paramPublicacion: Publicacion) {
    for (let i: number = 0; i < this.listadoPublicacionesAdquiridas.length; i++) {
      if (paramPublicacion.getNombre() === this.listadoPublicacionesAdquiridas[i].getNombre()) {
        this.listadoPublicacionesAdquiridas.splice(i, 1);
        console.log("Publicacion desechada " + paramPublicacion.getNombre());
      } else {
        console.log("No se ha encontrado la publicacion ");
      }
    }
  }

  public getPublicacionesAdquiridasDelCliente() {
    return this.listadoPublicacionesAdquiridas;
  }

  public setEsClienteExigente(paramClienteExigente: boolean) {
    this.esClienteExigente = paramClienteExigente;
  }

  public getEsClienteExigente(): boolean{
    return this.esClienteExigente;
  }

}