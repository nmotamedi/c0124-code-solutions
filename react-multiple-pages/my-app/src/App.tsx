import { useState } from 'react';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Routes, Route } from 'react-router-dom';

export function App() {
  const [itemId, setItemId] = useState<number>();

  function handleDetails(itemId: number): void {
    setItemId(itemId);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard onDetails={handleDetails} />} />
          <Route path="details/:itemID" element={<Details itemId={itemId} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
