import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { roll, reset, rolld20 } from './actions/index';
import './dice.css';

function Dice() {
  const dice = useSelector((state) => state.rollReducer);
  const d20dice = useSelector((state) => state.d20Reducer);
  const dis = useDispatch();
  return (
    <div className='diceroll'>
      <h2>Dice Roller 🎲</h2>
      <div className='dicebox'>
        <div className='diceborder'>
          <h3>{dice}</h3>
        </div>
        <div className='d20border'>
          <h3>{d20dice}</h3>
        </div>
      </div>
      <button onClick={() => dis(roll())}>Roll D6</button>
      <button onClick={() => dis(rolld20())}>Roll D20</button>
      <button onClick={() => dis(reset())}>Reset</button>
    </div>
  );
}

export default Dice;
