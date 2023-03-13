import { Fragment, useState } from 'react';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { modeActions } from '../../store/mode-slice';

const Modal = () => {

  const [overviewState, setOverviewState] = useState(true);

  const dispatch = useDispatch();

  const learnBtnHandler = () => {dispatch(modeActions.selectMode(1));};
  const playBtnHandler = () => {dispatch(modeActions.selectMode(2));};

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
        <h2>Welcome to Pourly!</h2>
        <p>The purpose of this app is to sharpen your Pour-Over Coffee-Making skills. Whether you are a newbie or a seasoned pro, <b>Pourly</b> can help take your coffee to the next level.</p>
        <p>Choose between two modes: A learning mode with helpful tips along the way, and a game play mode where you can test your skills.</p>
        <button onClick={learnBtnHandler}>Learn</button>
        <button onClick={playBtnHandler}>Play</button>
        <p className={styles.link} onClick={learnMoreHandler}>Learn more about Pourly</p>
        </div>}
        {!overviewState && <div>
        <h2>More about Pourly</h2>
        <p>This app came about during the pandemic, when I was both learning React and learning how to make coffee using the pour-over method. The irony is that I don't really drink coffee, so I found myself making coffee just because I enjoyed the process. (It can be quite a meditative ritual for some people.) As I tried to taper back my coffee-drinking, the idea came to me to make an app that would not only serve as an enjoyable proxy for making real coffee but as a tool for others to learn optimal brewing techniques.</p>
        <p>This app was built using React w/ Redux, leveraging SPA and PWA methodologies.</p>
        <p>Questions? Bugs? Reach out and say hi.</p>
        <p className={styles.link} onClick={backToOverviewHandler}>Back to overview</p>
      </div>}
      </div>
      <div className={styles.background}>
    </div>
    </Fragment>
  );
};

export default Modal;
