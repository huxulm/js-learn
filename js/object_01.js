/**
 * Created by Dell on 2016/12/6.
 * in Factory mode
 */

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    
    o.sayName = function () {
      console.log(this.name);
    };

    return o;
}

var person1 = createPerson('Jackdon', 24, 'xxx worker');

var person2 = createPerson('Micknods', 25, 'xxx worker');
console.log('person1:' + JSON.stringify(person1));
console.log('person1:' + JSON.stringify(person2));



