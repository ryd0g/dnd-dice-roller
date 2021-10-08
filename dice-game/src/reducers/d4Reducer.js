const d4Reducer = (state = 'D4', action) => {
  function d4roll() {
    const result = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLLD4':
      return d4roll();
    case 'RESETD4':
      return 'D4';
    default:
      return state;
  }
};

export default d4Reducer;
