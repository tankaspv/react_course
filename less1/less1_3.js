// Необходимо написать иерархию классов вида:
// Human -> Employee -> Developer
// Human -> Employee -> Manager
// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
// У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
// У класса Employee должны присутствовать параметры: salary (число), department (строка)
// В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
// В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
// Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), 
// это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.
class Human {
    constructor(name, age, dateOfBirth) {
      this.name = name;
      this.age = age;
      this.dateOfBirth = dateOfBirth;
    }
    displayInfo() {
      return this.name + ' ' + this.age + ' ' + this.dateOfBirth;
    }
}
  
class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
      super(name, age, dateOfBirth);
      this.salary = salary;
      this.department = department;
    }
    displayInfo(){
      return super.displayInfo() + ' ' + this.salary + ' ' + this.department;
    }
}
  
class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
      super (name, age, dateOfBirth, salary, department);
      this.developers = [];
    }
    addDeveloper(developer) {
      this.developers.push(developer);
    }
    delDeveloper(developer) {
      let id = this.developers.indexOf(developer);
      this.developers.splice(id);
    }
}
  
class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
      super (name, age, dateOfBirth, salary, department);
      this.manager = '';
    }
    addManager(manager) {
      this.manager = manager;
    }
}
  
// Проверки
let myHuman = new Human('Mike', 32, '16.04.1987');
console.log(myHuman.displayInfo());

let myEmployee = new Employee('Maria', 30, '10.01.1989', 1000, 'IT');
console.log(myEmployee.displayInfo());

let myManager = new Manager('Alex', 35, '10.01.1984', 2000, 'Analytics');
console.log(myManager.displayInfo());

myManager.addDeveloper('Max');
myManager.addDeveloper('Vasily');
myManager.addDeveloper('Ivan');
console.log(myManager.developers);

myManager.delDeveloper('Ivan');
console.log(myManager.developers);

let myDeveloper = new Developer('Ivan', 30, '10.01.1989', 1500, 'Developers');
console.log(myDeveloper.displayInfo());

myDeveloper.addManager('Manager1');
console.log(myDeveloper.manager);