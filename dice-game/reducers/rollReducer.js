const rollReducer = (state = 'Roll to start', action) => {
  function roll() {
    const result = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLL':
      return roll();
    case 'RESET':
      return state;
    default:
      return state;
  }
};

export default rollReducer;
