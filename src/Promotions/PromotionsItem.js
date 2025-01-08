import React from 'react';
import './Promotions.css';

const PromotionsItem = ({ promo }) => {
  return (
    <div className="promotion-item">
      <img src={promo.image_url} alt={promo.product_name} className="promotion-image" />
      <h3>{promo.product_name}</h3>
      <p><strong>Sklep:</strong> {promo.store}</p>
      <p><strong>Cena promocyjna:</strong> {promo.discount_price}</p>
      <p><strong>Cena regularna:</strong> {promo.original_price}</p>
      <p><strong>Typ promocji:</strong> {promo.discount_type} ({promo.discount_value})</p>
      <p><strong>Kategoria:</strong> {promo.category}</p>
      <p><strong>Okres promocji:</strong> {promo.start_date} - {promo.end_date}</p>
    </div>
  );
};

export default PromotionsItem;
