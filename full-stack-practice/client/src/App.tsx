import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Catalog } from './Pages/Catalog';
import { About } from './Pages/About';
import { ProductCard } from './Pages/Product';

export type Product = {
  name: string;
  imageUrl: string;
  price: number;
  productId: number;
  shortDescription: string;
  longDescription: string;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="about" element={<About />} />
          <Route path="product/:productId" element={<ProductCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
