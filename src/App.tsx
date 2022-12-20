import Grid from './components/base/Grid';
import { connect } from 'react-redux';
import IGameController from '@interfaces/GameController';
import GameLayout from './layouts/GameLayout';
import MenuLayout from './layouts/MenuLayout';

interface IProps {
  game: IGameController;
}

const App = (props: IProps) => {
  const { game } = props;
  return (
    <div className="container">
        {game?.gameActive ? <GameLayout /> : <MenuLayout />}
    </div>
  );
}

const mapState = (state: any) => ({
  game: {...state.game}
});

export default connect(mapState)(App);
