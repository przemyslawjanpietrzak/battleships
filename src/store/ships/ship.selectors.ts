import { RootStore } from '../index';
import { MAP_SIZE } from '../../settings';

export enum PointStatus {
  SHOT,
  MISS,
  EMPTY,
}

export const selectMap = ({ ships }: RootStore): Array<Array<PointStatus>> => {
  const { shots, shipsPositions } = ships;
  return (Array(MAP_SIZE).fill(Array(MAP_SIZE).fill(0)) as Array<
    Array<number>
  >).map((row, rowIndex) =>
    row.map((_, colIndex) => {
      const pointIndex = rowIndex * MAP_SIZE + colIndex; // point representation in 1d array
      if (shots.includes(pointIndex)) {
        if (shipsPositions.includes(pointIndex)) {
          return PointStatus.SHOT;
        }
        return PointStatus.MISS;
      }
      return PointStatus.EMPTY;
    })
  );
};
