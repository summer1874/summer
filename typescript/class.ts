class Animal  {
  // public 表示公有属性或方法
  // protected 该类只允许被继承
  // readonly 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。
  // static 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
  // <public | protected | readonly | static> name: string
  name: string
  static category: string[] = ['poikilotherm', 'mammal']
  static isAnimal(animalName){
    return animalName instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}



class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
class Cat extends Animal {
	constructor(name) {
		super(name) // 使用 super 调用父类方法
		console.log(this.name)
	}
	run() { // 重写run，不会影响父类
		return 'Meow ' + super.run()
	}
}
const snanke = new Animal('🐍')
const shibaInu = new Dog('🐕')
const americanShorthair = new Cat('🐱')
console.log(americanShorthair.name)
console.log(snanke.run())
console.log(shibaInu.run(), shibaInu.bark())
console.log(americanShorthair.run())
console.log(Animal.category)
console.log(Animal.isAnimal(shibaInu))

