import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { roll, reset } from './actions/index';

function Dice() {
  const dice = useSelector((state) => state.rollReducer);
  const dis = useDispatch();
  return (
    <div className='diceroll'>
      <h2>Dice Roller 🎲</h2>
      <h3>{dice}</h3>
      <button onClick={() => dis(roll())}>Roll</button>
      {<p>Your Roll: {dice}</p>}
      <button onClick={() => dis(reset())}>Reset</button>
    </div>
  );
}

export default Dice;
