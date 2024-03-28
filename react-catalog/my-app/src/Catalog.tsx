import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { readCatalog, toDollars, Product } from './lib';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function work() {
      try {
        const productList = await readCatalog();
        setProducts(productList);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    work();
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (error || !products) {
    return (
      <>
        <h1>{`Error! ${error}`}</h1>
      </>
    );
  }

  const catalogComponents = [];

  for (let i = 0; i < products.length; i++) {
    const component = (
      <div key={products[i].productId} className="itemWrapper">
        <Link to={`product/${products[i].productId}`}>
          <img src={products[i].imageUrl} alt={products[i].name} />
          <h4>{products[i].name}</h4>
          <h5>{toDollars(products[i].price)}</h5>
          <p>{products[i].shortDescription}</p>
        </Link>
      </div>
    );
    catalogComponents.push(component);
  }

  return (
    <>
      <h1>Catalog</h1>
      <hr />
      <div className="catalogRow">{catalogComponents}</div>
    </>
  );
}
