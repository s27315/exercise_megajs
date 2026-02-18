// JavaScript Arrays Mega Exercise: Smart Warehouse Inventory Analyzer

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Desk", price: 300 },
  { id: 4, name: "Chair", price: 150 }
];

const warehouse = [
  [1, 2, 3],
  [4, 1, 2],
  [3, 4, 1]
];

function analyzeWarehouse(products, warehouse) {
  // ========== STEP 1: FLATTEN THE MATRIX ==========
  // The warehouse is a 2D array (3x3 grid). We use .flat() to convert it into a single array
  // Example: [[1,2,3], [4,1,2], [3,4,1]] becomes [1,2,3,4,1,2,3,4,1]
  const flattenedWarehouse = warehouse.flat();
  console.log("Flattened warehouse:", flattenedWarehouse);

  // ========== STEP 2: USE NESTED LOOPS ==========
  // Initialize variables to track total items and their value
  let totalItemsStored = 0  // Counter for all items in warehouse
  let totalInventoryValue = 0; // Sum of all product prices in warehouse

  // Outer loop: goes through each row of the warehouse
  for (let i = 0; i < warehouse.length; i++) {
    // Inner loop: goes through each cell (column) in the current row
    for (let j = 0; j < warehouse[i].length; j++) {
      // Get the product ID from the current cell
      const productId = warehouse[i][j];

      // Count this item
      totalItemsStored++;
      
      // Find the product details by matching the ID
      const product = products.find(p => p.id === productId);
      
      // If product found, add its price to the total inventory value
      if (product) {
        totalInventoryValue += product.price;
      }
    }
  }
  console.log("Total items stored:", totalItemsStored); // Should be 9
  console.log("Total inventory value:", totalInventoryValue); // Should be $2800


  // ========== STEP 3: COUNT PRODUCT FREQUENCY ==========
  // Create an empty object to store how many times each product ID appears
  const productFrequency = {};
  
  // Loop through the flattened warehouse array
  for (let i = 0; i < flattenedWarehouse.length; i++) {
    const productId = flattenedWarehouse[i];
    // If this product ID exists in our frequency object, add 1. Otherwise, start at 1
    // Example: { 1: 3, 2: 2, 3: 2, 4: 2 }
    productFrequency[productId] = (productFrequency[productId] || 0) + 1;
  }
  console.log("Product frequency:", productFrequency);

  // ========== IDENTIFY THE MOST STORED PRODUCT ==========
  // Variables to track which product appears most
  let mostStoredProductId = null;
  let maxCount = 0;
  
  // Loop through the frequency object to find the product with the highest count
  for (const productId in productFrequency) {
    if (productFrequency[productId] > maxCount) {
      maxCount = productFrequency[productId];
      mostStoredProductId = parseInt(productId); // Convert string key to number
    }
  }
  
  // Find the full product object (name, price) for the most stored product
  const mostStoredProduct = products.find(p => p.id === mostStoredProductId);
  console.log("Most stored product:", mostStoredProduct);


  // ========== STEP 4: USE MAP() ==========
  // MAP() EXAMPLE 1: Transform each product into a descriptive string
  // .map() creates a new array by applying a function to each element
  // Input: [{ id: 1, name: "Laptop", price: 1200 }, ...]
  // Output: ["Laptop costs $1200", "Mouse costs $25", ...]
  const productDescriptions = products.map(
    p => `${p.name} costs $${p.price}`
  );
  console.log("Product descriptions:", productDescriptions);

  // MAP() EXAMPLE 2: Convert prices to a new currency (multiply by 1.2)
  // Creates a new array with name, original price, and converted price
  // Useful for business operations when dealing with multiple currencies
  const priceInNewCurrency = products.map(p => ({
    name: p.name,
    originalPrice: p.price,
    newCurrencyPrice: (p.price * 1.2).toFixed(2) // Multiply by 1.2 and round to 2 decimals
  }));
  console.log("Prices in new currency:", priceInNewCurrency);


  // ========== STEP 5: SORTING & REVERSE ==========
  // Important: We use [...products] to create a COPY so we don't modify the original array
  
  // SORT ASCENDING: Sort by price from lowest to highest
  // (a, b) => a.price - b.price means: if result is negative, a comes first
  // Output: Mouse ($25), Chair ($150), Desk ($300), Laptop ($1200)
  const sortedAscending = [...products].sort((a, b) => a.price - b.price);
  console.log("Sorted ascending:", sortedAscending);

  // SORT DESCENDING: Sort by price from highest to lowest
  // (a, b) => b.price - a.price reverses the comparison
  // Output: Laptop ($1200), Desk ($300), Chair ($150), Mouse ($25)
  const sortedDescending = [...products].sort((a, b) => b.price - a.price);
  console.log("Sorted descending:", sortedDescending);

  // REVERSE: Reverse the ascending list to get descending order
  // .reverse() modifies the array in place and returns it
  // This is another way to achieve descending order
  const reversedAscending = [...sortedAscending].reverse();
  console.log("Reversed ascending:", reversedAscending);


  // ========== STEP 6: USE FILTER() AND REDUCE() ==========
  // FILTER: Keep only products with price > $200
  // .filter() returns a new array with only items that pass the condition
  // Output: [Laptop ($1200), Desk ($300)]
  const expensiveProducts = products.filter(p => p.price > 200);
  console.log("Products above $200:", expensiveProducts);

  // REDUCE() EXAMPLE 1: Calculate total value of all products
  // .reduce() takes a function and an initial value
  // sum parameter accumulates the total, p is current product
  // We start with 0 and add each product's price: 0 + 1200 + 25 + 300 + 150 = 1675
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);
  console.log("Total value (using reduce):", totalValue);

  // REDUCE() EXAMPLE 2: Find the most expensive product
  // max accumulates the most expensive product found so far
  // We compare current product price with max price and keep the higher one
  const mostExpensive = products.reduce((max, p) => 
    p.price > max.price ? p : max
  );
  console.log("Most expensive product:", mostExpensive);

  // ========== STEP 7: RETURN THE RESULT OBJECT ==========
  // Package all the analysis results into a single object to return
  return {
    totalItemsStored: totalItemsStored,  // Total items in warehouse = 9
    totalInventoryValue: totalInventoryValue,  // Sum of all prices = $2,800
    mostStoredProduct: mostStoredProduct,  // Product ID 1 (Laptop) appears 3 times
    sortedAscending: sortedAscending,  // Products sorted by price (low to high)
    sortedDescending: sortedDescending,  // Products sorted by price (high to low)
    expensiveProducts: expensiveProducts  // Products that cost more than $200
  };
}


// ========== EXECUTION & DISPLAY RESULTS ==========
// Call the function with our products and warehouse data
const result = analyzeWarehouse(products, warehouse);

// Display the final result in a formatted JSON structure (with 2-space indentation)
console.log("\n=== FINAL RESULT ===");
console.log(JSON.stringify(result, null, 2));
