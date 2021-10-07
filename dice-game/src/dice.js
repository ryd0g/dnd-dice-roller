import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { roll, secondroll, reset } from './actions/index';

function Dice() {
  const dice = useSelector((state) => state.rollReducer);
  const dice2 = useSelector((state) => state.secondRollReducer);
  const total = dice + dice2;
  const dis = useDispatch();
  return (
    <div className='diceroll'>
      <h2>Dice Roller 🎲</h2>
      <h3>{dice}</h3>
      <h3>{dice2}</h3>
      <button onClick={() => dis(secondroll())}>Roll</button>
      {<p>Your Roll: {total}</p>}
      <button onClick={() => dis(reset())}>Reset</button>
    </div>
  );
}

export default Dice;
