import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

export default createStore(
      reducer,
      applyMiddleware(thunkMiddleware,
                      createLogger({collapsed: true})));
