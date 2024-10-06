// Fruits Function

var apple = new Fruit("Apple", "Red", 100);

function Fruit(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

console.log(apple);


// Vegetables Function

var carrot = new Vegetable("Carrot", "Root", 50);

function Vegetable(name, category, price) {
  this.name = name;
  this.category = category;
  this.price = price;
}

console.log(carrot);


// Dress Function

var shirt = new Dress("Shirt", "Levis", 2000, "Large");

function Dress(name, brand, price, size) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.size = size;
}

console.log(shirt);


// Makeup Function

var lipstick = new Makeup("Lipstick", "Maybelline", 500, "Matte");

function Makeup(name, brand, price, type) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.type = type;
}

console.log(lipstick);


// Slipper Function

var sandal = new Slipper("Sandal", "Bata", 800, 9);

function Slipper(name, brand, price, size) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.size = size;
}

console.log(sandal);
