import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

// 폼객체
const MealItemForm = (props) => {
  // 상태 변환 변수
  const [amountIsValid, setAmountIsValid] = useState(true);
  // 참조 사용
  const amountInputRef = useRef();

  // 제출 함수 @@@@@
  const submitHandler = (event) => {
    // 이벤트 초기화
    event.preventDefault();

    // 참조변수의 현재 값, 그 값을 더하기 @@@@@
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    // 현재 값에 공백 제거한 길이가 0이거나 참조변수 더한 값이 0또는 5초과면 false 
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    // 카트에 더하기 
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    // 폼 
    <form className={classes.form} onSubmit={submitHandler}>
      {/*  */}
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
