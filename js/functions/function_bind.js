/**
 * Function构造函数创建一个新的Function对象。在JavaScript中，每个函数实际上都是一个Function对象。
 * Created by xulingming on 2017/6/5.
 */

// Function.prototype.bind()
// The bind() method creates a new function that, when called, has its this keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.

function TestBind() {
    var module = {
        x: 81,
        getX: function() { return this.x; }
    };

    console.log(module.getX()); // 81

    var retrieveX = module.getX;
    console.log(retrieveX.call(this));
    // returns 9 - The function gets invoked at the global scope

    // Create a new function with 'this' bound to module
    // New programmers might confuse the
    // global var x with module's property x
    var boundGetX = retrieveX.bind(module);
    console.log(boundGetX()); // 81
}

TestBind.call({x: 9});  // x is 'global' in TestBind

