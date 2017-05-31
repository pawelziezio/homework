const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: Math.min(state.value + 1, 50)
      };
    case 'DECREMENT':
      return {
        ...state,
        value: Math.max(state.value - 1, 0)
      };
    case 'RESET':
      return {
        ...state,
        value: 0
      };
    default:
      return state
  }
}