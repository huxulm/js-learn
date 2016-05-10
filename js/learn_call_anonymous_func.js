var animails = [{name: "cat", color: "Green"}, {name: "fish", color: "Red"}];
for (var i = 0; i < animails.length; i++) {
    var e = animails[i];
    (function (i) {
        this.say = function () {
            console.log('[INFO]' + i + ' I\'m a ' + this.name + ', my color is ' + this.color + '.');
        }
        this.say();
    }).call(e, i);
};

function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ');
    console.log(reply + '.');
}

var p = {
    person: 'Jackdon', role: 'JavaScript Developer'    
};

greet.call(p);