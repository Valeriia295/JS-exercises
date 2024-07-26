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

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//? Task 13

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

//? Task 14

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

//? Task 15

// function checkStorage(available, ordered) {
//   let message;
//   if (available > ordered) {
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }

//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

//? Task 16

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//? Task 17

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;

//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//     }

//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

//? Task 18

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//? Task 19

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (available < ordered) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

//? Task 20

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

//? Task 21

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip";

//   return canAccessContent;
// }

// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

//? Task 22

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

//? Task 23

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

//? Task 24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

//? Task 25

// function checkStorage(available, ordered) {
//   let message;

//   message =
//     ordered > available ? "Not enough goods in stock!": "The order is accepted, our manager will contact you";

//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//? Task 26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//     message =
//     password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }

// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");

//? Task 27

// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }

//   return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

//? Task 28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   switch (password) {
//     case password === null:
//       message = "Canceled by user!";
//       break;

//     case password === ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   return message;
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

//? Task 29

// function getShippingCost(country) {
//     let message;

//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;

//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;

//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;

//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }

// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

//? Task 30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }

// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

//? Task 31

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//? Task 32

// function getSubstring(string, length) {
//   const substring = string.slice(string, length);

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

//? Task 33

// function formatMessage(message, maxLength) {
//   let result;

//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(message, maxLength) + "...";
//   }
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

//? Task 34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }

// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("Big SALE");

//? Task 35

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }

// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");

//? Task 36

// function checkForSpam(message) {
//   let result;

//   message = message.toLowerCase();
//   if (message.includes("spam") || message.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }

// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");
