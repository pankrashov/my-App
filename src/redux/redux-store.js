import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { dataReducer } from './dataReducer';

import thunkMiddleware from 'redux-thunk';
// import {reducer as formReducer} from 'redux-form';
// import { initializationAuthReducer } from './initializationAuthReducer.js';
const reducers = combineReducers({
  dataDable: dataReducer,
  // form: formReducer,
  // app: initializationAuthReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;