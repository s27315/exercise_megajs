// Exercise 1: Array Initialization and Property Access

// Task: Create an array named productCategories with at least 5 string values
const productCategories = ["Electronics", "Books", "Clothing", "Home & Garden", "Sports"];

// Output: Print the first element
console.log("First element: " + productCategories[0]);

// Output: Print the last element without hardcoding the index (use .length)
console.log("Last element: " + productCategories[productCategories.length - 1]);

// Output: Print the total number of elements
console.log("Total number of elements: " + productCategories.length);

// Change the value of the second element to a new string
productCategories[1] = "Digital Media";

// Output: Print the array after the modification
console.log("Array after modification: " + productCategories);
console.log("Modified array (formatted): ");
console.log(productCategories);
