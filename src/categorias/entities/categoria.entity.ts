export class Categoria {
  // CONSTRUCTOR:
  // método que se ejecuta al crear una instancia de la clase
  // sirve para dar valor inicial a un atributo
  constructor(id: number, nombre: string, estado: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.estado = estado;
  }

  id: number;
  nombre: string;
  estado: boolean;
}
