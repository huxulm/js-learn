'use strict';
(function testPromise() {

    // time out
    var to1;
    var to2;
    var to3;
    var to4;
    var to5;

    var startTime = Date.now();

    var $p1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({to: to1, rs: '$p1 resolved!'});
           console.log('to1: ' + Math.ceil(to1));
        }, (to1 = (Math.random()*2000 + 1000)));
    });

    var $p2 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({to: to2, rs: '$p2 resolved!'});
            console.log('to2: ' + Math.ceil(to2));
        }, (to2 = (Math.random()*2000 + 1000)));
    });

    var $p3 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({to: to3, rs: '$p3 resolved!'});
            console.log('to3: ' + Math.ceil(to3));
        }, (to3 = (Math.random()*2000 + 1000)));
    });

    var $p4 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({to: to4, rs: '$p4 resolved!'});
            console.log('to4: ' + Math.ceil(to4));
        }, (to4 = (Math.random()*2000 + 1000)));
    });

    var $p5 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({to: to5, rs: '$p5 resolved!'});
            console.log('to5: ' + Math.ceil(to5));
        }, (to5 = (Math.random()*2000 + 1000)));
    });

    Promise.all([$p1, $p2, $p3, $p4, $p5]).then(function (rs) {
       console.log("Results: " + JSON.stringify(rs || {})) ;
       console.log("Cost time: " + (Date.now() - startTime))
    });

    console.log("Timeout: " + Math.ceil((to1 + to2 + to3 + to4 + to5)));

})();

// Promise.all() 返回结果是有序的数组,结果顺序与传入的子promise顺序一致