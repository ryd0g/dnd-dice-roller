const percentReducer = (state = '%', action) => {
  function percentroll() {
    const result = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    return result + '%';
  }
  switch (action.type) {
    case 'ROLLPERCENT':
      return percentroll();
    case 'RESETPERCENT':
      return '%';
    default:
      return state;
  }
};

export default percentReducer;
