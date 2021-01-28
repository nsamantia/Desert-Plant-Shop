import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);
