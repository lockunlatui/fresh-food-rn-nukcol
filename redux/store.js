/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 2020-02-07 11:09:04
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-02-07 11:30:28
 * @ Description:
 */

import {
  applyMiddleware,
  createStore
} from "redux";
import createSagaMiddleware  from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [sagaMiddleware];
  const store = createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;