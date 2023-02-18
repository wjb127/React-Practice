import classes from './CartItem.module.css';

// 카트 아이템 컴포넌트 : 변수 받아서 가격트
const CartItem = (props) => {
  const price = `${props.price.toFixed(0)}원`;

  return (
    // 카트 아이템 - 아이템명 - 요약 - 가격 - 수량 
    <li className={classes['cart-item']}>
      <div>
        {/* 변수 */}
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      {/* 행동 */}
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
