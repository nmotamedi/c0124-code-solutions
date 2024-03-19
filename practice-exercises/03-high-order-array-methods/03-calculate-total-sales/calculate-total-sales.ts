type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const total = products.reduce((itemSum: number, product: Product) => {
    return itemSum + product.price * product.quantity;
  }, 0);
  return total + total * (taxRate / 100);
}
