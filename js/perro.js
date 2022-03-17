export default class Perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    ladrar() {
        return `${this.nombre} esta ladrando`;
    }

}