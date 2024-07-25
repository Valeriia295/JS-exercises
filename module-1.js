//? Task 1

// const productName = "Droid"
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

//? Task 2

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = 3500;

//? Task 3

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

//? Task 4

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

//? Task 5

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//? Task 6

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee; //4850;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

//? Task 7

// function sayHi() {
//   console.log('Hello, this is my first function!')
// }

// sayHi()

//? Task 8

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//? Task 9

// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));  //52
// console.log(add(10, 20, 30));  //60
// console.log(add(5, 10, 15));  //30

//? Task 10

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }
// console.log(makeMessage("Radar", 6150));
// console.log(makeMessage("Scanner", 3500));
// console.log(makeMessage("Reactor", 8000));
// console.log(makeMessage("Engine", 4070));

//? Task 11

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

//? Task 12

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

//? Task 13
//? Task 14
//? Task 15
//? Task 16
//? Task 17
//? Task 17
//? Task 17
//? Task 17
//? Task 17
//? Task 17
//? Task 17
//? Task 17
//? Task 17
