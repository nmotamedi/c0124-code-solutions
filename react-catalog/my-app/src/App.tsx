import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Catalog } from './Catalog';
import './App.css';
import { About } from './About';
import { ProductPage } from './Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="about" element={<About />} />
          <Route path="product/:itemID" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
