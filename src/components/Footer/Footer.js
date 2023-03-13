
import { Fragment, useState } from 'react';
import styles from './Footer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { lessonsActions } from '../../store/lessons-slice';


const Footer = () => {

  // const [lessonNumber, setLessonNumber] = useState(0);

  const mode = useSelector(state => state.mode.mode);
  const stage = useSelector(state => state.stage);
  const amount = useSelector(state => state.amount);
  const brewtime = useSelector(state => state.brewtime);
  const lessonNumber = useSelector(state => state.lessons.lessonNumber);

  const dispatch = useDispatch();
  console.log(mode.mode);
  console.log(lessonNumber);

  function millisToMinutesAndSeconds(millis) {
    var mins = Math.floor(millis / 60000);
    var secs = ((millis % 60000) / 1000).toFixed(0);
    return mins + ":" + (secs < 10 ? '0' : '') + secs;
  }

  const calcRandom = () => {
    let rando = Math.floor(Math.random() * 100)
    if (rando < 10) {
      rando = rando + 40;
    }
    return rando;
  };

  const lessonHandler = () => {
    dispatch(lessonsActions.addLesson());
  };

  const lessonResetter = () => {
    dispatch(lessonsActions.selectLesson(0));
    // console.log('ln: ', lessonNumber);
    // console.log(e.target.id);
    // dispatch(lessonsActions.selectLesson(e.target.id));
    // dispatch(lessonsActions.addLesson());
    // setLessonNumber(prevState => e.target.id);
    // console.log('ln: ', lessonNumber);
  };

  return (
    <Fragment>
    <div className={styles.footer}>
      {mode === 1 && lessonNumber === 0 &&
      <div className={styles.lessons}>
        <p>Let's learn how to brew!</p>
        <button className={styles.startBtn} onClick={lessonHandler}>START</button>
      </div>
      }
      {mode === 1 && lessonNumber === 1 &&
      <div className={styles.lessons}>
        <p>Tap the + button to measure out the beans.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 2 &&
      <div className={styles.lessons}>
        <p>A 1:16 ratio of coffee:water works best.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 3 &&
      <div className={styles.lessons}>
        <p>For 1 cup, let's try 15-30g of beans.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 4 &&
      <div className={styles.lessons}>
        <p>As you add beans, the grinder will fill.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 5 &&
      <div className={styles.lessons}>
        <p>Tap the red knob to change grind setting.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 6 &&
      <div className={styles.lessons}>
        <p>A medium grind will work well for now.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 7 &&
      <div className={styles.lessons}>
        <p>Press the GRIND button to begin grinding.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 8 &&
      <div className={styles.lessons}>
        <p>The completed grinds are now in the filter.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 9 &&
      <div className={styles.lessons}>
        <p>Here, you're looking down over the filter.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 10 &&
      <div className={styles.lessons}>
        <p>Now you're ready to start pouring!</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 11 &&
      <div className={styles.lessons}>
        <p>Timing is key and will affect the taste.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 12 &&
      <div className={styles.lessons}>
        <p>There is a stopwatch at top. Tap it.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 13 &&
      <div className={styles.lessons}>
        <p>When you're ready, START the stopwatch.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 14 &&
      <div className={styles.lessons}>
        <p>Tap on the coffee and add 30-50g of water.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 15 &&
      <div className={styles.lessons}>
        <p>As you wait, bubbles will start to form.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 16 &&
      <div className={styles.lessons}>
        <p>This "bloom" forms as gas is released.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 17 &&
      <div className={styles.lessons}>
        <p>Let it bloom for 30-45 seconds.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 18 &&
      <div className={styles.lessons}>
        <p>Then add more water, covering the grinds.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
                  {mode === 1 && lessonNumber === 19 &&
      <div className={styles.lessons}>
        <p>This starts the coffee extraction process.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 20 &&
      <div className={styles.lessons}>
        <p>Be careful not to overflow the filter.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 21 &&
      <div className={styles.lessons}>
        <p>The water will slowly drain, as it drips.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 22 &&
      <div className={styles.lessons}>
        <p>Continue adding water, slowly.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 23 &&
      <div className={styles.lessons}>
        <p>Add about 300g water, then stop.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 24 &&
      <div className={styles.lessons}>
        <p>The coffee is still getting extracted.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 25 &&
      <div className={styles.lessons}>
        <p>Total time should be about 3-4 mins.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 26 &&
      <div className={styles.lessons}>
        <p>Tap the coffee cup to stop and pour a cup.</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
            {mode === 1 && lessonNumber === 27 &&
      <div className={styles.lessons}>
        <p>Good job! Next stop, #baristalyf!</p>
        <button className={styles.startBtn} onClick={lessonHandler}>{'>'}</button>
      </div>
      }
      {mode === 1 && lessonNumber === 28 &&
      <div className={styles.lessons}>
        <p>Try again or click the X to end.</p>
        <button className={styles.startBtn} onClick={lessonResetter}>RESTART</button>
      </div>
      }
      {mode === 2 &&
      <div className={styles.controls}>
        <p>c: {amount.coffee}g w: {amount.water}g {brewtime.timeDone && 'bt: ' + millisToMinutesAndSeconds(brewtime.brewTime)} -</p>
        {stage.stage < 4 && <p>- score: 000</p>}
        {stage.stage === 4 && <p>- score: 0{calcRandom()}</p>}
      </div>
      }
    </div>
    </Fragment>
  );

};

export default Footer;