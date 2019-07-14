import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';

import { shipsReducer, ShipsState } from './ships/ships.reducers';
import { shipsEpics } from './ships/ships.epics';
import { ShipsActions } from './ships/ships.actions';

export interface RootStore {
  ships: ShipsState;
}

const rootReducer = combineReducers({
  ships: shipsReducer,
});

const epicMiddleware = createEpicMiddleware<ShipsActions, ShipsActions, RootStore> ();

const rootEpic = combineEpics(
  ...shipsEpics,
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
