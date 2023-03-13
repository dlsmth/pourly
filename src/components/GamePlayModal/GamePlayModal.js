import { Fragment, useState } from 'react';
import styles from './GamePlayModal.module.css';
import { useDispatch } from 'react-redux';
import { modeActions } from '../../store/mode-slice';
import { stageActions } from '../../store/stage-slice';

const GamePlayModal = () => {

  const [overviewState, setOverviewState] = useState(true);

  const dispatch = useDispatch();

  const cancelBtnHandler = () => {dispatch(modeActions.selectMode(0));};

  const startBtnHandler = () => {dispatch(stageActions.selectStage(1));};

  const learnMoreHandler = () => {
    setOverviewState(false);
  };

  const backToOverviewHandler = () => {
    setOverviewState(true);
  };

  return (
    <Fragment>
      <div className={styles.box}>
        {overviewState && <div>
        <h2>Make your selections below:</h2>
        <form>
        <div className={styles.options}>
          <div className={styles.beans}>
          <label for='beans'>&nbsp;Beans: </label>
        <select>
        <option selected value="beans-si">single-origin</option>
        <option value="beans-bl">blend</option>
        </select>
        </div>
        <div className={styles.roast}>
        <label for='roast'>&nbsp;Roast: </label>
        <select>
        <option value="roast-li">light</option>
        <option selected value="roast-me">medium</option>
        <option value="roast-da">dark</option>
        </select>
        </div>
        <div className={styles.filter}>
        <label for='filter'>Filter: </label>
        <select>
        <option value="filter-ch">paper-chemex</option>
        <option value="filter-ha">paper-hario-v60</option>
        <option selected value="filter-ge">paper-generic</option>
        <option value="filter-me">metal-reusable</option>
        <option value="filter-cl">cloth-reusable</option>
        <option value="filter-pl">plastic-reusable</option>
        <option value="filter-ch">paper towel</option>
        </select>
        </div>
        <div className={styles.waterTemp}>
        <label for='water'>&nbsp;Water: </label>
        <select>
        <option value="http://www.link1.com">100°f</option>
        <option value="http://www.link2.com">101°f</option>
        <option value="http://www.link2.com">102°f</option>
        <option value="http://www.link1.com">103°f</option>
        <option value="http://www.link2.com">104°f</option>
        <option value="http://www.link1.com">105°f</option>
        <option value="http://www.link2.com">106°f</option>
        <option value="http://www.link2.com">107°f</option>
        <option value="http://www.link1.com">108°f</option>
        <option value="http://www.link2.com">109°f</option>
        <option value="http://www.link2.com">110°f</option>
        <option value="http://www.link1.com">111°f</option>
        <option selected value="http://www.link1.com">112°f</option>
        <option value="http://www.link1.com">113°f</option>
        <option value="http://www.link2.com">114°f</option>
        <option value="http://www.link2.com">115°f</option>
        <option value="http://www.link1.com">116°f</option>
        <option value="http://www.link2.com">117°f</option>
        <option value="http://www.link2.com">118°f</option>
        <option value="http://www.link1.com">119°f</option>
        <option value="http://www.link1.com">120°f</option>
        </select>
        </div>
        </div>
        <button className={styles.cancelBtn} onClick={cancelBtnHandler}>Cancel</button>
        <button className={styles.startBtn} onClick={startBtnHandler}>Start Game</button>
        </form>
        <p className={styles.link} onClick={learnMoreHandler}>Review game-play and rules</p>
        </div>}
        {!overviewState && <div>
        <h2>Instructions and Rules</h2>
        <p>Make your selections, including beans, roast, filter and water temperature.</p>
        <p>1. Measure: Use the -/+ controls to measure out the beans.</p>
        <p>2. Grind: Use the red knob to select your preferred grind setting and press GRIND.</p>
        <p>3. Pour: Tap on the coffee in the filter to add the desired amount of water. Your total brew time will be timed, as will any bloom that forms. A stopwatch is provided for your convenience.</p>
        <p>4. Finish: When you have completed your pour-over, tap on the coffee mug to end the extraction and serve the coffee.</p>
        <p>Your score will be calculated by a variety of factors and variables, depending on the options chosen, the time spent, and your technique.</p>
        <p>Good luck!</p>
        <p className={styles.link} onClick={backToOverviewHandler}>Back to overview</p>
      </div>}
      </div>
      <div className={styles.background}>
    </div>
    </Fragment>
  );
};

export default GamePlayModal;
