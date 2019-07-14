import { RootStore } from '../index';
import { MAP_SIZE } from "../../settings";
import { PointStatus, BattleMap } from "../../domain";

export const selectMap = ({ ships }: RootStore): BattleMap => {
  const { shots, shipsPositions } = ships;
  return (Array(MAP_SIZE).fill(Array(MAP_SIZE).fill(0)) as Array<
    Array<number>
  >).map((row, rowIndex) =>
    row.map((_, colIndex) => {
      const pointIndex = rowIndex * MAP_SIZE + colIndex; // point representation in 1d array
      if (shots.includes(pointIndex)) {
        if (shipsPositions.includes(pointIndex)) {
          return { status: PointStatus.SHOT, id: pointIndex };
        }
        return { status: PointStatus.MISS, id: pointIndex };
      }
      return { status: PointStatus.EMPTY, id: pointIndex };
    })
  );
};

export const selectUserWon = ({ ships }: RootStore): boolean =>
  ships.shipsPositions.every(shipPosition => ships.shots.includes(shipPosition))