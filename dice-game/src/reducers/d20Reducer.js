const d20Reducer = (state = 'D20', action) => {
  function d20roll() {
    const result = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLLD20':
      return d20roll();
    case 'RESET':
      return '';
    default:
      return state;
  }
};

export default d20Reducer;
