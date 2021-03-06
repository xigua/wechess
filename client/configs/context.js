import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';

import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

export default function ({ reducers }) {

  const reducer = combineReducers({
    ...reducers,
  });

  const middlewares = [
    thunk,
  ];

  const Store = createStore(reducer, applyMiddleware(...middlewares));

  console.log("localState", Store.getState());

  return {
    Meteor,
    FlowRouter,
    Collections,
    Store,
  };
}



