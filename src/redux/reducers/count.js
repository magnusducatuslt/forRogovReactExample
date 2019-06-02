import { INCREMENT } from '../actionType';
const initialState = {
  count: 111
};
function reducer(state = initialState, action) {
  console.log(`reducer ${action.payload}`);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return { ...state };
  }
}
export default reducer;
