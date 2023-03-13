import styles from './Grind.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stageActions } from '../../../store/stage-slice';
import { gameplayActions } from '../../../store/gameplay-slice';

const settingArray = [
  {name: 'Medium', x1: 75, y1: 95, x2: 75, y2: 70},
  {name: 'Med/Fine', x1: 75, y1: 95, x2: 92, y2: 77},
  {name: 'Fine', x1: 75, y1: 95, x2: 100, y2: 95},
  {name: 'Extra Fine', x1: 75, y1: 95, x2: 92, y2: 113},
  {name: 'Extra Coarse', x1: 75, y1: 95, x2: 57, y2: 113},
  {name: 'Coarse', x1: 75, y1: 95, x2: 50, y2: 95},
  {name: 'Med/Coarse', x1: 75, y1: 95, x2: 57, y2: 77}
];

let fY = 40;
let fH = 30;

const Grind = () => {
  const [grindState, setGrindState] = useState(false);
  const [grindStateUI, setGrindStateUI] = useState(0);

  const mode = useSelector(state => state.mode.mode);
  const stage = useSelector(state => state.stage.stage);
  const amount = useSelector(state => state.amount);
  const lessonNumber = useSelector(state => state.lessons.lessonNumber);
  const dispatch = useDispatch();

  const startGrinder = () => {
    // setGrindState(true);
    grindProcess();
    dispatch(stageActions.selectStage(2));
    console.log('stage is: ', stage);
  };

  // setTimeout(function(){ alert("Hello"); }, 3000);

  const grindCoffee = () => {
    for (let i = 0; i < 5; i++) {}
  };

  const grindProcess = () => {
    let x = 0;
    const thisInt = setInterval(() => {
      if (x === 7) {
        // document.getElementById('fB').style.fill = '#87431d';
        document.getElementById('fE').style.fill = 'none';
        document.getElementById('fEF').style.fill = 'none';
        document.getElementById('fEF').style.stroke = 'none';
        fY = 40;
        fH = 30;
        clearInterval(thisInt);
        dispatch(gameplayActions.coffeeGround(true));
        dispatch(stageActions.selectStage(3));
        console.log('stage is: ', stage);
      }
      x++;
      console.log(`grind ${x}`);
      fY += 5;
      fH -= 5;
      setGrindStateUI(x);
    }, 1000);
  };

  const [grindSetting, setGrindSetting] = useState(0);

  const changeSetting = () => {
    if (grindSetting > 5) {
      setGrindSetting(0);
    } else {
      setGrindSetting(grindSetting + 1);
    }
  };

  return (
    <div className={styles.grindBox}>
      {mode === 1 && lessonNumber < 4 && <div className={styles.grindScrim}></div>}
      {mode === 2 && stage > 2 && <div className={styles.grindScrim}></div>}
      <div className={styles.grindLabelBox}>
        <div className={styles.grindLabel} onClick={startGrinder}>
          <h2 className={amount.coffee > 4 && stage < 2 ? styles.grindH2 : styles.grindH2disabled}>GRIND</h2>
        </div>
      </div>
      <div className={styles.grindImage}>
        <svg
          className={styles.grinder}
          version="1.1"
          id="Layer_3"
          x="0px"
          y="0px"
          viewBox="0 0 150 150"
        >
          <path
            id="fB"
            className={stage > 2 ? styles.grinderBaseFilled : styles.grinderBaseEmpty}
            d="M30,140c0,0,0-10,0-20s10-10,10-10h70c0,0,10,0,10,10s0,20,0,20H30z"
          />
          {amount.coffee > 5 && <path
            id="fE"
            className={styles.grinderGrindsBaseFilling}
            d="M30,70h90c0,0,0,10-10,10s-60,0-70,0S30,70,30,70z"
          />}
          {amount.coffee > 15 && <rect
            id="fEF"
            className={styles.grinderGrindsExtraFilling}
            x="30"
            y={fY}
            width="90"
            height={fH}
          />}
          <path
            className={styles.grinderGrindsExtra}
            d="M30,10h90v60c0,0,0,10-10,10s-60,0-70,0S30,70,30,70V10z"
          />
          <g onClick={changeSetting}>
            <circle className={styles.grinderDial} cx="75" cy="95" r="30" />
            <line class={styles.seam} x1={settingArray[grindSetting].x1} y1={settingArray[grindSetting].y1} x2={settingArray[grindSetting].x2} y2={settingArray[grindSetting].y2} />
            <circle className={styles.grinderKnob} cx="75" cy="95" r="15" />
            <circle className={styles.grinderKnobTop} cx="75" cy="95" r="10" />
          </g>
        </svg>
        <div className={styles.setting}>
          Set: {settingArray[grindSetting].name}
        </div>
      </div>
    </div>
  );
};

export default Grind;
