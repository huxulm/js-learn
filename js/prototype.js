/**
 * Created by Dell on 2016/12/7.
 * "extends" in javascript
 */
// super type
function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function () {
    return this.name;
};

function Cat(nick) {
    this.nick = nick;
}

// Cat extends Animal
Cat.prototype = new Animal('cat');

Cat.prototype.getNick = function () {
    return this.nick;
};

var myCat = new Cat('Jack\'s cat');

console.log(myCat.getName());
console.log(myCat.getNick());






