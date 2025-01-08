import React from 'react';
import PromotionsList from './PromotionsList';
import './Promotions.css';

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h2>Lista Promocji</h2>
      <PromotionsList />
    </div>
  );
};

export default Promotions;
