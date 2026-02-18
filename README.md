# Smart Warehouse Inventory Analyzer

## 📋 Project Overview

This is a **JavaScript Arrays Mega Exercise** that demonstrates essential array manipulation techniques. You'll build an inventory analysis tool for an e-commerce warehouse that manages products stored in a 3×3 grid system.

The project teaches:
- ✅ **Array flattening** - Converting 2D matrices to 1D arrays
- ✅ **Nested loops** - Working with multi-dimensional data structures
- ✅ **Product frequency counting** - Tracking items in inventory
- ✅ **Array methods** - `map()`, `filter()`, `reduce()`, `sort()`, `reverse()`
- ✅ **Data transformation** - Converting and organizing data

---

## 📂 File Structure

```
Array_exercise/
├── Q2.js          (Main exercise file)
└── README.md      (This file)
```

---

## 🏭 Warehouse Setup

### Sample Data

**Products Array:**
```javascript
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Desk", price: 300 },
  { id: 4, name: "Chair", price: 150 }
];
```

**Warehouse Grid (3×3):**
```javascript
const warehouse = [
  [1, 2, 3],    // Row 0: Laptop, Mouse, Desk
  [4, 1, 2],    // Row 1: Chair, Laptop, Mouse
  [3, 4, 1]     // Row 2: Desk, Chair, Laptop
];
```

---

## 🚀 How to Run

### Using Node.js
```bash
node Q2.js
```

### Expected Output
```
Flattened warehouse: [1, 2, 3, 4, 1, 2, 3, 4, 1]
Total items stored: 9
Total inventory value: 2800
Product frequency: { '1': 3, '2': 2, '3': 2, '4': 2 }
Most stored product: { id: 1, name: 'Laptop', price: 1200 }
Product descriptions: [
  'Laptop costs $1200',
  'Mouse costs $25',
  'Desk costs $300',
  'Chair costs $150'
]
Prices in new currency: [
  { name: 'Laptop', originalPrice: 1200, newCurrencyPrice: '1440.00' },
  { name: 'Mouse', originalPrice: 25, newCurrencyPrice: '30.00' },
  { name: 'Desk', originalPrice: 300, newCurrencyPrice: '360.00' },
  { name: 'Chair', originalPrice: 150, newCurrencyPrice: '180.00' }
]
Sorted ascending: [
  { id: 2, name: 'Mouse', price: 25 },
  { id: 4, name: 'Chair', price: 150 },
  { id: 3, name: 'Desk', price: 300 },
  { id: 1, name: 'Laptop', price: 1200 }
]
Sorted descending: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 3, name: 'Desk', price: 300 },
  { id: 4, name: 'Chair', price: 150 },
  { id: 2, name: 'Mouse', price: 25 }
]
Reversed ascending: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 3, name: 'Desk', price: 300 },
  { id: 4, name: 'Chair', price: 150 },
  { id: 2, name: 'Mouse', price: 25 }
]
Products above $200: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 3, name: 'Desk', price: 300 }
]
Total value (using reduce): 1675
Most expensive product: { id: 1, name: 'Laptop', price: 1200 }

=== FINAL RESULT ===
{
  "totalItemsStored": 9,
  "totalInventoryValue": 2800,
  "mostStoredProduct": {
    "id": 1,
    "name": "Laptop",
    "price": 1200
  },
  "sortedAscending": [
    { "id": 2, "name": "Mouse", "price": 25 },
    { "id": 4, "name": "Chair", "price": 150 },
    { "id": 3, "name": "Desk", "price": 300 },
    { "id": 1, "name": "Laptop", "price": 1200 }
  ],
  "sortedDescending": [
    { "id": 1, "name": "Laptop", "price": 1200 },
    { "id": 3, "name": "Desk", "price": 300 },
    { "id": 4, "name": "Chair", "price": 150 },
    { "id": 2, "name": "Mouse", "price": 25 }
  ],
  "expensiveProducts": [
    { "id": 1, "name": "Laptop", "price": 1200 },
    { "id": 3, "name": "Desk", "price": 300 }
  ]
}
```

---

## 📚 What Each Step Does

### **Step 1: Flatten the Matrix** 
Converts the 2D warehouse grid into a 1D array.
```javascript
const flattenedWarehouse = warehouse.flat();
// [[1,2,3], [4,1,2], [3,4,1]] → [1,2,3,4,1,2,3,4,1]
```
- **Why?** Easier to loop through all items without nested loops
- **Method:** `.flat()` - built-in array method

---

