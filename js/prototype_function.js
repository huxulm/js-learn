/**
 * Created by Dell on 2016/12/14.
 */
var dateVar = new Date();

console.log(Object.prototype.toString.call(dateVar));

function Person(name) {
    this.name = name;
}

Person.prototype.toString = function () {
    return '[object Person]';
};

var personVar = new Person('Jackdon');

console.log(Object.prototype.toString.call(personVar));
console.log(Person.prototype.toString.call(personVar));
