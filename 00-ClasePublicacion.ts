export class Publicacion {
  private nombre: string
  private autor: string
  private precio: number

  public constructor(paramNombre: string, paramAutor: string, paramPrecio: number) {

    this.nombre = paramNombre
    this.autor = paramAutor
    this.precio = paramPrecio
  }

  public setNombre(paramNombre: string) {
    this.nombre = paramNombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setAutor(paramAutor: string) {
    this.autor = paramAutor;
  }

  public getAutor(): string {
    return this.autor;
  }

  public setprecio(paramPrecio: number) {
    this.precio = paramPrecio;
  }

  public getPrecio(): number {
    return this.precio;
  }
}

//--------------------------------------------------------------------------------------------------------
export class Revista extends Publicacion {
  private unNumero: number
  private anio: number

  public constructor(paramNombre: string, paramAutor: string, paramPrecio: number, paramUnNumero: number, paramAnio: number) {
    super(paramNombre, paramAutor, paramPrecio)

    this.unNumero = paramUnNumero
    this.anio = paramAnio
  }

  public setUnNumero(paramUnNumero: number) {
    this.unNumero = paramUnNumero;
  }

  public getUnNumero(): number {
    return this.unNumero;
  }

  public setAnio(paramAnio: number) {
    this.anio = paramAnio;
  }

  public getAnio(): number {
    return this.anio;
  }
}



//--------------------------------------------------------------------------------------------------------
export class Libro extends Publicacion {

  private cantPaginas: number
  private resumen: string
  private generoLiterario: string

  public constructor(paramNombre: string, paramAutor: string, paramPrecio: number, paramCantPaginas: number, paramResumen: string, paramaGeneroLiterario: string) {
    super(paramNombre, paramAutor, paramPrecio)

    this.cantPaginas = paramCantPaginas
    this.resumen = paramResumen
    this.generoLiterario = paramaGeneroLiterario
  }

  public setCantidadPaginas(paramCantPaginas: number) {
    this.cantPaginas = paramCantPaginas;
  }

  public getCantidadPaginas(): number {
    return this.cantPaginas;
  }

  public setResumen(paramResumen: string) {
    this.resumen = paramResumen;
  }

  public getResumen(): string {
    return this.resumen;
  }

  public setGeneroLiterarion(paramGeneroLiterario: string) {
    this.generoLiterario = paramGeneroLiterario;
  }

  public getGeneroLiterario(): string {
    return this.generoLiterario;
  }
}