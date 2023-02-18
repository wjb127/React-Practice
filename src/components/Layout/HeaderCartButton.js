// 컨텍스트, 이펙트, 상태 
import { useContext, useEffect, useState } from 'react';

// 카트 아이콘, 카트 컨텍스트(객체), css
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

// 헤더 카트 버튼 컴포넌트
const HeaderCartButton = (props) => {

  // 버튼 상태 조절 할 수 있도록 변수, 함수, 초기값 세트
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  // 컨텍스트 사용 
  const cartCtx = useContext(CartContext);

  // 컨텍스트 아이템 = 컨텍스트
  const { items } = cartCtx;

  // 컨텍스트의 카트 아이템 개수 세기 @@@@@
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // 버튼 클래스 값을 넣는데 조건문을 통해서 넣음 @@@
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  // 이펙트 아이템 0개면 중지 @@@@@@ 
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    // 버튼 하이라이트 기본 세팅
    setBtnIsHighlighted(true)

    // 타이머로 버튼 하이라이트 지우기
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // 클리어 타임아웃 
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    // 버튼과 아이콘 그리고 텍스트 
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
