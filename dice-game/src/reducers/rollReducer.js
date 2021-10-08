const rollReducer = (state = 'D6', action) => {
  function roll() {
    const result = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLL':
      return roll();
    case 'RESET':
      return 'D6';
    default:
      return state;
  }
};

export default rollReducer;
