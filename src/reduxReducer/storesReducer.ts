const defaultState:number = 5;
const reducer:any = (state = defaultState, action:any) => {
    switch (action.type) {
      case 'GET_MAIN_CHANGE_STORE':
        return state+1;
      default: 
        return state;
    }
  };
  export default reducer;