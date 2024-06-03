// named export
// export let apiKey = "testApiKey"; 

// default export
// export default "testApiKey";  

// can have multiple named exports, but just one default export 
export default "testApiKey";
export let abc = "abc";
export let test = "test";

// It is possible to export functions too, which is what we mostly do in React

//---------------------------------------------------------------------
//---------------------------------------------------------------------
// --------------------------------------------------------------------

// functions
const testFunction = () => {
  return "testValue";
};

export { testFunction };

export let singleLineFunction = (userName) => "Hello " + userName;

// ----------------------------------------------------------------------------
// objects
export const user = {
  name: "Emmanuel",
  age: 34,
  greet() {
    return "Hello " + this.name;
  },
};

// ----------------------------------------------------------------------------
// classes (rarely used)
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet = () => {
    return "Hello " + this.name;
  };
}

// ----------------------------------------------------------------------------
// Arrays and array functions
export let hobbies = ["Cricket", "Football"];
hobbies.push("Reading");
export const hobbyRatings = hobbies.map(
  (hobby) => hobby + ": Rating = " + Math.floor(Math.random() * 10, 2)
);

// ----------------------------------------------------------------------------
// Destructuring - array
// Old way
const userArray = ["Arun", "S"];
export const firstNameOldWay = userArray[0];
export const lastNameOldWay = userArray[1];

// The above can be destructured as follows
export const [firstNameDes, lastNameDes] = ["Arun", "S"];

// ---------------------------------------------
// Destructuring Object
export const userObj = {
  name: "Arun S",
  age: 32,
};

// The above can be destructured as follows.
// Thing to keep in mind - the destructred name should be the same as the key name.
// We can also assign alias if we want
export const { destructuredName, destructuredAge: userAge } = {
  destructuredName: "Arun S Hariharan",
  destructuredAge: 33,
};

// ---------------------------------------------
// Destructuring - function params
// Consider the following function and function call.
export function storeOrder(order) {
  localStorage.setItem("id", order.id);
  localStorage.setItem("currency", order.currency);

  console.log(localStorage.getItem("id"));
  console.log(localStorage.getItem("currency"));
}

export let order = { id: 1, currency: "USD", amount: 54.99 };
storeOrder(order);

// In the above function, the param "order" can be destructured as follows
export function storeOrderDestructred({ id, currency, amount }) {
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
  localStorage.setItem("amount", amount);

  console.log(localStorage.getItem("id"));
  console.log(localStorage.getItem("currency"));
  console.log(localStorage.getItem("amount"));
}

export let newOrder = { id: 2, currency: "AUD", amount: 45.99 };
storeOrderDestructred(newOrder);
// can also be called as below
storeOrderDestructred({ id: 3, currency: "INR", amount: 2499.99 });

// ----------------------------------------------------------------------------
