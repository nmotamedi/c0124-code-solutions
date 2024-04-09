import { createContext } from 'react';
import { Product } from '../lib';

export type Cart = {
  item: Product;
  quantity: number;
};

export type ShoppingCart = {
  addFunction: (product: Product) => void;
  deleteFunction: (product: Product) => void;
  cartArray: Cart[] | undefined;
};

const defaultShoppingCart: ShoppingCart = {
  addFunction: () => undefined,
  deleteFunction: () => undefined,
  cartArray: [],
};

export const CartContext = createContext<ShoppingCart>(defaultShoppingCart);
