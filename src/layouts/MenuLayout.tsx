import IGameController from "@interfaces/GameController";
import { connect } from "react-redux";
import Button from "src/components/base/Button";

interface IProps {
    game: IGameController;
}

const MenuLayout = (props: IProps) => {
    const { game } = props;
    return (
        <div className="max-w-[460px] mx-auto">
            <Button color="light-yellow">NEW GAME (vs CPU)</Button>
            <Button color="light-yellow">NEW GAME (vs LOCAL PLAYER)</Button>
            <Button color="light-yellow">NEW GAME (vs ONLINE PLAYER)</Button>
        </div>
    )
};

const mapState = (state: any) => ({
    game: { ...state.game }
});

export default connect(mapState)(MenuLayout);