import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
// 닫기 버튼
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};
// 모달 오버레이 
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
// 포탈 요소
const portalElement = document.getElementById('overlays');
// 모달 
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
