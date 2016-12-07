/**
 * Created by Dell on 2016/12/8.
 */
'use strict';
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'green', 'blue'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);  
};

var instance1 = new SubType(" Nicholas", 29);
instance1.colors. push(" black");
console.log(instance1.colors); //"red, blue, green, black"
instance1.sayName();
instance1.sayAge();
