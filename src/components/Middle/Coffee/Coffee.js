import styles from './Coffee.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { brewtimeActions } from '../../../store/brewtime-slice';
import { stageActions } from '../../../store/stage-slice';
import gameplaySlice, { gameplayActions } from '../../../store/gameplay-slice';

// let theInterval;

// const steamAnimation = (direction) => {
//   clearInterval(theInterval);
//   if (direction === 'RUN' && stage > 0) {
//     console.log('set to run');
//     theInterval = setInterval(() => {
//       setTimeout(() => {
//         document.getElementById('steam1a').style.transform = 'translateY(10px)';
//         document.getElementById('steam1b').style.transform = 'translateY(10px)';
//         document.getElementById('steam2a').style.transform =
//           'translateY(-10px)';
//         document.getElementById('steam2b').style.transform =
//           'translateY(-10px)';
//         setTimeout(() => {
//           document.getElementById('steam1a').style.transform =
//             'translateY(0px)';
//           document.getElementById('steam1b').style.transform =
//             'translateY(0px)';
//           document.getElementById('steam2a').style.transform =
//             'translateY(0px)';
//           document.getElementById('steam2b').style.transform =
//             'translateY(0px)';
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   } else {
//     console.log('set to stop');
//     return;
//   }

//   console.log('starting steamAnimation...');
// };

const Coffee = () => {
  const [animatedSteam, setAnimatedSteam] = useState(false);
  const [done, setDone] = useState(false);

  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount);
  const mode = useSelector(state => state.mode.mode);
  const stage = useSelector(state => state.stage.stage);
  const coffeeDone = useSelector(state => state.gameplay.coffeeDone);
  const lessonNumber = useSelector(state => state.lessons.lessonNumber);

  // let checkClass = done ? 'styles.checkGray' : 'styles.checkGreen';
  // useEffect(steamAnimation, []);

  let theInterval;

const steamAnimation = (direction) => {
  clearInterval(theInterval);
  if (direction === 'RUN') {
    console.log('set to run');
    theInterval = setInterval(() => {
      setTimeout(() => {
        if (coffeeDone) {
          console.log('if stage: ', stage);
          document.getElementById('steam1a').style.transform = 'translateY(10px)';
        document.getElementById('steam1b').style.transform = 'translateY(10px)';
        document.getElementById('steam2a').style.transform =
          'translateY(-10px)';
        document.getElementById('steam2b').style.transform =
          'translateY(-10px)';
        setTimeout(() => {
          document.getElementById('steam1a').style.transform =
            'translateY(0px)';
          document.getElementById('steam1b').style.transform =
            'translateY(0px)';
          document.getElementById('steam2a').style.transform =
            'translateY(0px)';
          document.getElementById('steam2b').style.transform =
            'translateY(0px)';
        }, 1000);
        } else {
          console.log('else stage: ', stage);
          clearInterval(theInterval);
        }
      }, 1000);
    }, 2000);
  } else {
    console.log('set to stop');
    return;
  }

  console.log('starting steamAnimation...');
};

  const onClickTest = () => {
    dispatch(brewtimeActions.setEndTime());
    dispatch(brewtimeActions.setTimeDone(true));
    dispatch(gameplayActions.coffeeDone(true));
    dispatch(stageActions.selectStage(4));
    console.log('HERE... stage is: ', stage);
    setDone(true);

    if (!animatedSteam) {
      steamAnimation('RUN');
      setAnimatedSteam(true);
    } else {
      steamAnimation('STOP');
      setAnimatedSteam(false);
    }
  };

  return (
    <div>
      {mode === 1 && lessonNumber < 23 && <div className={styles.coffeeScrim}></div>}
      <h2 className={styles.coffeeLabel}>FINISHED CUP</h2>
      <div className={styles.coffeeImage} onClick={onClickTest}>
        <svg
          className={styles.coffeeCup}
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 150 150"
        >
          {coffeeDone && <path
            id="steam1a"
            className={styles.steam}
            d="M60,10c0,0-10,0-10,10s10,10,10,10"
          />}
          {coffeeDone && stage === 4 && <path
            id="steam1b"
            className={styles.steam}
            d="M60,0c0,0,10,0,10,10S60,20,60,20"
          />}
          {coffeeDone && stage === 4 && <path
            id="steam2a"
            className={styles.steam}
            d="M80,20c0,0-10,0-10,10s10,10,10,10"
          />}
          {coffeeDone && stage === 4 && <path
            id="steam2b"
            className={styles.steam}
            d="M80,10c0,0,10,0,10,10S80,30,80,30"
          />}
          <path
            className={styles.cup}
            d="M96,140H34c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h62c2.2,0,4,1.8,4,4v92C100,138.2,98.2,140,96,140z"
          />
          <path
            className={styles.handle}
            d="M100,50c16.6,0,30,17.9,30,40s-13.4,40-30,40"
          />
          <path class={coffeeDone ? styles.checkGreen : styles.checkGray} d="M58.8,98.8L50,90l-2.9,2.9l11.7,11.7l25-25l-2.9-2.9L58.8,98.8z"/>
        </svg>
      </div>
    </div>
  );
};

export default Coffee;
