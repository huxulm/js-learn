/**
 * Created by Dell on 2016/12/7.
 */
'use strict';

function SuperType() {
    this.colors = ['red', 'green', 'blue'];
}

function SubType() {
    // extends SuperType
    SuperType.call(this);
}

var instance1 = new SubType();
console.log(instance1.colors);

instance1.colors.push('black');
console.log(instance1.colors);