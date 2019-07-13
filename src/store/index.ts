import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';

const rootReducer = combineReducers({
});

const epicMiddleware = createEpicMiddleware();

export const rootEpic = combineEpics(
);

export const rootStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    // @ts-ignore
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
  ),
);

epicMiddleware.run(rootEpic);
