/**
 * Created by Dell on 2016/12/6.
 * create Object in constructor function mode
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayName = function () {
        console.log(this.name);
    };
}

var person1 = new Person('Jackdon', 24, 'xxx worker');
var person2 = new Person('Micknod', 25, 'xxx worker');

console.log('person1:' + JSON.stringify(person1));
console.log('person2:' + JSON.stringify(person2));

console.log(person1.constructor == Person); // true
console.log(person2.constructor == Person); // true
