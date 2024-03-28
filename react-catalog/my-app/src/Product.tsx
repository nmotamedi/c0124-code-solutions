import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toDollars, readProduct, Product } from './lib';

export function ProductPage() {
  const itemId = useParams().itemID;
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function work() {
      try {
        const prodResp = await readProduct(+itemId!);
        setProduct(prodResp);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    work();
  }, [itemId]);

  function handleAddToCart() {
    alert(`${product?.name} added to cart`);
    navigate('/');
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !product) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  return (
    <>
      <Link to="/">
        <h3> Back to catalog</h3>
      </Link>
      <div className="product-container">
        <div className="row">
          <div className="column-half">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="column-half">
            <h2>{product.name}</h2>
            <h3>{toDollars(product.price)}</h3>
            <p>{product.shortDescription}</p>
          </div>
        </div>
        <div className="row">
          <p>{product.longDescription}</p>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  );
}
