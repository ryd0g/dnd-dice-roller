import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { roll, reset } from './actions/index';

function Dice() {
  const dice = useSelector((state) => state.rollReducer);
  const dis = useDispatch();
  return (
    <div className='diceroll'>
      <h3>{dice}</h3>
      <p>You rolled a {dice}!</p>
      <button onClick={() => dis(roll())}>Roll</button>
      <button onClick={() => dis(reset())}>Reset</button>
    </div>
  );
}

export default Dice;
