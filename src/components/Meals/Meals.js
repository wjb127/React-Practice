
//하나로 컴포넌트 묶기 
import { Fragment } from 'react';

// 요약, 선택 가능한 메뉴들
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
