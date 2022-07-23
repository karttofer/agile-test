// Dependencies
import React, { useState } from 'react';
// Components
import IconComponent from './IconComponent';
import LinkComponent from './LinkComponent';

// Assets
import minus from '../assets/img/minus.svg';
import plus from '../assets/img/plus.svg';

const QuantityComponent = () => {
  let [quantity, setQuantity] = useState(0);

  const changeQuantity = (type) => {
    return quantity > 0 && type === 'minus'
      ? setQuantity((quantity -= 1))
      : setQuantity((quantity += 1));
  };

  return (
    <div className="shop__quantity-puchase">
      <LinkComponent text="Quantity" bold={true} />
      <IconComponent src={minus} clickEvent={() => changeQuantity('minus')} />
      <LinkComponent text={quantity} bold={true} />
      <IconComponent src={plus} clickEvent={() => changeQuantity('plus')} />
    </div>
  );
};
export default QuantityComponent;
