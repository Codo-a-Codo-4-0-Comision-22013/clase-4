import Animal from "./animal.js";

export default class Perro extends Animal {
    constructor(nombre, raza, edad) {
        super(nombre, edad);
        this.raza = raza;
    }
    ladrar() {
        return `${this.name} esta ladrando`;
    }

}