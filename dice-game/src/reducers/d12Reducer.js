const d12Reducer = (state = 'D12', action) => {
  function d12roll() {
    const result = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    return result;
  }
  switch (action.type) {
    case 'ROLLD12':
      return d12roll();
    case 'RESETD12':
      return '';
    default:
      return state;
  }
};

export default d12Reducer;
