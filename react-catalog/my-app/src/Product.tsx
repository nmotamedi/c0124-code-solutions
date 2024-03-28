import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toDollars, readProduct, Product } from './lib';

export function ProductPage() {
  const itemId = useParams().itemID;
  const [product, setProduct] = useState<Product>();
  const navigate = useNavigate();

  useEffect(() => {
    async function work() {
      try {
        const prodResp = await readProduct(+itemId!);
        setProduct(prodResp);
      } catch {
        return <h1>Error loading Product</h1>;
      }
    }
    work();
  }, [itemId]);

  function handleAddToCart() {
    alert(`${product?.name} added to cart`);
    navigate('/');
  }

  if (!product) {
    return <h1>Loading...</h1>;
  } else {
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
}
