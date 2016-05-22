import React, { PropTypes } from 'react';
import Form from '../components/Form';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { bindActionCreators, createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import * as formActionCreators from '../actions/formActionCreators';
import formReducer from '../reducers/formReducer';

const SmartForm = connect(state => state, formActionCreators)(Form);

const reduxMiddleware = applyMiddleware(thunk);

export default props => (
  <Provider store={compose(reduxMiddleware)(createStore)(formReducer)}>
    <SmartForm {...props}/>
  </Provider>
);