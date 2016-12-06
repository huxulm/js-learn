// Thenable throws after callback
// Promise resolves
var thenable = {
	then : function (resolve) {
		resolve("Resolving");
		throw new TypeError("Throwing");
	}
};

var p = Promise.resolve(thenable);

p.then(function (v) {
	console.log(v);
}, function (e) {
	// not called?
	console.log(e);
});