export default class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
       return `${this.name} makes a noise.`;
    }
}