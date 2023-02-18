// 컨텍스트
import { useContext } from 'react';

// 모달, 카트아이템, css, 카트컨텍스트(객체)
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

// 카트 컴포넌트 
const Cart = (props) => {
  // 객체 사용
  const cartCtx = useContext(CartContext);

  // 가격, 아이템 보유 여부(변수)
  const totalAmount = `${cartCtx.totalAmount.toFixed(0)}원`;
  const hasItems = cartCtx.items.length > 0;

  // 카트 아이템 제거(행동)
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // 카트 아이템 추가(행동)
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };


  // 카트 아이템 
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // 반환 :모달 
  return (
    // 닫기 / 아이템 / 토탈 
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {/* 실행 : 닫기, 오더(hasItems 사용해서 있을 때만 불러냄) */}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
