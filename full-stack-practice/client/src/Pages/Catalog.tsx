import { useEffect, useState } from 'react';
import { Product } from '../App';
import { useNavigate } from 'react-router-dom';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const nav = useNavigate();

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await fetch(`/api/products`);
        if (!resp.ok) throw new Error('Network fetch failed');
        const products = (await resp.json()) as Product[];
        setProducts(products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {`${error}`}</div>;
  }

  const productCards = products?.map((prod) => {
    return (
      <div
        className="card-wrapper"
        key={prod.productId}
        onClick={() => nav(`/product/${prod.productId}`)}>
        <img src={prod.imageUrl} alt={prod.name} />
        <h3>{prod.name}</h3>
        <h4>{`$${(prod.price / 100).toFixed(2)}`}</h4>
        <p>{prod.shortDescription}</p>
      </div>
    );
  });
  return (
    <div className="column-full">
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        <>{productCards}</>
      </div>
    </div>
  );
}
