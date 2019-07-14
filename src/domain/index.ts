export enum PointStatus {
  SHOT,
  MISS,
  EMPTY,
}

export interface Point {
  status: PointStatus;
  id: number;
}

export type BattleMap = Array<Array<Point>>;
