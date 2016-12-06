var thenable1 = {
	then: function (resolve) {
		var msg = "/promise 1";
		// console.log(msg);
		resolve(msg);
	}
};

var thenable2 = {
	then: function (resolve) {
		resolve(thenable1);
	}
};

var thenable3 = {
	then: function (resolve) {
		resolve(thenable2);
	}
};

var promise = Promise.resolve(thenable3);

var result = promise.then(function (v) {
	console.log('>>>promise 1')
	console.log(v);
	return v;
}).then(function (v) {
	console.log('>>>promise 2');
	v = v + '/promise2';
	console.log(v);
	return v;
}).then(function (v) {
	console.log('>>>promise 3');
	v = v + '/promise3';
	console.log(v);
	setTimeout(function() {
		console.log('--->' + v);
	}, 3000);
	return v;
});

console.log('>>>result:' + JSON.stringify(result));