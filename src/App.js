import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Promotions from './Promotions/PromotionsPage';
import OldPromotions from './Promotions/OldPromotionsPage';
import TopPromotions from './Promotions/TopPromotionsPage';
import ShopsPage from './Shops/ShopsPage';
import ShopPromotionsPage from './Shops/ShopPromotionsPage';
import CategoriesPage from './Categories/CategoriesPage';
import CategoryPromotionsPage from './Promotions/CategoryPromotionsPage';
import AddPromotionPage from './Promotions/AddPromotionPage';
import UploadPage from './Uploads/UploadPage';


function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/promotions/top" element={<TopPromotions />} />
          <Route path="/promotions/old" element={<OldPromotions />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/shops/:id/promotions" element={<ShopPromotionsPage />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id/promotions" element={<CategoryPromotionsPage />} />
          <Route path="/promotions/add" element={<AddPromotionPage />} />
          <Route path="/promotions/add" element={<AddPromotionPage />} />
          <Route path="/uploads" element={<UploadPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
