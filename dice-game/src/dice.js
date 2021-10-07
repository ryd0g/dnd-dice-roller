import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { roll, reset } from './actions/index';
import './dice.css';

function Dice() {
  const dice = useSelector((state) => state.rollReducer);
  const dis = useDispatch();
  return (
    <div className='diceroll'>
      <h2>Dice Roller 🎲</h2>
      <div className='diceborder'>
        <h3>{dice}</h3>
      </div>
      <button onClick={() => dis(roll())}>Roll</button>
      <button onClick={() => dis(reset())}>Reset</button>
    </div>
  );
}

export default Dice;
