/**
 * Created by Dell on 2016/12/14.
 */
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property.
// Syntax: obj.hasOwnProperty(prop)

var obj = {prop: 'prop_value'};

console.log('hasOwnProperty\t' + Object.prototype.hasOwnProperty.call(obj, 'prop_'));    // will be false
console.log('hasOwnProperty\t' + Object.prototype.hasOwnProperty.call(obj, 'prop'));     // will be true

var obj1 = new Object();
obj1.prop = 'exists';

console.log('obj1.hasOwnProperty\t' + obj1.hasOwnProperty('prop'));   // true
console.log('obj1.hasOwnProperty\t' + obj1.hasOwnProperty('hasOwnProperty'));   // false
console.log('obj1.hasOwnProperty\t' + obj1.hasOwnProperty('toString'));   // false

// Iterating over the properties of an object

var buz = {
  fog : 'stack',
};

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
    } else {
        // toString or something else
        console.log(name);
    }
};

// Using hasOwnProperty as a property name
var foo = {
  hasOwnProperty : function () {
    return false;
  },
  bar : 'Here is bar!'
};

console.log('foo.hasOwnProperty()\t', foo.hasOwnProperty('bar'));   // always be false
console.log('foo.hasOwnProperty()\t', ({}).hasOwnProperty.call(foo, 'bar'));  // true
console.log('foo.hasOwnProperty()\t', Object.prototype.hasOwnProperty.call(foo, 'bar'));  // true
