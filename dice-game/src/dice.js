import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  roll,
  reset,
  resetd4,
  resetd8,
  resetd10,
  resetd12,
  resetd20,
  resetpercent,
  rolld4,
  rolld8,
  rolld10,
  rolld12,
  rolld20,
  rollpercent,
} from './actions/index';
import './dice.css';

function Dice() {
  const dice = useSelector((state) => state.rollReducer);
  const d4dice = useSelector((state) => state.d4Reducer);
  const d8dice = useSelector((state) => state.d8Reducer);
  const d10dice = useSelector((state) => state.d10Reducer);
  const d12dice = useSelector((state) => state.d12Reducer);
  const d20dice = useSelector((state) => state.d20Reducer);
  const percentdice = useSelector((state) => state.percentReducer);
  const dis = useDispatch();
  return (
    <div className='diceroll'>
      <h2>DND Dice Roller 🎲</h2>
      <div className='dicebox'>
        <div className='d4border'>
          <h3>{d4dice}</h3>
        </div>
        <div className='diceborder'>
          <h3>{dice}</h3>
        </div>
        <div className='d8border'>
          <h3>{d8dice}</h3>
        </div>
        <div className='d10border'>
          <h3>{d10dice}</h3>
        </div>
        <div className='d12border'>
          <h3>{d12dice}</h3>
        </div>
        <div className='d20border'>
          <h3>{d20dice}</h3>
        </div>
        <div className='percentborder'>
          <h3>{percentdice}</h3>
        </div>
      </div>
      <button onClick={() => dis(rolld4())}>Roll D4</button>
      <button onClick={() => dis(roll())}>Roll D6</button>
      <button onClick={() => dis(rolld8())}>Roll D8</button>
      <button onClick={() => dis(rolld10())}>Roll D10</button>
      <button onClick={() => dis(rolld12())}>Roll D12</button>
      <button onClick={() => dis(rolld20())}>Roll D20</button>
      <button onClick={() => dis(rollpercent())}>Roll %</button>
      <br />
      <button onClick={() => dis(resetd4())}>Reset D4</button>
      <button onClick={() => dis(reset())}>Reset D6</button>
      <button onClick={() => dis(resetd8())}>Reset D8</button>
      <button onClick={() => dis(resetd10())}>Reset D10</button>
      <button onClick={() => dis(resetd12())}>Reset D12</button>
      <button onClick={() => dis(resetd20())}>Reset D20</button>
      <button onClick={() => dis(resetpercent())}>Reset %</button>
    </div>
  );
}

export default Dice;
