//THis file answer the Question 2 of the challenge
//The results are being printed in console

const item = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
  ];
  console.log("Given item:", item);
  
  // 1. Filter and show the Cheap product
  const cheapestProduct = (item) => {
    const cheapPrice = Math.min(...item.map((el) => el.price));
    const cheapProduct = item.filter((el) => el.price === cheapPrice);
    return cheapProduct;
  };
  console.log("\n The cheapest product among item is", cheapestProduct(item));
  
  // 2. Filter and show the product that will be expensive in the array
  expensiveProduct = (item) => {
    const highPrice = Math.max(...item.map((el) => el.price));
    const expensiveProduct = item.filter((el) => el.price === highPrice);
    return expensiveProduct;
  };
  console.log("\n The expensive product among item is", expensiveProduct(item));
  
  //Calculate the full price of all product combined
  allProductPrice = (item) => item.reduce((sum, el) => sum + el.price, 0);
  console.log(
    "\n The full price of all product combined is",
    allProductPrice(item)
  );
  
  //Calculate the full price of all product combined and remove product that are under the 10 dolla
  customAllProductPrice = (item) => {
    const customAllProduct = item.filter((el) => el.price >= 10);
    return customAllProduct.reduce((sum, el) => sum + el.price, 0);
  };
  console.log(
    "\n The full price of all product combined, removing product under price of 10 is",
    customAllProductPrice(item),
    "\n"
  );