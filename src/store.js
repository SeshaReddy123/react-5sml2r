import dataReducer from './reducer';
import {applyMiddleware,createstore} from 'redux'
const middlewares=[thunk];
const store = createstore(dataReducer,applyMiddleware(...middlewares)
