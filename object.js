// leanig about object and array
// define both object and array 
// Exercise 1: Object Creation and Property Access

// Task: Create an object named product with the following properties:
// - id: a unique identifier (number)
// - name: the name of the product (string)
// - price: the price of the product (number)
const product = {
    id: 1,
    name: "Laptop",
    price: 1200
};

// Output: Print the product's name and price in a formatted string
console.log(`The product ${product.name} costs $${product.price}.`);
// types of properties
// Output: Print the type of each property
console.log("Type of id:", typeof product.id); // number        

// what is object ,properties and how to access them
console.log("Type of name:", typeof product.name); // string
console.log("Type of price:", typeof product.price); // number          
//what is value and key in object

product.price = 1000;

//1. setting up the object example
//2. Accessing object properties
//3. Modifying object properties
//4. Adding new properties to an object
product.category = "Electronics"; // Adding a new property 'category' to the product object 
console.log("Updated product object:", product); // Display the updated product object with the new category property
//5. Deleting properties from an object
delete product.category; // Removing the 'category' property from the product object
console.log("Product object after deletion:", product); // Display the product object after deleting the category property

//6. Iterating over object properties
console.log("Iterating over product properties:"); {
    id = 1;
    name = "Laptop";
    price = 1200;
    category = "Electronics";
}
// factory function to create multiple product objects 
function User(name) {
    this.name = name;

}
const u = new User("Shadia");
console.log(u.name); // Output: Shadia
// destructuring objects
const user = { 
    name: "Shadia",
    age: 30,
    address: { city: "Kigali" } 
};
        const { name, age, address: { city } } = user; //nestered destructuring to extract city from address
        console.log(name); // Output: Shadia
        console.log(age); // Output: 30
        console.log(city); // Output: Kigali

        // example of spread operator to create a new object with additional properties
const updatedUser = { ...user, email: "shadia@example.com" };
console.log("Updated user object:", updatedUser);
    

const original = {nested: { a: 1, b: 2 }};
const copy = original;
copy.nested.a = 99; // Modifying the nested object through the copy reference   
console.log("original.nested.value:", original.nested.a); // Output: 99 (shows that original is affected due to reference assignment)

// REST PARAMETERS
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9
 
//template literals
const productName = "Laptop";
const productPrice = 1200;
console.log(`The product ${productName} costs $${productPrice}.`); // Output: The product Laptop costs $1200.


//what is a dynamic part and its use
// it s a part of the string that can change based on variables or expressions, allowing for more flexible and readable code. In the example above, ${productName} and ${productPrice} are dynamic parts that will be replaced with the actual values of the variables when the string is evaluated. This makes it easier to create complex strings without having to concatenate multiple parts together.
 /* 6. map, reduce, filter, sort, reverse, find, findIndex, includes, indexOf, lastIndexOf, some, every, flat, flatMap, forEach, etc. are all array methods that allow you to manipulate and analyze arrays in various ways. They are essential tools for working with arrays in JavaScript and can help you perform tasks such as transforming data, filtering elements, sorting items, and more. Each method serves a specific purpose and can be used to achieve different results based on your needs.
  if we take arry.pam it will return a new array with the results of calling a provided function on every element in the calling array. For example, if you have an array of numbers and you want to create a new array with each number squared, you can use the map() method like this:
*/
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]
//jason format
const jsonString = '{"name": "Shadia", "age": 30}';
const jsonObject = JSON.parse(jsonString); // Convert JSON string to JavaScript object
console.log(jsonObject.name); // Output: Shadia
const newJsonString = JSON.stringify(jsonObject); // Convert JavaScript object back to JSON string
console.log(newJsonString); // Output: {"name":"Shadia","age":30}

//how jason type.<stringify and parse work
// JSON.stringify() converts a JavaScript object into a JSON string. This is useful for sending data to a server or storing it in a file. For example:
const user2 = { name: "Shadia", age: 30 };
const jsonStringified = JSON.stringify(user2);
console.log(jsonStringified); // Output: {"name":"Shadia","age":30}
// JSON.parse() converts a JSON string back into a JavaScript object. This is useful for receiving data from a server or reading it from a file. For example:
const jsonStringToParse = '{"name": "Shadia", "age": 30}';
const parsedObject = JSON.parse(jsonStringToParse);
console.log(parsedObject.name); // Output: Shadia







