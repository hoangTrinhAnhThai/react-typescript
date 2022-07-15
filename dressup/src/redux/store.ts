import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const store = compose(
  applyMiddleware(sagaMiddleware)
) 
(createStore)
(rootReducer)

export default store
