// 의미없는 div를 피하기 위함
import { Fragment } from 'react';

// 버튼, 사진, css
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/photo.png';
import classes from './Header.module.css';

// 인자 받아서 프래그먼트에 반환, 헤더, 
const Header = (props) => {
  return (
    <Fragment>
      {/* 헤더 */}
      <header className={classes.header}>
        <h1>주문 시스템</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* 이미지 */}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='BackgroudImage' />
      </div>
    </Fragment>
  );
};

export default Header;
