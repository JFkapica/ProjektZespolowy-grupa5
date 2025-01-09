import React from 'react';
import Promotions from './Promotions';
import oldPromotionsData from '../dummyData/oldPromotionsData';

const ArchivedPromotions = () => {
  return (
    <Promotions 
      dataSource={oldPromotionsData} 
      title="Lista Przedawnionych Promocji" 
    />
  );
};

export default ArchivedPromotions;
