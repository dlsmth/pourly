
import styles from './Header.module.css';
import { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modeActions } from '../../store/mode-slice';
import { stageActions } from '../../store/stage-slice';
import { amountActions } from '../../store/amount-slice';
import { gameplayActions } from '../../store/gameplay-slice';
import StopWatch from '../StopWatch/StopWatch.js';

let minutes = 0;
let seconds = '00';
// let score = 0;

let str = "" + 0
let pad = "000"
let score = pad.substring(0, pad.length - str.length) + str

const Header = () => {

  const [stopwatchEnabled, setStopwatchEnabled] = useState(false);
  const mode = useSelector(state => state.mode);
  const stage = useSelector(state => state.stage.stage);
  // const amount = useSelector(state => state.amount);

  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(modeActions.selectMode(0));
    dispatch(stageActions.selectStage(0));
    console.log('stage is: ', stage);
    dispatch(amountActions.resetAmounts());
    dispatch(gameplayActions.resetPlayStates());
    
  };

  const stopwatchHandler = () => {
    setStopwatchEnabled(true);
  };

  return (
    <Fragment>
      {mode.mode === 1 &&
      <div className={styles.header}>
        {!stopwatchEnabled && <div className={styles.timer}>
          <button className={styles.stopwatchBtn} onClick={stopwatchHandler}>STOPWATCH</button>
          </div>}
          {stopwatchEnabled && <StopWatch />}
          <div className={styles.playMode}>
        <p>Learning Mode</p>
      </div>
      <div className={styles.close} onClick={closeHandler}>
        <svg className={styles.closeBtnSvg}>
      <path className={styles.closeBtnBox} d="M0,0h24v24H0V0z"/>
      <path className={styles.closeBtnX} d="M18.3,5.7c-0.4-0.4-1-0.4-1.4,0L12,10.6L7.1,5.7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.9,4.9l-4.9,4.9c-0.4,0.4-0.4,1,0,1.4
	s1,0.4,1.4,0l4.9-4.9l4.9,4.9c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4L13.4,12l4.9-4.9C18.7,6.7,18.7,6.1,18.3,5.7z"/>
</svg>
      </div>
    </div>
      }
            {mode.mode === 2 &&
      <div className={styles.header}>
        {!stopwatchEnabled && <div className={styles.timer}>
          <button className={styles.stopwatchBtn} onClick={stopwatchHandler}>STOPWATCH</button>
          </div>}
          {stopwatchEnabled && <StopWatch />}
          {/* {stopwatchEnabled && <div className={styles.timer}><p className={styles.timerP}>Timer: {minutes}:{seconds}</p><button className={styles.startBtn}>START</button></div>} */}
      <div className={styles.playMode}>
        <p>Game Play Mode</p>
      </div>
      <div className={styles.close} onClick={closeHandler}>
        <svg className={styles.closeBtnSvg}>
      <path className={styles.closeBtnBox} d="M0,0h24v24H0V0z"/>
      <path className={styles.closeBtnX} d="M18.3,5.7c-0.4-0.4-1-0.4-1.4,0L12,10.6L7.1,5.7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.9,4.9l-4.9,4.9c-0.4,0.4-0.4,1,0,1.4
	s1,0.4,1.4,0l4.9-4.9l4.9,4.9c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4L13.4,12l4.9-4.9C18.7,6.7,18.7,6.1,18.3,5.7z"/>
</svg>
      </div>
    </div>
      }
  
    </Fragment>
  );

};

export default Header;