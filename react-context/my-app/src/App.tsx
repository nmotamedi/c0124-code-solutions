import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Cart, CartContext } from './components/CartContext';
import { useState } from 'react';
import { Product } from './lib';

export function App() {
  const [cart, setCart] = useState<Cart[]>();

  function addItem(product: Product) {
    if (!cart) {
      setCart([{ item: product, quantity: 1 }]);
      return;
    }
    if (cart.some((cartItem) => cartItem.item === product)) {
      setCart(
        cart.map((prod) => {
          if (prod.item === product) {
            const cartListing: Cart = {
              item: prod.item,
              quantity: prod.quantity + 1,
            };
            return cartListing;
          } else {
            return prod;
          }
        })
      );
    } else {
      setCart(cart.concat({ item: product, quantity: 1 }));
    }
  }

  function deleteItem(product: Product) {
    const itemIndex = cart?.findIndex(
      (cartItem) => cartItem.item === product && cartItem.quantity === 1
    );
    if (itemIndex === undefined) {
      setCart(
        cart?.map((prod) => {
          if (prod.item === product) {
            const cartListing: Cart = {
              item: prod.item,
              quantity: prod.quantity - 1,
            };
            return cartListing;
          } else {
            return prod;
          }
        })
      );
    } else {
      setCart(cart?.filter((_, index) => index !== itemIndex));
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartArray: cart,
        addFunction: addItem,
        deleteFunction: deleteItem,
      }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
