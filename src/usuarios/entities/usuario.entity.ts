export class Usuario {
  // CONSTRUCTOR:
  // método que se ejecuta al crear una instancia de la clase
  // sirve para dar valor inicial a un atributo
  constructor(
    id: number,
    nombre: string,
    correo: string,
    contraseña: string,
    estado: boolean,
    fecharegistro: Date,
    rol_id: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
    this.estado = estado;
    this.fecharegistro = fecharegistro;
    this.rol_id = rol_id;
  }

  id: number;
  nombre: string;
  correo: string;
  contraseña: string;
  estado: boolean;
  fecharegistro: Date;
  rol_id: number;
}
