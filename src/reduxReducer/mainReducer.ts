import {fromJS} from 'immutable';
interface defaultStateShape {
  isFetching:boolean;
  data:Array<any>
}
const defaultState:any = fromJS({isFetching:false,data:[]});
const reducer:any = (state = defaultState, action:any) => {
    switch (action.type) {
      case 'GET_MAIN_INITDATA_START':
        // return {...state,isFetching:true};
        return state.set("isFetching",true);
      case 'GET_MAIN_INITDATA_DONE':
        // return {...state,isFetching:false,data:action.payload};
        return state.set("isFetching",false).set("data",action.payload);
      default: 
        return state;
    }
  };
  export default reducer;