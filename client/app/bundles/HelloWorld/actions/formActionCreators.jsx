import actionTypes from '../constants/formConstants';

export function update(name, value) {
  return {
    type: actionTypes.FORM_UPDATE_VALUE,
    name, value
  };
}
