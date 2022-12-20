import IPlayer from "./Player";

interface IGameController {
    gameActive: boolean;
    setGameActive: Function;
    players: [IPlayer, IPlayer];
    setPlayers: Function;
    menuOpen: boolean;
    setMenuOpen: Function;
    winner: IPlayer;
    setWinner: Function;
}

export default IGameController;