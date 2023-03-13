import styles from './Measure.module.css';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { amountActions } from '../../../store/amount-slice';
import { gameplayActions } from '../../../store/gameplay-slice';
import { useSelector } from 'react-redux';

// const calculateMeasuredCoffee = (which, aoc) => {

//   if (which === 'ADD') {
//     console.log('adding...');

//     return {
//       fillingH: aoc.fillingH +2,
//       fillingY: aoc.fillingY - 2,
//       weight: aoc.weight + 1
//     };
//   } else {
//     console.log('subtracting...');
//     return {
//       fillingH: aoc.fillingH -2,
//       fillingY: aoc.fillingY + 2,
//       weight: aoc.weight - 1
//     };
//   }
//   };

let coffeeFill = {
  fillingH: 0,
  fillingY: 140,
  weight: 0
};

const calculateMeasuredCoffee = (which, aoc) => {

  if (which === 'ADD' && coffeeFill.weight < 37) {
    console.log('adding...');
    coffeeFill.fillingH = coffeeFill.fillingH + 2;
    coffeeFill.fillingY = coffeeFill.fillingY - 2;
    coffeeFill.weight = coffeeFill.weight + 1;
  } else if (which === 'SUB' && coffeeFill.weight > 0) {
    console.log('subtracting...');
      coffeeFill.fillingH = coffeeFill.fillingH - 2;
      coffeeFill.fillingY = coffeeFill.fillingY + 2;
      coffeeFill.weight = coffeeFill.weight - 1;
  } else {
    return;
  }
  };

const Measure = () => {

  const dispatch = useDispatch();
  const coffeeAmount = useSelector(state => state.amount.coffee);
  const mode = useSelector(state => state.mode.mode);
  const stage = useSelector(state => state.stage.stage);

  if (coffeeAmount === 0) {
    coffeeFill = {
      fillingH: 0,
      fillingY: 140,
      weight: 0
    };
  }

  // const [amountOfCoffee, setAmountOfCoffee] = useState({
  //   fillingH: 0,
  //   fillingY: 140,
  //   weight: 0,
  // });

  const addHandler = (e) => {
    console.log('addHandler...');
    dispatch(amountActions.addCoffee(1));
    dispatch(gameplayActions.coffeeAdded(true));
    // setAmountOfCoffee(calculateMeasuredCoffee('ADD', amountOfCoffee));
    // setAmountOfCoffee(calculateMeasuredCoffee('ADD', coffeeAmount));
    calculateMeasuredCoffee('ADD', coffeeAmount)
    // console.log('store.coffee.amount', coffeeAmount);
  };

  const subHandler = (e) => {
    console.log('subHandler...');
    dispatch(amountActions.removeCoffee(1));
    // setAmountOfCoffee(calculateMeasuredCoffee('SUB', amountOfCoffee));
    // setAmountOfCoffee(calculateMeasuredCoffee('SUB', coffeeAmount));
    calculateMeasuredCoffee('SUB', coffeeAmount)
    // console.log('store.coffee.amount', coffeeAmount);
  };

  return (
    <div className={styles.measureBox}>
      {mode === 1 && stage > 1 && <div className={styles.measureScrim}></div>}
      {mode === 2 && stage > 1 && <div className={styles.measureScrim}></div>}
      <div className={styles.measureImage}>
      <div className={styles.controls}>
        <div className={styles.subtract} onClick={subHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
          </svg>
        </div>
        <h2 className={styles.measureLabel}>MEASURE</h2>
        <div className={styles.add} onClick={addHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        </div>
      </div>
      <svg
        className={styles.measureCup}
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
      >
        <rect id="filling" className={styles.filling} x="30" y={coffeeFill.fillingY} width="90" height={coffeeFill.fillingH} />
        <path
          id="bin"
          className={styles.bin}
          d="M20,60c0,0,10,0,10,10c0,7.4,0,70,0,70h90c0,0,0-62.6,0-70c0-10,10-10,10-10"
        />
      </svg>
      </div>
      <div className={styles.weight}>Coffee: {coffeeAmount}g</div>
    </div>
  );
};

export default Measure;
