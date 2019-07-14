import { getRandomNumbersFromRange } from 'utils';
import { MAP_SIZE, SHIPS_COUNT } from 'settings';

import { ShipsActions, ShipsActionTypes } from './ships.actions';

export interface ShipsState {
  turn: number;
  shipsPositions: Array<number>;
  shots: Array<number>;
  lastMoveResult: '' | 'mis' | 'shot';
  gameEnded: boolean;
}

const defaultState: ShipsState = {
  turn: 1,
  shipsPositions: [],
  shots: [],
  lastMoveResult: '',
  gameEnded: false,
};

export const shipsReducer = (state = defaultState, action: ShipsActions): ShipsState => {
  if (action.type === ShipsActionTypes.INIT_GAME) {
    return {
      ...state,
      gameEnded: false,
      turn: 1,
      shipsPositions: getRandomNumbersFromRange(SHIPS_COUNT, MAP_SIZE ** 2),
    }
  }

  if (action.type === ShipsActionTypes.FINISH_GAME) {
    return {
      ...state,
      gameEnded: true,
    }
  }

  if (action.type === ShipsActionTypes.USER_MOVE) {
    return {
      ...state,
      turn: state.turn + 1,
      shots: [...state.shots, action.payload],
    }
  }

  if (action.type === ShipsActionTypes.SHOT) {
    return {
      ...state,
      lastMoveResult: 'shot',
    }
  }

  if (action.type === ShipsActionTypes.MIS) {
    return {
      ...state,
      lastMoveResult: 'mis',
    }
  }

  return state;
}