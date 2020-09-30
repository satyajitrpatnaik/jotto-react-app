import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const Store = createStoreWithMiddleware(rootReducer);

export default Store;