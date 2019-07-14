import { map } from 'rxjs/operators';

import { ofType, Epic } from 'redux-observable';

import { ShipsActions, ShipsActionTypes, mis, shot } from './ships.actions';
import { RootStore } from '../index';

export const userMoveEpic: Epic<ShipsActions, ShipsActions, RootStore> = (
  action$,
  state$,
) => action$.pipe(
  ofType(ShipsActionTypes.USER_MOVE),
  map(({ payload: point }) => {
    const { shipsPositions } = state$.value.ships;
    if (shipsPositions.includes(point as number)) {
      return shot();
    }
    return mis();
  })
);

export const shipsEpics = [
  userMoveEpic,
];
