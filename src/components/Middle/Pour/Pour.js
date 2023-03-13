import styles from './Pour.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { amountActions } from '../../../store/amount-slice';
import { brewtimeActions } from '../../../store/brewtime-slice';

let currentWaterAmount = 0;
let totalWaterAmount = 0;
// let waterLevel;
let bloom = false;
let bloomPhase = 1;
const bloomShow = {
  display: 'block',
};
const bloomHide = {
  display: 'none',
};

const Pour = () => {

  const amount = useSelector(state => state.amount);
  const brewtime = useSelector(state => state.brewtime);
  const mode = useSelector(state => state.mode.mode);
  const stage = useSelector(state => state.stage.stage);
  const coffeeGround = useSelector(state => state.gameplay.coffeeGround);
  const lessonNumber = useSelector(state => state.lessons.lessonNumber);
  const dispatch = useDispatch();

  const [water, setWater] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bloomVis1, setBloomVis1] = useState(false);
  const [bloomVis2, setBloomVis2] = useState(false);
  const [bloomVis3, setBloomVis3] = useState(false);
  const [bloomVis4, setBloomVis4] = useState(false);
  const [bloomVis5, setBloomVis5] = useState(false);
  const [bloomVis6, setBloomVis6] = useState(false);
  const [bloomVis7, setBloomVis7] = useState(false);
  // const [bloomVis, setBloomVis] = useState(false);
  // const [bloomVis, setBloomVis] = useState({
  //   bloom1: false,
  //   bloom2: false,
  //   bloom3: false,
  //   bloom4: false,
  //   bloom5: false,
  //   bloom6: false,
  //   bloom7: false,
  // })

  const waterHandler = () => {

    if (amount.water === 0) {
      dispatch(brewtimeActions.setStartTime());
      dispatch(brewtimeActions.setBloomStartTime());
    console.log('brewtime: ', brewtime.startTime);
    }

    dispatch(amountActions.addWater(5));
    console.log(amount.water);
    if (!bloom) {
      releaseBloom();
      bloom = true;
    }

    if (totalWaterAmount > 100) {
      removeBloom();
    }

    totalWaterAmount += 5;
    setWeight(totalWaterAmount);
    currentWaterAmount += 3;
    waterLevelUI(currentWaterAmount);
    reduceWater();
  };

  const reduceWater = () => {
    const thisInt = setInterval(() => {
      currentWaterAmount -= 1;
      waterLevelUI();
      if (currentWaterAmount < 1) {
        clearInterval(thisInt);
        currentWaterAmount = 0;
        return;
      }
    }, 30000);
  };

  const removeBloom = () => {
    setBloomVis1(false);
    setBloomVis2(false);
    setBloomVis3(false);
    setBloomVis4(false);
    setBloomVis5(false);
    setBloomVis6(false);
    setBloomVis7(false);
  };

  const releaseBloom = () => {
    const thisInt = setInterval(() => {
      console.log(`bloom: ${bloomPhase}`);

      switch (bloomPhase) {
        case 1:
          setBloomVis1(true);
          break;
        case 2:
          setBloomVis2(true);
          break;
        case 3:
          setBloomVis3(true);
          break;
        case 4:
          setBloomVis4(true);
          break;
        case 5:
          setBloomVis5(true);
          break;
        case 6:
          setBloomVis6(true);
          break;
        case 7:
          setBloomVis7(true);
          break;

        default:
          return;
      }

      if (bloomPhase === 7) {
        clearInterval(thisInt);
        return;
      }

      bloomPhase += 1;
    }, 2000);
  };

  const waterLevelUI = (wA) => {
    console.log('adding water');
    console.log(`totalWater: ${currentWaterAmount}`);
    setWater(currentWaterAmount);
  };

  return (
    <div>
      {mode === 1 && lessonNumber < 8 && <div className={styles.pourScrim}></div>}
      {mode === 2 && stage > 3 && <div className={styles.pourScrim}></div>}
      <div>
        <h2 className={styles.pourH2}>POUR</h2>
      </div>
      <div onClick={waterHandler}>
        <svg version="1.1" id="pour" x="0px" y="0px" viewBox="0 0 150 150">
          <circle className={styles.filter} cx="75" cy="75" r="65" />
          <line class={styles.seam} x1="130" y1="40" x2="75" y2="75" />
          {coffeeGround && <circle className={styles.coffee} cx="75" cy="75" r="35" />}
          <circle className={styles.water} cx="75" cy="75" r={water} />
          {bloomVis1 && (
            <circle
              id="bubble1"
              className={styles.bubble}
              cx="75"
              cy="75"
              r="18"
            />
          )}
          {bloomVis2 && (
            <circle
              id="bubble2"
              className={styles.bubble}
              cx="76"
              cy="76"
              r="13"
            />
          )}
          {bloomVis3 && (
            <circle
              id="bubble3"
              className={styles.bubble}
              cx="70"
              cy="65"
              r="10"
            />
          )}
          {bloomVis4 && (
            <circle
              id="bubble4"
              className={styles.bubble}
              cx="80"
              cy="60"
              r="5"
            />
          )}
          {bloomVis5 && (
            <circle
              id="bubble5"
              className={styles.bubble}
              cx="76"
              cy="83"
              r="5"
            />
          )}
          {bloomVis6 && (
            <circle
              id="bubble6"
              className={styles.bubble}
              cx="80"
              cy="75"
              r="10"
            />
          )}
          {bloomVis7 && (
            <circle
              id="bubble7"
              className={styles.bubble}
              cx="70"
              cy="75"
              r="5"
            />
          )}
        </svg>
      </div>
      <div className={styles.weight}>Water: {amount.water}g</div>
    </div>
  );
};

export default Pour;
