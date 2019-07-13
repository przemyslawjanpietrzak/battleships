export enum ShipsActionTypes {
  INIT_GAME = '[Ships] Init Game',
  FINISH_GAME = '[Ships] Finish Game',
  USER_MOVE = '[Ships] User Move',
  SHOT = '[Ships] Shot',
  MIS = '[Ships] MIS',
}

export const initGame = () => ({
  type: ShipsActionTypes.INIT_GAME,
  payload: null,
});

export const finishGame = () => ({
  type: ShipsActionTypes.FINISH_GAME,
  payload: null,
});

export const userMove = (payload: number) => ({
  type: ShipsActionTypes.USER_MOVE,
  payload,
});

export const shot = () => ({
  type: ShipsActionTypes.SHOT,
  payload: null,
});

export const mis = () => ({
  type: ShipsActionTypes.MIS,
  payload: null,
});

export type ShipsActions = ReturnType<typeof initGame>
  | ReturnType<typeof finishGame>
  | ReturnType<typeof userMove>
  | ReturnType<typeof shot>
  | ReturnType<typeof mis>;