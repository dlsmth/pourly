
import Modal from './components/Modal/Modal.js';
import GamePlayModal from './components/GamePlayModal/GamePlayModal';
import Header from './components/Header/Header.js';
import Middle from './components/Middle/Middle.js';
import Footer from './components/Footer/Footer.js';
// import StopWatch from './components/StopWatch/StopWatch.js';
// import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {

  // const [isFirstState, setIsFirstState] = useState(false);
  const mode = useSelector(state => state.mode.mode);
  const stage = useSelector(state => state.stage.stage);

  return (
    <div>
      {/* <StopWatch /> */}
      {mode === 0 && stage === 0 && <Modal />}
      {mode === 2 && stage === 0 && <GamePlayModal />}
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
