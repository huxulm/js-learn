// Thenable throws before callback
// Promise rejects
var thenable = {
	then : function (resolve) {
		throw new TypeError("Throwing");
		resolve("Resolving");
	}
};

var p = Promise.resolve(thenable);

p.then(function (v) {
	// not called?
}, function (e) {
	console.log(e);
});