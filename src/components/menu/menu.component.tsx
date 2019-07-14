import React, { PureComponent } from "react";

import { MenuProps } from "./menu.container";

export class MenuComponent extends PureComponent<MenuProps> {

  restartGame = () => {
    this.props.initGame();
  }

  render() {
    const { gameEnded } = this.props;
    if (!gameEnded) {
      return null;
    }
    return (
      <div>
        <div>Game ended</div>
        <button onClick={this.restartGame}>restart</button>
      </div>
    );
  }
}
