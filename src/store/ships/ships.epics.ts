import { map, mapTo, filter } from 'rxjs/operators';

import { ofType, Epic } from 'redux-observable';

import { ShipsActions, ShipsActionTypes, mis, shot, finishGame } from './ships.actions';
import { RootStore } from '../index';
import { selectUserWon } from './ships.selectors';

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

export const userWonEpic: Epic<ShipsActions, ShipsActions, RootStore> = (
  action$,
  state$,
) => action$.pipe(
  ofType(ShipsActionTypes.SHOT),
  filter(() => selectUserWon(state$.value)),
  mapTo(finishGame()),
);


export const shipsEpics = [
  userMoveEpic,
  userWonEpic,
];
