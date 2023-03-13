import Measure from './Measure/Measure';
import Grind from './Grind/Grind';
import Pour from './Pour/Pour';
import Coffee from './Coffee/Coffee';
import styles from './Middle.module.css';

// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stageActions } from '../../store/stage-slice';

const Middle = () => {

  // const [stage, setStage] = useState(1);
  const dispatch = useDispatch();
  const stage = useSelector(state => state.stage.stage);
  const mode = useSelector(state => state.mode.mode);

  const stageOneHandler = () => {
    console.log('stage 1 tapped');
    dispatch(stageActions.selectStage(2));
  };

  const stageTwoHandler = () => {
    console.log('stage 2 tapped');
    dispatch(stageActions.selectStage(3));
  };

  const stageThreeHandler = () => {
    console.log('stage 3 tapped');
    dispatch(stageActions.selectStage(4));
  };

  return (
    
    <div className={styles.middle}>
      <div className={styles['middle-top']}>
        {mode === 3 && stage === 1 && <div id="right-arrow" className={styles.rightArrow}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" onClick={stageOneHandler}>
            <path
              className={styles.rightArrowBg}
              d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z"
            />
            <path
              className={styles.rightArrowArrow}
              d="M12,4l-1.4,1.4l5.6,5.6H4v2h12.2l-5.6,5.6L12,20l8-8L12,4z"
            />
          </svg>
        </div>}
        <div className={styles['middle-top__left']}>
          <Measure className={styles.measure} />
        </div>
        <div className={styles['middle-top__right']}>
          <Grind className={styles.grind} />
        </div>
      </div>
      <div className={styles['middle-bottom']}>
        {mode === 3 && stage === 2 && <div id="down-arrow" className={styles.downArrow}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" onClick={stageTwoHandler}>
            <path
              className={styles.downArrowBg}
              d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z"
            />
            <path
              className={styles.downArrowArrow}
              d="M12,4l-1.4,1.4l5.6,5.6H4v2h12.2l-5.6,5.6L12,20l8-8L12,4z"
            />
          </svg>
        </div>}
        {mode === 3 && stage === 3 && <div id="left-arrow" className={styles.leftArrow}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" onClick={stageThreeHandler}>
            <path
              className={styles.leftArrowBg}
              d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z"
            />
            <path
              className={styles.leftArrowArrow}
              d="M12,4l-1.4,1.4l5.6,5.6H4v2h12.2l-5.6,5.6L12,20l8-8L12,4z"
            />
          </svg>
        </div>}
        <div className={styles['middle-bottom__left']}>
          <Coffee className={styles.coffee} />
        </div>
        <div className={styles['middle-bottom__right']}>
          <Pour className={styles.coffee} />
        </div>
      </div>
    </div>
  );
};

export default Middle;
