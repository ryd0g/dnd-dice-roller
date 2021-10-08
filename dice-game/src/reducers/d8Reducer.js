const d8Reducer = (state = 'D8', action) => {
  function d8roll() {
    const result = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLLD8':
      return d8roll();
    case 'RESET':
      return '';
    default:
      return state;
  }
};

export default d8Reducer;
