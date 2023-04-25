import React, { useState } from 'react';


function applyDiscount {
const [discountPercent, setDiscount] = useState(0);
export const priceAfterDiscount = (cart, propopmotions) => {
  let totalReturnedPrice = getCartTotal(cart);
  promotions.forEach(element => {
      switch(element){
      case "5%OFF":
          var reducedPrice = (totalReturnedPrice * 5) / 100;
          totalReturnedPrice -= reducedPrice;
          break;
      case "20EUROFF":
          totalReturnedPrice -= 20;
          break;
      case "20%OFF":
          var reducedPrice = (totalReturnedPrice * 20) / 100;
          totalReturnedPrice -= reducedPrice;
          break;
      }
  });
  return totalReturnedPrice;
  }
}