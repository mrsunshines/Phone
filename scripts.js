function Phone(brand, price, color, model) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.model = model;
}
Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', priced at ' + this.price + '. As well is known as ' + this.model + '. ');
};
var	SGS6 = new Phone('Samsung', 3500, 'white', 'Samsung Galaxy S6'),
	iPhone6s = new Phone('Apple', 'Waaay too much', 'white', 'iPhone 6S' ),
	OPO = new Phone('OnePlus', 1500, 'black', 'OnePlus One');

SGS6.printInfo();
iPhone6s.printInfo();
OPO.printInfo();