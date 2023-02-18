import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

// 홍은정/고은정/이상지 템플릿
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '이자카야',
    description: '술프터로 잡고 라포 쌓기 좋음, 하이볼에 사시미/튀김 등 조합',
    price: 40000,
  },
  {
    id: 'm2',
    name: '스테이크&파스타',
    description: '데이트 코스 단골 메뉴', 
    price: 60000,
  },
  {
    id: 'm3',
    name: '한국식 고깃집',
    description: '소주 곁들여 먹기 좋음', 
    price: 40000,
  },
  {
    id: 'm4',
    name: '개인카페',
    description: '후식과 함께 데이트 코스에 필수',
    price: 20000,
  },
  {
    id: 'm5',
    name: '칵테일 바',
    description: '이쁜 사진과 좋은 분위기를 남길 수 있음',
    price: 80000,
  },
];

// 리스트 매핑 템플릿 : 객체.map(()=>(<item props={}/>))
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  // section 안에 넣고 card로 감싸기 
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
