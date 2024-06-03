// named import
// import { apiKey, abc } from "./util";

// named import using "as"
// import { apiKey as localKey } from "./util";

// default import - can give any name you want if defautl export doesn't have a name
// import apiKey from "./util";


// import everything from a file
import * as util from "./util";

console.log(util.default);
console.log(util.abc);
console.log(util.test);

// arrow functions with multiple params
let concatenateWords = (a,b) => {
  return a + b;
}
console.log(concatenateWords(util.default, util.abc)); // testApiKeyabc

// arrow functions with a single param
let doubledValue = inputNumber => {
  return inputNumber * 2;
}
console.log(doubledValue(2)); // 4

// arrow functions with a single param and single return line can be written as below 
let doubledValue2 = inputNumber => inputNumber * 2;
console.log(doubledValue2(2)); // 4

/* Special case: Just returning an object
If you go for the shorter alternative explained and you're trying to return a JavaScript object, you may end up with the following, invalid code:

    number => { age: number }; // error trying to return an object

This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

    number => ({ age: number }); // wrapping the object in extra parentheses
*/

let someObject = () => ({age: 23});
console.log(someObject());  // Object { age: 23 }

//==================================================================================================================
//==================================================================================================================
//==================================================================================================================

console.log(util.abc);
console.log(util.default);
console.log(util.testFunction());
console.log(util.singleLineFunction("test"));
console.log(util.user);
console.log(util.user.greet());

// ----------------------------------------------------------------------------
// Objects
let user = new util.User("Emma", 23);
console.log(user.greet());

// Arrays
console.log(util.hobbies[0]);
util.hobbies.forEach((hobby) => console.log(hobby));

util.hobbies.map((item) => {
  item.includes("e")
    ? console.log(item + " contain the letter e")
    : console.log(item + " does not contain the letter 'e'");
});

console.log(util.hobbyRatings);

// ----------------------------------------------------------------------------
// Destructuring
console.log(util.firstNameOldWay);
console.log(util.lastNameOldWay);

console.log(util.firstNameDes);
console.log(util.lastNameDes);

console.log(util.userObj.name);
console.log(util.userObj.age);

console.log(util.destructuredName);
console.log(util.userAge);

util.storeOrder(util.order);
util.storeOrderDestructred(util.newOrder);
util.storeOrderDestructred({ id: 3, currency: "INR", amount: 2499.99 });

// ----------------------------------------------------------------------------

