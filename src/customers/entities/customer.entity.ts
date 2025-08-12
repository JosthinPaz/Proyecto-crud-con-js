export class Customer {

//CONSTRUCTOR:
//metodo(funcion) que se ejecuta al crear una instancia de la clase
//sirve para: dar valor inicial a un atributo
    constructor(id: number, name: string, lastname: string, birthDate: Date, isActive: boolean, description: string) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthDate = new Date(birthDate);
        this.isActive = isActive;
        this.description = description;
    }


    id: number;
    name: string;
    lastname: string;
    birthDate: Date;
    isActive: boolean;
    description: string;
}