### **Step 2: Use Nested Loops**
Count total items and calculate total inventory value.
```javascript
for (let i = 0; i < warehouse.length; i++) {
  for (let j = 0; j < warehouse[i].length; j++) {
    // Count and sum prices
  }
}
```
- **totalItemsStored:** 9 items
- **totalInventoryValue:** $2,800 (1200 + 25 + 300 + 150 + 1200 + 25 + 300 + 150 + 1200)

---

### **Step 3: Product Frequency Analysis**
Count how many times each product appears.
```javascript
productFrequency = { '1': 3, '2': 2, '3': 2, '4': 2 }
```
- **Laptop (ID 1)** appears 3 times → **Most Stored Product** ⭐
- **Others** appear 2 times each

---

### **Step 4: Map() - Data Transformation**
Transform products into new formats.

**Example 1: Product descriptions**
```javascript
products.map(p => `${p.name} costs $${p.price}`)
// ["Laptop costs $1200", "Mouse costs $25", ...]
```

**Example 2: Currency conversion (×1.2)**
```javascript
products.map(p => ({
  name: p.name,
  newCurrencyPrice: (p.price * 1.2).toFixed(2)
}))
// Useful for business operations with multiple currencies
```

---

### **Step 5: Sorting & Reversing**

**Ascending:** Cheapest to most expensive
```javascript
[Mouse ($25), Chair ($150), Desk ($300), Laptop ($1200)]
```

**Descending:** Most expensive to cheapest
```javascript
[Laptop ($1200), Desk ($300), Chair ($150), Mouse ($25)]
```

**Reversed:** Reverse the ascending to get descending
```javascript
.reverse() modifies the array in place
```

---

### **Step 6: Filter() & Reduce()**

**Filter - Products over $200:**
```javascript
products.filter(p => p.price > 200)
// [Laptop ($1200), Desk ($300)]
```

**Reduce - Total Value:**
```javascript
products.reduce((sum, p) => sum + p.price, 0)
// 1200 + 25 + 300 + 150 = $1,675
```

**Reduce - Most Expensive:**
```javascript
products.reduce((max, p) => p.price > max.price ? p : max)
// Laptop ($1200)
```

---

## 🎓 Key Concepts Explained

### **1. .flat()**
- Flattens multi-dimensional arrays
- Usage: `array.flat()`
- Returns: New flattened array

### **2. Nested Loops**
- Outer loop: rows (i)
- Inner loop: columns (j)
- Perfect for 2D grids and matrices

### **3. .map()**
- Transforms each element
- Returns: **New array** (original unchanged)
- Use case: Convert, reformat, extract data

### **4. .filter()**
- Keeps elements that pass a condition
- Returns: **New array** with matching items
- Use case: Search, validate, categorize

### **5. .reduce()**
- Accumulates into a single value
- Two parameters: accumulator + current element
- Also works to find max/min values
- Use case: Sum, count, find extremes

### **6. .sort() & .reverse()**
- `.sort()` can modify in place
- `.reverse()` modifies original
- **Best practice:** Use `[...array]` to create copy first

---

## 🔄 Function Returns

The `analyzeWarehouse()` function returns an object with:

```javascript
{
  totalItemsStored: number,        // Total items in warehouse
  totalInventoryValue: number,     // Sum of all prices
  mostStoredProduct: object,       // Product appearing most frequently
  sortedAscending: array,          // Products sorted (low to high price)
  sortedDescending: array,         // Products sorted (high to low price)
  expensiveProducts: array         // Products costing > $200
}
```

---

## 💡 Best Practices Demonstrated

✅ **Create copies** when sorting: `[...products].sort(...)`  
✅ **Use descriptive variable names:** `totalInventoryValue`, `mostStoredProduct`  
✅ **Chain methods** for efficiency  
✅ **Use appropriate array methods** for each task  
✅ **Comment complex logic** with examples  
✅ **Return organized data** instead of loose variables  

---

## 🚀 Extension Ideas

Try enhancing the project with:
1. **Find products below $100** → Use `.filter()`
2. **Calculate average price** → Use `.reduce()` with division
3. **Group products by price range** → Use nested `.filter()`
4. **Find second most expensive** → Modify `.reduce()`
5. **Export results to JSON** → Use `JSON.stringify()`

---

## 📝 Summary

This exercise teaches you how to:
- ✅ Work with 2D arrays (matrices)
- ✅ Use nested loops effectively
- ✅ Apply modern array methods (`map`, `filter`, `reduce`)
- ✅ Transform and analyze data
- ✅ Return organized results

**Master these skills and you'll be ready for real-world data processing tasks!** 🎯

---

**Created:** February 18, 2026  
**Exercise Level:** Intermediate JavaScript  
**Time to Complete:** 20-30 minutes
