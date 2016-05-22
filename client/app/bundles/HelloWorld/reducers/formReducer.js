import Immutable from 'immutable';
import actionTypes from '../constants/formConstants';

export const $$initialState = Immutable.fromJS({
  values: {}
});

export default function formReducer($$state = $$initialState, action) {
  const { type, name } = action;

  switch (type) {
    case actionTypes.FORM_UPDATE_VALUE:
      return $$state.set(values, {
        [action.name]: action.value
      });

    default:
      return $$state;
  }
}