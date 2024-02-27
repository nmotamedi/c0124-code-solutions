'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const pricesArray = prices.map((priceParam) => {
  return {
    price: priceParam,
    salePrice: priceParam / 2,
  };
});
console.log('Price Objects', pricesArray);
const formattedPrices = prices.map((priceParam) => {
  return `$${priceParam.toFixed(2)}`;
});
console.log('Formatted prices: ', formattedPrices);
