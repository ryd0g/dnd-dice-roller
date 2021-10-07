const rollReducer = (state = '', action) => {
  function roll() {
    const result = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLL':
      return roll();
    case 'RESET':
      return;
    default:
      return state;
  }
};

export default rollReducer;
