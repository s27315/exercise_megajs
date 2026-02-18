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
  
  const flattenedWarehouse = warehouse.flat();
  console.log("Flattened warehouse:", flattenedWarehouse);

    let totalitemsStored = 0;
    let totalInventoryValue = 0;
    for ( let i = 0; i < warehouse.length; i++) {
        for ( let j = 0; j < warehouse[i].length; j++) {
            const productId =  warehouse[i][j];
        
            const product = products.find(p => p.id === productId);
            if (product) {
                totalInventoryValue += product.price;
            }
        
        }
    }
     console.log("Total items stored:", totalItemsStored);
  console.log("Total inventory value:", totalInventoryValue);

   const productFrequency = {};
  for (let i = 0; i < flattenedWarehouse.length; i++) {
    const productId = flattenedWarehouse[i];
    productFrequency[productId] = (productFrequency[productId] || 0) + 1;
  }
  console.log("Product frequency:", productFrequency);

}



