import IGameController from '@interfaces/GameController';
import { connect } from 'react-redux';

interface IProps {
    game: IGameController;
}

const GameLayout = (props: IProps) => {
    const { game } = props;
    return (
        <div className="max-w-[460px]">
            HELLO!
        </div>
    )
};

const mapState = (state: any) => ({
    game: { ...state.game }
});

export default connect(mapState)(GameLayout);