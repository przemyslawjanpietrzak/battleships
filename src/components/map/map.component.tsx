import React, { PureComponent } from "react";

import { Point } from 'domain/index';

import { MapProps } from "./map.container";
import { Point as PointComponent } from "./point.components";

export class MapComponent extends PureComponent<MapProps> {
  componentDidMount() {
    this.props.initGame();
  }

  renderRow(points: Array<Point>) {
    return points.map(({ status, id }, index) => (
      <div className="col" key={index}>
        <PointComponent status={status} onClick={() => this.props.userMove(id)}/>
      </div>
    ));
  }

  get rows() {
    const { map } = this.props;

    return map.map((row, index) => (
      <div className="row" key={index}>
        {this.renderRow(row)}
      </div>
    ));
  }

  render() {
    const { turn, gameEnded } = this.props;
    if (gameEnded) {
      return null;
    }
    return (
      <div>
        <div>Turn: {turn}</div>
        <div>{this.rows}</div>
      </div>
    );
  }
}
