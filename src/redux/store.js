import { createStore } from 'redux';
import counterReducer from './reducer';

// Create and export the Redux store
const store = createStore(counterReducer);

export default store;
