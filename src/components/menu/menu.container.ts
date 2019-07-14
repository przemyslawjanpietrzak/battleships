import { connect } from 'react-redux';

import { RootStore } from 'store';
import { initGame } from 'store/ships/ships.actions';

import { MenuComponent } from './menu.component';

interface MenuPropsAttrs {
  gameEnded: boolean;
}

interface MenuPropsActions {
  initGame: typeof initGame;
}

export type MenuProps = MenuPropsAttrs & MenuPropsActions;

const mapStateToProps = (store: RootStore): MenuPropsAttrs => ({
  gameEnded: store.ships.gameEnded,
});

const mapDispatchToProps: MenuPropsActions = {
  initGame,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuComponent);


