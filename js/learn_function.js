function Product(name, price) {
    this.name = name;
    this.price = price;
    
    if (price < 0) {
        throw RangeError('Can\'t create product ' + this.name + ' with a negative price.');
    }
}

function Food(name, price) {
    this.name = name;
    this.price = price;
    if (price < 0) {
        throw RangeError('Can\'t create product ' + this.name + ' with a negative price.');
    }
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}

var cheese = new Food('hanberger', 100);
var fun = new Toy('Robot', 2003);

console.log(cheese);
console.log(fun);