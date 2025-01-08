import React from 'react';
import PromotionsItem from './PromotionsItem';
import promotionsData from './promotionsData';

const PromotionsList = () => {
  return (
    <div className="promotions-list">
      {promotionsData.map(promo => (
        <PromotionsItem key={promo.id} promo={promo} />
      ))}
    </div>
  );
};

export default PromotionsList;
