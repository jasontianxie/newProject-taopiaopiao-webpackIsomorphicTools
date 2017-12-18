const defaultState = [];
const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_init_data':
        return action.payload;
      default: 
        return state;
    }
  };
  export default reducer;