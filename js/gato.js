export default class Gato {
    constructor(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getRaza() {
        return this.raza;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    toString() {
        return "Nombre: " + this.nombre + ", Edad: " + this.edad + ", Raza: " + this.raza;
    }
}