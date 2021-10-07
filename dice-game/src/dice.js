import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { roll, reset } from '..actions/index';

function Dice() {
  const result = useSelector((state) => state.rollReducer);
  const dis = useDispatch();
  return (
    <div className='diceroll'>
      <h3>{result}</h3>
      <p>You rolled a {result}!</p>
      <button onClick={() => dis(roll())}>Roll</button>
      <button onClick={() => dis(reset())}>Reset</button>
    </div>
  );
}

export default Dice;
