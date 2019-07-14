import React from "react";

import { PointStatus } from "../../domain";

const pointsLabelMap = {
  [PointStatus.EMPTY]: "empty",
  [PointStatus.MISS]: "miss",
  [PointStatus.SHOT]: "shot"
};

export const Point = ({
  status,
  onClick
}: {
  status: PointStatus;
  onClick: () => void;
}) => {
  const pointLabel = pointsLabelMap[status];
  if (status === PointStatus.EMPTY) {
    return (
      <div className="point" onClick={onClick}>
        {pointLabel}
      </div>
    );
  }
  return <div className={`point point--${pointLabel}`}>{pointLabel}</div>;
};
