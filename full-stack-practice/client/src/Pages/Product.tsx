import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../App';

export function ProductCard() {
  const { productId } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getProduct() {
      try {
        const resp = await fetch(`/api/products/${productId}`);
        if (!resp.ok) throw new Error('Network fetch failed');
        const productJSON = (await resp.json()) as Product;
        setProduct(productJSON);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {`${error}`}</div>;
  }
  if (product) {
    return (
      <div className="column-full">
        <Link to="/">Return to Catalog</Link>
        <section>
          <div className="row">
            <div className="column-half">
              <img src={product?.imageUrl} alt={product?.name} />
            </div>
            <div className="column-half">
              <h1>{product.name}</h1>
              <h3>{`$${(product.price / 100).toFixed(2)}`}</h3>
              <h4>{product.shortDescription}</h4>
            </div>
          </div>
          <div className="row">
            <p>{product.longDescription}</p>
          </div>
        </section>
        <button
          onClick={() => {
            alert(`${product.name} added to cart!`);
            nav('/');
          }}>
          Add to Cart
        </button>
      </div>
    );
  }
}
