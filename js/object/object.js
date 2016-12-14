/**
 * Created by Dell on 2016/12/14.
 */
// Using Object given undefined and null types
var obj1 = new Object();
var obj2 = new Object(undefined);
var obj3 = new Object(null);

console.log('obj1:' + JSON.stringify(obj1));
console.log('obj2:' + JSON.stringify(obj2));
console.log('obj3:' + JSON.stringify(obj3));

// Using Object to create Boolean objects
var obj4 = new Object(true);
var obj5 = new Boolean(true);

// equivalent to o = new Boolean(false);
var obj6 = new Object(Boolean());
var obj7 = new Boolean(false);