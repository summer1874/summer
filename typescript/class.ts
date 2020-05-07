class Animal  {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

const snanke = new Animal('lily')

console.log(snanke.run())
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}