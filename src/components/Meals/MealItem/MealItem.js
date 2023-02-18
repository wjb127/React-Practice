import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

// 아이템 컴포넌트 
const MealItem = (props) => {
  // 카트 변수 컨텍스트 
  const cartCtx = useContext(CartContext);
  
  // 가격 변수
  const price = `${props.price.toFixed(0)}원`;

  // 카트에 add 함수(행동)
  const addToCartHandler = amount => {
    // 컨텍스트 변수에 변수 추가 
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    // 식사 - 이름 - 설명 - 가격 - 아이템 폼(add)
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
