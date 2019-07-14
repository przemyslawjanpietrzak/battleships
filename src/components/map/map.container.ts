import { connect } from 'react-redux';

import { RootStore } from 'store';
import { userMove, initGame } from 'store/ships/ships.actions';
import { selectMap } from 'store/ships/ships.selectors';

import { MapComponent } from './map.component';
import { BattleMap } from '../../domain';

interface MapPropsAttrs {
  map: BattleMap,
  turn: number,
  gameEnded: boolean,
}

interface MapPropsActions {
  userMove: typeof userMove;
  initGame: typeof initGame;
}

export type MapProps = MapPropsAttrs & MapPropsActions;

const mapStateToProps = (store: RootStore): MapPropsAttrs => ({
  map: selectMap(store),
  turn: store.ships.turn,
  gameEnded: store.ships.gameEnded,
});

const mapDispatchToProps: MapPropsActions = {
  userMove,
  initGame,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapComponent);


