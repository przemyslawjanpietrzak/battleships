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
} as const);

export const finishGame = () => ({
  type: ShipsActionTypes.FINISH_GAME,
  payload: null,
} as const);

export const userMove = (payload: number) => ({
  type: ShipsActionTypes.USER_MOVE,
  payload,
} as const);

export const shot = () => ({
  type: ShipsActionTypes.SHOT,
  payload: null,
} as const);

export const mis = () => ({
  type: ShipsActionTypes.MIS,
  payload: null,
} as const);

export type ShipsActions = ReturnType<typeof initGame>
  | ReturnType<typeof finishGame>
  | ReturnType<typeof userMove>
  | ReturnType<typeof shot>
  | ReturnType<typeof mis>;