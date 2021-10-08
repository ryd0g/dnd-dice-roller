const d10Reducer = (state = 'D10', action) => {
  function d10roll() {
    const result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLLD10':
      return d10roll();
    case 'RESETD10':
      return 'D10';
    default:
      return state;
  }
};

export default d10Reducer;
