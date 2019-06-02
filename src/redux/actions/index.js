import { INCREMENT } from '../actionType';

export const increment = ({ payload }) => {
  console.log(`actions ${INCREMENT}`);
  return {
    type: INCREMENT,
    payload
  };
};
