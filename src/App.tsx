import { FC, useState } from 'react';
import './App.css';
import Stopwatch from './componets/Stopwatch';
import Timer from './componets/Timer';


const App: FC = () => {
  const [state, setState] = useState<number | null>(null)
  return (
    <div className="App">
      {state === null &&
        <div className="div_buttons">

          <button className='btn' onClick={() => setState(1)}>
            Timer
          </button>
          <button className='btn' onClick={() => setState(0)}>
            Stopwatch
          </button>

        </div>}


      {
        state === 0 && <Stopwatch />
      }

      {
        state === 1 && <Timer />
      }



    </div>
  );
}

export default App;
